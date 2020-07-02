// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import MyTabs from './Component/Footer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: '#009387', 
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold',
        }
      }}>

        <Stack.Screen name="Welcome" 
        title="Home"
        component={MyTabs} />
      </Stack.Navigator>


      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MyTabs} />
      </Drawer.Navigator> */}

    </NavigationContainer>
  );
}

export default App;