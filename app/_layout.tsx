import {Stack} from "expo-router";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useColorScheme} from "react-native";
import {Colors} from "@/constants/theme";
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="index"
                              options={{
                                  title: 'Bắt đầu',
                                  headerShown: false
                              }}/>
                <Stack.Screen name="signIn"
                              options={{
                                  title: 'Đăng nhập',
                                  headerTitle: "",
                                  headerTitleStyle: {fontFamily: "bold", color: colors.text},
                                  headerTitleAlign: "center",

                                  headerTransparent: true,

                                  headerBackButtonDisplayMode: "minimal",
                              }}/>
            </Stack>
            <StatusBar style={'auto'}/>
        </ThemeProvider>
    );
}
