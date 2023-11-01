import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingDetails from "../screens/ListingDetailsScreen";
const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listings" component={ListingScreen}></Stack.Screen>
    <Stack.Screen name="ListingDetails" component={ListingDetails} options={{
        headerShown:false
    }}></Stack.Screen>
  </Stack.Navigator>
);
export default FeedNavigator;
