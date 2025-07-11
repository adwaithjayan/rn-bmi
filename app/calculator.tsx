import { ReuseCard } from "@/components/ReuseCard";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Slider } from "@miblanchard/react-native-slider";
import Toggle from "react-native-toggle-element";

export default function Calculator() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(50);
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#F4F3FF] p-8">
      <View className="flex-1 flex-col w-full items-center justify-between gap-6">
        <Text
          style={{ fontFamily: "Inter_400Regular", color: "#081854" }}
          className="text-lg text-center"
        >
          BMI CALCULATOR
        </Text>
        <View className="flex flex-row items-center gap-5">
          <ReuseCard
            value={age}
            title="Age"
            onIncrement={() => setAge((pre) => pre + 1)}
            onDecrement={() => setAge(age > 0 ? age - 1 : 0)}
          />
          <ReuseCard
            value={weight}
            title="Weight (KG)"
            onIncrement={() => setWeight((pre) => pre + 1)}
            onDecrement={() => setWeight(weight > 0 ? weight - 1 : 0)}
          />
        </View>
        <View className="bg-white rounded-xl w-full">
          <View className="flex-col items-center pt-5 ">
            <Text
              style={{ fontFamily: "Inter_400Regular", color: "#081854" }}
              className="font-normal text-lg text-center tracking-normal mb-2"
            >
              Height (CM)
            </Text>
            <Text
              style={{ fontFamily: "Inter_700Bold", color: "#6C63FF" }}
              className="font-bold text-6xl tracking-normal text-center"
            >
              {height}
            </Text>
            <View className="flex-col items-center gap-0.5 w-full px-8 pb-8">
              <Slider
                value={height}
                onValueChange={(value) => setHeight(value[0])}
                maximumValue={300}
                minimumValue={50}
                step={1}
                thumbTintColor="#6C63FF"
                minimumTrackTintColor="#CCCCCC"
                maximumTrackTintColor="#CCCCCC"
                trackStyle={{
                  // width: 200,
                  height: 4,
                }}
                containerStyle={{ width: "100%" }}
                thumbStyle={{
                  width: 27,
                  height: 27,
                  borderRadius: 99999,
                  borderCurve: "continuous",
                }}
              />
              <View className="flex-row items-center justify-between w-full">
                <Text
                  style={{ fontFamily: "Inter_400Regular", color: "#060918" }}
                  className="font-normal text-xs text-left tracking-normal"
                >
                  50 cm
                </Text>
                <Text
                  style={{ fontFamily: "Inter_400Regular", color: "#060918" }}
                  className="font-normal text-xs text-left tracking-normal"
                >
                  300 cm
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="bg-white rounded-xl w-full">
          <View>
            <Text
              style={{ fontFamily: "Inter_400Regular", color: "#081854" }}
              className="font-normal text-lg text-center"
            >
              Gender
            </Text>
            <View className="w-full">
              <Toggle
                value={toggleValue}
                onPress={(newState) => setToggleValue(newState)}
                trackBar={{
                  inActiveBackgroundColor: "#F4F3FF",
                  activeBackgroundColor: "#F4F3FF",
                }}
                thumbButton={{
                  width: 50,
                  height: 50,
                  radius: 25,
                  activeBackgroundColor: "#6C63FF",
                  inActiveBackgroundColor: "#6C63FF",
                }}
                rightComponent={<FontAwesome name="plus" size={25} />}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Text>Calculate BMI</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
