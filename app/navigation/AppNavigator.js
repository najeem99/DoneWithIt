import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "../navigation/routes";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => ( <NewListingButton onPress={()=> navigation.navigate(routes.LISTING_EDIT)} />) ,
         
      })}
    ></Tab.Screen>
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);
export default AppNavigator;
