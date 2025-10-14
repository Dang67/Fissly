import {Keyboard, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image} from "expo-image";
import {imagesLocal, isIOS, padding, size} from "@/constants/theme";
import Card from "@/components/Card";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import {useState} from "react";
import {router} from "expo-router";
import AuthFooterButtons from "@/app/auth/components/AuthFooterButtons";
import {authStr} from "@/constants/strings/authStr";
import EmailInput from "@/app/auth/components/EmailInput";
import PasswordInput from "@/app/auth/components/PasswordInput";

export default function SignUpScreen() {
    const colors = useCustomColors();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

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
                            <Card style={{...styles.card}}>
                                <Image source={imagesLocal.icon} style={styles.icon}/>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                                        <CustomText style={'title'} text={authStr.signUp}/>
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
                                {
                                    isIOS ?
                                        <>
                                            <SpaceVertical/>
                                            <SpaceVertical/>
                                        </> :
                                        null
                                }
                                <PasswordInput
                                    title={authStr.confirmPass}
                                    placeholder={authStr.reEnterPass}
                                    password={confirmPassword}
                                    setPassword={setConfirmPassword}
                                />
                            </Card>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <AuthFooterButtons
                                    labelSubmitButton={authStr.signUp}
                                    onPressSubmitButton={
                                        () => router.push('/information/screens/CollectUserNameScreen')
                                    }
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
                                    <CustomText style={'description'} text={authStr.policyAndTermOfUse + ' '}/>
                                    <TouchableOpacity>
                                        <CustomText style={'description'} color={colors.tint} text={authStr.tou}/>
                                    </TouchableOpacity>
                                    <CustomText style={'description'} text={' ' + authStr.and + ' '}/>
                                    <TouchableOpacity>
                                        <CustomText style={'description'} color={colors.tint} text={authStr.policy}/>
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
    icon: {
        width: size.logo,
        height: size.logo,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});