import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {MaterialCommunityIcons } from '@expo/vector-icons'
import colors from "../config/colors";

const image = {
  uri: "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
};

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
      </View>

      <Image style={styles.imageView} resizeMode="contain" source={image} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  imageView: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    
    position:'absolute',
    top:40,
    left:30
  },
  deleteIcon: {
    position:'absolute',
    top:40,
    right:30
  },
});
export default ViewImageScreen;
