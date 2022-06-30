import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imageOn from './assents/icons/eco-light.png';
import imageOff from './assents/icons/eco-light-off.png';
import imageDioOn from './assents/icons/logo-dio.png';
import imageDioOff from './assents/icons/logo-dio-white.png';


const App = () => {
  const toggle = false; //false
  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={()=> {}}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={toggle ? imageOn : imageOff}>
        </Image>

        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={toggle ? imageDioOn : imageDioOff}>
        </Image>
      </TouchableOpacity>
    </View>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: "center",
    justifyContent: "center",
    tintColor: 'white',
    width: 250,
    height: 150,
  },

  logoDio: {
    resizeMode: 'contain',
    alignSelf: "center",
    justifyContent: "center",
    width: 250,
    height: 150,
  },
  
});