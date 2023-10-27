import React from 'react';
import { TouchableOpacity,StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function AppButton({title, color='primary', onPress}) {
    return (
        <TouchableOpacity  onPress={onPress} style={[styles.button,{backgroundColor:colors[color]}]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        borderRadius:25,
        padding:15,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    },
    title:{
        color:colors.white,
        fontSize:18,
        fontWeight:'bold'
    }
})

export default AppButton;