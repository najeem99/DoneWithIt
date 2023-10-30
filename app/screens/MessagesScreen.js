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
        uri: "https://media.licdn.com/dms/image/C5103AQE__5syArMn4Q/profile-displayphoto-shrink_200_200/0/1584126342694?e=1702512000&v=beta&t=pCSykU-8ipTcsP5wyjd4r8_hJP8irntV649NzIfy8WI",
      },
    },
    {
        id: 3,
        title: "T3",
        description: "This plugin obtains information and performs operations specific to the user’s locale, language, and timezone. Note the difference between locale and language: locale controls how numbers, dates, and times are displayed for a region, while language determines what language text appears as, independently of locale settings. Often developers use locale to set both settings, but there is no reason a user couldn’t set her language to “English” but locale to “French”, so that text is displayed in English but dates, times, etc., are displayed as they are in France. Unfortunately, most mobile platforms currently do not make a distinction between these settings.",
        image: {
          uri: "https://media.licdn.com/dms/image/D4D03AQGvp96M6KXBWw/profile-displayphoto-shrink_200_200/0/1679594596510?e=1704326400&v=beta&t=olmU1A6f-whvS9pSsCbCwpmPGeskCZyxiwtrULJZMW4",
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
          setMessages([...messages,{
            id: (messages.length+1),
            title: "T"+messages.length,
            description: "D2",
            image: {
              uri: "https://source.unsplash.com/random/200x200?sig="+messages.length,
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
