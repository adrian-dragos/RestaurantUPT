import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function NavigationBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.headerStack}>
        <View style={styles.header}>
          <Icon name="menu" style={styles.menuIcon}></Icon>
        </View>
        <Image
          source={require("../assets/images/image_2022-04-28_194552095.png")}
          resizeMode="contain"
          style={styles.uptLogo}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    top: 27,
    height: 67,
    position: "absolute",
    backgroundColor: "rgba(1,19,93,1)",
    left: 0,
    right: 38
  },
  menuIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 43,
    width: 40,
    marginTop: 12,
    marginLeft: 12
  },
  uptLogo: {
    top: 0,
    width: 123,
    height: 121,
    position: "absolute",
    right: 0
  },
  headerStack: {
    height: 121,
    marginTop: -27,
    marginRight: -38
  }
});

export default NavigationBar;
