import {StyleSheet, useColorScheme} from "react-native";
import {AnimatedScrollView} from "react-native-reanimated/src/component/ScrollView";
import {colors, padding} from "@/constants/theme";
import CustomText from "@/components/CustomText";

export default function Home() {
    const colorScheme = useColorScheme() ?? 'light';

    return (
        <AnimatedScrollView style={[
            styles.container,
            {backgroundColor: colors[colorScheme].background},
        ]}>
            <CustomText text='Đây là màn hình Trang chủ'/>
        </AnimatedScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: padding,
    },
});