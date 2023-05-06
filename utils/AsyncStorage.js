import AsyncStorage from "@react-native-async-storage/async-storage";

// Save access token
export const saveAccessToken = async (token) => {
  try {
    await AsyncStorage.setItem("access_token", token);
  } catch (error) {
    console.log("Error saving access token:", error);
  }
};

// Get access token
export const getAccessToken = async () => {
  try {
    const token = await AsyncStorage.getItem("access_token");
    return token;
  } catch (error) {
    console.log("Error getting access token:", error);
  }
};

// Remove access token
export const removeAccessToken = async () => {
  try {
    await AsyncStorage.removeItem("access_token");
  } catch (error) {
    console.log("Error removing access token:", error);
  }
};
