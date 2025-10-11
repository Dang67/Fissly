import {BackHandler, StyleSheet, TextInput, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomText from "@/components/CustomText";
import {padding, textStyles} from "@/constants/theme";
import React, {useCallback, useState} from "react";
import {router} from "expo-router";
import Button from "@/components/Button";
import SpaceVertical from "@/components/SpaceVertical";
import { useFocusEffect } from '@react-navigation/native';


export default function CollectUserNameScreen() {
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                // Chặn nút back
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
        <SafeAreaView style={{...styles.container, backgroundColor: bgColor}}>
            <View>
                <CustomText style={'title'} color={titleColor} text={'Tôi có thể gọi bạn là gì?'}/>
                <SpaceVertical/>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={{
                        ...styles.input,
                        color: colors.textOnBackground,
                    }}
                    placeholder='Nhập tên của bạn'
                    keyboardType='default'
                    autoComplete='name'
                    clearButtonMode='while-editing'
                    textAlign={'center'}
                />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                {name &&
                    <View style={{flex: 1}}>
                        <Button
                            label={'Tiếp tục'}
                            flex={1}
                            onPress={() => router.push('/information/screens/CollectOtherInformationScreen')}
                        />
                    </View>
                }
            </View>
        </SafeAreaView>
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