import React, { useState, useEffect, useContext} from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    FlatList,
    ScrollView,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import foods from '../consts/foods';
import Details from './Details';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import {BASE_URL} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

//const menuURL = "http://10.0.2.2:45424/api/Menu/date?date=2022%2F05%2F20";
const menuURL = "https://rgrestaurantapi.azurewebsites.net/api/Menu/";

const Menu = ({navigation}) => {
    const {userInfo} = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);
    const [meals, setMeals] = useState([]);
    const [idList, setIdList] = useState([]);
    const [toCart, setToCart] = useState({mealId: 0, studentId: 0});
    const [idx, setIndex] = useState(0);
    const [menu, setMenu] = useState({
        day: "",
        mealId1: false,
        mealId2: false,
        mealId3: false,
        mealId4: false,
        mealId5: false,
        mealId6: false,
        mealId7: false,
        mealId8: false,
        mealId9: false,
        mealId10: false,
        id: 0
    });
    var date = new Date();
    var year = date.getFullYear().toString;
    var month = (date.getMonth() + 1).toString();
    if(date.getMonth() + 1 < 10){
        month = "0" + month;
    }
    var day = date.getDate().toString();
    if(date.getDate() < 10){
        day = "0" + day;
    }
    var currentDate = year + "-" + month + "-" + day;

    useEffect(() => {
        fetchMenu();
        fetchMeals();
    }, [menu.id]);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Refreshed!');
        });
        return unsubscribe;
    }, [navigation]);

    async function fetchMenu(){

        await fetch(menuURL + "date?date=" + "2022-05-31", {
            method: 'GET'
        })
            .then(response => response.json())
            .then(menuItems => {
                setMenu(menuItems);
                console.log(menuItems);
                console.log(userInfo.token);
            })
            .catch(error => console.log(error));
    }

    async function fetchMeals() {
        var j = 0;
        const url = "https://rgrestaurantapi.azurewebsites.net/api/Meal/";

        for (j = 0; j < 9; j++) {
            switch (j) {
                case 0:
                    if (menu.mealId1 == true) {
                        console.log("case 0");
                        await fetch(url + "1", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 1]);
                                console.log(meals);
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                case 1:
                    if (menu.mealId2 == true) {
                        console.log("case 1");
                        await fetch(url + "2", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 2]);
                                console.log(meals);
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                case 2:
                    if (menu.mealId3 == true) {
                        console.log("case 2");
                        await fetch(url + "3", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 3]);
                                console.log(meal);
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                case 3:
                    if (menu.mealId4 == true) {
                        console.log(" case 3");
                        await fetch(url + "4", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 4]);
                                console.log(meal);
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                case 4:
                    if (menu.mealId5 == true) {
                        console.log("case 4");
                        await fetch(url + "5", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 5]);
                                console.log(meal);
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                case 5:
                    if (menu.mealId6 == true) {
                        console.log("case 5");
                        await fetch(url + "6", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 6]);
                                //console.log(meal);
                                console.log("case 5");
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                case 6:
                    if (menu.mealId7 == true) {
                        console.log("case 6");
                        await fetch(url + "7", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 7]);
                                console.log(meal);
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                case 7:
                    if (menu.mealId8 == true) {
                        console.log("case 7");
                        await fetch(url + "8", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 8]);
                                console.log(meal);
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                case 8:
                    if (menu.mealId9 == true) {
                        console.log("case 8");
                        await fetch(url + "9", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 9]);
                                console.log(meal);
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                case 9:
                    if (menu.mealId10 == true) {
                        console.log("case 9");
                        await fetch(url + "10", {
                            method: 'GET'
                        })
                            .then(response => response.json())
                            .then(meal => {
                                setMeals(prevState => [...prevState, meal]);
                                setIdList(prevState => [...prevState, 10]);
                                console.log(meal);
                            })
                            .catch(error => console.log(error));
                    }
                    break;
                default:
                    break;
            }
        }
    }

    const addToCart = (mealId,studentId) => {
        axios.post(`${BASE_URL}/Order/add-to-basket`,{
            mealId,
            studentId,
        }).then(res =>{
            console.log(res.data);
        }).catch(e => {
                console.log(`add-to-cart error ${e}`);
            });
    };
    var index = -1;
    const Card = ({food}) => {
        index++;
        return (
        <TouchableHighlight
            underlayColor={'#fff'}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Details', food)}>
            <View style={style.card}>
                <View style={{alignItems: 'center', top: -40}}>
                    <Image source={{uri:food.imageData}} style={{height: 120, width: 120}}/>
                </View>
                <View style={{marginHorizontal: 20}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {food.price} Lei
                    </Text>
                    {userInfo.token ? (
                        <TouchableOpacity onPress={() => {
                            console.log('/////////////////////////////'+idList[index]);
                            addToCart(idList[index], userInfo.id);
                        }}>
                            <View style={style.addToCartBtn}>
                                <Icon name="add" size={20} color={'#fff'}/>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        navigation.navigate('Login')
                        // <TouchableOpacity onPress={alert('You are not logged in!')}>
                        //     <View style={style.addToCartBtn}>
                        //         <Icon name="add" size={20} color={'#fff'}/>
                        //     </View>
                        // </TouchableOpacity>
                    )}

                </View>
            </View>
        </TouchableHighlight>
        );
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            {isLoading ? null : null}
            <View style={style.header}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 28}}>Buna,</Text>
                        {userInfo.name ? (
                            < Text style = {{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                                {userInfo.name}
                            </Text>
                        ) : (
                            < Text style = {{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                            Customer
                            </Text>
                        )
                        }
                    </View>
                    <Text style={{marginTop: 5, fontSize: 22, color: '#a1aaa5'}}>
                        Ce doresti sa mananci azi?
                    </Text>
                </View>
                <Image
                    source={require('../assets/images/Person-Icon.png')}
                    style={{height: 50, width: 50, borderRadius: 25}}
                />
            </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={meals}
                    renderItem={({item}) => <Card food={item} />}
                />
        </SafeAreaView>
    );
}
export default Menu;

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
            card: {
                height: 220,
                    width: cardWidth,
                    marginHorizontal: 10,
                    marginBottom: 20,
                    marginTop: 50,
                    borderRadius: 15,
                    elevation: 13,
                    backgroundColor: '#fff',
            },
            addToCartBtn: {
                height: 30,
                    width: 30,
                    borderRadius: 20,
                    backgroundColor: '#01135d',
                    justifyContent: 'center',
                    alignItems: 'center',
            },
});
