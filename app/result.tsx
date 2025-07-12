import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Result() {
  const router = useRouter();

  const { bmi, message } = useLocalSearchParams();
  const [intPart, decimalPart] = bmi.toString().split(".");
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
        <Text
          style={{ fontFamily: "Inter_400Regular", color: "#081854" }}
          className="text-3xl tracking-normal text-center"
        >
          Body Mass Index
        </Text>
        <View className="bg-white rounded-xl ">
          <View className="flex-col items-center gap-1 pt-14 pb-7  px-16">
            <Text
              style={{ fontFamily: "Inter_400Regular", color: "#081854" }}
              className="text-2xl tracking-normal text-center pb-5"
            >
              BMI Results
            </Text>
            <View className="flex-row items-baseline  mb-2">
              <Text
                style={{ fontFamily: " Inter_700Bold", color: "#6C63FF" }}
                className="text-9xl font-bold tracking-normal"
              >
                {intPart}
              </Text>
              <Text
                style={{ fontFamily: " Inter_500Medium", color: "#6C63FF" }}
                className="text-4xl text-center  font-medium tracking-normal "
              >
                .{decimalPart}
              </Text>
            </View>
            <Text
              style={{ fontFamily: "Inter_500Medium", color: "#081854" }}
              className="text-2xl mb-2 text-center "
            >
              {message} BMI
            </Text>
            <View className="flex-col mt-1">
              <Text
                style={{ fontFamily: "Inter_500Medium", color: "#081854" }}
                className="font-medium text-sm  text-center tracking-normal leading-5"
              >
                Underweight: BMI less than 18.5
              </Text>
              <Text
                style={{ fontFamily: "Inter_500Medium", color: "#081854" }}
                className="font-medium text-sm  text-center tracking-normal leading-5"
              >
                Normal weight: BMI 18.5 to 24.9
              </Text>
              <Text
                style={{ fontFamily: "Inter_500Medium", color: "#081854" }}
                className="font-medium text-sm  text-center tracking-normal leading-5"
              >
                Overweight: BMI 25 to 29.9
              </Text>
              <Text
                style={{ fontFamily: "Inter_500Medium", color: "#081854" }}
                className="font-medium text-sm  text-center tracking-normal leading-5 "
              >
                Obesity: 30 to 40
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/calculator")}
          className="bg-[#6C63FF] w-full h-[75] items-center justify-center rounded-full"
        >
          <Text
            className="text-center text-white font-medium text-lg"
            style={{ fontFamily: "Inter_500Medium" }}
          >
            Calculate Again
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
