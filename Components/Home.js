import React, { useState, useEffect, useContext} from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from "react-native"
import {LinearGradient} from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';
import Login from './Login';
import Menu from './Menu'
import {AuthContext} from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/src/index';

function Home({navigation}) {
//const Home = ({navigation}) =>{
    const {userInfo, logout, isLoading} = useContext(AuthContext);
  return (
      <View style={styles.container}>
          <Spinner visible={isLoading}/>
        <View style={styles.header}>
          <Animatable.Image
              animation="bounceIn"
              duraton="1500"
              style={styles.logo}
              source={require('../assets/images/sigla_scurta.png')}
              resizeMode="stretch"/>
        </View>
        <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig">
          <Text style={styles.title}>DOAR LA CANTINA UPT</Text>
          <Text style={styles.text}>Lorem ipsum</Text>
            {userInfo.token ? (
          <View style={styles.button}>
              <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
                <LinearGradient colors={['#022097','#01135d']} style={styles.signIn}>
                  <Text style={styles.textSign}>Vezi Meniul</Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20}/>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={logout}>
                  <LinearGradient colors={['#022097','#01135d']} style={styles.signIn}>
                      <Text style={styles.textSign}>LogOut</Text>
                      <MaterialIcons name="navigate-next" color="#fff" size={20}/>
                  </LinearGradient>
              </TouchableOpacity>
          </View>
            ) : (
                    <View style={styles.button}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
                            <LinearGradient colors={['#022097','#01135d']} style={styles.signIn}>
                                <Text style={styles.textSign}>Vezi Meniul</Text>
                                <MaterialIcons name="navigate-next" color="#fff" size={20}/>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <LinearGradient colors={['#022097','#01135d']} style={styles.signIn}>
                                <Text style={styles.textSign}>Login</Text>
                                <MaterialIcons name="navigate-next" color="#fff" size={20}/>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                )}
        </Animatable.View>
    </View>
  )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(1,19,93,1)",
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Home;
