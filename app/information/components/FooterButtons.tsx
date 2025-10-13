import IconButton from "@/components/IconButton";
import {router} from "expo-router";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import {View} from "react-native";
import Button from "@/components/Button";
import React from "react";
import {useCustomColors} from "@/hooks/useCustomColors";

type Props = {
    backButton: boolean;
    showContinueButton: boolean;
    refreshButton?: boolean;
    onRefresh: () => void;
    onPressContinueButton: () => void;
};

export default function FooterButtons({
                                          backButton,
                                          showContinueButton,
                                          refreshButton = false,
                                          onRefresh,
                                          onPressContinueButton
                                      }: Props) {
    const colors = useCustomColors();

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            {
                backButton ?
                    <>
                        <IconButton name='arrow-back' color={colors.textOnBackground} onPress={() => router.back()}/>
                        {
                            refreshButton &&
                            <>
                                <SpaceHorizontal/>
                                <IconButton name='refresh' color={colors.textOnBackground} onPress={onRefresh}/>
                            </>
                        }
                    </> :
                    null
            }
            {backButton && showContinueButton && <SpaceHorizontal/>}
            {
                showContinueButton ?
                    <>
                        <View style={{flex: 1}}>
                            <Button
                                label={'Tiếp tục'}
                                flex={1}
                                onPress={onPressContinueButton}
                            />
                        </View>
                    </> :
                    null
            }
        </View>
    );
};