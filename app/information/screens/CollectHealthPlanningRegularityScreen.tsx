import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View} from "react-native";
import {isIOS, padding} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import React, {useState} from "react";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import Button from "@/components/Button";
import {router, useLocalSearchParams} from "expo-router";
import FooterButtons from "@/app/information/components/FooterButtons";
import {infoStr} from "@/constants/strings/infoStr";

export default function CollectHealthPlanningRegularityScreen() {
    const colors = useCustomColors();
    const {goal} = useLocalSearchParams();
    const parsedGoal = goal ? JSON.parse(goal as string) : null;

    const [selected, setSelected] = useState<string>('');

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
            <View>
                <CustomText style={'title'} color={colors.tint} text={infoStr.healthPlan.title}/>
                {isIOS && <SpaceVertical/>}
                <CustomText style={'paragraph'} color={colors.accent} text={infoStr.healthPlan.des}/>
            </View>
            <View>
                {
                    infoStr.healthPlan.plans.map((option) => (
                        <View key={option}>
                            <View style={{height: padding / 2}}/>
                            <Button
                                flex={1}
                                color={selected.includes(option) ? colors.tint : undefined}
                                label={option}
                                labelColor={selected.includes(option) ? colors.textOnButton : colors.textOnBackground}
                                onPress={() => setSelected(option)}
                            />
                        </View>
                    ))
                }
                <SpaceVertical/>
                <FooterButtons
                    backButton={true}
                    showContinueButton={selected !== ''}
                    onRefresh={() => { }}
                    onPressContinueButton={
                        () => router.push({
                            pathname: '/information/screens/CollectHabitScreen',
                            params: {goal: JSON.stringify(parsedGoal)},
                        })
                    }
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