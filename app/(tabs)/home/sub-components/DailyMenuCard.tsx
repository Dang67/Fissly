import {Image} from "expo-image";
import SpaceVertical from "@/components/SpaceVertical";
import CustomText from "@/components/CustomText";
import {StyleSheet, View} from "react-native";
import IconButton from "@/components/IconButton";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import * as Progress from 'react-native-progress';
import Card from "@/components/Card";
import {size} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";

type Props = {
    value: number;
    total: number;
    session: number;
    ssData: string;
    onAddPress: () => void;
};

export default function DailyMenuCard({value = 0, total = 100, session, ssData, onAddPress}: Props) {
    const colors = useCustomColors();
    const percent = value / total;
    let imgSrc = require('@/assets/images/session-icons/morning-icon.png')
    let color = colors.morning;
    let sessionStr = 'Buổi sáng';
    switch (session) {
        case 0:
            imgSrc = require('@/assets/images/session-icons/morning-icon.png');
            color = colors.morning;
            sessionStr = 'Buổi sáng';
            break;

        case 1:
            imgSrc = require('@/assets/images/session-icons/afternoon-icon.png');
            color = colors.afternoon;
            sessionStr = 'Buổi chiều';
            break;

        case 2:
            imgSrc = require('@/assets/images/session-icons/evening-icon.png');
            color = colors.evening;
            sessionStr = 'Buổi tối';
            break;

        case 3:
            imgSrc = require('@/assets/images/session-icons/snack-icon.png');
            color = colors.snack;
            sessionStr = 'Thức ăn nhanh';
            break;

        default:
            break;
    }

    return (
        <Card style={styles.card}>
            <Image
                source={imgSrc}
                style={styles.sessionsIcon}
            />
            <SpaceVertical/>
            <CustomText text={sessionStr}/>
            <CustomText style={'description'} text={ssData}/>
            <SpaceVertical/>
            <View style={styles.row}>
                <View style={styles.col}>
                    <View style={{...styles.row, alignItems: 'center', justifyContent: 'space-between'}}>
                        <View>
                            <View style={styles.row}>
                                <IconButton
                                    name='add'
                                    onPress={onAddPress}
                                />
                            </View>
                        </View>
                        <SpaceHorizontal/>
                        <View style={styles.col}>
                            <CustomText
                                text={value + ' / ' + total + 'g'}
                                style={'description'}
                                textAlign={'right'}
                                color={color}
                            />
                            <SpaceVertical/>
                            <Progress.Bar
                                progress={percent}
                                style={{width: '100%'}}
                                color={color}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    col: {
        flex: 1,
    },
    card: {},
    sessionsIcon: {
        width: size.bigIcon,
        height: size.bigIcon,
    },
});