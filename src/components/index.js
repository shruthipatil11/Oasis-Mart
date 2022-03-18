import Category from "./category/Category";
import Header from './header/Header';
import MockAPI from './mock-man/Mockman';
import {serverDataReducer} from './reducers/server-data-reducer';
import {ServerDataContext,useDataFromServer} from "./context/DataFromServer";


export {Category,Header,MockAPI,serverDataReducer,ServerDataContext,useDataFromServer};
