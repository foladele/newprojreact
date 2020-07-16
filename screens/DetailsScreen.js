import * as React from 'react';
import {View,Text, Button, StyleSheet } from 'react-native';
// import { TextInput } from 'react-native-paper';
import {useState} from 'react';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        {/* <Button
         title="Go to details screen... again"
         onPress={()=> navigation.push("Details")}
        ></Button> */}
        <Button
         title="Go to Home"
         onPress={()=> navigation.navigate("Home")}
        ></Button>
        <Button
         title="Go Back"
         onPress={()=> navigation.goBack()}
        ></Button>
        {/* <Button
         title="Go to the first screen"
         onPress={()=> navigation.popToTop()}
        ></Button> */}
      </View>
    );
  }
  
  export default DetailsScreen;