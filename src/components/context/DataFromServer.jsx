import {createContext,useReducer,useContext} from 'react';
import {serverDataReducer} from '../index';

    const DataFromServer = createContext(null);

    const ServerDataContext = ({children}) => {
      const [state,dispatch] =   useReducer(serverDataReducer,{resData:[],loading:true});
      return (
     <DataFromServer.Provider value={{state,dispatch}}> 
         {children}
     </DataFromServer.Provider>
      );
    }

    const useDataFromServer = () => useContext(DataFromServer);

export {ServerDataContext,useDataFromServer};