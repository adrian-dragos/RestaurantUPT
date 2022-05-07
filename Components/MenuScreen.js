import { StyleSheet, View, Text, ImageBackground, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/4/49/Universitatea_Politehnica_Timisoara_-_Rectorat.jpg" };

const menuURL = "https://localhost:44368/api/Menu";

function MenuScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [mealId, setMealId] = useState([]);
  const [description, setDescription] = useState([]);

  const getMenu = async () =>{
    try {
      const response = await axios.get('https://localhost:44368/api/Menu');
      console.log(response.data);
      //const json = await response.json();
      //setData(json.day);
    }catch (error){
      //console.error(error);
      console.log(error.message);
    }
    // }finally {
    //   setLoading(false);
    // }
  }

  useEffect(() => {
    getMenu();
  }, []);

  return (
    //<Text>Home</Text>
    //<View><Text h1 style={{color:'black'}}>MENIU</Text></View>
    <View style={styles.container}>
       {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.day}, {item.mealId}</Text>
          )}
        />
      )}
      <View style={styles.backgroundImageStack}>
      <Text style={styles.header1}>MENIU</Text>
        <ImageBackground
          //source={require("../assets/images/Universitatea_Politehnica_Timisoara_-_Rectorat.jpg")}
          source={image}
          resizeMode="cover"
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImage_imageStyle}
        >
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000",
    borderBottomRightRadius: 0,
    backgroundColor: "rgba(255,255,255,1)"
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage_imageStyle: {},
  preview: {
    width: 300,
    height: 400,
    backgroundColor: "rgba(230,230,230,0.7)",
    borderRadius: 41,
    marginTop: -10,
    marginLeft: 0,
    alignSelf: "center"
  },
  header1: {
    fontFamily: "Roboto",
    color: "#121212",
    height: 30,
    width: 250,
    fontSize: 20,
    marginLeft: 2,
    marginTop: 10
  },
  previewText: {
    fontFamily: "Roboto",
    color: "#121212",
    height: 250,
    width: 250,
    marginTop: 30
  },
  header1Column: {
    width: 400,
    marginTop: 25,
    marginLeft: 20
  },
  header1ColumnFiller: {
    flex: 1
  },
  previewR: {
    left: 0,
    width: 100,
    height: 30,
    position: "absolute",
    backgroundColor: "rgba(144,202,249,1)",
    //bottom: 1
  },
  buttonBlue: {
    position: "absolute",
    left: 10,
    height: 30,
    width: 100,
    bottom: 10
  },
  previewRStack: {
    width: 130,
    height: 45,
    marginBottom: 100,
    marginLeft: 35
  },
  navigationBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 73,
    width: 420
  },
  backgroundImageStack: {
    flex: 1,
    //marginBottom: -34,
    //marginRight: -9
  }
});

export default MenuScreen;