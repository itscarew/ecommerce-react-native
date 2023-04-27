import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Button } from "react-native";
import { Layout } from "../components/Layout";
import { MainModal } from "../components/Modal";
import SignInComponent from "../components/SignIn";
import SignUpComponent from "../components/SignUp,";
import AppContext from "../contextApi/AppContext";

function CartScreen({ navigation }) {
  const { buttonComponentState, modalState } = useContext(AppContext);
  return (
    <>
      <MainModal>
        {buttonComponentState.buttonComponent === "SignIn" ? (
          <SignInComponent />
        ) : (
          <SignUpComponent />
        )}
      </MainModal>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.text1}>Your bag is empty </Text>
        <Text style={styles.text2}>Add products and they will appear here</Text>
        <View style={{ width: "65%", marginVertical: 20 }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              buttonComponentState.setButtonComponent("SignIn");
              modalState.openModal();
            }}
          >
            <Text style={styles.buttonText1}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              buttonComponentState.setButtonComponent("SignUp");
              modalState.openModal();
            }}
          >
            <Text style={styles.buttonText2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text1: {
    textTransform: "uppercase",
    fontWeight: "600",
  },
  text2: {
    textTransform: "uppercase",
    color: "gray",
    fontSize: 10,
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
  button2: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderWidth: 0.1,
    borderColor: "gray",
  },
  buttonText2: {
    color: "#000",
  },
});

export default CartScreen;
