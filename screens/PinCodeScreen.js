import * as React from 'react';
import {View,Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {useState} from 'react';
// import PINCode from '@haskkor/react-native-pincode';
// import { PinScreen } from 'react-native-awesome-pin';


const PinCodeScreen = ({navigation}) => {

  // Callback function which receives the current PIN value
  const recievePin = (pin) =>{
    // Check if the PIN is correct here
  };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pin your Code Screen</Text>
        {/* <PinScreen
          onRef={ ref => {} }
          // onRef={ ref => (this.pinScreen = ref) }
          tagline='Please enter your PIN'
          // logo={ require('../../img/mylogohere.png') }
          containerStyle={{ backgroundColor: '#AAA' }}
          keyDown={ recievePin.bind(this)}
      /> */}
      </View>
    );
  }
  
  export default PinCodeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5FCFF",
    },
    title: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      marginTop: 20,
    },
    button: {
      marginBottom: 10,
      padding: 10,
    },
    bold: {
      fontWeight: "bold",
    },
    seperator: {
      margin: 10,
      marginVertical: 8,
      borderBottomColor: "#737373",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });