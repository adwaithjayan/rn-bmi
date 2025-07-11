import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-[#6C63FF] flex-1">
      <View className="flex-col items-center  flex-1 justify-evenly px-8 py-5">
        <Text
          className="text-white font-extrabold text-4xl italic "
          style={{ fontFamily: "Inter_800ExtraBold_Italic" }}
        >
          BMiDO
        </Text>
        <View>
          <LottieView
            source={require("@/assets/animations/new.json")}
            autoPlay
            loop
            style={{ width: 300, height: 300 }}
          />
        </View>
        <View className="max-w-72 mx-auto">
          <Text
            className="font-bold text-2xl leading-8 tracking-normal text-white text-left mr-5"
            style={{ fontFamily: "Inter_700Bold" }}
          >
            Get Started with Tracking Your Health!
          </Text>
          <Text
            className="text-base text-[#C6C3F9] text-left font-normal "
            style={{ fontFamily: "Inter_400Regular" }}
          >
            Calculate your BMI and stay on top of your wellness journey,
            effortlessly.
          </Text>
        </View>
        <TouchableOpacity
          className="bg-[#F4F3FF] text-[#081854]  w-full py-7 rounded-full "
          onPress={() => router.push("/calculator")}
        >
          <Text
            className="font-medium text-lg text-center text-[#081854]"
            style={{ fontFamily: "Inter_500Medium" }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
