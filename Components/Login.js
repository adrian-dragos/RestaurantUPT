import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Signup from './Signup';
import {AuthContext} from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';



function Login({navigation}) {
  const {isLoading,login} = useContext(AuthContext);
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  });
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const textInputChange = (val) => {
    if( val.length !== 0 ) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      });
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  const validate = () => {
    setUser({
      ...user,
      password: data.password,
      email: data.email
    });
    console.log(user);
    //authenticate();
    login(user.email,user.password);
    navigation.navigate('Home');
  }

  // async function authenticate() {
  //   const url = 'https://rgrestaurantapi.azurewebsites.net/api/Users/authenticate'
  //   await fetch(url, {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(user)
  //   })
  //       .then(response => response.json())
  //       .then(u=>{console.log(u); setStudent(u)})
  //       .catch(error => console.log(error));
  // }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#01135d' barStyle="light-content"/>
      <Spinner visible={isLoading}/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
          style={styles.footer}
          animation="fadeInUpBig"
      >
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
              name="user-o"
              color="#05375a"
              size={20}
          />
          <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
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
        <Text style={[styles.text_footer, {
          marginTop:35
        }]}>Password</Text>
        <View style={styles.action}>
          <Feather
              name="lock"
              color="#05375a"
              size={20}
          />
          <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
              onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
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

        <View style={styles.button}>
          <TouchableOpacity
              onPress={() => {login(data.email,data.password); navigation.navigate('Home');}}
              style = {{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',}}>
            <LinearGradient
                colors={['#022097','#01135d']}
                style={styles.signIn}
            >
              <Text style={[styles.textSign,{
                color: '#fff'
              }]}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>


          <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={[styles.signIn, {
                borderColor: '#01135d',
                borderWidth:1,
                marginTop: 15
              }]}
          >
              <Text style={[styles.textSign, {
                color: '#01135d'
              }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  "rgba(1,19,93,1)"
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  color_textPrivate: {
    color: 'grey'
  }
});

