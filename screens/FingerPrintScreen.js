import * as React from 'react';
import {View,Text, Dimensions, Button, StyleSheet,TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FingerPrintScreen = ({navigation}) => {

  const [isSuccessful, setIsSuccesful] = React.useState(false);

  if(isSuccessful){
     return(
       <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesome name="check" color='#26547c' size={150}/>
          <Text style={{margin: 20 ,fontWeight: "bold" }}>FINGERPRINT SUCCESS</Text>
       </View>
      );
  }
  else{
    return (
      
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
          margin:50,
          fontSize: 14,
          fontWeight: "bold"
        }}>LINK YOUR FINGERPRINT FOR FASTER LOGIN</Text>

        <View>
          <TouchableOpacity
           onPress={() => {setIsSuccesful(true)}}
          >
            <Image
                source={require('../assets/fingerprint.png')}
                style={[styles.logo, {
                  marginBottom: 80
                }]}
                resideMod="strech"
            />
          </TouchableOpacity>    
        </View> 
        <Text style={{fontSize: 15}}>Place your finger over the sensor to register</Text>
          <Text style={{fontSize: 15}}>your fingerprint</Text>
        <TouchableOpacity
         onPress={() => navigation.navigate('MenuScreen')}
        //  onPress={() => {console.log("navigation: ", navigation.goBack)}}
        >
          <Text style={{ 
            color: 'red',
            marginTop: 150,
            margin: 100,
            fontWeight: "bold"
        }}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    );
  }
   
  }
  
  export default FingerPrintScreen;

  
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
 },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
    //   borderTopLeftRadius: 30,
    //   borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },

});