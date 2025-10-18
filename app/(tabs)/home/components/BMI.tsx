import {StyleSheet, View} from "react-native";
import Card from "@/components/Card";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import calculateBmi from "@/app/information/functions/calculateBmi";
import getBmiFormat from "../functions/getBmiFormat";
import {useCustomColors} from "@/hooks/useCustomColors";
import getBmiInfo from "@/app/information/functions/getBmiInfo";
import {homeStr} from "@/constants/strings/homeStr";
import IconButton from "@/components/IconButton";
import {router} from "expo-router";
import BmiRuler from "../sub-components/BmiRuler";

export default function BMI() {
    const colors = useCustomColors();
    const bmi = calculateBmi(170, 60);
    const bmiColor = getBmiFormat(bmi).color;
    const bmiDes = getBmiInfo(bmi).text;

    return (
        <View>
            <Card style={styles.card}>
                <View style={{...styles.row, alignItems: 'stretch'}}>
                    <View style={{flex: 1}}>
                        <CustomText text={homeStr.bmi}/>
                    </View>
                    <IconButton name='chevron-forward' onPress={() => router.push('/bmi')}/>
                </View>
                <SpaceVertical/>
                <CustomText style={'subtitle'} textAlign={'center'} color={bmiColor} text={bmi.toString()}/>
                <SpaceVertical/>
                <BmiRuler/>
                <SpaceVertical/>
                <CustomText textAlign={'justify'} color={colors.accent} text={bmiDes}/>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    card: {
        alignItems: 'stretch',
    },
});