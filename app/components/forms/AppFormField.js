import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name,width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        width = {width}
        onChangeText={handleChange(name)}
        {...otherProps}
      ></AppTextInput>
      <ErrorMessage visible={touched[name]} error={errors[name]}></ErrorMessage>
    </>
  );
}

export default AppFormField;
