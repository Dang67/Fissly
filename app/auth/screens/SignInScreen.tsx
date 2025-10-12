import {Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import Card from "@/components/Card";
import {SafeAreaView} from "react-native-safe-area-context";
import {imagesLocal, isIOS, padding, size, textStyles} from "@/constants/theme";
import {Image} from "expo-image";
import SpaceVertical from "@/components/SpaceVertical";
import {Ionicons} from "@expo/vector-icons";
import CustomText from "@/components/CustomText";
import Button from "@/components/Button";
import {router} from "expo-router";
import {useState} from "react";

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
                    <Card style={styles.card}>
                        <Image source={imagesLocal.icon} style={styles.icon}/>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'flex-start'}}>
                                <CustomText style='title' text='Đăng nhập'/>
                            </View>
                        </View>
                        <SpaceVertical/>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'flex-start'}}>
                                <CustomText style={'paragraph'} text={'Email hoặc số điện thoại'}/>
                            </View>
                        </View>
                        {isIOS && <SpaceVertical/>}
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons
                                style={{paddingEnd: 8}}
                                name='mail-outline'
                                color={colors.textOnBackground}
                                size={padding / 2}
                            />
                            <TextInput
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                style={{
                                    ...styles.input,
                                    color: colors.textOnBackground,
                                }}
                                placeholder='Nhập email hoặc SĐT của bạn'
                                keyboardType='email-address'
                                autoComplete='email'
                                clearButtonMode='while-editing'
                            />
                        </View>
                        {isIOS ? <SpaceVertical/> : null}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'flex-start'}}>
                                <CustomText style={'paragraph'} text={'Mật khẩu'}/>
                            </View>
                        </View>
                        {isIOS && <SpaceVertical/>}
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Ionicons
                                style={{paddingEnd: 8}}
                                name='lock-closed-outline'
                                color={colors.textOnBackground}
                                size={padding / 2}
                            />
                            <TextInput
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                style={{
                                    ...styles.input,
                                    color: colors.textOnBackground,
                                }}
                                placeholder='Nhập mật khẩu'
                                autoComplete='new-password'
                                clearButtonMode='while-editing'
                                clearTextOnFocus={true}
                                disableKeyboardShortcuts={true}
                                secureTextEntry={true}
                            />
                        </View>
                        <SpaceVertical/>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'flex-start'}}>
                                <TouchableOpacity onPress={() => alert('Bạn đã nhấn vào Quên mật khẩu.')}>
                                    <CustomText text='Quên mật khẩu?' color={colors.tint} style='paragraph'/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1}}>
                                    <Button
                                        color={colors.tint}
                                        label='Đăng nhập'
                                        labelColor={colors.textOnButton}
                                        onPress={() => router.push('/(tabs)/home')}
                                        flex={1}
                                    />
                                    <View style={{height: padding / 3}}/>
                                    <Button
                                        icon='logo-google'
                                        label='Đăng nhập với Google'
                                        labelColor={colors.textOnBackground}
                                        onPress={() => router.push('/(tabs)/home')}
                                        flex={1}
                                    />
                                    <View style={{height: padding / 3}}/>
                                    <Button
                                        icon='logo-facebook'
                                        label='Đăng nhập với Facebook'
                                        labelColor={colors.textOnBackground}
                                        onPress={() => router.push('/(tabs)/home')}
                                        flex={1}
                                    />
                                </View>
                            </View>
                            <SpaceVertical/>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{...textStyles.description, color: colors.textOnBackground}}>
                                        Bạn chưa có tài khoản? Hãy
                                    </Text>
                                    <TouchableOpacity onPress={() => router.push('/auth/screens/SignUpScreen')}>
                                        <CustomText style={'description'} color={colors.tint} text={' Đăng ký'}/>
                                    </TouchableOpacity>
                                    <Text style={{...textStyles.description, color: colors.textOnBackground}}>
                                        .
                                    </Text>
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
    input: {
        ...textStyles.paragraph,
        flex: 1,
        textAlign: 'left',
    },
});