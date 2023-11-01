import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";

const image = {
  uri: "https://mfiles.alphacoders.com/850/850597.jpg",
};

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground style={styles.background} source={image}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/brain.png")} />
        <Text style={styles.tagline}>Sell Your Knowledge Online</Text>
      </View>
      <View style={styles.container}>
      <AppButton title="Log In" onPress={() => navigation.navigate(routes.LOGIN)}></AppButton>
      <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)}></AppButton>
      </View>

    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    flex:1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 70,
    objectFit: "contain",
  },
  container:{
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    width:'100%'
  },
  tagline: {
    fontSize: 20,
    color:colors.white,
    fontWeight: '600',
    paddingVertical:20
  },
});
export default WelcomeScreen;
