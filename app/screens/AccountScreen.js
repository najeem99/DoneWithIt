import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Separator from "../components/Separator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen:"Listings"
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen:"Messages"
  },
];

function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.constainer}>
        <ListItem
          title="John Cena"
          subTitle="johncena@shiplifier.com"
          image={{
            uri: "https://i0.wp.com/www.hausofwrestling.com/wp-content/uploads/2023/08/John-Cena-2.jpeg?fit=866%2C455&ssl=1",
          }}
        />
      </View>
      <View style={styles.constainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ <Separator/>}
        ></FlatList>
      </View>
      <ListItem
          title="Logout"
          IconComponent={
            <Icon
              name="logout"
              backgroundColor="#ffe66d"
            />
          } 
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen:{
    backgroundColor:colors.light
  },
  constainer: {
    marginVertical: 20,
  },
});

export default AccountScreen;
