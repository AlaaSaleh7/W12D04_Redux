import { createStore,combineReducers } from "redux";
import login from "./login/index"
import article from "./article/index"
//Combine all the reducers then create the redux store.

const reducers = combineReducers({login,article});
const store = createStore(reducers);


export default store;
