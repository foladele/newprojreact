import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home';
import Login from './Login';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const Tab = createBottomTabNavigator();
// const HomeStack = createStackNavigator();
// const LoginStack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const HomeStackScreen = ({navigation}) => {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerStyle:{
//           backgroundColor: '#009387', 
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle:{
//           fontWeight: 'bold',
//         }
//       }}>
//         <HomeStack.Screen name="Home" component={HomeScreen} />
//       </HomeStack.Navigator>
//   );
// }

// const LoginStackScreen = ({navigation}) => {
//   return (
//     <LoginStack.Navigator
//       screenOptions={{
//         headerStyle:{
//           backgroundColor: '#009387', 
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle:{
//           fontWeight: 'bold',
//         }
//       }}>
//         <LoginStack.Screen name="Login" component={Login} />
//       </LoginStack.Navigator>
//   );
// }

const Footer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarLabel: 'Login',
        tabBarColor: '#009387',
      }}
      />
      <Tab.Screen name="Login" component={Login} 
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
      }}/>
    </Tab.Navigator>
  );
}

export default Footer;