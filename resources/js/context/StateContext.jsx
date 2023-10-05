import { createContext } from 'react';

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  updateToken: () => {}
});

export default StateContext;
