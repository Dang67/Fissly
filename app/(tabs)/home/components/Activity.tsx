import {ScrollView, StyleSheet, View} from "react-native";
import Card from "@/components/Card";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import IconButton from "@/components/IconButton";
import {useCustomColors} from "@/hooks/useCustomColors";
import * as Progress from 'react-native-progress';
import {Ionicons} from "@expo/vector-icons";
import {borderRadius, borderRadiusChild, padding, size} from "@/constants/theme";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Activity() {
    const colors = useCustomColors();
    // đổ dữ liệu
    const ftStep = 1500;
    const totalFtStep = 2000;
    const percentFtStep = ftStep / totalFtStep;

    const cal = 356;
    const totalCal = 700;
    const percentCal = cal / totalCal;

    return (
        <View>
            <CustomText style={'button'} text={'Theo dõi các hoạt động'}/>
            <SpaceVertical/>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Card style={styles.card}>
                        <CustomText text={'Bước chân'}/>
                        <SpaceVertical/>
                        <Progress.Bar
                            progress={percentFtStep}
                            style={{width: '100%'}}
                            color={colors.textOnBackground}
                        />
                        <SpaceVertical/>
                        <View style={styles.row}>
                            <View style={{...styles.col}}>
                                <View style={{...styles.row, justifyContent: 'flex-end'}}>
                                    <Ionicons size={size.iconText} color={colors.textOnBackground} name='footsteps'/>
                                    <CustomText
                                        text={' ' + ftStep + ' / ' + totalFtStep + ' bước'}
                                        style={'description'}
                                        textAlign={'right'}
                                        color={colors.textOnBackground}
                                    />
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
                <SpaceHorizontal/>
                <View style={styles.col}>
                    <Card style={styles.card}>
                        <CustomText text={'Bài tập'}/>
                        <SpaceVertical/>
                        <Progress.Bar
                            progress={percentCal}
                            style={{width: '100%'}}
                            color={colors.burned}
                        />
                        <SpaceVertical/>
                        <View style={styles.row}>
                            <View style={{...styles.col}}>
                                <View style={{...styles.row, justifyContent: 'flex-end'}}>
                                    <Ionicons size={size.iconText} color={colors.burned} name='flame'/>
                                    <CustomText
                                        text={' ' + cal + ' / ' + totalCal + ' cal'}
                                        style={'description'}
                                        textAlign={'right'}
                                        color={colors.burned}
                                    />
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
            <SpaceVertical/>
            <Card style={{...styles.card, ...styles.row, alignItems: 'center', justifyContent: 'space-between'}}>
                <View>
                    <CustomText text={'Uống nước'}/>
                    <SpaceVertical/>
                    <View style={styles.row}>
                        <IconButton name='add' onPress={() => {}}/>
                        <SpaceHorizontal/>
                        <IconButton name='remove' onPress={() => {}}/>
                    </View>
                </View>
                <ScrollView style={styles.col}>
                    <CustomText style={'description'} textAlign={'center'} text={'...'}/>
                    <CustomText style={'description'} textAlign={'center'} text={'12:00 - 150 ml'}/>
                    <CustomText style={'description'} textAlign={'center'} text={'14:00 - 100 ml'}/>
                    <CustomText style={'description'} textAlign={'center'} text={'16:00 - 150 ml'}/>
                    <CustomText style={'description'} textAlign={'center'} text={'17:30 - 100 ml'}/>
                    <CustomText style={'description'} textAlign={'center'} text={'...'}/>
                </ScrollView>
                <CircularProgress
                    value={500}
                    maxValue={2000}
                    radius={borderRadius}
                    duration={1500}
                    activeStrokeColor={'deepskyblue'}
                    inActiveStrokeColor={'deepskyblue'}
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