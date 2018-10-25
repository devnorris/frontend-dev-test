import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import gameReducer from './reducers/game';

const rootReducer = combineReducers({
    game: gameReducer
});

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
}