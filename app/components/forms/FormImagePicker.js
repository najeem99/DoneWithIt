import React from "react";
import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { setFieldValue, handleChange, values, touched, errors } =
    useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    console.log(uri);
    setFieldValue(
      name,
      imageUris.filter((imageuri) => imageuri != uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]}></ErrorMessage>
    </>
  );
}

export default FormImagePicker;
