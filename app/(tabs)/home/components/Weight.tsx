import {StyleSheet, TouchableOpacity, View} from "react-native";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import Card from "@/components/Card";
import {CurveType, LineChart} from "react-native-gifted-charts";
import {useCustomColors} from "@/hooks/useCustomColors";
import {isIOS, padding} from "@/constants/theme";
import {homeStr} from "@/constants/strings/homeStr";
import VerticalDeliver from "@/components/VerticalDeliver";
import IconButton from "@/components/IconButton";
import getHighestWeight from "@/app/(tabs)/home/functions/getHighestWeight";
import getLowestWeight from "@/app/(tabs)/home/functions/getLowestWeight";
import getAverageWeight from "@/app/(tabs)/home/functions/getAverageWeight";
import getModeWeight from "@/app/(tabs)/home/functions/getModeWeight";
import {weightData} from "@/constants/sample-data/weightData";

export default function Weight() {
    const colors = useCustomColors();
    const weightColor = 'mediumaquamarine';

    const highW = getHighestWeight(weightData).toString();
    const lowW = getLowestWeight(weightData).toString();
    const averageW = getAverageWeight(weightData).toString();
    const modeW = getModeWeight(weightData).toString();
    const maintenanceW = modeW < averageW ?
        `${modeW} - ${averageW}` :
        modeW > averageW ?
            `${averageW} - ${modeW}` :
            modeW;

    return (
        <View>
            <CustomText style={'button'} text={homeStr.trackWeight}/>
            <SpaceVertical/>
            <Card style={styles.card}>
                <View style={styles.row}>
                    <View style={{flex: 1}}>
                        <View style={{
                            ...styles.row,
                            alignItems: 'stretch',
                            justifyContent: 'space-between'
                        }}>
                            <IconButton name={'pencil'}
                                        color={weightColor}
                                        onPress={() => {
                                        }}/>
                            <TouchableOpacity onPress={() => {
                            }}>
                                <CustomText style={'button'}
                                            color={weightColor}
                                            text={'Tháng 10'}/>
                            </TouchableOpacity>
                            <IconButton name='chevron-forward'
                                        color={weightColor}
                                        onPress={() => {
                                        }}/>
                        </View>
                    </View>
                </View>
                <SpaceVertical/>
                <View style={styles.row}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <LineChart
                            data={weightData}
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
                            color={weightColor}
                            thickness={3}
                            startFillColor={weightColor}
                            endFillColor={colors.background}
                            startOpacity={0.4}
                            endOpacity={0.05}
                            gradientDirection="vertical"
                            dataPointsColor={weightColor}
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
                    </View>
                </View>
                <SpaceVertical/>
                <View style={styles.row}>
                    <View style={{flex: 1}}>
                        <CustomText style={'button'}
                                    color={weightColor}
                                    text={homeStr.maintenanceWeight}/>
                    </View>
                    <CustomText style={'button'}
                                color={weightColor}
                                text={maintenanceW}/>
                </View>
                <VerticalDeliver/>
                <View style={styles.row}>
                    <View style={{flex: 1}}>
                        <CustomText color={colors.textOnBackground}
                                    text={homeStr.averageWeight}/>
                    </View>
                    <CustomText color={colors.textOnBackground}
                                text={averageW}/>
                </View>
                <View style={styles.row}>
                    <View style={{flex: 1}}>
                        <CustomText color={colors.accent}
                                    text={homeStr.highWeight}/>
                    </View>
                    <CustomText color={colors.accent}
                                text={highW}/>
                </View>
                <View style={styles.row}>
                    <View style={{flex: 1}}>
                        <CustomText color={colors.accent}
                                    text={homeStr.lowWeight}/>
                    </View>
                    <CustomText color={colors.accent}
                                text={lowW}/>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'flex-start',
    },
    row: {
        flexDirection: 'row',
    },
});