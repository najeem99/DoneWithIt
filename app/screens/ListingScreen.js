import React from "react";
import Screen from "../components/Screen";
import { FlatList ,StyleSheet} from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Bicycle with helmet",
    price: 120,
    image:
      "https://www.firefoxbikes.com/on/demandware.static/-/Sites-firefox-navigation/default/dwda09db55/PLPBanner/categoryPLP/MTB/Firefox-Tremor-Web.jpg",
  },
  {
    id: 2,
    title: "Couch for sale",
    price: 99,
    image:
      "https://livingindubai.org/wp-content/uploads/2016/04/sofa.jpg",
  },
  {
    id: 3,
    title: "Couch for sale",
    price: 180,
    image:
      "https://livingindubai.org/wp-content/uploads/2016/04/sofa.jpg",
  },
];
function ListingScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) =>  
          <Card
            title={item.title}
            subTitle={"AED " + item.price}
            image={{ uri: item.image }}
            onPress={() => navigation.navigate("ListingDetails",item)}
          />
         }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.light,
        paddingHorizontal:5,
    }
})
export default ListingScreen;
