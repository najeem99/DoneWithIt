import React from 'react';
import { TouchableOpacity,StyleSheet, Text, Platform } from 'react-native';
import colors from '../config/colors';

function AppText({children, style}) {
    return (
             <Text style={[styles.title,style]} >{children}</Text>
     );
}
const styles = StyleSheet.create({
    title:{
         fontSize:18,
         fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
     }
})

export default AppText;