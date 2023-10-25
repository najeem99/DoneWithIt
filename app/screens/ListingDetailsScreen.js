import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  const image = {
    uri: "https://m.media-amazon.com/images/I/816rRVjQS+L._AC_UF1000,1000_QL80_.jpg",
  };
  return (
    <View style={styles.container}>
      <Image style={styles.imageView} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
          Bicycle With basket and adjustable seat
        </AppText>
        <AppText style={styles.price}>AED 100</AppText>
      </View>
      <View style={styles.listContainer}>
      <ListItem image={{uri: "https://i0.wp.com/www.hausofwrestling.com/wp-content/uploads/2023/08/John-Cena-2.jpeg?fit=866%2C455&ssl=1"}} title="John Cena" subTitle="500 Listings" ></ListItem>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  detailsContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    marginVertical: 10,
  },
  imageView: {
    width: "100%",
    height: 300,
    objectFit: "cover",
  },
  listContainer:{
    marginVertical:40
  }
});

export default ListingDetailsScreen;
