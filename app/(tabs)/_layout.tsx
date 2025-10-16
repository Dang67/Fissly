import {BackHandler} from "react-native";
import {useCustomColors} from "@/hooks/useCustomColors";
import {Icon, NativeTabs, VectorIcon} from "expo-router/unstable-native-tabs";
import {useFocusEffect} from "@react-navigation/native";
import {useCallback} from "react";
import {Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
    const colors = useCustomColors();
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                return true;
            };

            const subscription = BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );

            return () => subscription.remove();
        }, [])
    );

    return (
        <NativeTabs
            labelVisibilityMode={'labeled'}
            minimizeBehavior={'onScrollDown'}
            tintColor={colors.tint}
            disableTransparentOnScrollEdge
            backBehavior={'none'}
        >
            <NativeTabs.Trigger
                name={'home'}
                disableScrollToTop={false}
                options={{title: 'Trang chủ'}}
            >
                <Icon src={<VectorIcon family={Ionicons} name={'home'}/>}/>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger
                name={'daily'}
                disableScrollToTop={false}
                options={{title: 'Hàng ngày'}}
            >
                <Icon src={<VectorIcon family={Ionicons} name='calendar'/>}/>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger
                name={'knowledge'}
                disableScrollToTop={false}
                options={{title: 'Khám phá'}}
            >
                <Icon src={<VectorIcon family={Ionicons} name='newspaper'/>}/>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger
                name={'profile'}
                disableScrollToTop={false}
                options={{title: 'Hồ sơ'}}
            >
                <Icon src={<VectorIcon family={Ionicons} name='person'/>}/>
            </NativeTabs.Trigger>
        </NativeTabs>
    );
};