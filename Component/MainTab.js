import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Icons from 'react-native-vector-icons/Ionicons';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import MyTabs from './Component/Footer';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#009387', 
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}>
  
          <HomeStack.Screen name="Welcome" component={MyTabs} options={{
            title: 'Overview',
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
            )
          }} />
        </HomeStack.Navigator> 
  );
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#009387', 
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}>
  
          <DetailStack.Screen name="Welcome"  component={MyTabs} options ={{
            title: 'Overview',
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
            )
          }}/>
        </DetailStack.Navigator> 
  );