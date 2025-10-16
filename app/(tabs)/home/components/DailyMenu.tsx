import {StyleSheet, View} from "react-native";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import SpaceHorizontal from "@/components/SpaceHorizontal";
import DailyMenuCard from "@/app/(tabs)/home/sub-components/DailyMenuCard";

export default function DailyMenu() {
    // đổ dữ liệu
    // buổi sáng
    const totalMor = 1132;
    const mor = 947;
    const morData = ['Cơm', 'Cá', 'Rau'];
    // buổi chiều
    const totalAft = 1234;
    const aft = 1156;
    const aftData = ['Cơm', 'Cá', 'Rau'];
    // buổi tối
    const totalEve = 923;
    const eve = 783;
    const eveData = ['Cơm', 'Cá', 'Rau'];
    // thức ăn vặt
    const totalSnack = 598;
    const snack = 354;
    const snackData = ['Oshi', 'Gà rán'];

    return (
        <View>
            <CustomText style={'button'} text={'Theo dõi thực đơn hàng ngày'}/>
            <SpaceVertical/>
            <View style={styles.row}>
                <View style={styles.col}>
                    <DailyMenuCard
                        value={mor}
                        total={totalMor}
                        session={0}
                        ssData={morData.map(value => ' ' + value).toString()}
                        onAddPress={() => {
                        }}
                    />
                </View>
                <SpaceHorizontal/>
                <View style={styles.col}>
                    <DailyMenuCard
                        value={aft}
                        total={totalAft}
                        session={1}
                        ssData={aftData.map(value => ' ' + value).toString()}
                        onAddPress={() => {
                        }}
                    />
                </View>
            </View>
            <SpaceVertical/>
            <View style={styles.row}>
                <View style={styles.col}>
                    <DailyMenuCard
                        value={eve}
                        total={totalEve}
                        session={2}
                        ssData={eveData.map(value => ' ' + value).toString()}
                        onAddPress={() => {
                        }}
                    />
                </View>
                <SpaceHorizontal/>
                <View style={styles.col}>
                    <DailyMenuCard
                        value={snack}
                        total={totalSnack}
                        session={3}
                        ssData={snackData.map(value => ' ' + value).toString()}
                        onAddPress={() => {
                        }}
                    />
                </View>
            </View>
        </View>
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
});