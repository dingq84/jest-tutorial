import axios from 'axios';
// jest will auto mock axios, so we do not need to jest.mock('axios')

import User from '../User';
jest.mock('../User');

describe('manual mock user', () => {
  it('user should be mocked', () => {
    const user = new User('test');
    const name = user.getName();
    expect(name).toContain('test');
    expect(user.name).toBe('test');
  });
});

describe('manual mock axios', () => {
it('axios get', () => {
    const responseData = { name: 'test' };
    axios.get.mockImplementationOnce(() => (responseData));
    const result = axios.get();
    expect(result).toMatchObject(responseData);
  })
});