import {StyleSheet, useColorScheme} from "react-native";
import {colors, padding} from "@/constants/theme";
import {AnimatedScrollView} from "react-native-reanimated/src/component/ScrollView";
import CustomText from "@/components/CustomText";

export default function Daily() {
    const colorScheme = useColorScheme() ?? 'light';

    return (
        <AnimatedScrollView style={[
            styles.container,
            {backgroundColor: colors[colorScheme].background},
        ]}>
            <CustomText text='Đây là màn hình Hàng ngày'/>
        </AnimatedScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: padding,
    },
});