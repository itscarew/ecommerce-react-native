import React from "react";
import { Image } from "react-native";

export const MyImage = ({ imageData, style }) => {
  return (
    <Image
      style={style}
      source={{
        uri: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
    />
  );
};
