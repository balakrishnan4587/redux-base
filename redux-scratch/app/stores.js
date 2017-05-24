import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import rlogger from 'redux-logger'

let middlewares=[];

/*
function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}
*/

middlewares=[
	//logger,
	rlogger
];
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}