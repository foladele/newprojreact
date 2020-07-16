import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, TextInput, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '../Component/Context';

const LoginScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle='light-content'/>
        <View style={styles.header}>
            <Image
                source={require('../assets/testLogo.png')}
                style={styles.logo}
                resideMod="strech"
            />
            
           
        </View> 
        
        <View style={styles.footer}>

          <View style={styles.text_footer}>
            <Text>Pay Online</Text>
          </View>

         <View style={styles.action}>

            <FontAwesome 
              name="circle-thin"
              color="#3980be"
              size={20}
              style={styles.textInput}
            />

            <FontAwesome 
              name="circle-thin"
              color="#3980be"
              size={20}
              style={styles.textInput}
            />

            <FontAwesome 
              name="circle"
              color="#3980be"
              size={20}
              style={styles.textInput}
            />
          </View>
           
          <View style={styles.button}>
            <TouchableOpacity
                style={styles.signIn}
                onPress={() =>  navigation.navigate('RegisterScreen')}
            >
                <LinearGradient
                colors={['#3980be', '#3980be']}
                style={styles.signIn}
                >
                <Text style={[styles.textSign, {
                    color: '#fff'
                    }]}>SIGN UP</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() =>  navigation.navigate('LoginScreen')}
                style={[styles.signIn, {
                borderColor: '#3980be',
                borderWidth: 1,
                marginTop: 15
                }]}
            >
                <Text style={[styles.textSign, {
                color:'#3980be',
                }]}>LOGIN</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    );
};

export default LoginScreen;

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
  text_header: {
      color: 'black',
      top: 10,
      fontWeight: 'bold',
      fontSize: 30,
  },
  text_footer: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#05375a',
    fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
    //   borderBottomWidth: 1,
    //   borderBottomColor: '#f2f2f2',
      paddingBottom: 5
      
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
    //   flex: 1,
    //   marginTop: Platform.OS === 'andriod' ? 0 : -12,
      paddingLeft: 20,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 150
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
      
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  logo: {
      width: height_logo,
      height: height_logo
  },

});