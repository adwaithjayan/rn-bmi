import { ReuseCard } from "@/components/ReuseCard";
import React, { useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Switch } from "@/components/switch";
import { Slider } from "@miblanchard/react-native-slider";
import { useRouter } from "expo-router";

export default function Calculator() {
  const [age, setAge] = useState(20);
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(50);
  const [gender, setGender] = useState(false);

  const router = useRouter();

  const calculateBmi = () => {
    const heightInMeters = height / 100; // convert cm to meters
    const mbivalue = weight / (heightInMeters * heightInMeters);
    const bmi = parseFloat(mbivalue.toFixed(2));
    let message;

    if (gender === true) {
      // female
      if (bmi < 18.5) {
        message = "Underweight";
      } else if (bmi < 24) {
        message = "Normal";
      } else if (bmi < 30) {
        message = "Overweight";
      } else {
        message = "Obesity";
      }
    } else {
      // male
      if (bmi < 18.5) {
        message = "Underweight";
      } else if (bmi < 25) {
        message = "Normal";
      } else if (bmi < 30) {
        message = "Overweight";
      } else {
        message = "Obesity";
      }
    }

    router.push({ pathname: "/result", params: { bmi, message } });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F4F3FF] p-8">
      <StatusBar barStyle="dark-content" />
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
          <View className="flex-col items-center px-7 pt-7 gap-4">
            <Text
              style={{ fontFamily: "Inter_400Regular", color: "#081854" }}
              className="font-normal text-lg text-center"
            >
              Gender
            </Text>
            <View className="flex-row items-center justify-center gap-3 pb-8">
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setGender(false)}
              >
                <Text
                  style={{ fontFamily: "Inter_400Regular", color: "#081854" }}
                  className="font-normal text-lg text-center"
                >
                  Male
                </Text>
              </TouchableOpacity>
              <View className="w-[135px]">
                <Switch
                  checked={gender}
                  onCheckedChange={setGender}
                  nativeID="airplane-mode"
                />
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setGender(true)}
              >
                <Text
                  style={{ fontFamily: "Inter_400Regular", color: "#081854" }}
                  className="font-normal text-lg text-center"
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={calculateBmi}
          className="bg-[#6C63FF] w-full h-[75] items-center justify-center rounded-full"
        >
          <Text
            className="text-center text-white font-medium text-lg"
            style={{ fontFamily: "Inter_500Medium" }}
          >
            Calculate BMI
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
