import CustomText from "@/components/CustomText";
import {infoStr} from "@/constants/strings/infoStr";
import {isIOS, padding} from "@/constants/theme";
import SpaceVertical from "@/components/SpaceVertical";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import {router, useLocalSearchParams} from "expo-router";
import FooterButtons from "@/app/information/components/FooterButtons";
import Card from "@/components/Card";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import calculateBmr from "@/app/information/functions/calculateBmr";
import getTdee from "@/app/information/functions/getTdee";

export default function SummaryScreen() {
    const colors = useCustomColors();
    const {age, gender, height, weight, weeklyGoal} = useLocalSearchParams();
    const genderBoolean = gender === infoStr.otherInfo.genderLabel.male;
    const ageNum = parseInt(age as string);
    const heightNum = parseFloat(height as string);
    const weightNum = parseFloat(weight as string);

    const calDate = calculateBmr(ageNum, genderBoolean, heightNum, weightNum)
    const showCalDate = getTdee(calDate, '').toFixed(0).toString();

    const tdee = getTdee(calDate, weeklyGoal.toString());
    const showTdee = tdee.toFixed(0).toString();
    const calWeek = tdee * 7;
    const showCalWeek = calWeek.toFixed(0).toString();

    const [showCard, setShowCard] = useState(false);

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
            <View>
                <CustomText style={'title'} color={colors.tint} text={infoStr.happy}/>
                {isIOS && <SpaceVertical/>}
                <CustomText style={'paragraph'} color={colors.accent} text={infoStr.desHappy}/>
                <SpaceVertical/>
                <SpaceVertical/>
                <CustomText style={'paragraph'} text={infoStr.paraHappy1}/>
                <SpaceVertical/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Card style={{alignItems: 'center'}}>
                            <CustomText style={'title'} text={showCalDate}/>
                            {isIOS && <SpaceVertical/>}
                            <CustomText text={infoStr.calOnDate}/>
                        </Card>
                    </View>
                    <SpaceHorizontal/>
                    <View style={{flex: 1}}>
                        <Card style={{alignItems: 'center'}}>
                            <CustomText style={'title'} text={showCalWeek}/>
                            {isIOS && <SpaceVertical/>}
                            <CustomText text={infoStr.calOnWeek}/>
                        </Card>
                    </View>
                </View>
                <SpaceVertical/>
                <SpaceVertical/>
                <CustomText
                    style="paragraph"
                    text={infoStr.paraHappy2}
                    lastIcon="information-circle"
                    onPressIcon={() => setShowCard(!showCard)}
                />
                <SpaceVertical/>
                <Card style={{alignItems: 'center'}}>
                    {showCard &&
                        <>
                            <CustomText
                                style="description"
                                textAlign="justify"
                                text={infoStr.tdeeInfo}
                            />
                            <SpaceVertical/>
                        </>
                    }
                    <CustomText text={infoStr.tdeeOnDate}/>
                    {isIOS && <SpaceVertical/>}
                    <CustomText style={'title'} text={showTdee}/>
                </Card>
            </View>
            <FooterButtons
                backButton={true}
                onRefresh={() => {
                }}
                showContinueButton={true}
                onPressContinueButton={
                    () => router.push({
                        pathname: '/(tabs)/home'
                    })
                }
            />
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