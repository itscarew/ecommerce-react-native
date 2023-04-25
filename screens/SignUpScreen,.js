import React from "react";
import { View, Text, Button } from "react-native";

function SignUpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SignUp Screen</Text>
      <Button
        title="Go to SignIn"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
}

export default SignUpScreen;
