import React, { useEffect, useState } from 'react'
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ScrollView
} from 'react-native'
import LoginStyle from './styles/LoginStyle'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './MainScreen';
import NoInternet from './NoInternet';
import NetInfo from "@react-native-community/netinfo";

const Stack = createStackNavigator();
const styles = LoginStyle;

const Login = (props) => {


    return (
        <ScrollView style={styles.login}>

            <View style={styles.viewForm}>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Email address</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity>
                    <Text style={{ color: '#FA4A0C' }}>Forgot Password</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.touchableLoginAndSignUp}
                onPress={props.pressLoginHandler}
            >
                <Text style={styles.textTouchableLoginAndSingUp}>Login</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const SignUp = () => {
    return (
        <ScrollView style={styles.login}>

            <View style={styles.viewForm}>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Email address</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Phone Number</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='phone-pad'
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry
                    />
                </View>

            </View>

            <TouchableOpacity
                style={styles.touchableLoginAndSignUp}
            >
                <Text style={styles.textTouchableLoginAndSingUp}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const viewMain = ({ navigation }) => {
    const [checkSwitch, setCheckSwitch] = useState(0);
    const [statusScreen, setStatusScreen] = useState(true);
    const pressLogin = () => {
        NetInfo.addEventListener(state => {
            if (state.isConnected) {
                navigation.navigate('Main');
            } else {
                navigation.navigate('NoInternet');
            }
        });

    }
    useEffect(() => {
        if (statusScreen) {
            NetInfo.addEventListener(state => {
                if (!state.isConnected) {
                    navigation.navigate('NoInternet')
                }
            });
        }

        return () => {
            setStatusScreen(false);
        }

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.imageLogo}
                    source={require('../../assets/images/logo.png')}
                />
                <View style={styles.viewButton}>
                    <TouchableOpacity
                        style={[
                            styles.touchableHeader,
                            checkSwitch === 0 ? styles.checkedTouchableHeader : {}
                        ]}
                        onPress={() => setCheckSwitch(0)}
                    >
                        <Text style={styles.textTouchableHeader}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.touchableHeader,
                            checkSwitch === 1 ? styles.checkedTouchableHeader : {}
                        ]}
                        onPress={() => setCheckSwitch(1)}
                    >
                        <Text style={styles.textTouchableHeader}>
                            Sign-up
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.content}>
                {
                    checkSwitch === 0 ?
                        <Login
                            pressLoginHandler={pressLogin}
                        /> : <SignUp />
                }
            </View>
        </View>
    );
}

export default LoginScreen = () => {


    return (
        <NavigationContainer
            independent={true}
        >
            <Stack.Navigator>
                <Stack.Screen
                    name="viewMain"
                    component={viewMain}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="NoInternet"
                    component={NoInternet}
                    options={{
                        header: () => null
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

