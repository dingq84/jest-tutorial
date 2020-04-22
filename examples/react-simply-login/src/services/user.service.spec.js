import { userService } from './user.service';

describe('userService login function testing', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Login api success', async () => {
    expect.assertions(2);
    const fakeUser = {
      name: "Joni Baez",
      age: "32",
      address: "123, Charming Avenue"
    };

    const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue(({
      json: jest.fn().mockResolvedValue(fakeUser)
    }));
    
    try {
      const data = await userService.login();
      expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
      expect(data).toMatchObject(fakeUser);
    } catch (error) {
      console.log(error);
      expect(error).toBeUndefined();
    };
  });

  it('Login api without network', async () => {
    expect.assertions(2);
    const errorMessage = 'Can not fetch data';
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);
    const mockFetch = jest.spyOn(global, 'fetch').mockRejectedValue(({
      message: errorMessage
    }));
    const data = await userService.login();
    expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toMatchObject({ message: '沒有網路，請稍後再試' });
  });

  it('Some errors will occur in the login API (except for the network)', async () => {
    const errorMessage = 'Can not fetch data';
    const mockFetch = jest.spyOn(global, 'fetch').mockRejectedValue(({
      message: errorMessage
    }));
    const data = await userService.login();
    expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toMatchObject({ message: errorMessage });
  });
});