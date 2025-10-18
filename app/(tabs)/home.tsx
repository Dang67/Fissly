import {ScrollView, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {isIOS, padding} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import SpaceVertical from "@/components/SpaceVertical";
import HomeScreen from "@/app/(tabs)/home/homeScreen";

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