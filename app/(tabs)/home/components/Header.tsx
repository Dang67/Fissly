import {Alert, StyleSheet, TouchableOpacity, View} from "react-native";
import {Image} from "expo-image";
import {borderRadius, imagesOnl, size} from "@/constants/theme";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import CustomText from "@/components/CustomText";
import IconButton from "@/components/IconButton";
import {useCustomColors} from "@/hooks/useCustomColors";
import {homeStr} from "@/constants/strings/homeStr";

export default function Header() {
    const colors = useCustomColors();
    const userName = 'Tên người dùng';
    const today = new Date().toLocaleDateString('vi-VN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <View>
            <View style={styles.rowSpaceBetween}>
                <View>
                    <View style={styles.row}>
                        <TouchableOpacity style={{...styles.bgAvt, backgroundColor: colors.tint}}>
                            <Image
                                style={{...styles.avt, backgroundColor: colors.accent}}
                                source={imagesOnl.defaultAvatar}
                            />
                        </TouchableOpacity>
                        <SpaceHorizontal/>
                        <View>
                            <CustomText style={'description'} text={homeStr.hello + ','}/>
                            <CustomText style={'button'} text={userName + '!'}/>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.row}>
                        <IconButton name='calendar' onPress={() =>
                            Alert.alert('Lịch', 'Bạn vừa nhấn nút lịch',)}/>
                        <SpaceHorizontal/>
                        <IconButton name='notifications' onPress={() =>
                            Alert.alert('Thông báo', 'Bạn vừa nhấn vào thông báo',)}/>
                    </View>
                </View>
            </View>
            <CustomText style={'description'} text={today}/>
        </View>
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
    bgAvt: {
        overflow: 'hidden',
        borderRadius: borderRadius,
    },
    avt: {
        width: size.avatar,
        height: size.avatar,
        borderRadius: borderRadius,
    },
});