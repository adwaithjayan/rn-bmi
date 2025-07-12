import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";

export default function Loader() {
  return (
    <View className="bg-[#6C63FF] flex-1">
      <View className="flex items-center  flex-1 justify-center px-8 py-5">
        <LottieView
          source={require("@/assets/animations/new.json")}
          autoPlay
          loop
          style={{ width: 350, height: 350 }}
        />
      </View>
    </View>
  );
}
