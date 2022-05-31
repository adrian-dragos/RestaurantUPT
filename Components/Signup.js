import React, {useEffect, useContext} from 'react';
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
import Login from './Login';
import {AuthContext} from '../context/AuthContext';


function Signup({navigation}) {
    //const {register} = useContext(AuthContext);
    const [emailValid,setEmailValid] = React.useState(false)
    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirm_password:'',
        check_textInputChange: false,
        check_nameInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });
    const [user, setUser] = React.useState({
        name: '',
        email: '',
        password: '',
    })
    const [users, setUsers] = React.useState([]);

    const textInputChange = (val) => {
        validateEmail(val);
        console.log("valid:");
        console.log(emailValid);
        if( val.length !== 0 && emailValid==true) {
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
    const nameInputChange = (val) => {
        if( val.length !== 0 && val.length>6) {
            setData({
                ...data,
                name: val,
                check_nameInputChange: true
            });
        } else {
            setData({
                ...data,
                name: val,
                check_nameInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const validateEmail = (email) => {
        const emailRegex = /^[\w-\.]+@student\.upt\.ro$/;
        if(emailRegex.test(email)){
            // users.forEach(item => {
            //     if(item.email == email){
            //         alert("Account already exists!");
            //         setEmailValid(false);
            //     }
            // })
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    }

    const validatePassword = () => {
        if(data.password!=data.confirm_password){
            alert("Parolele nu se potrivesc!");
        }else{
            setUser({
                ...user,
                password: data.password,
                name: data.name,
                email: data.email
            });
            console.log(user);
            //register(user.name,user.email,user.password);
            register();
            navigation.navigate('Login');
        }
    }

    async function fetchUsers (){
        const url = 'http://10.0.2.2:45424/api/Users'
        await fetch(url,{
            method: 'GET'
        })
            .then(response => response.json())
            .then(usrs => {
                setUsers(usrs);
                console.log(users);
            })
            .catch(error => console.log(error));
    }

    async function register() {
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Users/register'
        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .catch(error => alert(error));
    }

    // useEffect(() => {
    //     fetchUsers();
    // })

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#01135d' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Name</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Name"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => nameInputChange(val)}
                    />
                    {data.check_nameInputChange ?
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
                    marginTop:16
                }]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email (ex: nume@Student.upt.ro)"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        //onChangeText={(val) => validateEmail(val)}

                    />
                    {/*{data.check_textInputChange ?*/}
                    {emailValid ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="x-circle"
                                color="red"
                                size={20}
                            />
                        </Animatable.View>}
                </View>
                <Text style={[styles.text_footer, {
                    marginTop:16
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

                <Text style={[styles.text_footer, {
                    marginTop:16
                }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Confirm Your Password"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry ?
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
                        onPress={() => {validatePassword()}}
                        style = {{
                            width: '100%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',}}
                    >
                        <LinearGradient
                            colors={['#022097','#01135d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign,{
                                color: '#fff'
                            }]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={[styles.signIn, {
                            borderColor: '#01135d',
                            borderWidth:1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#01135d'
                        }]}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default Signup;

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

