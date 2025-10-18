import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {borderRadiusChild, padding, size} from "@/constants/theme";
import getBmiFormat from "@/app/(tabs)/home/functions/getBmiFormat";
import {homeStr} from "@/constants/strings/homeStr";
import calculateBmi from "@/app/information/functions/calculateBmi";

export default function BmiRuler() {
    const bmi = calculateBmi(170, 60);
    const bmiColor = getBmiFormat(bmi).color;
    const bmiMin = 15;
    const bmiMax = 45;
    const bmiLength = bmiMax - bmiMin;
    const underWeightPercent = `${((18.5 - bmiMin) * 100) / bmiLength}%`;
    const healthyWeightPercent = `${((25 - 18.5) * 100) / bmiLength}%`;
    const overWeightPercent = `${((30 - 25) * 100) / bmiLength}%`;
    const obesePercent = `${((35 - 30) * 100) / bmiLength}%`;
    const severelyObesePercent = `${((40 - 35) * 100) / bmiLength}%`;
    const morbidlyObesePercent = `${((bmiMax - 40) * 100) / bmiLength}%`;

    const bmiPercent: `${number}%` = `${(((bmi - bmiMin) * 100) / bmiLength) - 3}%`;

    return (
        <View>
            <View style={styles.row}>
                <View style={{width: bmiPercent}}/>
                <Ionicons name='caret-down' color={bmiColor} size={size.icon}/>
            </View>
            <View style={styles.row}>
                <View style={{
                    ...styles.bmiRuler,
                    backgroundColor: getBmiFormat(18.5).color,
                    width: underWeightPercent,
                    borderTopStartRadius: borderRadiusChild,
                    borderBottomStartRadius: borderRadiusChild,
                }}>
                    <Text style={styles.label}>{homeStr.underWeight}</Text>
                </View>
                <View style={{
                    ...styles.bmiRuler,
                    backgroundColor: getBmiFormat(24).color,
                    width: healthyWeightPercent,
                }}>
                    <Text style={styles.label}>{homeStr.healthyWeight}</Text>
                </View>
                <View style={{
                    ...styles.bmiRuler,
                    backgroundColor: getBmiFormat(29).color,
                    width: overWeightPercent,
                }}>
                    <Text style={styles.label}>{homeStr.overWeight}</Text>
                </View>
                <View style={{
                    ...styles.bmiRuler,
                    backgroundColor: getBmiFormat(34).color,
                    width: obesePercent,
                }}>
                    <Text style={styles.label}>{homeStr.obese}</Text>
                </View>
                <View style={{
                    ...styles.bmiRuler,
                    backgroundColor: getBmiFormat(39).color,
                    width: severelyObesePercent,
                }}>
                    <Text style={styles.label}>{homeStr.severelyObese}</Text>
                </View>
                <View style={{
                    ...styles.bmiRuler,
                    backgroundColor: getBmiFormat(41).color,
                    width: morbidlyObesePercent,
                    borderTopEndRadius: borderRadiusChild,
                    borderBottomEndRadius: borderRadiusChild,
                }}>
                    <Text style={styles.label}>{homeStr.morbidlyObese}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={{width: bmiPercent}}/>
                <Ionicons name='caret-up' color={bmiColor} size={size.icon}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: '100%',
    },
    label: {
        fontFamily: 'regular',
        color: 'black',
        fontSize: 7,
        textAlign: 'center',
    },
    bmiRuler: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: padding * 0.1,
    },
});