import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";

interface iProp {
  title: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const ReuseCard = ({
  value,
  title,
  onDecrement,
  onIncrement,
}: iProp) => {
  return (
    <View className="bg-white rounded-xl ">
      <View className="flex-col items-center gap-1 py-4 px-8">
        <Text
          style={{ fontFamily: "Inter_400Regular", color: "#2F2E41" }}
          className="text-lg tracking-normal font-normal"
        >
          {title}
        </Text>
        <Text
          style={{ fontFamily: " Inter_700Bold", color: "#6C63FF" }}
          className="text-7xl font-bold tracking-normal mb-2"
        >
          {value}
        </Text>
        <View className="flex-row items-center justify-between gap-8">
          <TouchableOpacity
            disabled={value === 0}
            className="bg-[#081854] size-10 rounded-full flex items-center justify-center disabled:bg-[#081854]/70"
            onPress={onDecrement}
          >
            <FontAwesome
              name="minus"
              size={15}
              color="white"
              className="items-center text-center"
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#081854] size-10 rounded-full flex items-center justify-center"
            onPress={onIncrement}
          >
            <FontAwesome
              name="plus"
              size={15}
              color="white"
              className="text-center items-center"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
