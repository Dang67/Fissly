import {AnimatedScrollView} from "react-native-reanimated/src/component/ScrollView";
import {StyleSheet, useColorScheme} from "react-native";
import {colors, padding} from "@/constants/theme";
import CustomText from "@/components/CustomText";

export default function Profile() {
    const colorScheme = useColorScheme() ?? 'light';

    return (
        <AnimatedScrollView style={[
            styles.container,
            {backgroundColor: colors[colorScheme].background},
        ]}>
            <CustomText text='Đây là màn hình Hồ sơ'/>
        </AnimatedScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: padding,
    },
});