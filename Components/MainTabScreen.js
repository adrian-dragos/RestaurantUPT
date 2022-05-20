import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeNew from './HomeNew';
import Home from './Home';
import Login from './Login';
import MenuScreen from './MenuScreen';
import BasketScreen from './BasketScreen';
import OrdersScreen from './OrdersScreen';
import Profile from "./Profile";
import Menu from './Menu';
import { MaterialBottomTabView } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#0000ff"
        style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Acasa',
                tabBarColor: '#01135d',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Menu"
            component={Menu}
            options={{
                tabBarLabel: 'Meniu',
                tabBarColor: '#01135d',
                tabBarIcon: ({ color }) => (
                    <Icon name="food" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Basket"
            component={BasketScreen}
            options={{
                tabBarLabel: 'Cos',
                tabBarColor: '#01135d',
                tabBarIcon: ({ color }) => (
                    <Icon name="basket" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen 
            name="Orders"
            component={OrdersScreen}
            options={{
                tabBarLabel: 'Comenzi',
                tabBarColor: '#01135d',
                tabBarIcon: ({ color }) => (
                    <Icon name="clipboard-text-outline" color={color} size={26} />
                ),
            }}
        /> 
    </Tab.Navigator>
);

export default MainTabScreen;
