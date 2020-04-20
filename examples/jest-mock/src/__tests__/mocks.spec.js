describe('jest.fn practice', () => {
  let mockFn = jest.fn();
  afterEach(() => {
    // clear mock.calls, mock.instances and mock implementations
    mockFn.mockReset();
  });

  it('mock property', () => {
    mockFn.mockImplementation((x, y = 100) => x + y + 20);

    const result1 = mockFn(1);
    const result2 = mockFn(2, 3);
    const result3 = new mockFn(3, 5);
    // 預期mockFn被執行兩次
    expect(mockFn).toHaveBeenCalledTimes(3);
    // 驗證mockFn執行兩次的參數
    expect(mockFn.mock.calls).toHaveLength(3);
    expect(mockFn.mock.calls[0]).toEqual([1]);
    expect(mockFn.mock.calls[1]).toEqual([2, 3]);
    expect(mockFn.mock.calls[2]).toEqual([3, 5]);
    // 驗證mockFn的執行結果
    expect(result1).toBe(121);
    expect(result2).toBe(25);
    expect(result3).toMatchObject({});
    // TODO: 複習new function 建構式
    expect(mockFn.mock.results[0].value).toBe(result1);
    expect(mockFn.mock.results[1].value).toBe(result2);
    expect(mockFn.mock.results[2].value).toBe(28);
    // 驗證mockFn的instance
    expect(mockFn.mock.instances).toEqual([undefined, undefined, result3]);
  });

  it('mock return value', () => {
    mockFn
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(123);

    expect(mockFn()).toBe(true);
    expect(mockFn()).toBe(false);
    expect(mockFn()).toBe(123);
    expect(mockFn()).toBeUndefined();
  });

  it('mock return Promise value', async () => {
    mockFn
      .mockResolvedValueOnce('123')
      .mockResolvedValueOnce('2451')
      .mockResolvedValueOnce('1231')
      .mockRejectedValueOnce('error');
      
      expect(mockFn()).resolves.toBe('123');
      expect(mockFn()).resolves.toBe('2451');
      expect(mockFn()).resolves.toBe('1231');
      expect(mockFn()).rejects.toBe('error');
      expect(mockFn()).toBeUndefined();
    })
});

describe('jest.spyOn', () => {
  let mockGetName;

  afterEach(() => {
    // to clear mock property for jest.spyOn
    mockGetName.mockRestore();
    // to clear mock property for jest.fn
    mockGetName.mockReset();
  });

  const obj = {
    getName(name = 'default') {
      console.log('Hi, this is get name method');
      return name.toUpperCase();
    },
    getId() {
      console.log('Hi, this is get id method');
    }
  };

it(`use jest.spyOn to mock the obj method without cutsomImplementation, 
    jest will execute obj origin method, and it will see console.log in terminal.`, () => {
    mockGetName = jest.spyOn(obj, 'getName');
    const result = obj.getName('ding');
    expect(result).toBe('DING');
    expect(mockGetName).toHaveBeenCalledTimes(1);
    expect(mockGetName.mock.calls[0][0]).toBe('ding');
    expect(mockGetName.mock.results[0].value).toBe('DING');
  });

it('use jest.spyOn to mock the obj method with customImplementation, Jest will not execute the obj origin method', () => {
    mockGetName = jest.spyOn(obj, 'getName').mockImplementation();
    expect(mockGetName).not.toHaveBeenCalled();
    const result = obj.getName('ding');
    expect(result).toBeUndefined();
    expect(mockGetName).toHaveBeenCalledTimes(1);
    expect(mockGetName).toHaveBeenCalledWith('ding');
  });

it('use jest.fn to implement custom implementation equals jest.spyOn().mockImplementation(() => customImplementation)', () => {
    obj['getName'] = mockGetName = jest.fn().mockImplementation();
    expect(mockGetName).not.toHaveBeenCalled();
    const result = obj.getName('ding');
    expect(result).toBeUndefined();
    expect(mockGetName).toHaveBeenCalledTimes(1);
    expect(mockGetName).toHaveBeenCalledWith('ding');
  });
});

describe('jest.mock', () => {
it('mock User module', () => {
  // 這邊使用jest.doMock代替jest.mock，因為jest.mock會自動提升到最上面，但為了保持整潔，因此使用jestdoMock
    jest.doMock('../Person', () => {
      return jest.fn().mockImplementation((name) => {
        return { name, getName: jest.fn()}
      })
    });
    const Person = require('../Person');
    const person = new Person('ding');

    const name = person.getName();
    expect(jest.isMockFunction(Person)).toBe(true);
    expect(person.name).toBe('ding');
    expect(name).toBeUndefined();
  });
});
