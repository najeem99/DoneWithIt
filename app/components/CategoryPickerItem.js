import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native'; 
import AppText from './AppText';
import Icon from './Icon';


//dynamic component
function CategoryPickerItem({item,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon  backgroundColor={item.backgroundColor}/>
             <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text:{
        padding:20
    }
})
export default CategoryPickerItem;