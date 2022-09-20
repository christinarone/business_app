import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import state from './state';

export default (reducers, state, applyMiddleware(thunk));