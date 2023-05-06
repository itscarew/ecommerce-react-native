import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Text, View } from "react-native";
import AppContext from "../contextApi/AppContext";

export const CartIcon = ({ color }) => {
  const { cartState, userState } = useContext(AppContext);

  const total = cartState.carts[0]?.products?.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue?.quantity;
  },
  0);

  return (
    <>
      {!userState.userData ? (
        <MaterialIcons name="shopping-cart" size={24} color={color} />
      ) : (
        <View style={{ position: "relative" }}>
          {total > 0 && (
            <View
              style={{
                position: "absolute",
                backgroundColor: "#22333b",
                width: 18,
                height: 18,
                top: -5,
                right: -5,
                zIndex: 5,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 12 }}>{total}</Text>
            </View>
          )}

          <MaterialIcons name="shopping-cart" size={24} color={color} />
        </View>
      )}
    </>
  );
};
