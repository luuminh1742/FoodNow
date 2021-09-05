import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

export default NoInternet = ({ navigation }) => {


    const pressTryAgain = () => {
        NetInfo.addEventListener(state => {
            if (state.isConnected) {
                navigation.goBack();
            }
        });
    }

    

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#F5F5F8',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
        }}>
            <Image
                source={require('../../assets/images/eva_wifi-off-fill.png')}
                resizeMode='contain'
                style={{ width: 150, height: 150 }}
            />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 25,
                paddingVertical: 10
            }}>No internet connection</Text>
            <Text style={{
                textAlign: 'center',
                paddingVertical: 10
            }}>
                Your internet connection is currently
                not available please check or try again.
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: '#FA4A0C',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                    width: '100%',
                    marginVertical: 10
                }}
                onPress={pressTryAgain}
            >
                <Text
                    style={{ color: '#fff' }}
                >Try again</Text>
            </TouchableOpacity>
        </View>
    );
}