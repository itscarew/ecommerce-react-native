import Toast from "react-native-toast-message";

export const MainToast = ({ type, message, message2 }) => {
  return Toast.show({
    type: type,
    text1: message,
    text2: message2,
  });
};
