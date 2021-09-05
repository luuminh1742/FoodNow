import React from 'react';
import HomeScreen from './HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import LikeScreen from './LikeScreen';
import HistoryScreen from './HistoryScreen';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();
export default MainScreen = () => {

    
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
                component={HomeScreen}
                options={{ header: () => null }}
            />
            <Tab.Screen
                name="Like"
                component={LikeScreen}
                options={{ header: () => null }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ header: () => null }}
            />
            <Tab.Screen
                name="History"
                component={HistoryScreen}
                options={{ header: () => null }}
            />
        </Tab.Navigator>
    );
}