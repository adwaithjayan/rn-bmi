import * as SwitchPrimitives from "@rn-primitives/switch";
import * as React from "react";
import { Platform, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

function SwitchNative({
  className,
  ...props
}: SwitchPrimitives.RootProps & {
  ref?: React.RefObject<SwitchPrimitives.RootRef>;
}) {
  const THUMB_SIZE = 35;
  const VERTICAL_PADDING = 6;
  const HORIZONTAL_PADDING = 6;

  const TRACK_HEIGHT = THUMB_SIZE + VERTICAL_PADDING * 2;

  const trackRef = React.useRef<View>(null);
  const trackWidth = useSharedValue(0);

  const onLayoutTrack = (event: any) => {
    trackWidth.value = event.nativeEvent.layout.width;
  };

  const translateX = useDerivedValue(() => {
    const maxTranslate = trackWidth.value - THUMB_SIZE - HORIZONTAL_PADDING * 2;
    return withTiming(props.checked ? maxTranslate : 0, { duration: 200 });
  });

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      ref={trackRef}
      onLayout={onLayoutTrack}
      style={{
        width: "100%",
        height: TRACK_HEIGHT,
        borderRadius: TRACK_HEIGHT / 2,
        backgroundColor: "#F4F3FF",
        paddingHorizontal: HORIZONTAL_PADDING,
        paddingVertical: VERTICAL_PADDING,
        justifyContent: "center",
      }}
    >
      <SwitchPrimitives.Root
        {...props}
        className="absolute inset-0"
        style={{
          width: "100%",
          height: TRACK_HEIGHT,
          borderRadius: TRACK_HEIGHT / 2,
        }}
      >
        <Animated.View
          style={[
            {
              width: THUMB_SIZE,
              height: THUMB_SIZE,
              borderRadius: THUMB_SIZE / 2,
              backgroundColor: "#6C63FF",
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              position: "absolute",
              top: VERTICAL_PADDING,
              left: HORIZONTAL_PADDING,
              zIndex: 10,
            },
            animatedThumbStyle,
          ]}
        />
      </SwitchPrimitives.Root>
    </View>
  );
}

const Switch = Platform.select({
  default: SwitchNative,
});

export { Switch };
