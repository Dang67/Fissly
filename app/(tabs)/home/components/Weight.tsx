import {StyleSheet, TouchableOpacity, View} from "react-native";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import Card from "@/components/Card";
import Button from "@/components/Button";
import {CurveType, LineChart} from "react-native-gifted-charts";
import {useCustomColors} from "@/hooks/useCustomColors";
import {isIOS, padding} from "@/constants/theme";

export default function Weight() {
    const colors = useCustomColors();
    const data = [
        {value: 50},
        {value: 51},
        {value: 50},
        {value: 51},
        {value: 53},
        {value: 52},
        {value: 49},
        {value: 50},
        {value: 52},
        {value: 50},
        {value: 51},
        {value: 53},
        {value: 52},
        {value: 49},
        {value: 50},
        {value: 48}
    ];

    return (
        <View>
            <CustomText style={'button'} text={'Theo dõi cân nặng'}/>
            <SpaceVertical/>
            <Card style={styles.card}>
                <View style={styles.row}>
                    <View style={{flex: 1}}>
                        <View style={{...styles.row, alignItems: 'center', justifyContent: 'space-between'}}>
                            <Button
                                label={'Ghi lại cân nặng'}
                                labelStyle={'paragraph'}
                                icon='pencil'
                                onPress={() => {
                                }}
                            />
                            <TouchableOpacity onPress={() => {
                            }}>
                                <CustomText style={'button'} color={'turquoise'} text={'Tháng 10'}/>
                            </TouchableOpacity>
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
                            data={data}
                            curved
                            curveType={CurveType.QUADRATIC} // Mượt hơn QUADRATIC
                            animateOnDataChange
                            onDataChangeAnimationDuration={1200}
                            animationEasing="ease-in-out"
                            scrollToEnd

                            // Spacing & layout
                            spacing={padding * 1.85}
                            endSpacing={0}
                            initialSpacing={padding}
                            dataPointsHeight={padding}
                            hideAxesAndRules

                            // Color & style
                            color='turquoise' // iOS style turquoise
                            thickness={3}
                            startFillColor='turquoise'
                            endFillColor='turquoise'
                            startOpacity={0.4}
                            endOpacity={0.05}
                            gradientDirection="vertical"

                            // Data points
                            dataPointsColor='turquoise'
                            dataPointsRadius={4}
                            hideDataPoints={false}
                            showValuesAsDataPointsText={true}

                            // Text / labels
                            hideYAxisText
                            textColor={colors.textOnBackground}
                            xAxisLabelTexts={[
                                '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'
                            ]}
                            xAxisLabelTextStyle={{
                                fontFamily: 'bold',
                                color: colors.textOnBackground, // iOS subtle gray
                            }}
                            xAxisLabelsHeight={isIOS ? undefined : 25}

                            // Shadows (soft highlight underline)
                            areaChart={true}
                            showScrollIndicator={false}
                        />
                    </View>
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