// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reducers from './reducers';
import state from './state';
import { createStore } from 'redux';
// import createStore from 'redux'

// export default (reducers, state, applyMiddleware(thunk));
export default createStore(reducers, state);