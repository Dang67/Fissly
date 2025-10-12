import {BackHandler, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomText from "@/components/CustomText";
import {padding, textStyles} from "@/constants/theme";
import React, {useCallback, useState} from "react";
import {router} from "expo-router";
import SpaceVertical from "@/components/SpaceVertical";
import {useFocusEffect} from '@react-navigation/native';
import FooterButtons from "@/app/information/components/FooterButtons";
import {strings} from "@/app/information/strings";


export default function CollectUserNameScreen() {
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                return true;
            };

            const subscription = BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );

            return () => subscription.remove();
        }, [])
    );

    const colors = useCustomColors();
    const bgColor = colors.background;
    const titleColor = colors.tint;

    const [name, setName] = useState<string>();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={{...styles.container, backgroundColor: bgColor}}>
                <View>
                    <CustomText style={'title'} color={titleColor} text={strings.userName.title}/>
                    <SpaceVertical/>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={{
                            ...styles.input,
                            color: colors.textOnBackground,
                        }}
                        placeholder={strings.userName.input.placeholder}
                        autoComplete={'name'}
                        clearButtonMode={'while-editing'}
                        textAlign={'center'}
                    />
                </View>
                <FooterButtons
                    backButton={false}
                    showContinueButton={!!name}
                    onPressContinueButton={
                        () => router.push('/information/screens/CollectOtherInformationScreen')
                    }
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: padding,
        paddingHorizontal: padding,
    },
    input: {
        ...textStyles.title,
        textAlign: 'left',
    },
});