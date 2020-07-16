
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

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator()
const ExploreStack = createStackNavigator()

const MainTabScreen =() => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff" 
    >
        <Tab.Screen 
        name="Home" 
        component={HomeStackScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Notification" component={DetailsStackScreen} 
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}/>

         <Tab.Screen name="Profile" component={ProfileStackScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Explore" component={ExploreStackScreen} 
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
);

export default MainTabScreen;

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

        <HomeStack.Screen name="Welcome" component={HomeScreen} options={{
          title:'Overview',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
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

        <DetailStack.Screen name="Details"  component={DetailsScreen} options ={{
         
        }}/>
      </DetailStack.Navigator> 
);

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#009387', 
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}>
  
          <ProfileStack.Screen name="Profile"  component={ProfileScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }}/>
        </ProfileStack.Navigator> 
  );

  const ExploreStackScreen = ({navigation}) => (
    <ExploreStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#009387', 
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}>
  
          <ExploreStack.Screen name="Explore"  component={ExploreScreen} options ={{
           
          }}/>
        </ExploreStack.Navigator> 
  );