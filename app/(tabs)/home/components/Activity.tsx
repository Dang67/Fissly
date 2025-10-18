import {StyleSheet, Text, View} from "react-native";
import Card from "@/components/Card";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import IconButton from "@/components/IconButton";
import {useCustomColors} from "@/hooks/useCustomColors";
import {Ionicons} from "@expo/vector-icons";
import {borderRadius, padding, size} from "@/constants/theme";
import CircularProgress from "react-native-circular-progress-indicator";
import {BarChart, CurveType, LineChart} from "react-native-gifted-charts";
import {homeStr} from "@/constants/strings/homeStr";

export default function Activity() {
    const colors = useCustomColors();
    const waterColor = 'dodgerblue';
    // đổ dữ liệu
    const ftStep = 2500;
    const totalFtStep = 4200;
    const stepsData = [
        {value: 3500},
        {value: 8200},
        {value: 5400},
        {value: 9000},
        {value: 12000},
        {value: 7200},
        {value: 4200},
    ];

    const cal = 356;
    const totalCal = 700;
    const burnedData = [
        {value: 50},
        {value: 80},
        {value: 150},
        {value: 200},
        {value: 100},
        {value: 70},
        {value: 50},
    ];

    return (
        <View>
            <CustomText style={'button'} text={homeStr.trackActivities}/>
            <SpaceVertical/>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <View style={{flex: 1}}>
                                <View style={{...styles.row, justifyContent: 'space-between'}}>
                                    <CustomText text={homeStr.footStep}/>
                                    <IconButton name='chevron-forward'
                                                color={colors.burned}
                                                onPress={() => {
                                                }}/>
                                </View>
                            </View>
                        </View>
                        <SpaceVertical/>
                        <BarChart
                            data={stepsData.map((item) => ({
                                ...item,
                                frontColor: item.value >= 8000 ? colors.burned : colors.accent,
                            }))}
                            barWidth={padding * 0.45}
                            barBorderRadius={borderRadius}
                            spacing={padding * 0.3}
                            initialSpacing={0}
                            endSpacing={0}
                            hideRules
                            hideYAxisText
                            yAxisThickness={0}
                            xAxisThickness={0}
                            isAnimated
                            animationDuration={1200}
                            disableScroll={true}
                            showScrollIndicator={false}
                            hideAxesAndRules={true}
                            height={padding * 2.5}
                            gradientColor={colors.background}
                            showGradient={true}
                        />
                        <SpaceVertical/>
                        <View style={styles.row}>
                            <View style={{...styles.col}}>
                                <View style={{...styles.row, justifyContent: 'flex-end'}}>
                                    <Text style={{fontFamily: 'bold', fontSize: 12, color: colors.accent,}}>
                                        <Ionicons size={size.iconText} color={colors.accent} name='footsteps'/>
                                        {' ' + ftStep} / {totalFtStep} bước
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
                <SpaceHorizontal/>
                <View style={styles.col}>
                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <View style={{flex: 1}}>
                                <View style={{...styles.row, justifyContent: 'space-between'}}>
                                    <CustomText text={homeStr.exercise}/>
                                    <IconButton name='chevron-forward'
                                                color={colors.burned}
                                                onPress={() => {
                                                }}/>
                                </View>
                            </View>
                        </View>
                        <SpaceVertical/>
                        <LineChart
                            data={burnedData}
                            curved
                            curveType={CurveType.QUADRATIC}
                            animateOnDataChange
                            onDataChangeAnimationDuration={1200}
                            animationEasing="ease-in-out"
                            height={padding * 2.5}
                            spacing={padding * 0.85}
                            endSpacing={0}
                            initialSpacing={0}
                            dataPointsHeight={padding}
                            hideAxesAndRules
                            color={colors.burned}
                            thickness={3}
                            startFillColor={colors.burned}
                            endFillColor={colors.background}
                            startOpacity={0.4}
                            endOpacity={0.05}
                            gradientDirection="vertical"
                            dataPointsColor={colors.burned}
                            hideDataPoints={true}
                            hideYAxisText
                            areaChart={true}
                            showScrollIndicator={false}
                            disableScroll
                        />
                        <SpaceVertical/>
                        <View style={styles.row}>
                            <View style={{...styles.col}}>
                                <View style={{...styles.row, justifyContent: 'flex-end'}}>
                                    <Text style={{fontFamily: 'bold', fontSize: 12, color: colors.burned,}}>
                                        <Ionicons size={size.iconText} color={colors.burned} name='flame'/>
                                        {' ' + cal} / {totalCal} cal
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
            <SpaceVertical/>
            <Card style={{...styles.card, ...styles.row, alignItems: 'center'}}>
                <View>
                    <View style={{flex: 1}}>
                        <CustomText text={homeStr.drinkWater}/>
                    </View>
                    <SpaceVertical/>
                    <View style={styles.row}>
                        <IconButton name='add' color={waterColor} onPress={() => {
                        }}/>
                        <SpaceHorizontal/>
                        <IconButton name='remove' color={waterColor} onPress={() => {
                        }}/>
                    </View>
                </View>
                <View style={styles.col}>
                    <Text style={{
                        fontFamily: 'bold',
                        fontSize: 14,
                        textAlign: 'center',
                        color: colors.textOnBackground,
                    }}>
                        17:00 - 170 ml
                    </Text>
                    <Text style={{
                        fontFamily: 'bold',
                        fontSize: 12,
                        textAlign: 'center',
                        color: colors.textOnBackground,
                        opacity: 0.8,
                    }}>
                        15:00 - 150 ml
                    </Text>
                    <Text style={{
                        fontFamily: 'bold',
                        fontSize: 10,
                        textAlign: 'center',
                        color: colors.textOnBackground,
                        opacity: 0.6,
                    }}>
                        13:00 - 130 ml
                    </Text>
                    <Text style={{
                        fontFamily: 'bold',
                        fontSize: 8,
                        textAlign: 'center',
                        color: colors.textOnBackground,
                        opacity: 0.4,
                    }}>
                        11:00 - 100 ml
                    </Text>
                </View>
                <CircularProgress
                    value={500}
                    maxValue={2000}
                    radius={borderRadius}
                    duration={1500}
                    activeStrokeColor={waterColor}
                    inActiveStrokeColor={waterColor}
                    inActiveStrokeOpacity={0.1}
                    progressValueStyle={{fontFamily: 'bold'}}
                    title={'ml'}
                    titleStyle={{fontFamily: 'bold'}}
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
    },
    card: {
        alignItems: 'flex-start',
    },
});