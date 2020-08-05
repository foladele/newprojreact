import * as React from 'react';
import {View,Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {useState} from 'react';
import PINCode, {
  hasUserSetPinCode,
  resetPinCodeInternalStates,
  deleteUserPinCode,
} from "@haskkor/react-native-pincode";
import { PinScreen } from 'react-native-awesome-pin';
import AsyncStorage from '@react-native-community/async-storage';


const PinCodeScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    PINCodeStatus: 'choose',
    showPinLock: true,

  });

  const showChoosePinLock = () => {
    setData({
      ...data,
      showPinLock: !data.showPinLock
    });
  };

  const clearPin = async () => {
    await deleteUserPinCode();
    await resetPinCodeInternalStates();
    Alert.alert(null, "You have cleared your pin.", [
      {
        title: "Ok",
        onPress: () => {
          // do nothing
        },
      },
    ]);
  };

  const showEnterPinLock = async () => {
    const hasPin = await hasUserSetPinCode();
    if (hasPin) {
      this.setState({ PINCodeStatus: "enter", showPinLock: true });
    } else {
      Alert.alert(null, "You have not set your pin.", [
        {
          title: "Ok",
          onPress: () => {
            // do nothing
          },
        },
      ]);
    }
  };

  
  const finishProcess = async () => {
    const hasPin = await hasUserSetPinCode();
    if (hasPin) {
      Alert.alert(null, "You have successfully set/entered your pin.", [
        {
          title: "Ok",
          onPress: () => {
            // do nothing
          },
        },
      ]);
      this.setState({ showPinLock: false });
    }
  };

  // Callback function which receives the current PIN value
  const recievePin = (pin) =>{
    // Check if the PIN is correct here
  };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <PinScreen
          onRef={ ref => {} }
          // onRef={ ref => (this.pinScreen = ref) }
          tagline='Please enter your PIN'
          // logo={ require('../../img/mylogohere.png') }
          containerStyle={{ backgroundColor: '#AAA' }}
          keyDown={ recievePin.bind(this)}
      /> */}
      {data.showPinLock && ( 
        <PINCode 
          status={data.PINCodeStatus}
          touchIDDisabled={true} 
        /> 
      )} 
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