import {Keyboard, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import Card from "@/components/Card";
import {SafeAreaView} from "react-native-safe-area-context";
import {imagesLocal, isIOS, padding, size} from "@/constants/theme";
import {Image} from "expo-image";
import SpaceVertical from "@/components/SpaceVertical";
import CustomText from "@/components/CustomText";
import {router} from "expo-router";
import {useState} from "react";
import AuthFooterButtons from "@/app/auth/components/AuthFooterButtons";
import {authStr} from "@/constants/strings/authStr";
import EmailInput from "@/app/auth/components/EmailInput";
import PasswordInput from "@/app/auth/components/PasswordInput";

export default function SignInScreen() {
    const colors = useCustomColors();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{
                ...styles.container,
                backgroundColor: colors.background,
            }}>
                <SafeAreaView style={{...styles.safeAreaView}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            {isIOS ? null : <SpaceVertical/>}
                            <Card style={styles.card}>
                                <Image source={imagesLocal.icon} style={styles.icon}/>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                                        <CustomText style='title' text={authStr.signIn}/>
                                    </View>
                                </View>
                                <SpaceVertical/>
                                <SpaceVertical/>
                                <EmailInput email={email} setEmail={setEmail}/>
                                {
                                    isIOS ?
                                        <>
                                            <SpaceVertical/>
                                            <SpaceVertical/>
                                        </> :
                                        null
                                }
                                <PasswordInput
                                    title={authStr.pass}
                                    placeholder={authStr.enterPass}
                                    password={password}
                                    setPassword={setPassword}
                                />
                                <SpaceVertical/>
                                <SpaceVertical/>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                                        <TouchableOpacity onPress={
                                            () => alert('Bạn đã nhấn vào Quên mật khẩu.')
                                        }>
                                            <CustomText text={authStr.forgotPass} color={colors.tint}
                                                        style='paragraph'/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <AuthFooterButtons
                                    labelSubmitButton={authStr.signIn}
                                    onPressSubmitButton={() => router.push('/(tabs)/home')}
                                />
                            </View>
                            <SpaceVertical/>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center'
                                }}>
                                    <CustomText style={'description'} text={authStr.dontHaveAcc + ' '}/>
                                    <TouchableOpacity onPress={
                                        () => router.push('/auth/screens/SignUpScreen')
                                    }>
                                        <CustomText style={'description'} color={colors.tint} text={authStr.signUp}/>
                                    </TouchableOpacity>
                                    <CustomText style={'description'} text={'.'}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeAreaView: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: padding,
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: size.logo,
        height: size.logo,
    },
});