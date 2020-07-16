import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import SplashScreen from './SplashScreen';
// import SignInScreen from './SignInScreen';
// import SignUpScreen from './SignUpScreen';
import EntryScreen from './EntryScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MenuScreen from './MenuScreen';
import MainScreen from './MainScreen';
import FingerPrintScreen from './FingerPrintScreen';
import PinCodeScreen from './PinCodeScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
        <RootStack.Screen name="EntryScreen" component={EntryScreen}/>
        {/* <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <RootStack.Screen name="MainScreen" component={MainScreen}/>
        <RootStack.Screen name="MenuScreen" component={MenuScreen}/>
        <RootStack.Screen name="FingerPrintScreen" component={FingerPrintScreen}/>
        <RootStack.Screen name="PinCodeScreen" component={PinCodeScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;