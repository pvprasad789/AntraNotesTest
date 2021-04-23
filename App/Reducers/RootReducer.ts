import {combineReducers} from 'redux';
import notesReducer from './NotesReducer'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['notesArr']
};

const rootReducer = combineReducers({
  notesReducer: persistReducer(persistConfig, notesReducer)
});

export default rootReducer;