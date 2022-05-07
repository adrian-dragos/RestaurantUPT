import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ButtonBlue(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.buttonTextFiller}></View>
      <Text style={styles.buttonText}>VEZI MENIUL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  buttonTextFiller: {
    flex: 1
  },
  buttonText: {
    fontFamily: "Roboto",
    color: "#121212",
    height: 33,
    width: 100,
    alignSelf: "center"
  }
});

export default ButtonBlue;
