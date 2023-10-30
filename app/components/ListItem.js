import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ListItem({ title, subTitle, image,IconComponent, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            {IconComponent }
            {image && <Image style={styles.image} source={image}></Image>}
            <View style={styles.textContainer}>
              <AppText numberOfLines={1} style={styles.title}   >{title}</AppText>
              {subTitle && <AppText numberOfLines={2} style={styles.subtitle}>{subTitle}</AppText>}
            </View>
            <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}  />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems:'center',
    backgroundColor:colors.white,
   },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  textContainer: {
      marginLeft: 10,
      flex:1,
    justifyContent:'center'
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
  },
  subtitle: {
    fontSize: 20,
    color: colors.medium,
  },
});

export default ListItem;
