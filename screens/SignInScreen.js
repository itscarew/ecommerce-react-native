import React from "react";
import { View, Text, Button } from "react-native";

function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SignIn Screen</Text>
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}

export default SignInScreen;
