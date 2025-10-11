import {useFonts} from "expo-font";

export function useCustomFonts() {
    const [fonts] = useFonts({
        "black": require('@/assets/fonts/SF-Pro-Rounded-Black.otf'),
        "bold": require('@/assets/fonts/SF-Pro-Rounded-Bold.otf'),
        "heavy": require('@/assets/fonts/SF-Pro-Rounded-Heavy.otf'),
        "light": require('@/assets/fonts/SF-Pro-Rounded-Light.otf'),
        "medium": require('@/assets/fonts/SF-Pro-Rounded-Medium.otf'),
        "regular": require('@/assets/fonts/SF-Pro-Rounded-Regular.otf'),
        "semibold": require('@/assets/fonts/SF-Pro-Rounded-Semibold.otf'),
        "thin": require('@/assets/fonts/SF-Pro-Rounded-Thin.otf'),
        "ultralight": require('@/assets/fonts/SF-Pro-Rounded-Ultralight.otf'),
    });

    return fonts;
}