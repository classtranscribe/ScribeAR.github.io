import React, { useReducer } from 'react';
/**
 * This is a reuseable function to automate the process of
 * setting up Context and Provider.
 */
 export default (reducer, actions, initialState) => {
    const Context = React.createContext<any | undefined>(undefined);
  
    const Provider = ({ children }: any) => {
      const [state, dispatch] = useReducer(reducer, initialState);
  
      // loop through all actions to send dispatch function
      const boundActions = {};
      for (let key in actions) {
        boundActions[key] = actions[key](dispatch);
      }
  
      return (
        <Context.Provider value={{ state, ...boundActions }}>
          {children}
        </Context.Provider>
      );
    };
  
    return { Context, Provider };
  };
  