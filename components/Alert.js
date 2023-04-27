import { StyleSheet, Text } from "react-native";

export const AlertMessage = ({ message, type }) => {
  if (message) {
    return (
      <Text
        style={type === "error" ? styles.errorMessage : styles.warningMessage}
      >
        {message}
      </Text>
    );
  } else return null;
};

const styles = StyleSheet.create({
  errorMessage: {
    marginVertical: 2,
    color: "#ef233c",
    textTransform: "lowercase",
  },

  warningMessage: {
    marginVertical: 2,
    textTransform: "lowercase",
  },
});
