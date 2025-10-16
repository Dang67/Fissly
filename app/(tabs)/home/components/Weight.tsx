import {StyleSheet, View} from "react-native";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import Card from "@/components/Card";
import IconButton from "@/components/IconButton";
import Button from "@/components/Button";

export default function Weight() {
    return (
        <View>
            <CustomText style={'button'} text={'Theo dõi cân nặng'}/>
            <SpaceVertical/>
            <Card style={styles.card}>
                <Button
                    label={'Ghi lại cân nặng'}
                    icon='pencil'
                    onPress={() => {}}
                />
                <View style={{height: 300, alignItems: 'center', justifyContent: 'center'}}>
                    <CustomText text={'Nơi hiển thị biểu đồ cân nặng 7 ngày gần đây'}/>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'flex-start',
    },
});