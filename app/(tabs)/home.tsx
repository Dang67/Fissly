import {ScrollView, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {isIOS, padding} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import SpaceVertical from "@/components/SpaceVertical";
import Overview from "@/app/(tabs)/home/components/Overview";
import Header from "@/app/(tabs)/home/components/Header";
import DailyMenu from "@/app/(tabs)/home/components/DailyMenu";
import HomeScreen from "@/app/(tabs)/home/HomeScreen";

export default function Home() {
    const colors = useCustomColors();

    return (
        <ScrollView style={{...styles.scroll, backgroundColor: colors.background}}>
            {
                isIOS ?
                    <HomeScreen/>
                    :
                    <SafeAreaView>
                        <HomeScreen/>
                        <SpaceVertical/>
                        <SpaceVertical/>
                        <SpaceVertical/>
                        <SpaceVertical/>
                        <SpaceVertical/>
                        <SpaceVertical/>
                    </SafeAreaView>
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        paddingHorizontal: padding,
    },
});