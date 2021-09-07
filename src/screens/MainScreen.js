import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '../components/Tabs';
import Cart from '../components/Cart';

const Stack = createStackNavigator();

export default MainScreen = () => {



    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    header: () => null
                }}
            />
        </Stack.Navigator>
    );
}