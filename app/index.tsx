import {Dimensions, StyleSheet, View} from "react-native";
import {borderRadius, borderRadiusChild, imagesLocal, onboardingBackground, padding, size} from "@/constants/theme";
import {router} from "expo-router";
import Button from "@/components/Button";
import {Image} from "expo-image";
import CustomText from "@/components/CustomText";
import {useCustomFonts} from "@/hooks/useCustomFonts";
import Carousel from "react-native-reanimated-carousel/src/components/Carousel";
import {useCustomColors} from "@/hooks/useCustomColors";
import SpaceVertical from "@/components/SpaceVertical";
import {BlurView} from "expo-blur";

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
            <View style={styles.container}>
                <BlurView
                    style={styles.card}
                >
                    <CustomText style='title'
                                color={colors.textOnBackground}
                                textAlign={'center'}
                                text='Chào mừng bạn đến với'/>
                    <Image source={imagesLocal.icon} style={styles.icon}/>
                    <CustomText style='button'
                                textAlign={'center'}
                                color={colors.textOnBackground}
                                text='Hiểu cơ thể, yêu bản thân. Nếu bạn chưa thể hãy để Fissly lo.'/>
                    <SpaceVertical/>
                    <Button
                        color={colors.tint}
                        label='Bắt đầu ngay'
                        labelColor={colors.textOnButton}
                        flex={1}
                        borderRadiusCustom={borderRadiusChild}
                        onPress={() => router.push('/auth/screens/SignInScreen')}
                    />
                </BlurView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: padding * 0.5,
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: '100%',
    },
    card: {
        alignItems: "center",
        overflow: 'hidden',
        borderRadius: borderRadius,
        padding: padding,
    },
    icon: {
        width: size.bigLogo,
        height: size.bigLogo,
    },
});