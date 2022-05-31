import React, {createContext,useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const register = (name,email,password) =>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/register`,{
            name,
            email,
            password
        }).then(res =>{
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
        })
            .catch(e => {
            console.log(`register error ${e}`);
            setIsLoading(false);
        });
    };

    const login = (email, password) => {
        setIsLoading(true);

        axios
            .post(`${BASE_URL}/Users/authenticate`, {
                email,
                password,
            }).then(res => {
                let userInfo = res.data;
                console.log(userInfo);
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
            }).catch(e => {
                console.log(`login error ${e}`);
                setIsLoading(false);
            });
    }

    const logout = () => {
        setIsLoading(true);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try{
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if(userInfo){
                setUserInfo(userInfo);
            }
        } catch (e) {
            console.log(`islogged in error ${e}`);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                register,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

