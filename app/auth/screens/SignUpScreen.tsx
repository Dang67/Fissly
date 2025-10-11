import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image} from "expo-image";
import {imagesLocal, isIOS, padding, screenWidth, textStyles} from "@/constants/theme";
import Card from "@/components/Card";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import Button from "@/components/Button";
import {router} from "expo-router";

export default function SignUpScreen() {
    const colors = useCustomColors();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    return (
        <View style={{
            ...styles.container,
            backgroundColor: colors.background,
        }}>
            <SafeAreaView style={{...styles.safeAreaView}}>
                <Card style={{...styles.card}}>
                    <Image source={imagesLocal.icon} style={styles.icon}/>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, alignItems: 'flex-start'}}>
                            <CustomText style={'title'} text={'Đăng ký'}/>
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
                            clearButtonMode='while-editing'
                            clearTextOnFocus={true}
                            disableKeyboardShortcuts={true}
                            secureTextEntry={true}
                        />
                    </View>
                    {isIOS ? <SpaceVertical/> : null}
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, alignItems: 'flex-start'}}>
                            <CustomText style={'paragraph'} text={'Xác nhận mật khẩu'}/>
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
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                            style={{
                                ...styles.input,
                                color: colors.textOnBackground,
                            }}
                            placeholder='Nhập lại mật khẩu'
                            clearButtonMode='while-editing'
                            clearTextOnFocus={true}
                            disableKeyboardShortcuts={true}
                            secureTextEntry={true}
                        />
                    </View>
                </Card>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <Button
                                    color={colors.tint}
                                    label='Đăng ký'
                                    labelColor={colors.textOnButton}
                                    onPress={() => router.push('/information/screens/CollectUserNameScreen')}
                                    flex={1}
                                />
                                <View style={{height: padding / 3}}/>
                                <Button
                                    icon='logo-google'
                                    iconColor={colors.textOnBackground}
                                    label='Đăng nhập với Google'
                                    labelColor={colors.textOnBackground}
                                    onPress={() => router.push('/(tabs)/home')}
                                    flex={1}
                                />
                                <View style={{height: padding / 3}}/>
                                <Button
                                    icon='logo-facebook'
                                    iconColor={colors.textOnBackground}
                                    label='Đăng nhập với Facebook'
                                    labelColor={colors.textOnBackground}
                                    onPress={() => router.push('/(tabs)/home')}
                                    flex={1}
                                />
                            </View>
                        </View>
                        {isIOS && <SpaceVertical/>}
                        <View style={{flexDirection: 'row'}}>
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Text style={{...textStyles.description, color: colors.textOnBackground}}>
                                    Bằng việc tiếp tục đăng ký, bạn đã đồng ý với
                                </Text>
                                <TouchableOpacity>
                                    <CustomText style={'description'} color={colors.tint} text={' Điều khoản sử dụng '}/>
                                </TouchableOpacity>
                                <Text style={{...textStyles.description, color: colors.textOnBackground}}>
                                    và
                                </Text>
                                <TouchableOpacity>
                                    <CustomText style={'description'} color={colors.tint} text={' Chính sách bảo mật'}/>
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
        width: screenWidth * 0.5,
        height: screenWidth * 0.5,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        ...textStyles.paragraph,
        flex: 1,
        textAlign: 'left',
    },
});