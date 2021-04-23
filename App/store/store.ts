import {createStore} from 'redux';
import rootReducer from '../Reducers/RootReducer'
import { persistStore } from 'redux-persist'

export const store = createStore(
  rootReducer,
);

export const persistor = persistStore(store);