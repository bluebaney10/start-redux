import {createStore,combineReducers,applyMiddleware} from "redux";

const initialState={
    result:15000,
    value:[]
}

const userReducer=(state={name:"Blue",age:31},action)=>{
    switch(action.type){
        case "setName":
        state={
            ...state,
            name:action.payload
        }
        break;
        
        case "setAge":
        state={
            ...state,
            age:action.payload   
        }
        break;
        default:
    }
    return state;

}


const employeeReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
        state={
            ...state,
            result:state.result+=action.payload,
            value:[...state.value,action.payload]
            /*
            ...state
            or
            result:state.result,
            value:state.value
            */
        }
        break;
           // state+=action.payload;
        
        
        case "SUBTRACT":
        state={
            ...state,
            result:state.result-=action.payload,
            value:[...state.value,action.payload]
            /*
            ...state
            or
            result:state.result,
            value:state.value
            */
        }
        break;
        default:
    }
    return state;
}

//const store=createStore(EmployeeReducer);
const mylogger=(store)=>(next)=>(action)=>{
    console.log("Log Action ",action)
    next(action)

}
const store=createStore(combineReducers({employeeReducer,userReducer}),{},applyMiddleware(mylogger));

store.subscribe(()=>{
   //console.log("Update Store:",store.getState());
})
store.dispatch({
    type:"ADD",
    payload:15000
});
store.dispatch({
    type:"ADD",
    payload:15000
});
store.dispatch({
    type:"ADD",
    payload:30000
});

store.dispatch({
    type:"SUBTRACT",
    payload:8000
});

store.dispatch({
    type:"setName",
    payload:"Redux"
});

store.dispatch({
    type:"setAge",
    payload:40
});








/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
*/
