import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ListItem from "../components/ListItem";
import AppText from "../components/AppText";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const image = {
    uri: "https://m.media-amazon.com/images/I/816rRVjQS+L._AC_UF1000,1000_QL80_.jpg",
  };
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.imageView} source={{ uri: listing.image }}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{"AED "+listing.price}</AppText>
      </View>
      <View style={styles.listContainer}>
        <ListItem
           title="John Cena"
          subTitle="500 Listings"
          image={{
            uri: "https://i0.wp.com/www.hausofwrestling.com/wp-content/uploads/2023/08/John-Cena-2.jpeg?fit=866%2C455&ssl=1",
          }}
        />
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
  listContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
