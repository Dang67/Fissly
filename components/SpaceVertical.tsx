import {Animated} from "react-native";
import {space} from "@/constants/theme";
import View = Animated.View;

export default function SpaceVertical() {
    return (
        <View style={{height: space}}/>
    );
}