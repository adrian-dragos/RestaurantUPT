import React, { useState, useEffect, useContext} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PrimaryButton} from './Button';
import axios from 'axios';
import {BASE_URL} from '../config';
import {AuthContext} from '../context/AuthContext';

function BasketScreen({navigation}) {
    const [requestSuccesful,setRequestSuccesful] = useState(false);
    const [order, setOrder] = useState([]);
    const [discount, setDiscount] = useState(25);
    const [meal, setMeal] = useState();
    var totalPriceAux = order?.reduce((a,c) => a+c.price,0);
    const [totalPrice,setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [priceT, setPriceT] = useState();
    const [deleteId, setDeleteId] = useState(-1);
    const {userInfo} = useContext(AuthContext);
    const AuthStr = 'Bearer '.concat(userInfo.token);

    const fetchCart = (studentId) => {
        console.log(AuthStr);
        axios.get(`https://rgrestaurantapi.azurewebsites.net/api/Order/${studentId}/basket`,
            {
                headers: {Authorization: AuthStr}
            }).then(res =>{
            let ord = res.data;
            setOrder(ord);
            setRequestSuccesful(true);
        }).catch(e => {
            console.log(`basket error ${e}`);
        });
    }

    const deleteFromCart = (mealId) => {
        axios.delete(`${BASE_URL}/Order/delete-from-basket/${mealId}`,{
            headers: {Authorization: AuthStr}
        }).then(res => {
        }).catch(e => {
            console.log(`delete from basket error ${e}`);
        })
    }

    async function finalizeOrder(){
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Order/make-order';
        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
        console.log(order);
        await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userInfo.token,
            },
            body: JSON.stringify(order)
        })
            .then(response => console.log(response.json()))
            .catch(error => console.log(error));
    }

    async function UpdateQuantity(item){
        console.log("altcv");
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Order/update-quantity-in-basket'
        await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userInfo.token,
            },
            body: JSON.stringify(item),
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchCart(userInfo.id);
    }, [])
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Refreshed!');
        });
        return unsubscribe;
    }, [navigation]);


  const CartCard = ({meal}) => {
    return (
                <View style={style.cartCard}>
                    {/*<Image source={{uri:meal.imageData}} style={{height: 80, width: 80}}/>*/}
                    <View
                        style={{
                            height: 100,
                            marginLeft: 10,
                            paddingVertical: 20,
                            flex: 1,
                        }}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>{meal.name}</Text>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Pret: {meal.quantity == null ? meal.price : meal.price*meal.quantity } Lei</Text>
                    </View>
                    <View style={{marginRight: 20, alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>{meal.quantity==null ? 1 : meal.quantity }</Text>
                        <View style={style.actionBtn}>
                            <TouchableOpacity onPress={async () => {
                                if(meal.quantity == null || meal.quantity === 1){
                                    deleteFromCart(meal.id);
                                    fetchCart(userInfo.id);
        
                                }else{
                                    await UpdateQuantity({id: meal.id, mealId: meal.mealId, studentId: meal.studentId, quantity: (meal.quantity-1), totalPrice: ((meal.quantity-1)*meal.price), dateOfDelivery: "2022-05-31T16:06:49.722Z"});
                                    await fetchCart(userInfo.id);
                                    setTotalPrice(totalPrice - meal.price);
                                }
                            }}>
                                <Icon name="remove" size={25} color={'#fff'}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={async () => {
                                await UpdateQuantity({id: meal.id, mealId: meal.mealId, studentId: meal.studentId, quantity: (meal.quantity == null ? 2 : meal.quantity+1), totalPrice: ((meal.quantity == null ? 2 : meal.quantity+1)*meal.price), dateOfDelivery: "2022-06-01T16:06:49.722Z"});
                                await fetchCart(userInfo.id);
                                setTotalPrice(totalPrice + meal.price);
                            }}>
                                <Icon name="add" size={25} color={'#fff'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
    );
  };

  return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <View style={style.header}>
          <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Comanda ta</Text>
        </View>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom: 80}}
                  data={order}
                  renderItem={({item}) => <CartCard meal={item}/> }
                  ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
                  ListFooterComponent={() => (
                      <View>
                          <View
                              style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginVertical: 15,
                              }}>
                              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                                  Reducere aplicata:
                              </Text>
                              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{discount}%</Text>
                              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                                  Total:
                              </Text>
                              {(order.length === 0) ?
                                  (<Text style={{fontSize: 18, fontWeight: 'bold'}}>
                                      0 Lei
                                  </Text>
                                  ):(
                                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                                          {totalPrice<0 ? (totalPriceAux - totalPriceAux*discount/100).toFixed(2) : (totalPriceAux + (totalPrice - totalPrice*discount/100)).toFixed(2)} Lei
                                      </Text>
                                  )}
                          </View>
                          <TouchableOpacity onPress={async () =>  {
                                await finalizeOrder();
                                await fetchCart(userInfo.id)
                              }}>
                              <View style={{marginHorizontal: 30}}>
                                  <PrimaryButton title="Finalizeaza comanda"/>
                              </View>
                          </TouchableOpacity>

                      </View>
                  )}
              />
      </SafeAreaView>
  )
}

export default BasketScreen;

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: '#01135d',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
