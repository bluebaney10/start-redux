import {createStore} from "redux";

const initialState={
    result:15000,
    value:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
        state={
            ...state
            /*
            result:state.result,
            value:state.value
            */
        }
        break;
           // state+=action.payload;
        
        
        case "SUBTRACT":
           // state-=action.payload;
        break;
        default:
    }
    return state;
}

const store=createStore(reducer);
store.subscribe(()=>{
    console.log("Update Store:",store.getState());
})
store.dispatch({
    type:"ADD",
    payload:15000
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
