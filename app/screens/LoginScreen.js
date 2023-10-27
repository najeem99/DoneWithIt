import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/brain.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors ,setFieldTouched,touched}) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              KeyboardType="email-address"
              textContentType="emailAddress"
            ></AppTextInput>
            <ErrorMessage visible={touched.email} error={errors.email}></ErrorMessage>
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              textContentType="password"
              secureTextEntry
            ></AppTextInput>
            <ErrorMessage visible={touched.password} error={errors.password}></ErrorMessage>

            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
