import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, View} from "react-native";
import {borderRadiusChild, isIOS, padding} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import Button from "@/components/Button";
import {router, useLocalSearchParams} from "expo-router";
import React, {useState} from "react";
import FooterButtons from "@/app/information/components/FooterButtons";
import {infoStr} from "@/constants/strings/infoStr";

export default function CollectHabitScreen() {
    const colors = useCustomColors();
    const {age, gender} = useLocalSearchParams();

    const [selected, setSelected] = useState<number[]>([]);

    const toggleSelect = (index: number) => {
        setSelected((prevSelected) => {
            const isSelected = prevSelected.includes(index);
            const unknownIndex = infoStr.habit.habits.indexOf('Tôi không biết');
            const unhealthyIndex = infoStr.habit.habits.indexOf('Tôi không có thói quen lành mạnh');

            if (index === unknownIndex) {
                return isSelected ? [] : [unknownIndex];
            }

            if (index === unhealthyIndex) {
                return isSelected ? [] : [unhealthyIndex];
            }

            const filtered = prevSelected.filter((i) => i !== unhealthyIndex && i !== unknownIndex);
            if (isSelected) {
                return filtered.filter((i) => i !== index);
            } else {
                return [...filtered, index];
            }
        });
    };

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
            <View>
                <CustomText style={'title'} color={colors.tint} text={infoStr.habit.title}/>
                {isIOS && <SpaceVertical/>}
                <CustomText style={'paragraph'} color={colors.accent} text={infoStr.habit.des}/>
            </View>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: padding / 2}}>
                            {
                                infoStr.habit.habits.map((option, i) => {
                                    const isSelected = selected.includes(i);
                                    const isUnknown = option === 'Tôi không biết';
                                    const isUnhealthy = option === 'Tôi không có thói quen lành mạnh';
                                    return (
                                        <Button key={option}
                                                color={
                                                    isSelected ?
                                                        (
                                                            isUnhealthy ?
                                                                colors.error :
                                                                (isUnknown ? colors.warning : colors.tint)
                                                        ) :
                                                        undefined
                                                }
                                                label={option}
                                                labelStyle={'description'}
                                                labelColor={isSelected ? colors.textOnButton : colors.textOnBackground}
                                                borderRadiusCustom={borderRadiusChild}
                                                onPress={() => toggleSelect(i)}
                                        />
                                    );
                                })
                            }
                        </View>
                    </View>
                </View>
                <SpaceVertical/>
                <FooterButtons
                    backButton={true}
                    showContinueButton={selected.length > 0}
                    refreshButton={selected.length >= 2}
                    onRefresh={() => setSelected(prevState => {
                        return []
                    })}
                    onPressContinueButton={
                        () => router.push({
                            pathname: '/information/screens/CollectUserHealthGoalsScreen',
                            params: {
                                age: age,
                                gender: gender,
                            },
                        })
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: padding,
        paddingHorizontal: padding,
    },
});