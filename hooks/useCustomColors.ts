import {useColorScheme} from "react-native";
import {colors, ColorTheme} from "@/constants/theme";

export function useCustomColors(): ColorTheme {
    const colorScheme = useColorScheme() ?? "light";
    return colors[colorScheme];
}