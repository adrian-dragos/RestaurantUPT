import { NavigationContainer, Link } from "@react-navigation/native";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo} from '../Styles/Navbar.style'
import Home from "./Home";

const image = { uri: "https://www.sspolitehnica.ro/wp-content/uploads/2021/07/upt-logo.png" };
const Drawer = createDrawerNavigator();

// function Navbar() {
//   return (
//     <NavigationContainer>
//         <Link to='/'>
//             <ImageBackground source={image}></ImageBackground>
//         </Link>
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={Home} />
//                 //<Drawer.Screen name="Home" component={HomeScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     </NavigationContainer>
//   )
// }

function Navbar() {
    return (
      <Nav>
          <NavLink to='/'>
            <Logo style={{backgroundImage: `url(https://www.sspolitehnica.ro/wp-content/uploads/2021/07/upt-logo.png)`}}></Logo>
          </NavLink>
          <NavMenu>
                    <NavLink to='/' activeStyle>Home</NavLink>
                    <NavLink to='/menu' activeStyle>Menu</NavLink>
                    <NavBtn>
                        <NavBtnLink to='/login'>Sign In</NavBtnLink>
                    </NavBtn> 
          </NavMenu>
      </Nav>
    )
  }

export default Navbar