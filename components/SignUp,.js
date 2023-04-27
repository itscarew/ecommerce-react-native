import { Formik } from "formik";
import React, { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, Button } from "react-native";
import AppContext from "../contextApi/AppContext";
import { AlertMessage } from "./Alert";
import { BasicTextInput } from "./Input";
import { Layout } from "./Layout";
import { signInSchema, signUpSchema } from "./utils/validationSchema";

function SignUpComponent({ navigation }) {
  const { buttonComponentState, modalState } = useContext(AppContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Text style={styles.text1}>MyShop</Text>
      <Text style={styles.text2}>Join Us</Text>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          console.log(values);
          modalState.closeModal();
          buttonComponentState.setButtonComponent("SignIn");
          modalState.openModal();
        }}
      >
        {(props) => {
          console.log(props.errors);
          return (
            <View style={{ width: "80%" }}>
              <BasicTextInput
                placeholder="first name"
                value={props.values.firstName}
                name="firstName"
                onChangeText={props.handleChange("firstName")}
                style={{ marginVertical: 5 }}
              />
              <AlertMessage
                message={props.touched.firstName && props.errors["firstName"]}
                type="error"
              />
              <BasicTextInput
                placeholder="last name"
                secureTextEntry={true}
                value={props.values.lastName}
                name="lastName"
                onChangeText={props.handleChange("lastName")}
                style={{ marginVertical: 5 }}
              />
              <AlertMessage
                message={props.touched.lastName && props.errors["lastName"]}
                type="error"
              />
              <BasicTextInput
                placeholder="email address"
                value={props.values.email}
                name="email"
                onChangeText={props.handleChange("email")}
                style={{ marginVertical: 5 }}
              />
              <AlertMessage
                message={props.touched.email && props.errors["email"]}
                type="error"
              />
              <BasicTextInput
                placeholder="password"
                secureTextEntry={true}
                value={props.values.password}
                name="password"
                onChangeText={props.handleChange("password")}
                style={{ marginVertical: 5 }}
              />
              <AlertMessage
                message={props.touched.password && props.errors["password"]}
                type="error"
              />
              <View style={{ marginVertical: 10 }}>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.buttonText1}>Join</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "600",
  },
  text2: {
    textTransform: "uppercase",
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
  button1: {
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginBottom: 18,
  },
  buttonText1: {
    color: "#fff",
  },
});

export default SignUpComponent;
