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
import { Drawer, Avatar, Title, Caption, Paragraph, TouchableRipple, Switch, Card } from 'react-native-paper';

import { AuthContext } from '../Component/Context';
// import { LoginContext } from '../Component/LoginContext';


const Tab = createBottomTabNavigator();

const MainScreen = ({navigation}) => {

  const [modalOpen, setModalOpen] = React.useState(true);
  const [isDisplayBalance, setIsDisplayBalance] = React.useState(false);

  const loginAuth = React.useMemo(() => ({
    signIn: async(isLogin) => {
      console.log('sign in function: ', isLogin)
      setModalOpen(isLogin)
    }
  }));

  const {signUp } = React.useContext(AuthContext);

  // console.log("main screen: ");

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
        <View style={{backgroundColor: '#3980be'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 15 }}>
            <TouchableOpacity>
              <Text style={{color: '#fff', fontSize: 16}}>My Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ marginLeft: 50, color: '#fff', fontSize: 16}}>Promotions</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.header]}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Hello John!</Text>
        </View>

        <View style={styles.footer}>
          <View style={{}}>
            <TouchableOpacity>
              <Card >
                  <Card.Content>
                    <View style={{ flexDirection: 'row' }}>
                      <Paragraph style={{padding: 10, fontSize: 15, fontWeight: 'bold'}}>My Wallet Balance</Paragraph>
                      <TouchableOpacity
                      onPress={() => {navigation.navigate('WalletStackScreen')}}>
                        <FontAwesome 
                          name="arrow-right"
                          color="#e57373"
                          size={20}
                          style={{padding: 10, paddingLeft: 160, justifyContent:"flex-end", alignItems:'flex-end'}}
                        />
                      </TouchableOpacity> 
                    </View>
                    <Paragraph style={{padding: 10, fontSize: 20, fontWeight: 'bold'}}>$ 0.00</Paragraph>
                  </Card.Content>
              </Card>
            </TouchableOpacity>
            
            <Card style={{marginTop: 30}}>
                <Card.Content style={{ flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity>
                    <FontAwesome name="google-wallet" 
                      color="#3980be" size={60} 
                      style={{padding: 10, alignItems: 'center', alignContent: 'center'}} 
                      Title='Add Money'/>
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
                    <FontAwesome 
                      name="paper-plane" 
                      color="#3980be" size={60}
                      style={{paddingLeft: 50, paddingRight: 50}}/>
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
                    <FontAwesome 
                      name="usd" 
                      color="#3980be" 
                      size={60} 
                      style={{padding: 10}}/>
                  </TouchableOpacity>
                  
                </Card.Content>
                <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={{padding: 10}} >Add Money</Text>
                  <Text style={{padding: 10}} >Send Money</Text>
                  <Text style={{padding: 10}} >Pay Bills</Text>
                </View>
            </Card>
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
    // backgroundColor: '#fff'
  },
  header: {
      top: 0,
      marginTop: 20,
      paddingHorizontal: 20,
  },
  footer: {
      flex: 3,
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

