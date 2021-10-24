const LOG_IN = 'user/LOG_IN' as const;
const LOG_OUT = 'user/LOG_OUT' as const;

export const login = () => ({
  type: LOG_IN
});

export const logout = () => ({
  type: LOG_OUT
});

type UserAction = ReturnType<typeof login> | ReturnType<typeof logout>;

type UserState = {
  token: string;
  userInfo: object;
};

const initialState: UserState = {
  token: 'token',
  userInfo: {
    id: 'not logged in'
  }
};

function user(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case LOG_IN:
      return {
        token: 'access token',
        userInfo: {
          id: 'logged in'
        }
      };
    case LOG_OUT:
      return {
        token: '',
        userInfo: {
          id: ''
        }
      };
    default:
      return state;
  }
}

export default user;
