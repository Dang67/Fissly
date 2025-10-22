import {
    Keyboard, Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    useColorScheme,
    View
} from "react-native";
import {Colors, textOnTintColor, TextStyles, tintColor} from "@/constants/theme";
import {borderRadius, borderRadiusChild, padding, size, smallPadding} from "@/constants/specifications";
import {GlassView} from "expo-glass-effect";
import {Image} from "expo-image";
import {useState} from "react";
import {router} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function SignIn() {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];

    const [email, onChangeEmail] = useState<string>("");
    const [password, onChangePassword] = useState<string>("");

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <GlassView style={styles.card}
                           glassEffectStyle={"clear"}
                           isInteractive>
                    <Image style={styles.logo} source={require("@/assets/images/icon.png")}/>
                    <View style={styles.space}>
                        <TextInput
                            value={email}
                            onChangeText={onChangeEmail}
                            style={{
                                ...styles.input,
                                color: colors.text,
                                backgroundColor: colors.background,
                            }}
                            placeholder={'Nhập email hoặc số điện thoai'}
                            keyboardType={'email-address'}
                            autoComplete={'email'}
                            clearButtonMode={'while-editing'}/>
                        <TextInput
                            value={password}
                            onChangeText={onChangePassword}
                            style={{
                                ...styles.input,
                                color: colors.text,
                                backgroundColor: colors.background,
                            }}
                            placeholder={'Nhập mật khẩu'}
                            autoComplete='new-password'
                            clearButtonMode='while-editing'
                            clearTextOnFocus={true}
                            disableKeyboardShortcuts={true}
                            secureTextEntry={true}/>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity onPress={() => router}>
                                <Text style={{...TextStyles.button, color: tintColor}}>
                                    {'Quên mật khẩu?'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </GlassView>
                <View style={styles.space}>
                    <GlassView style={styles.glassButton}
                               glassEffectStyle={"clear"}
                               tintColor={tintColor}
                               isInteractive>
                        <Pressable style={styles.press}
                                   onPress={() => router.push("/signIn")}>
                            <Text style={[TextStyles.button, {color: textOnTintColor}]}>
                                {`Đăng nhập`}
                            </Text>
                        </Pressable>
                    </GlassView>
                    <SocialSignIn/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

function SocialSignIn() {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? 'light'];

    return (
        <View style={styles.space}>
            <GlassView style={styles.glassButton}
                       isInteractive>
                <Pressable style={styles.press}
                           onPress={() => router.push("/signIn")}>
                    <Ionicons name="logo-google" size={size.icon} style={{color: colors.text}}/>
                    <Text style={[TextStyles.button, {color: colors.text}]}>
                        {`Đăng nhập bằng Google`}
                    </Text>
                </Pressable>
            </GlassView>
            <GlassView style={styles.glassButton}
                       isInteractive>
                <Pressable style={styles.press}
                           onPress={() => router.push("/signIn")}>
                    <Ionicons name="logo-facebook" size={size.icon} style={{color: colors.text}}/>
                    <Text style={[TextStyles.button, {color: colors.text}]}>
                        {`Đăng nhập bằng Facebook`}
                    </Text>
                </Pressable>
            </GlassView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: padding,
        paddingTop: padding * 5.5,
    },
    card: {
        borderRadius: borderRadius,
        gap: padding,
        padding: padding,
    },
    logo: {
        width: size.logo,
        height: size.logo,
        alignSelf: "center",
    },
    space: {
        gap: padding * 0.5,
    },
    input: {
        ...TextStyles.paragraph,
        textAlign: 'left',
        borderRadius: borderRadiusChild,
        paddingHorizontal: padding,
        paddingVertical: smallPadding,
    },
    glassButton: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius,
    },
    press: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius,
        paddingHorizontal: padding,
        paddingVertical: padding * 0.75,
        gap: padding,
    },
});