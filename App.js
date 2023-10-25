import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
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
    <MessagesScreen />
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
