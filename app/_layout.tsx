import {Stack} from "expo-router";
import {useColorScheme} from "react-native";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false, gestureEnabled: false}}/>
                <Stack.Screen name='auth/screens/SignInScreen' options={{headerShown: false}}/>
                <Stack.Screen name='auth/screens/SignUpScreen' options={{headerShown: false}}/>
                <Stack.Screen name='information/screens/CollectUserNameScreen'
                              options={{headerShown: false, gestureEnabled: false}}/>
                <Stack.Screen name='information/screens/CollectOtherInformationScreen' options={{headerShown: false}}/>
                <Stack.Screen name='information/screens/CollectUserHealthGoalsScreen' options={{headerShown: false}}/>
                <Stack.Screen name='information/screens/CollectHealthPlanningRegularityScreen'
                              options={{headerShown: false}}/>
                <Stack.Screen name='information/screens/CollectHabitScreen' options={{headerShown: false}}/>
                <Stack.Screen name='information/screens/CollectWeightAndHeightScreen' options={{headerShown: false}}/>
                <Stack.Screen name='information/screens/CollectWeeklyGoalScreen' options={{headerShown: false}}/>
                <Stack.Screen name='information/screens/SummaryScreen' options={{headerShown: false}}/>
            </Stack>
            <StatusBar style="auto"/>
        </ThemeProvider>
    );
}
