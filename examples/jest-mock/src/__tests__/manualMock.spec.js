import axios from 'axios';
// jest will auto mock axios, so we do not need to jest.mock('axios')

import User from '../User';
jest.mock('../User');

describe('manual mock user', () => {
  // Arrange
  const user = new User('ding');
  // Act
  const name = user.getName();
  // Assert
  it('user name equals ding', () => {
    expect(user.name).toBe('ding');
  });

  it('getName() container test wording', () => {
    expect(name).toContain('test');
  });
});

describe('manual mock axios', () => {
  const responseData = { name: 'test' };
  axios.get.mockImplementationOnce(() => (responseData));
  it('axios get will return response data', () => {
    const result = axios.get();
    expect(result).toMatchObject(responseData);
  });
});