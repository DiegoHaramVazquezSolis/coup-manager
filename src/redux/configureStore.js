import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userChecker } from './actions/userActions';
import { rootReducer } from './reducers/rootReducer';

export function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
    store.dispatch(userChecker());
    return store;
}