import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import * as Location from "expo-location";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().label("Category"),
});
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Couch", value: 2 },
  { label: "Tiles", value: 3 },
];
function ListingEditScreen(props) {
  const [location,setLocation]= useState()
  const getLocation = async () => {
    const {granted} = await Location.requestPermissionsAsync();
    if(!granted) return;
    const {coords: {latitude,longitude}} = await Location.getLastKnownPositionAsync();
    setLocation({latitude,longitude})
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(value) => console.log(location)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="title"
          placeholder="title"
        ></AppFormField>
        <AppFormField
          maxLength={8}
          name="price"
          width={180}
          placeholder="Price"
          keyboardType="numeric"
        ></AppFormField>
        <AppFormPicker
          width="50%"
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          placeholder="Category"
        ></AppFormPicker>
        <AppFormField
          maxLength={255}
          name="description"
          multiline
          placeholder="Description"
          numberOfLines={3}
        ></AppFormField>
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});

export default ListingEditScreen;
