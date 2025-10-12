import {StyleSheet, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {isIOS, padding} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import {router} from "expo-router";
import Button from "@/components/Button";
import React, {useState} from "react";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import {strings} from "@/app/information/strings";
import FooterButtons from "@/app/information/components/FooterButtons";

export default function CollectUserHealthGoalsScreen() {
    const colors = useCustomColors();
    const [selectedGoal, setSelectedGoal] = useState('');

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
            <View>
                <CustomText style={'title'} color={colors.tint} text={strings.userHealthGoals.title}/>
                {isIOS && <SpaceVertical/>}
                <CustomText style={'paragraph'} color={colors.accent} text={strings.userHealthGoals.des}/>
            </View>
            <View>
                {
                    strings.userHealthGoals.goals.map((goal) => (
                        <View key={goal}>
                            <View style={{height: padding / 2}}/>
                            <Button
                                flex={1}
                                color={selectedGoal.includes(goal) ? colors.tint : undefined}
                                label={goal}
                                labelColor={selectedGoal.includes(goal) ? colors.textOnButton : colors.textOnBackground}
                                onPress={() => setSelectedGoal(goal)}
                            />
                        </View>
                    ))
                }
                <SpaceVertical/>
                <FooterButtons
                    backButton={true}
                    showContinueButton={selectedGoal !== ''}
                    onPressContinueButton={
                        () => router.push({
                                pathname: '/information/screens/CollectHealthPlanningRegularityScreen',
                                params: {goal: JSON.stringify(selectedGoal)},
                            })
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: padding,
        paddingHorizontal: padding,
    },
});