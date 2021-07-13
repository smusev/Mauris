import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home'
import DetailsScreen from './src/screens/Details';

const Stack = createStackNavigator();

const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'SUPER FILM', headerStyle: {backgroundColor: '#f3f3f3', }, headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'SUPER FILM', headerStyle: {backgroundColor: '#f3f3f3', }, headerTitleAlign: 'center', }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
