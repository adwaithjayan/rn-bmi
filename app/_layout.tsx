import Loader from "@/components/Loader";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_800ExtraBold_Italic,
  useFonts,
} from "@expo-google-fonts/inter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_800ExtraBold_Italic,
  });

  useEffect(() => {
    const prepare = async () => {
      if (!loaded && !error) return <Loader />;

      const hasLaunched = await AsyncStorage.getItem("hasLaunched");
      if (hasLaunched === null) {
        await AsyncStorage.setItem("hasLaunched", "true");
        setInitialRoute("index");
      } else {
        setInitialRoute("calculator");
      }

      SplashScreen.hideAsync();
    };

    prepare();
  }, [loaded, error]);

  if (!loaded || !initialRoute) {
    return <Loader />;
  }

  return (
    <Stack
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false, statusBarStyle: "dark" }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="calculator" />
      <Stack.Screen name="result" />
    </Stack>
  );
}
