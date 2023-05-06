import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { Text, View } from "react-native";
import AppContext from "../contextApi/AppContext";
import { removeAccessToken } from "../utils/AsyncStorage";

function ProfileScreen({ navigation }) {
  const { buttonComponentState, modalState, cartState, userState } =
    useContext(AppContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={async () => {
          userState.setUserData(null);
          await removeAccessToken();
          navigation.navigate("Cart");
          console.log("logout");

          Alert.alert("MyShop", "LoggedOut Successfully", [{ text: "OK" }]);
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;
