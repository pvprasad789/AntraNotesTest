import React from 'react';
import NotesList from '../Containers/NotesList';
import AddNote from '../Containers/AddNote';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const NotesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Notes List'}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f6774f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Notes List" component={NotesList} />
      <Stack.Screen name="AddNote" component={AddNote} />
    </Stack.Navigator>
  );
};

export default NotesStack;
