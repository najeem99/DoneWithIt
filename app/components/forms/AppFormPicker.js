import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

function AppFormPicker({items,name,width,numColumns,placeholder,PickerItemComponent}) {
  const { setFieldValue, handleChange, values, touched,errors } = useFormikContext();
  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        width={width}
        numColumns = {numColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name,item) }
        selectedItem={values[name]}
       ></AppPicker>
      <ErrorMessage visible={touched[name]} error={errors[name]}></ErrorMessage>
    </>
  );
}

export default AppFormPicker;
