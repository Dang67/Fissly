import {SafeAreaView} from "react-native-safe-area-context";
import {Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {isIOS, padding, textStyles} from "@/constants/theme";
import {useCustomColors} from "@/hooks/useCustomColors";
import CustomText from "@/components/CustomText";
import SpaceVertical from "@/components/SpaceVertical";
import React, {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import Button from "@/components/Button";
import Card from "@/components/Card";
import calculateBmi from "@/app/information/functions/calculateBmi";
import FooterButtons from "@/app/information/components/FooterButtons";
import {router, useLocalSearchParams} from "expo-router";
import getBmiInfo from "@/app/information/functions/getBmiInfo";
import calculateIdealWeight from "@/app/information/functions/calculateIdealWeight";
import convertUnit, {UnitType} from "@/app/information/functions/unitConversion";
import {infoStr} from "@/constants/strings/infoStr";

export default function CollectWeightAndHeightScreen() {
    const colors = useCustomColors();
    const {goal} = useLocalSearchParams();
    const parsedGoal = goal ? JSON.parse(goal as string) : null;

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [heightUnit, setHeightUnit] = useState<string>(infoStr.weightAndHeight.unit.height.cm);
    const [toggleHeight, setToggleHeight] = useState<boolean>(true);
    const [weightUnit, setWeightUnit] = useState<string>(infoStr.weightAndHeight.unit.weight.kg);
    const [toggleWeight, setToggleWeight] = useState<boolean>(true);

    const heightNum = heightUnit === infoStr.weightAndHeight.unit.height.cm ?
        parseFloat(height.replace(',', '.')) :
        convertUnit(parseFloat(height.replace(',', '.')), UnitType.ftToCm);
    const weightNum = weightUnit === infoStr.weightAndHeight.unit.weight.kg ?
        parseFloat(weight.replace(',', '.')) :
        convertUnit(parseFloat(weight.replace(',', '.')), UnitType.lbToKg);
    const bmi = height && weight ? calculateBmi(heightNum, weightNum) : -1;
    const {text: bmiDes, color: bmiColor} = getBmiInfo(bmi);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
                <View>
                    <CustomText style={'title'} color={colors.tint} text={infoStr.weightAndHeight.title}/>
                    {isIOS && <SpaceVertical/>}
                    <CustomText style={'paragraph'} color={colors.accent} text={infoStr.weightAndHeight.des}/>
                    <SpaceVertical/>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 3}}>
                            <TextInput
                                style={{
                                    ...styles.input,
                                    color: heightNum >= 57 && heightNum <= 251 ? colors.textOnBackground : colors.error,
                                }}
                                keyboardType={'numeric'}
                                placeholder={infoStr.weightAndHeight.input.height}
                                value={height}
                                onChangeText={setHeight}
                                clearButtonMode={'while-editing'}
                            />
                        </View>
                        <View style={{flex: isIOS ? 2 : 1}}>
                            {
                                isIOS ?
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 1}}>
                                                    <Button
                                                        flex={1}
                                                        color={
                                                            heightUnit === infoStr.weightAndHeight.unit.height.cm ?
                                                                colors.tint :
                                                                undefined
                                                        }
                                                        label={infoStr.weightAndHeight.unit.height.cm}
                                                        labelColor={
                                                            heightUnit === infoStr.weightAndHeight.unit.height.cm ?
                                                                colors.textOnButton :
                                                                colors.textOnBackground
                                                        }
                                                        onPress={() => {
                                                            setHeightUnit(infoStr.weightAndHeight.unit.height.cm);
                                                            setToggleHeight(true);
                                                            setHeight(
                                                                !toggleHeight ? (
                                                                    height ?
                                                                        convertUnit(
                                                                            parseFloat(height.replace(',', '.')),
                                                                            UnitType.ftToCm
                                                                        ).toString() :
                                                                        ''
                                                                ) : height
                                                            );
                                                        }}
                                                    />
                                                </View>
                                                <View style={{width: padding / 4}}/>
                                                <View style={{flex: 1}}>
                                                    <Button
                                                        flex={1}
                                                        color={
                                                            heightUnit === infoStr.weightAndHeight.unit.height.ft ?
                                                                colors.tint :
                                                                undefined
                                                        }
                                                        label={infoStr.weightAndHeight.unit.height.ft}
                                                        labelColor={
                                                            heightUnit === infoStr.weightAndHeight.unit.height.ft ?
                                                                colors.textOnButton :
                                                                colors.textOnBackground
                                                        }
                                                        onPress={() => {
                                                            setHeightUnit(infoStr.weightAndHeight.unit.height.ft);
                                                            setToggleHeight(false);
                                                            setHeight(
                                                                toggleHeight ? (
                                                                    height ?
                                                                        convertUnit(
                                                                            parseFloat(height.replace(',', '.')),
                                                                            UnitType.cmToFt
                                                                        ).toString() :
                                                                        ''
                                                                ) : height
                                                            );
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    <Picker
                                        style={{width: '100%'}}
                                        selectedValue={heightUnit}
                                        onValueChange={(value) => {
                                            setHeightUnit(value)
                                            if (value === infoStr.weightAndHeight.unit.height.cm) {
                                                setToggleHeight(true);
                                                setHeight(
                                                    !toggleHeight ? (
                                                            height ?
                                                                convertUnit(
                                                                    parseFloat(height.replace(',', '.')),
                                                                    UnitType.ftToCm
                                                                ).toString() :
                                                                ''
                                                        ) :
                                                        height
                                                );
                                            } else {
                                                setToggleHeight(false);
                                                setHeight(
                                                    toggleHeight ? (
                                                            height ?
                                                                convertUnit(
                                                                    parseFloat(height.replace(',', '.')),
                                                                    UnitType.cmToFt
                                                                ).toString() :
                                                                ''
                                                        ) :
                                                        height
                                                );
                                            }
                                        }}
                                        mode={'dropdown'}
                                    >
                                        <Picker.Item
                                            label={infoStr.weightAndHeight.unit.height.cm}
                                            value={infoStr.weightAndHeight.unit.height.cm}
                                        />
                                        <Picker.Item
                                            label={infoStr.weightAndHeight.unit.height.ft}
                                            value={infoStr.weightAndHeight.unit.height.ft}
                                        />
                                    </Picker>
                            }
                        </View>
                    </View>
                    {
                        heightNum < 57 ?
                            <>
                                {isIOS && <SpaceVertical/>}
                                <CustomText
                                    style={'description'}
                                    color={colors.error}
                                    text={infoStr.minHeight}/>
                            </> :
                            heightNum > 251 ?
                                <>
                                    {isIOS && <SpaceVertical/>}
                                    <CustomText
                                        style={'description'}
                                        color={colors.error}
                                        text={infoStr.maxHeight}/>
                                </> :
                                null
                    }
                    {isIOS && <SpaceVertical/>}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 3}}>
                            <TextInput
                                style={{
                                    ...styles.input,
                                    color: weightNum >= 2.1 && weightNum <= 635 ? colors.textOnBackground : colors.error,
                                }}
                                keyboardType={'numeric'}
                                placeholder={infoStr.weightAndHeight.input.weight}
                                value={weight}
                                onChangeText={setWeight}
                                clearButtonMode={'while-editing'}
                            />
                        </View>
                        <View style={{flex: isIOS ? 2 : 1}}>
                            {
                                isIOS ?
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 1, alignItems: 'center'}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{flex: 1}}>
                                                    <Button
                                                        flex={1}
                                                        color={
                                                            weightUnit === infoStr.weightAndHeight.unit.weight.kg ?
                                                                colors.tint :
                                                                undefined
                                                        }
                                                        label={infoStr.weightAndHeight.unit.weight.kg}
                                                        labelColor={
                                                            weightUnit === infoStr.weightAndHeight.unit.weight.kg ?
                                                                colors.textOnButton :
                                                                colors.textOnBackground
                                                        }
                                                        onPress={() => {
                                                            setWeightUnit(infoStr.weightAndHeight.unit.weight.kg);
                                                            setToggleWeight(true);
                                                            setWeight(
                                                                !toggleWeight ? (
                                                                        weight ?
                                                                            convertUnit(
                                                                                parseFloat(
                                                                                    weight.replace(',', '.')),
                                                                                UnitType.lbToKg
                                                                            ).toString() :
                                                                            ''
                                                                    ) :
                                                                    weight
                                                            );
                                                        }}
                                                    />
                                                </View>
                                                <View style={{width: padding / 4}}/>
                                                <View style={{flex: 1}}>
                                                    <Button
                                                        flex={1}
                                                        color={
                                                            weightUnit === infoStr.weightAndHeight.unit.weight.lb ?
                                                                colors.tint :
                                                                undefined
                                                        }
                                                        label={infoStr.weightAndHeight.unit.weight.lb}
                                                        labelColor={
                                                            weightUnit === infoStr.weightAndHeight.unit.weight.lb ?
                                                                colors.textOnButton :
                                                                colors.textOnBackground
                                                        }
                                                        onPress={() => {
                                                            setWeightUnit(infoStr.weightAndHeight.unit.weight.lb);
                                                            setToggleWeight(false);
                                                            setWeight(
                                                                toggleWeight ? (
                                                                        weight ?
                                                                            convertUnit(
                                                                                parseFloat(weight.replace(',', '.')),
                                                                                UnitType.kgToLb
                                                                            ).toString() :
                                                                            ''
                                                                    ) :
                                                                    weight
                                                            );
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    <Picker
                                        style={{width: '100%'}}
                                        selectedValue={weightUnit}
                                        onValueChange={(value) => {
                                            setWeightUnit(value)
                                            if (value === infoStr.weightAndHeight.unit.weight.kg) {
                                                setToggleWeight(true);
                                                setWeight(
                                                    !toggleWeight ? (
                                                            weight ?
                                                                convertUnit(
                                                                    parseFloat(weight.replace(',', '.')),
                                                                    UnitType.lbToKg
                                                                ).toString() :
                                                                ''
                                                        ) :
                                                        weight
                                                );
                                            } else {
                                                setToggleWeight(false);
                                                setWeight(
                                                    toggleWeight ? (
                                                            weight ?
                                                                convertUnit(
                                                                    parseFloat(weight.replace(',', '.')),
                                                                    UnitType.kgToLb
                                                                ).toString() :
                                                                ''
                                                        ) :
                                                        weight
                                                );
                                            }
                                        }}
                                        mode={'dropdown'}
                                    >
                                        <Picker.Item
                                            label={infoStr.weightAndHeight.unit.weight.kg}
                                            value={infoStr.weightAndHeight.unit.weight.kg}
                                        />
                                        <Picker.Item
                                            label={infoStr.weightAndHeight.unit.weight.lb}
                                            value={infoStr.weightAndHeight.unit.weight.lb}
                                        />
                                    </Picker>
                            }
                        </View>
                    </View>
                    {
                        weightNum < 2.1 ?
                            <>
                                {isIOS && <SpaceVertical/>}
                                <CustomText
                                    style={'description'}
                                    color={colors.error}
                                    text={infoStr.minWeight}/>
                            </> :
                            weightNum > 635 ?
                                <>
                                    {isIOS && <SpaceVertical/>}
                                    <CustomText
                                        style={'description'}
                                        color={colors.error}
                                        text={infoStr.maxWeight}/>
                                </> :
                                null
                    }
                    <SpaceVertical/>
                    {
                        heightNum >= 57 && heightNum <= 251 && weightNum >= 2.1 && weightNum <= 635 ?
                            <>
                                <Card>
                                    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                                        <CustomText style={'button'} text={infoStr.weightAndHeight.bmiCard.title}/>
                                        <CustomText
                                            style={'title'}
                                            color={bmiColor}
                                            text={`${bmi}`}/>
                                    </View>
                                    {isIOS && <SpaceVertical/>}
                                    <CustomText style={'paragraph'} text={bmiDes}/>
                                </Card>
                                <SpaceVertical/>
                                <Card>
                                    <CustomText style={'button'} text={'Cân nặng lý tưởng dành cho bạn là:'}/>
                                    {isIOS && <SpaceVertical/>}
                                    <View style={{alignItems: 'center'}}>
                                        <CustomText
                                            style={'title'}
                                            color={colors.tint}
                                            text={calculateIdealWeight(heightNum) + ' ' + infoStr.weightAndHeight.unit.weight.kg}
                                        />
                                    </View>
                                </Card>
                            </> : null
                    }
                </View>
                <FooterButtons
                    backButton={true}
                    refreshButton={height !== '' && weight !== ''}
                    onRefresh={() => {
                        setHeight('');
                        setHeightUnit(infoStr.weightAndHeight.unit.height.cm);
                        setToggleHeight(true);
                        setWeight('');
                        setWeightUnit(infoStr.weightAndHeight.unit.weight.kg);
                        setToggleWeight(true);
                    }}
                    showContinueButton={heightNum >= 57 && heightNum <= 251 && weightNum >= 2.1 && weightNum <= 635}
                    onPressContinueButton={
                        () => router.push({
                            pathname: '/information/screens/CollectWeeklyGoalScreen',
                            params: {goal: JSON.stringify(parsedGoal)},
                        })
                    }
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: padding,
        paddingHorizontal: padding,
    },
    input: {
        ...textStyles.title,
        textAlign: 'left',
    },
});