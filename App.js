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

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent{...props} />}
    >
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
