import Reducer from '.';

describe('reducer exception testing', () => {
  const initialState = { isAuth: true, status: 'success' };
  it('should be original state', () => {
    const result = Reducer(initialState, { type: 'unknown' });
    expect(result).toMatchObject(initialState);
  });
});

describe('global reducer testing', () => {
  const initialState = { isAuth: false };

  it('login request, status should be loading ', () => {
    const result = Reducer(initialState, { type: 'LOGIN_REQUEST' });
    const expectResult = { ...initialState, status: 'loading' };
    expect(result).toMatchObject(expectResult);
  });

  it('login success, isAuth should be true and status should be suceess', () => {
    const result = Reducer(initialState, { type: 'LOGIN_SUCCESS' });
    const expectResult = { ...initialState, status: 'success', isAuth: true };
    expect(result).toMatchObject(expectResult);
  });

  it('login failure, isAuth should be false and status should be failure', () => {
    const result = Reducer(initialState, { type: 'LOGIN_FAILURE' });
    const expectResult = { ...initialState, status: 'failure', isAuth: false };
    expect(result).toMatchObject(expectResult);
  });

  it('logout request, status should be loading', () => {
    const result = Reducer(initialState, { type: 'LOGOUT_REQUEST' });
    const expectResult = { ...initialState, status: 'loading' };
    expect(result).toMatchObject(expectResult);
  });

  it('logout success, isAuth should be false and status should be success', () => {
    const result = Reducer(initialState, { type: 'LOGOUT_SUCCESS' });
    const expectResult = { ...initialState, status: 'success', isAuth: false };
    expect(result).toMatchObject(expectResult);
  });

  it('logout failure, isAuth should be true and status should be failure', () => {
    const result = Reducer(initialState, { type: 'LOGOUT_FAILURE' });
    const expectResult = { ...initialState, status: 'failure', isAuth: true };
    expect(result).toMatchObject(expectResult);
  });
});