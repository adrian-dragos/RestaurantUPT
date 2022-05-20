import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
}from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }

    return (
      <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                        name="home-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    onPress={()=>{props.navigation.navigate("Home")}}
                />
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                        name="account-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Profile"
                    onPress={()=>{props.navigation.navigate("Profile")}}
                />
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                        name="home-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Settings"
                    onPress={()=>{props.navigation.navigate("Settings")}}
                />
              </Drawer.Section>
              <Drawer.Section title="Preferences">
                  <TouchableRipple onPress={() => {toggleTheme()}}>
                      <View style={styles.preference}>
                          <Text>Dark Theme</Text>
                          <View pointerEvents="none">
                            <Switch value={isDarkTheme}/>
                          </View>
                      </View>
                  </TouchableRipple>
              </Drawer.Section>
          </View>
      </DrawerContentScrollView>
    );
  }

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#0000cc',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});