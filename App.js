/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { NavigationContainer, Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';


import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  ActivityIndicator
} from 'react-native-paper';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingsScreen from './screens/SettingsScreen';
import { DrawerContent } from './screens/DrawerContent';
import { AuthContext } from './Component/Context';

import RootStackScreen from './screens/RootStackScreen';

const Draw = createDrawerNavigator();

const App = () => {

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  //reducer initial state
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  //reducer function states

  const loginReducer = (prevState, action) =>{
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        console.log('reaching login', action);
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        console.log('reaching', action);
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };

    }
  };

  //create reducer
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  //use memo another react function
  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => {
      console.log('sign in function')
      // setUserToken('yhsjs');
      // setIsLoading(false)

      //check api future
      let userToken = null;
      if(userName == 'user' && password == 'pass'){
        userToken = 'gjmkjskas'
        try{
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          // saving error
          console.log(e);
        }
      }
      dispatch({type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false)
      try{
        await AsyncStorage.removeItem('userToken', userToken);
      } catch (e) {
        // saving error
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
    signUp: (val) => {
      console.log('sign up: ', val);
      // setUserToken('yhsjs');
      // setIsLoading(false)
    },
  }), [])

  // React hook
  useEffect(()=>{
    // set timer for false simulation of Login
    setTimeout(async()=>{
      // setIsLoading(false);
      let userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // saving error
        console.log(e);
      }
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000)
  }, []);

  if(loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }


  return (
    <AuthContext.Provider
      value={authContext}
    > 
      <NavigationContainer >
        {/* { loginState.userToken !== null ? 
          (<Draw.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Draw.Screen name="HomeDrawer" component={MainTabScreen}/>
            <Draw.Screen name="SupportScreen" component={SupportScreen}/>
            <Draw.Screen name="BookmarkScreen" component={BookmarkScreen}/>
            <Draw.Screen name="SettingsScreen" component={SettingsScreen}/>
          </Draw.Navigator> )
        :
          <RootStackScreen/>
          
         }  */}

         <RootStackScreen/>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
 
export default App;
