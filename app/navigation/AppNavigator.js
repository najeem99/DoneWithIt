import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () =>(
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator}></Tab.Screen>
        <Tab.Screen name="ListingsEdit" component={ListingEditScreen}></Tab.Screen>
        <Tab.Screen name="Account" component={AccountNavigator}></Tab.Screen>
    </Tab.Navigator>
)
export default AppNavigator;