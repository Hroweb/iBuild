import { useState } from 'react'
import StateContext from './StateContext'


const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN') || null);
  
    const updateToken = ({ token }) => {
      setToken(token);
      token ? localStorage.setItem('ACCESS_TOKEN', token) : localStorage.removeItem('ACCESS_TOKEN');
    };
  
    const stateContextValue = {
      user,
      token,
      setUser,
      updateToken
    };
  
    return (
      <StateContext.Provider value={stateContextValue}>
        {children}
      </StateContext.Provider>
    );
  };

export default ContextProvider;