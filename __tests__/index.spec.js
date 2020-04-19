const myBeverage = {
  delicious: true,
  sour: false,
}
describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
  test.todo('should test something')
});

describe('my other beverage', () => {
  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
  // ... will be skipped
});

test.only('', () => {
  const mockFn = jest.fn((x, y = 'xx') => x + 123 + y);
  mockFn('123', 'xx');
  mockFn('213');
  mockFn('213');
  mockFn.mockClear()
  // mockFn.mockReset()
  expect(mockFn.mock.calls[0][0]).toBe('123');
  expect(mockFn.mock.calls[0][1]).toBe('xx');
  expect(mockFn.mock.calls[1][0]).toBe('213');
  expect(mockFn.mock.results[0].value).toBe('123123xx');
  expect(mockFn.mock.results[1].value).toBe('213123xx');
  console.log(mockFn.mock)

  const mockFn2= jest.fn(() => 20);
  mockFn2.mockReturnValueOnce(10)
  expect(mockFn2()).toBe(10);
  expect(mockFn2()).toBe(20);
});