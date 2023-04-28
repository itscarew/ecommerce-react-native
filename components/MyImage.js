import React from "react";
import { Image } from "react-native";

export const MyImage = ({ imageData, style }) => {
  return (
    <Image
      style={style}
      source={{
        uri: "https://images.pexels.com/photos/9489161/pexels-photo-9489161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
    />
  );
};
