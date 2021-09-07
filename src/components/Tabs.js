import React from "react";
import HistoryScreen from "../screens/HistoryScreen";
import HomeScreen from "../screens/HomeScreen";
import LikeScreen from "../screens/LikeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const Tabs = ({ navigation }) => {

    const pressMoveToMap = () => {
        navigation.navigate('Cart')
    }
    const pressMoveToCart = () => {
        navigation.navigate('Cart')
    }

    const homeScreen = () => {
        return (
            <HomeScreen
                navigation={navigation}
                pressMoveToMap={pressMoveToMap}
                pressMoveToCart={pressMoveToCart}
            />

        );
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    color = focused ? '#FA4A0C' : '#ADADAF';
                    size = focused ? 26 : 23;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    } else if (route.name === 'Like') {
                        iconName = 'heart-outlined';
                    } else if (route.name === 'History') {
                        iconName = 'back-in-time';
                    }

                    return (
                        <Icon
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    )
                },
                tabBarShowLabel: false,
                tabBarShowIcon: true,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    elevation: 0

                },

            })}

        >
            <Tab.Screen
                name="Home"
                component={homeScreen}
                options={{ header: () => null }}
            />
            <Tab.Screen
                name="Like"
                component={LikeScreen}
                options={{ header: () => null }}
            />
            <Tab.Screen
                name="History"
                component={HistoryScreen}
                options={{ header: () => null }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ header: () => null }}
            />
        </Tab.Navigator>
    );
}
export default Tabs;