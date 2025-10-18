import {AnimatedScrollView} from "react-native-reanimated/src/component/ScrollView";
import {StyleSheet} from "react-native";
import {borderRadius, padding, size} from "@/constants/theme";
import CustomText from "@/components/CustomText";
import {useCustomColors} from "@/hooks/useCustomColors";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Profile() {
    const colors = useCustomColors();

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
            <AnimatedScrollView style={styles.scroll}>
                <CustomText text='Đây là màn hình Hồ sơ'/>
            </AnimatedScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        paddingHorizontal: padding,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avt: {
        width: size.avatar,
        height: size.avatar,
        borderRadius: borderRadius,
    },
});