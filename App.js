import 'react-native-gesture-handler';
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import MainTabScreen from './Components/MainTabScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { DrawerContent } from './Components/DrawerContent';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Details from './Components/Details';
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native';
import {AuthProvider} from './context/AuthContext';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent{...props} />}
    >
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
}


function App() {
  return (
      <AuthProvider>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </AuthProvider>

  );
}

export default App;


