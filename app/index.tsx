import {Pressable, StyleSheet, Text, useColorScheme, View} from "react-native";
import {Colors, textOnTintColor, TextStyles, tintColor} from "@/constants/theme";
import {Image, ImageBackground} from "expo-image";
import {borderRadius, padding, size} from "@/constants/specifications";
import {useCustomFonts} from "@/hooks/useCustomFonts";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {GlassContainer, GlassView} from "expo-glass-effect";
import {router} from "expo-router";
import startDarkBg from '@/assets/app-images/start-dark-image-background.jpg';
import startLightBg from '@/assets/app-images/start-light-image-background.jpg';

export default function Index() {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];
    const isDark = colorScheme === 'dark';
    const fontsLoaded = useCustomFonts();
    if (!fontsLoaded) return null;

    const imgBg = isDark ? startDarkBg : startLightBg;

    return (
        <ImageBackground style={styles.imgBg}
                         source={imgBg}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.safeView}
                              edges={['top']}>
                    <GlassContainer spacing={padding} style={styles.glassContainer}>
                        <View/>
                        <GlassView style={styles.glassCard}
                                   glassEffectStyle={"clear"}
                                   isInteractive>
                            <Text style={[TextStyles.title, {color: colors.text}]}>
                                {`Chào mừng bạn đến với`}
                            </Text>
                            <Image style={styles.logo}
                                   source={require('@/assets/images/icon.png')}/>
                            <Text style={[TextStyles.paragraph, {color: colors.text, textAlign: "center"}]}>
                                {`Quản lý dinh dưỡng và sức khoẻ của bạn.\n Hiểu cơ thể, yêu bản thân.\nNếu bạn chưa thể hãy để Fissly lo.`}
                            </Text>
                        </GlassView>
                        <GlassView style={styles.glassButton}
                                   glassEffectStyle={"clear"}
                                   tintColor={tintColor}
                                   isInteractive>
                            <Pressable style={styles.press}
                                       onPress={() => router.push("/signIn")}>
                                <Text style={[TextStyles.button, {color: textOnTintColor}]}>
                                    {`Bắt đầu`}
                                </Text>
                            </Pressable>
                        </GlassView>
                    </GlassContainer>
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    glassButton: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius,
    },
    press: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius,
        paddingHorizontal: padding,
        paddingVertical: padding * 0.75,
    },
    imgBg: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
        justifyContent: "center",
        padding: padding,
    },
    safeView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    glassCard: {
        width: "100%",
        alignItems: "center",
        padding: padding,
        borderRadius: borderRadius,
    },
    logo: {
        width: size.bigLogo,
        height: size.bigLogo,
    },
    glassContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
