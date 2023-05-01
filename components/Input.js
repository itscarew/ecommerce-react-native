import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { StyleSheet, View } from "react-native";

export const MyShopInput = ({ children }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Search" />
      <MaterialIcons name="search" size={24} style={{ marginLeft: -30 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#E8EEF2",
    paddingLeft: 15,
    height: 35,
    borderRadius: 30,
    width: "100%",
  },
});

export const BasicTextInput = ({
  placeholder,
  name,
  value,
  onChangeText,
  placeholderTextColor,
  style,
  ...props
}) => {
  return (
    <TextInput
      style={[stylesBasic.input, style]}
      placeholder={placeholder}
      name={name}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor || "#8d99ae"}
      {...props}
    />
  );
};

const stylesBasic = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    marginVertical: 5,
    borderColor: "#000",
    color: "#000",
    borderBottomWidth: 0.6,
    width: "100%",
  },
});
