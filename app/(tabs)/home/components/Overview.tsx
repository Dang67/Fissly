import Card from "@/components/Card";
import {StyleSheet, View} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import CustomText from "@/components/CustomText";
import Button from "@/components/Button";
import {borderRadius, borderRadiusChild, padding} from "@/constants/theme";
import SpaceVertical from "@/components/SpaceVertical";
import CircularProgress from "react-native-circular-progress-indicator";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import {homeStr} from "@/constants/strings/homeStr";
import {Ionicons} from "@expo/vector-icons";

export default function Overview() {
    const colors = useCustomColors();

    return (
        <Card>
            <View style={styles.row}>
                <View style={{flex: 1}}>
                    <View style={{...styles.rowSpaceBetween}}>
                        <CustomText
                            style={'button'}
                            text={homeStr.overview}
                        />
                        <Button
                            borderRadiusCustom={borderRadiusChild}
                            label={homeStr.report}
                            onPress={() => alert('Vừa nhấn vào nút báo cáo')}
                        />
                    </View>
                </View>
            </View>
            <SpaceVertical/>
            <SpaceVertical/>
            <View style={{...styles.row}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <CircularProgress
                        value={750}
                        maxValue={1000}
                        radius={borderRadius}
                        activeStrokeColor={colors.goal}
                        inActiveStrokeColor={colors.goal}
                        inActiveStrokeOpacity={0.1}
                        duration={1500}
                        progressValueStyle={{fontFamily: 'bold'}}
                        title={homeStr.goal}
                        titleStyle={{fontFamily: 'bold'}}
                    />
                    <View style={styles.row}>
                        <View style={{flex: 1}}>
                            <View style={{...styles.row, justifyContent: 'space-around'}}>
                                <CircularProgress
                                    value={500}
                                    maxValue={1000}
                                    radius={borderRadiusChild}
                                    activeStrokeColor={colors.loaded}
                                    inActiveStrokeColor={colors.loaded}
                                    inActiveStrokeOpacity={0.1}
                                    duration={1500}
                                    progressValueStyle={{fontFamily: 'bold'}}
                                    title={homeStr.loaded}
                                    titleStyle={{fontFamily: 'bold'}}
                                />
                                <CircularProgress
                                    value={250}
                                    maxValue={1000}
                                    radius={borderRadiusChild}
                                    activeStrokeColor={colors.burned}
                                    inActiveStrokeColor={colors.burned}
                                    inActiveStrokeOpacity={0.1}
                                    duration={1500}
                                    progressValueStyle={{fontFamily: 'bold'}}
                                    title={homeStr.activity}
                                    titleStyle={{fontFamily: 'bold'}}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <SpaceHorizontal/>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <CircularProgress
                        radius={borderRadius * 1.75}
                        activeStrokeWidth={borderRadiusChild * 0.5}
                        inActiveStrokeWidth={borderRadiusChild * 0.5}
                        inActiveStrokeColor={colors.tint}
                        inActiveStrokeOpacity={0.1}
                        value={1537}
                        maxValue={3000}
                        duration={1500}
                        progressValueColor={colors.tint}
                        activeStrokeColor={colors.tint}
                        progressValueStyle={{fontFamily: 'bold'}}
                        title={homeStr.remainingCal}
                        titleStyle={{fontFamily: 'bold', fontSize: 12,}}
                    />
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    rowSpaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});