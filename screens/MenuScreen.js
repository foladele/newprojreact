
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './MainScreen';
import WalletScreen from './WalletScreen';
import SendScreen from './SendScreen';
import PayScreen from './PayScreen';
import MoreScreen from './MoreScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const WalletStack = createStackNavigator();
const SendStack = createStackNavigator();
const PayStack = createStackNavigator();
const MoreStack = createStackNavigator()

const MenuScreen =() => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff" 
    >
        <Tab.Screen 
        name="Home" 
        component={HomeStackScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#3980be',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Wallet" 
        component={WalletStackScreen} 
        options={{
          tabBarLabel: 'My Wallet',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-balance-wallet" color={color} size={26} />
          ),
        }}/>

         <Tab.Screen name="Send" 
         component={SendStackScreen} 
         options={{
          tabBarLabel: 'Send',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="send" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Pay" 
        component={PayStackScreen} 
        options={{
          tabBarLabel: 'Pay',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="attach-money" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="More" 
        component={MoreStackScreen} 
        options={{
          tabBarLabel: 'More',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="menu" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
);

export default MenuScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: '#3980be', 
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold',
        }
      }}>

        <HomeStack.Screen name="Welcome" component={HomeScreen} options={{
          title:'Home',
        //   headerLeft: () => (
        //       <FontAwesome.Button name="ios-menu" size={25} backgroundColor="#3980be" onPress={() => navigation.openDrawer()}></FontAwesome.Button>
        //   )
        }} />
      </HomeStack.Navigator> 
);

const WalletStackScreen = ({navigation}) => (
  <WalletStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: '#3980be', 
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold',
        }
      }}>

        <WalletStack.Screen name="My Wallet Balance"  component={WalletScreen} options ={{
           headerLeft: () => (
              <FontAwesome.Button name="arrow-left" size={20} backgroundColor="#3980be" onPress={() => navigation.goBack()}></FontAwesome.Button>
          )
        }}/>
      </WalletStack.Navigator> 
);

const SendStackScreen = ({navigation}) => (
    <SendStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#3980be', 
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}>
  
          <SendStack.Screen name="Send"  component={SendScreen} options={{
        //   headerLeft: () => (
        //       <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        //   )
          }}/>
        </SendStack.Navigator> 
  );

  const PayStackScreen = ({navigation}) => (
    <PayStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#3980be', 
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}>
  
          <PayStack.Screen name="Pay"  component={PayScreen} options ={{
           
          }}/>
        </PayStack.Navigator> 
  );

  const MoreStackScreen = ({navigation}) => (
    <MoreStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#3980be', 
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}>
  
          <MoreStack.Screen name="More"  component={MoreScreen} options ={{
           
          }}/>
        </MoreStack.Navigator> 
  );