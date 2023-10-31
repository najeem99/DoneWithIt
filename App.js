import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  TextInput,
  Switch,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import { useEffect, useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  requestPermissionsAsync = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    // const {granted} =await Permissions.askAsync(Permissions.CAMERA,Permissions.LOCATION_FOREGROUND);

    if (!granted) {
      alert("You need to enable permission to access library");
    }
  };
  useEffect(() => {
    requestPermissionsAsync();
  }, []);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    console.log(uri)
     setImageUris(imageUris.filter(imageuri => imageuri != uri));
  };
  return (
    // <SafeAreaView style={styles.container}>
    //   <Button title='hello'></Button>
    //  <WelcomeScreen/>
    // <ListingDetailsScreen/>
    //  <ViewImageScreen/>
    // <MessagesScreen />
    <Screen>
      {/* <ListItem title="My title" subTitle="hello" ImageComponent={<Icon name={'email'} size={70} backgroundColor={colors.primary}></Icon>} /> */}
      {/* <Icon name={'email'} size={100} backgroundColor={colors.primary}> */}

      {/* </Icon> */}
      {/* <MessagesScreen /> */}
      {/* <AccountScreen/> */}
      {/* <ListingScreen/> */}
      {/* 
<AppTextInput placeholder="enter Email" icon={'email'}></AppTextInput>
 <AppPicker icon='apps' placeholder="Category" items={categories} onSelectItem={setCategory} selectedItem={category}></AppPicker> */}
      {/* <LoginScreen/> */}
      {/* <ListingEditScreen/> */}
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
