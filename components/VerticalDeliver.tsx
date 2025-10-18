import {View} from "react-native";
import {borderRadius, padding} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";

export default function VerticalDeliver() {
    const colors = useCustomColors();

    return (
        <View style={{
            width: '100%',
            height: padding * 0.075,
            backgroundColor: colors.accent,
            opacity: 0.25,
            borderRadius: borderRadius,
            marginVertical: padding * 0.5,
        }}/>
    );
};