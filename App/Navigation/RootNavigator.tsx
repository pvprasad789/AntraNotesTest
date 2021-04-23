import React from 'react';
import NotesStack from './NotesStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store, persistor} from '../store/store';
import {PersistGate} from 'redux-persist/integration/react';

const RootNavigator = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <NotesStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default RootNavigator;
