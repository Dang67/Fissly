import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View} from "react-native";
import {isIOS, padding} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import React, {useState} from "react";
import {router, useLocalSearchParams} from "expo-router";
import Button from "@/components/Button";
import FooterButtons from "@/app/information/components/FooterButtons";
import {strings} from "@/app/information/strings";

export default function CollectWeeklyGoalScreen() {
    const colors = useCustomColors();
    const {goal} = useLocalSearchParams();
    const parsedGoal = goal ? JSON.parse(goal as string) : null;

    const [selected, setSelected] = useState('');

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
            <View>
                <CustomText style={'title'} color={colors.tint}
                            text={strings.weeklyGoals.title}/>
                {isIOS && <SpaceVertical/>}
                <CustomText style={'paragraph'} color={colors.accent}
                            text={strings.weeklyGoals.des}/>
                <SpaceVertical/>
            </View>
            <View>
                {
                    parsedGoal === 'Tăng cân' ?
                        (strings.weeklyGoals.goals.filter((value =>
                            value.startsWith('T') ||
                            value.startsWith('D')))
                            .map(value => {
                                return (
                                    <View key={value}>
                                        <View style={{height: padding / 2}}/>
                                        <Button
                                            flex={1}
                                            color={selected.includes(value) ? colors.tint : undefined}
                                            label={value}
                                            labelColor={
                                                selected.includes(value) ?
                                                    colors.textOnButton :
                                                    colors.textOnBackground
                                            }
                                            onPress={() => setSelected(value)}
                                        />
                                    </View>
                                )
                            })) :
                        parsedGoal === 'Giảm cân' ?
                            (strings.weeklyGoals.goals.filter((value =>
                                value.startsWith('G') ||
                                value.startsWith('D')))
                                .map(value => {
                                    return (
                                        <View key={value}>
                                            <View style={{height: padding / 2}}/>
                                            <Button
                                                flex={1}
                                                color={selected.includes(value) ? colors.tint : undefined}
                                                label={value}
                                                labelColor={
                                                    selected.includes(value) ?
                                                        colors.textOnButton :
                                                        colors.textOnBackground
                                                }
                                                onPress={() => setSelected(value)}
                                            />
                                        </View>
                                    )
                                })) :
                            strings.weeklyGoals.goals.map(value => {
                                return (
                                    <View key={value}>
                                        <View style={{height: padding / 2}}/>
                                        <Button
                                            flex={1}
                                            color={selected.includes(value) ? colors.tint : undefined}
                                            label={value}
                                            labelColor={
                                                selected.includes(value) ?
                                                    colors.textOnButton :
                                                    colors.textOnBackground
                                            }
                                            onPress={() => setSelected(value)}
                                        />
                                    </View>
                                )
                            })
                }
                <SpaceVertical/>
                <FooterButtons
                    backButton={true}
                    showContinueButton={selected !== ''}
                    onPressContinueButton={() => router}
                />
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
});