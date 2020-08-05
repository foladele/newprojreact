import React from 'react';
import { Alert, View, 
  Text, Button, Modal, 
  StyleSheet, Dimensions, 
  Image, TouchableOpacity, 
  Platform,
  StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';

import { AuthContext } from '../Component/Context';
import { color } from 'react-native-reanimated';

const RegisterScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    username: '',
    full_name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,

  });

   // asses signin from app,js
  const {signUp } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    // console.log(val);
    if(val.length != 0) {
      setData({
          ...data,
          email: val,
          check_textInputChange: true
      });
    }else{
      setData({
          ...data,
          password: val,
          check_textInputChange: false
         
      });
    }
  }

  const handlePasswordChange =(val) =>{
    setData({
      ...data,
      password: val
    });
  }

  const handleConfirmPasswordChange =(val) =>{
    setData({
      ...data,
      confirm_password: val
    });
  }

  const updateSecureTextEntry =() =>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  const updateConfirmSecureTextEntry =() =>{
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
  }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle='light-content'/>

        <View style={styles.header}>
          <Text style={styles.text_header}>Let's Break Barriers!</Text>
          <Text >Tell us about yourself!</Text>
        </View>
        <Animatable.View 
          animation="fadeInUpBig"
          style={styles.footer}
        >
          {/* <Text style={styles.text_footer}>Username (optional)</Text> */}
          <View style={styles.action}>
            {/* <FontAwesome 
              name="user-o"
              color="#05375a"
              size={15}
            /> */}
            <TextInput
              label="Username (optional)"
              // placeholder="Username (optional)"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val)=> textInputChange(val)}
            />
            {data.check_textInputChange ? 
              <Animatable.View
                animation="bounceIn"
              >
                <Feather 
                name="check-circle"
                color="green"
                size={20}
              />
              </Animatable.View>
            : null}
          </View>

          {/* <Text style={[styles.text_footer, {
            marginTop:10
          }]}>Full Name</Text> */}
          <View style={styles.action}>
            {/* <FontAwesome 
              name="user-o"
              color="#05375a"
              size={20}
            /> */}
            <TextInput
              label="Full Name"
              // placeholder="Full Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val)=> textInputChange(val)}
            />
            {data.check_textInputChange ? 
              <Animatable.View
                animation="bounceIn"
              >
                <Feather 
                name="check-circle"
                color="green"
                size={20}
              />
              </Animatable.View>
            : null}
          </View>
        
          {/* <Text style={[styles.text_footer, {
            marginTop: 10,
            color: 'black',
            fontWeight: 'bold'
          }]}>Phone Number</Text> */}
          <View style={styles.action}>
            {/* <FontAwesome 
              name="phone"
              color="#05375a"
              size={20}
            /> */}
            <TextInput
              label='Phone Number'
              // placeholder="Phone Number"
              color='red'
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val)=> textInputChange(val)}
            />
            {data.check_textInputChange ? 
              <Animatable.View
                animation="bounceIn"
              >
                <Feather 
                name="check-circle"
                color="green"
                size={20}
              />
              </Animatable.View>
            : null}
          </View>

          {/* <Text style={[styles.text_footer, {
            marginTop:10
          }]}>Email Address</Text> */}
          <View style={styles.action}>
            {/* <FontAwesome 
              name="envelope-o"
              color="#05375a"
              size={20}
            /> */}
            <TextInput
              label='Your Email'
              // placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val)=> textInputChange(val)}
            />
            {data.check_textInputChange ? 
              <Animatable.View
                animation="bounceIn"
              >
                <Feather 
                name="check-circle"
                color="green"
                size={20}
              />
              </Animatable.View>
            : null}
          </View>

          {/* <Text style={[styles.text_footer, {
            marginTop:10
          }]}>Password</Text> */}
          <View style={styles.action}>
            {/* <Feather 
              name="lock"
              color="#05375a"
              size={20}
            /> */}
            <TextInput
              label='Your Password'
              // placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val)=> handlePasswordChange(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              { data.secureTextEntry ? 
                <Feather 
                  name="eye-off"
                  color="grey"
                  size={20}
                />
              : 
                <Feather 
                  name="eye"
                  color="grey"
                  size={20}
                />
              }
            </TouchableOpacity>
          </View>

          {/* <Text style={[styles.text_footer, {
            marginTop:10
          }]}>Confirm Password</Text> */}
          <View style={styles.action}>
            {/* <Feather 
              name="lock"
              color="#05375a"
              size={20}
            /> */}
            <TextInput
              label='Confirm Password'
              // placeholder="Confirm Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val)=> handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity
              onPress={updateConfirmSecureTextEntry}
            >
              { data.secureTextEntry ? 
                <Feather 
                  name="eye-off"
                  color="grey"
                  size={20}
                />
              : 
                <Feather 
                  name="eye"
                  color="grey"
                  size={20}
                />
              }
            </TouchableOpacity>
          </View>

         <View  style={styles.terms}>
            <Text style={{color: 'black', marginTop:15}}>By signing up, I accept FinX</Text>
            <TouchableOpacity>
                <Text style={{color: 'blue', marginTop:15}}> Terms, Conditions and Privacy</Text>
            </TouchableOpacity> 
         </View>
        
         <TouchableOpacity>
            <Text style={{color: 'blue', marginTop:5}}>Policies</Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity
              style={styles.signIn}
              onPress={() =>  navigation.navigate('MenuScreen')}
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
        </View>

        </Animatable.View>
      </View>
    );
};

export default RegisterScreen;

const {height} = Dimensions.get("screen");
const height_modal = height * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
    //   flex: 1,
      top: 20,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 18
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
      color: '#05375a',
      fontSize: 14
  },
  action: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      marginTop: 2,
      borderBottomWidth: 1,
      borderBottomColor: '#3980be',
      paddingBottom: 0
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
 textInput: {
      flex: 1,
      marginTop: Platform.OS === 'andriod' ? 0 : -12,
      paddingLeft: 10,
      color: 'black',
      fontWeight: 'bold'
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
  }
});