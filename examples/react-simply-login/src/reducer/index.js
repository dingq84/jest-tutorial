
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        status: 'loading',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuth: true,
        status: 'success',
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        status: 'failure'
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        status: 'loading',
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuth: false,
        status: 'success',
      }
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        isAuth: true,
        status: 'failure',
      }
    default:
      return state;
  }
}

export default reducer;