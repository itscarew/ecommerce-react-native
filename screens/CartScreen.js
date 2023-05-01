import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartCard } from "../components/CartCard";
import { Layout } from "../components/Layout";
import { MainModal } from "../components/Modal";
import SignInComponent from "../components/SignIn";
import SignUpComponent from "../components/SignUp,";
import AppContext from "../contextApi/AppContext";

function CartScreen({ navigation }) {
  const { buttonComponentState, modalState, cartState, userState } =
    useContext(AppContext);

  useEffect(() => {
    cartState.getUserCarts();
    const unsubscribe = navigation.addListener("focus", () => {
      cartState.getUserCarts();
    });
    return unsubscribe;
  }, []);

  // console.log(cartState.carts[0], "jgo");

  const count = cartState.carts[0]?.products?.reduce((acc, curr) => {
    acc[curr?._id] = acc[curr?._id] ? acc[curr._id] + 1 : 1;
    return acc;
  }, {});

  return (
    <>
      <MainModal>
        {buttonComponentState.buttonComponent === "SignIn" ? (
          <SignInComponent />
        ) : (
          <SignUpComponent />
        )}
      </MainModal>

      <Layout>
        {userState.token ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.text1}>Login to View your Cart </Text>
            <Text style={styles.text2}>
              Join us if you dont have an account yet
            </Text>
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
        ) : (
          <>
            {cartState.carts[0]?.products?.length > 0 ? (
              <>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                  }}
                >
                  <Text>
                    Wohoo! You are eligible for free shipping. Lets Go!
                  </Text>
                </View>
                <View>
                  {cartState.carts[0]?.products?.map((item) => {
                    return (
                      <CartCard
                        key={item._id}
                        product={item.productId}
                        screen={"DetailsStack"}
                        quantity={item.quantity}
                      />
                    );
                  })}
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginVertical: 10,
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: 700 }}>
                      Subtotal
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: 700 }}>$3000</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginVertical: 10,
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: 600 }}>
                      Shipping
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: 600 }}>Free</Text>
                  </View>
                  <TouchableOpacity
                    style={[styles.button1, { marginVertical: 10 }]}
                  >
                    <Text style={styles.buttonText1}>Proceed to Checkout</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.text1}>Your bag is empty </Text>
                <Text style={styles.text2}>
                  Add products and they will appear here
                </Text>
              </View>
            )}
          </>
        )}
      </Layout>
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
    backgroundColor: "#e9ecef",
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
