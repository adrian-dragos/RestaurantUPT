import React from 'react';
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

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Menu = ({navigation}) => {

    const Card = ({food}) => {
        return (
            <TouchableHighlight
                underlayColor={'#fff'}
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Details', food)}>
                <View style={style.card}>
                    <View style={{alignItems: 'center', top: -40}}>
                        <Image source={food.image} style={{height: 120, width: 120}} />
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
                            ${food.price}
                        </Text>
                        <View style={style.addToCartBtn}>
                            <Icon name="add" size={20} color={'#fff'} />
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={style.header}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 28}}>Hello,</Text>
                        <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                            Customer
                        </Text>
                    </View>
                    <Text style={{marginTop: 5, fontSize: 22, color: '#a1aaa5'}}>
                        What do you want today?
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
                data={foods}
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
