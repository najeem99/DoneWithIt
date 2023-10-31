import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native'; 
import AppText from './AppText';
import Icon from './Icon';


//dynamic component
function CategoryPickerItem({item,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
            <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80}/>
             <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text:{
        padding:20
    },
    iconContainer:{
        display:'flex',
        alignItems:'center',
        width:'33%',
        flex:1,
        padding:10
     }
})
export default CategoryPickerItem;