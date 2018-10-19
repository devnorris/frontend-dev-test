import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({

});

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
}