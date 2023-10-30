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
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
const categories = [
  {    label:"Furniture",value:1  },
  {    label:"Couch",value:2  },
  {    label:"Tiles",value:3  },
];

export default function App() {
  const [category,setCategory] = useState(categories[0])
  console.log("dsas");

  const pressed = () => {
    console.log("Button is pressed");
  };
  const longpressed = () => {
    console.log("longpressed");
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
 <ListingEditScreen/>
    </Screen>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // justifyContent:'center',
    // alignItems:'center',
    // display:'flex',
    // flexDirection:'column',
    backgroundColor: "red",
  },
});
