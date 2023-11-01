import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () =>(
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator}></Tab.Screen>
        <Tab.Screen name="ListingsEdit" component={ListingEditScreen}></Tab.Screen>
        <Tab.Screen name="Account" component={AccountScreen}></Tab.Screen>
    </Tab.Navigator>
)
export default AppNavigator;