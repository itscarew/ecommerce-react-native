import { Formik } from "formik";
import React, { useContext } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UserApi } from "../api/api";
import AppContext from "../contextApi/AppContext";
import { signInSchema } from "../utils/validationSchema";
import { AlertMessage } from "./Alert";
import { BasicTextInput } from "./Input";

function SignInComponent() {
  const { modalState, userState } = useContext(AppContext);

  const signIn = async (values) => {
    try {
      const res = await UserApi.post(`/signin`, values);
      userState.setUserData(res.data.data);
      userState.setToken(res.data.token);
      Alert.alert("MyShop", res.data.message, [{ text: "OK" }]);
    } catch (error) {
      throw error;
    }
  };

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
      <Text style={styles.text2}>Sign In</Text>

      <Formik
        initialValues={{ identifier: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          const newValues = {
            email: values.identifier,
            password: values.password,
          };
          signIn(newValues);
          modalState.closeModal();
        }}
      >
        {(props) => {
          console.log(props.errors);
          return (
            <View style={{ width: "80%" }}>
              <BasicTextInput
                placeholder="email"
                value={props.values.identifier}
                name="identifier"
                onChangeText={props.handleChange("identifier")}
                style={{ marginVertical: 5 }}
              />
              <AlertMessage
                message={props.touched.identifier && props.errors["identifier"]}
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
                <Pressable>
                  <Text style={[{ textAlign: "right", marginBottom: 10 }]}>
                    Forgotten password ?
                  </Text>
                </Pressable>

                <TouchableOpacity
                  style={styles.button1}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.buttonText1}>Sign In</Text>
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

export default SignInComponent;
