import * as React from 'react';
import {View,Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {useState} from 'react';

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
         title="Go to details screen"
         onPress={()=> navigation.navigate("Details")}
        ></Button>
      </View>
    );
  }
  
  export default HomeScreen;