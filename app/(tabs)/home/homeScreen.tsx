import Header from "@/app/(tabs)/home/components/Header";
import SpaceVertical from "@/components/SpaceVertical";
import Overview from "@/app/(tabs)/home/components/Overview";
import DailyMenu from "@/app/(tabs)/home/components/DailyMenu";
import {View} from "react-native";
import Activity from "@/app/(tabs)/home/components/Activity";
import Weight from "@/app/(tabs)/home/components/Weight";
import BMI from "@/app/(tabs)/home/components/BMI";
import {screenHeight} from "@/constants/theme";

export default function HomeScreen() {
    return (
        <View>
            <Header/>
            <SpaceVertical/>
            <SpaceVertical/>
            <Overview/>
            <SpaceVertical/>
            <SpaceVertical/>
            <DailyMenu/>
            <SpaceVertical/>
            <SpaceVertical/>
            <Activity/>
            <SpaceVertical/>
            <SpaceVertical/>
            <Weight/>
            <SpaceVertical/>
            <BMI/>
            <View style={{height: screenHeight * 0.1}}/>
        </View>
    );
};