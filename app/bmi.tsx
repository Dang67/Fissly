import {useCustomColors} from "@/hooks/useCustomColors";
import {ScrollView, StyleSheet, View} from "react-native";
import FooterButtons from "@/app/information/components/FooterButtons";
import {isIOS, padding, screenHeight, size} from "@/constants/theme";
import Card from "@/components/Card";
import SpaceVertical from "@/components/SpaceVertical";
import CustomText from "@/components/CustomText";
import {Ionicons} from "@expo/vector-icons";
import {homeStr} from "@/constants/strings/homeStr";
import calculateBmi from "@/app/information/functions/calculateBmi";
import getBmiFormat from "@/app/(tabs)/home/functions/getBmiFormat";
import BmiRuler from "@/app/(tabs)/home/sub-components/BmiRuler";
import VerticalDeliver from "@/components/VerticalDeliver";
import getHighestBmi from "./(tabs)/home/functions/getHighestBmi";
import {weightData} from "@/constants/sample-data/weightData";
import getLowestBmi from "./(tabs)/home/functions/getLowestBmi";
import getAverageBmi from "./(tabs)/home/functions/getAverageBmi";
import getModeBmi from "./(tabs)/home/functions/getModeBmi";
import {CurveType, LineChart} from "react-native-gifted-charts";

export default function Bmi() {
    const colors = useCustomColors();
    const bmi = calculateBmi(170, 60);
    const bmiColor = getBmiFormat(bmi).color;

    const bmiData: number[] = weightData.map((item: { value: number }): number => calculateBmi(170, item.value));
    const highestBmi: string = getHighestBmi(bmiData).toString();
    const lowestBmi: string = getLowestBmi(bmiData).toString();
    const averageBmi: string = getAverageBmi(bmiData).toString();
    const modeBmi: string = getModeBmi(bmiData).toString();
    const maintenanceBmi: string = modeBmi < averageBmi ?
        `${modeBmi} - ${averageBmi}` :
        modeBmi > averageBmi ?
            `${averageBmi} - ${modeBmi}` :
            modeBmi;

    const bmiDataOpj = weightData.map((item: { value: number }) => ({
        value: calculateBmi(170, item.value)
    }));

    return (
        <View style={{flex: 1, backgroundColor: colors.background}}>
            <ScrollView style={{paddingHorizontal: padding}}>
                <View style={{height: padding * 3}}/>
                <Card style={styles.card}>
                    <View style={{alignItems: 'center'}}>
                        <Ionicons name='accessibility'
                                  color={colors.textOnBackground}
                                  size={size.bigIcon}/>
                    </View>
                    <SpaceVertical/>
                    <SpaceVertical/>
                    <CustomText style={'title'}
                                textAlign={'center'}
                                text={homeStr.bmi}/>
                    <SpaceVertical/>
                    <SpaceVertical/>
                    <CustomText textAlign={'justify'}
                                color={colors.accent}
                                text={homeStr.bmiInfo}/>
                </Card>
                <SpaceVertical/>
                <SpaceVertical/>
                <Card style={styles.card}>
                    <CustomText style={'button'}
                                text={homeStr.currentBmi}/>
                    <SpaceVertical/>
                    <CustomText style={'subtitle'}
                                textAlign={'center'}
                                color={bmiColor}
                                text={bmi.toString()}/>
                    <SpaceVertical/>
                    <BmiRuler/>
                    <SpaceVertical/>
                    <View style={styles.row}>
                        <View style={{flex: 1}}>
                            <CustomText style={'button'}
                                        text={homeStr.maintenanceBmi}/>
                        </View>
                        <CustomText style={'button'}
                                    text={maintenanceBmi}/>
                    </View>
                    <VerticalDeliver/>
                    <View style={styles.row}>
                        <View style={{flex: 1}}>
                            <CustomText color={colors.textOnBackground}
                                        text={homeStr.averageBmi}/>
                        </View>
                        <CustomText color={colors.textOnBackground}
                                    text={averageBmi}/>
                    </View>
                    <View style={styles.row}>
                        <View style={{flex: 1}}>
                            <CustomText color={colors.accent}
                                        text={homeStr.highestBmi}/>
                        </View>
                        <CustomText color={colors.accent}
                                    text={highestBmi}/>
                    </View>
                    <View style={styles.row}>
                        <View style={{flex: 1}}>
                            <CustomText color={colors.accent}
                                        text={homeStr.lowestBmi}/>
                        </View>
                        <CustomText color={colors.accent}
                                    text={lowestBmi}/>
                    </View>
                </Card>
                <SpaceVertical/>
                <SpaceVertical/>
                <Card style={styles.card}>
                    <CustomText style={'button'}
                                text={homeStr.dailyBmi}/>
                    <SpaceVertical/>
                    <LineChart
                        data={bmiDataOpj.map((item) => ({
                            value: item.value,
                            frontColor: getBmiFormat(item.value).color,
                        }))}
                        curved
                        curveType={CurveType.QUADRATIC}
                        animateOnDataChange
                        onDataChangeAnimationDuration={1200}
                        animationEasing="ease-in-out"
                        scrollToEnd
                        spacing={padding * 1.85}
                        endSpacing={0}
                        initialSpacing={padding}
                        dataPointsHeight={padding}
                        hideAxesAndRules
                        color={colors.textOnBackground}
                        thickness={3}
                        startFillColor={colors.textOnBackground}
                        endFillColor={colors.background}
                        startOpacity={0.4}
                        endOpacity={0.05}
                        gradientDirection="vertical"
                        dataPointsColor={colors.textOnBackground}
                        dataPointsRadius={4}
                        hideDataPoints={false}
                        showValuesAsDataPointsText={true}
                        hideYAxisText
                        textColor={colors.textOnBackground}
                        xAxisLabelTextStyle={{
                            fontFamily: 'regular',
                            color: colors.accent,
                        }}
                        xAxisLabelsHeight={isIOS ? undefined : 25}
                        areaChart={true}
                        showScrollIndicator={false}
                    />
                </Card>
                <View style={{height: screenHeight * 0.25}}/>
            </ScrollView>
            <View style={styles.footer}>
                <FooterButtons backButton={true}
                               showContinueButton={false}
                               onRefresh={() => {
                               }}
                               onPressContinueButton={() => {
                               }}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'stretch',
    },
    row: {
        flexDirection: 'row',
    },
    footer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        position: 'absolute',
        padding: padding,
    },
});