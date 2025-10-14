import {StyleSheet, View} from "react-native";
import CustomText from "@/components/CustomText";
import {AnimatedScrollView} from "react-native-reanimated/src/component/ScrollView";
import {SafeAreaView} from "react-native-safe-area-context";
import {borderRadius, imagesOnl, padding, size} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import {Image} from "expo-image";
import SpaceHorizontal from "@/components/SpaceHorizontal";

export default function Home() {
    const colors = useCustomColors();

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
            <AnimatedScrollView style={styles.scroll}>
                <View style={styles.row}>
                    <Image
                        style={{...styles.avt, backgroundColor: colors.accent}}
                        source={imagesOnl.defaultAvatar}
                    />
                    <SpaceHorizontal/>
                    <View>
                        <CustomText style={'button'} text={'Xin chào, Đăng'}/>
                        <CustomText style={'description'} text={'Thứ hai, ngày 1, tháng 1, năm 2001'}/>
                    </View>
                </View>
            </AnimatedScrollView>
        </SafeAreaView>
    );
}

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
    col: {

    },
    avt: {
        width: size.avatar,
        height: size.avatar,
        borderRadius: borderRadius,
    },
});