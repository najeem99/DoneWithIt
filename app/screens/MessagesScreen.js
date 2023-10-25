import React,{useState} from "react";
import {
  FlatList, StyleSheet, View,} from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
    {
      id: 1,
      title: "T1",
      description: "D4",
      image: {
        uri: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      },
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: {
        uri: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
      },
    },
    {
        id: 3,
        title: "T3",
        description: "D3",
        image: {
          uri: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
        },
      },
      {
        id: 4,
        title: "T4",
        description: "D4",
        image: {
          uri: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
        },
      },
  ];
function MessagesScreen(props) {
 const [messages,setMessages] = useState(initialMessages)
 const [refreshing,setRefreshing] = useState(false)

  
  const handleDelete = message => {
    //delete message

    setMessages(messages.filter(m => m.id != message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => { console.log(item.title)}}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          ></ListItem>
        )}
        ItemSeparatorComponent={() => <Separator/>}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([{
            id: 2,
            title: "T2",
            description: "D2",
            image: {
              uri: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
            },
          }])
        }}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
});
export default MessagesScreen;
