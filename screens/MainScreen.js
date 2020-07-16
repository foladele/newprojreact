import React from 'react';
import { Alert, View, Text, Button, Modal, StyleSheet, Dimensions, Image, TouchableOpacity, Platform, TextInput, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import { Drawer, Avatar, Title, Caption, Paragraph, TouchableRipple, Switch } from 'react-native-paper';

import { AuthContext } from '../Component/Context';

const Tab = createBottomTabNavigator();

const MainScreen = ({navigation}) => {

  const {signUp } = React.useContext(AuthContext);

  // console.log("main screen: ");

  const [modalOpen, setModalOpen] = React.useState(true);
  const [isDisplayBalance, setIsDisplayBalance] = React.useState(false);

  const closeModal = (nav) => {
    // console.log(val);
    setModalOpen(false);
    navigation.navigate(nav);
   
  }

  const toggleShowBalance = () =>{
    setIsDisplayBalance(!isDisplayBalance);
}

    return (
      <View style={styles.container}>
        <View style={styles.header}>
         <Text style={{ fontSize: 45, marginTop: 50}}>$0.00</Text>
         <Text style={{marginBottom:15}}>Wallet Balance</Text>
         <View>
          <TouchableRipple onPress={() => {toggleShowBalance()}}>
            <View style={styles.preference}> 
               <View pointerEvents="none" style={{color: '#d81e5b'}}>
                  <Switch value={isDisplayBalance}/>
               </View>
               <Text style={{paddingLeft: 10}}>Always display balance on home page</Text>
            </View>
          </TouchableRipple>
         </View>
       
        </View> 
        <View style={styles.footer}>
          <View style={[styles.text_footer, {
            color: '#707070'
          }]}>
            <Text>You can pay bills for goods and services or send</Text> 
            <Text>money to friends and family with the amount in</Text>
            <Text>your wallet. You can also withdraw the money</Text>
            <Text>to your bank account</Text>
          </View>

         <View style={styles.button}>
            <TouchableOpacity
                style={styles.signIn}
                // onPress={() =>  navigation.navigate('RegisterScreen')}
            >
                <LinearGradient
                colors={['#3980be', '#3980be']}
                style={styles.signIn}
                >
                <Text style={[styles.textSign, {
                    color: '#fff'
                    }]}>ADD MONEY</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                // onPress={() =>  navigation.navigate('LoginScreen')}
                style={[styles.signIn, {
                borderColor: '#3980be',
                borderWidth: 1,
                marginTop: 15
                }]}
            >
                <Text style={[styles.textSign, {
                color:'#3980be',
                }]}>WITHDRAW MONEY</Text>
            </TouchableOpacity>
         </View>
        </View>

        {/* modal code */}
        <Modal 
          transparent={true}
          visible={modalOpen}
        >
          <View style={{flex: 1, backgroundColor:"#000000aa"}}>
            <View style={styles.modal_style}>
              <Text style={styles.text_header}>Choose a Security Option</Text>
              <Text>Protect your account by selecting an option</Text>

              <View style={styles.security}>
                <TouchableOpacity
                 onPress={() => closeModal('FingerPrintScreen') }
                 style={{ justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/fingerprint.png')}
                    style={styles.images}
                    resideMod="strech"
                  />
                  <Text >Finger Print</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() =>  closeModal('PinCodeScreen')}
                  style={{ justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('../assets/pincode.png')}
                    style={styles.images}
                    resideMod="strech"
                  />
                  <Text>Pin</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.action_buttons}> 
                <TouchableOpacity 
                  style={{justifyContent: 'flex-end'}}
                  onPress={() => setModalOpen(false)}
                >
                  <Text style={{margin: 10, color: '#3980be'}}>NO THANKS</Text>
                </TouchableOpacity>
               
              </View>
            </View>
           
          </View>
        </Modal>
      </View>
    );
  }
  
  export default MainScreen;

const {height} = Dimensions.get("screen");
const height_modal = height * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 1,
      top: 20,
      marginTop: 50,
      marginBottom: 50,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 10
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
      fontWeight: 'bold',
      fontSize: 24
  },
  terms:{
    flexDirection: 'row',
  },
  text_footer: {
      color: 'grey',
      fontSize: 14,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 80
  },
  action: {
      flexDirection: 'row',
      marginTop: 2,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 0
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  action_buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // alignItems: 'flex-end'
 },
 modal_style:{
  backgroundColor:"#fff", 
  marginTop: height_modal,
  marginLeft:30,
  marginRight: 30, 
  padding: 20
 },
 security:{
  flexDirection: 'row',
  marginBottom: 30
 },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'andriod' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 20
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
  images: {
      margin: 20,
      marginLeft: 50,
      marginRight: 50,
      width: 40,
      height: 40,
      
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});