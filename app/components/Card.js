import React from 'react';
import { StyleSheet,Image ,View} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
function Card({title,subTitle,image,onPress}) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
        <Image style={styles.imageView} source={image}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>
            {title}
          </AppText>
          <AppText style={styles.price}>{subTitle}</AppText>
        </View>  
      </View>
      </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
      borderRadius: 25,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "flex-start",
      marginVertical:10
    },
    detailsContainer: {
        width:'100%',
      backgroundColor:'white',
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: "600",

    },
    price: {
      fontSize: 20,
      color: colors.secondary,
      marginVertical: 10,
    },
    imageView: {
      width: "100%",
      height: 200, 
      objectFit: "cover",
    }
  });
  
export default Card;