import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeNew from './HomeNew';
import Login from './Login';
import MenuScreen from './MenuScreen';
import BasketScreen from './BasketScreen';
import OrdersScreen from './OrdersScreen';
import Profile from "./Profile";
import { MaterialBottomTabView } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen 
            name="Home"
            component={HomeNew}
            options={{
                tabBarLabel: 'Acasa',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen 
            name="Menu"
            component={MenuScreen}
            options={{
                tabBarLabel: 'Meniu',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="food" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen 
            name="Basket"
            component={BasketScreen}
            options={{
                tabBarLabel: 'Cos',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="basket" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen 
            name="Orders"
            component={OrdersScreen}
            options={{
                tabBarLabel: 'Comenzi',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={26} />
                ),
            }}
        /> 
    </Tab.Navigator>
);

export default MainTabScreen;
