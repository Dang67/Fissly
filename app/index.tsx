import {Animated, Dimensions, StyleSheet} from "react-native";
import {borderRadius, imagesLocal, onboardingBackground, padding, size} from "@/constants/theme";
import {router} from "expo-router";
import Button from "@/components/Button";
import {Image} from "expo-image";
import SpaceVertical from "@/components/SpaceVertical";
import CustomText from "@/components/CustomText";
import {useCustomFonts} from "@/hooks/useCustomFonts";
import Carousel from "react-native-reanimated-carousel/src/components/Carousel";
import {SafeAreaView} from "react-native-safe-area-context";
import Card from "@/components/Card";
import {useCustomColors} from "@/hooks/useCustomColors";
import View = Animated.View;

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export default function Index() {
    const colors = useCustomColors();
    const fontsLoaded = useCustomFonts();
    if (!fontsLoaded) return null;

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Carousel
                    loop={true}
                    width={screenWidth}
                    height={screenHeight}
                    autoPlay={true}
                    data={onboardingBackground}
                    scrollAnimationDuration={3000}
                    renderItem={({item}) => (
                        <Image source={item} style={styles.imageBackground}/>
                    )}
                />
            </View>
            <SafeAreaView style={styles.container}>
                <Card style={styles.card}>
                    <CustomText style='title' text='Chào mừng bạn đến với'/>
                    <Image source={imagesLocal.icon} style={styles.icon}/>
                    <CustomText style='paragraph'
                                text='Hiểu cơ thể, yêu bản thân. Nếu bạn chưa thể hãy để Fissly lo.'/>
                </Card>
                <SpaceVertical/>
                <Button
                    color={colors.tint}
                    label='Bắt đầu ngay'
                    labelColor={colors.textOnButton}
                    flex={1}
                    borderRadiusCustom={borderRadius}
                    onPress={() => router.push('/auth/screens/SignInScreen')}
                    // onPress={() => router.push('/information/screens/SummaryScreen')}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: padding,
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: '100%',
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: size.bigLogo,
        height: size.bigLogo,
    },
});