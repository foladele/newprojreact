import * as React from 'react';
import {View,Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {useState} from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

// Re-edits

// const onLogin =() => {
//   console.log('hello and welcome!')
//   // let email = 'test@test.com';
//   // let username = 'tester1';
//   // console.log(email + " " + username);

//   // $.ajax({
//   //   url: 'http://127.0.0.1:8000/users/',
//   //   type: 'POST',
//   //   data: { username, email },
//   //   dataType: 'JSON'
//   // }).done( response => {
//   //   console.log('logged in')
//   // }).fail( response => {
//   //   // TODO: Handle this better
//   //   // console.log(response);
//   //   console.log('failed');
//   // })

//   // fetch('http://127.0.0.1:8000/users/', {
//   //   method: 'POST',
//   //   headers: {
//   //     Accept: 'application/json',
//   //     'Content-Type': 'application/json'
//   //   },
    
//   // });

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       username: 'tester2',
//       email: 'test@test1.com'
//     })
//   };


  // fetch('http://10.0.2.2:8000/users/', requestOptions)
  //   .then((response)=> {
  //     console.log('response', response.json);
  //   })
  //   .catch((error)=>{
  //     console.log('error ', error.message );
  //     throw error;
  //   });

  // fetch('https://api.npms.io/v2/search?q=react')
  //       .then(response => response.json())
  //       .then((data) => console.log("data", data));

//   fetch('http://10.0.2.2:8000/users/')
//     .then(response => response.json())
//     .then((data) => console.log(data));

// }


const Home = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  const handleChange = (text, setState) => {
    
    setState(text);
    console.log("state ", text);
    // console.log("vaule ", e.nativeEvent.value);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
       title="Go to details screen"
       onPress={()=> navigation.navigate("Details")}
      ></Button>
      <Button
       title="Go to Login"
       onPress={()=> navigation.navigate("Login")}
      ></Button>
    </View>
  );
}

export default Home;