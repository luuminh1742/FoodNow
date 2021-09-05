import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native'
import LikeStyle from './styles/LikeStyle';
import Header from '../components/Header';

const styles = LikeStyle;

export default LikeScreen = () => {

    const NoLike = () => {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 35
                }}
            >
                <Image
                    source={require('../../assets/images/history.png')}
                    style={{
                        width: 150,
                        height: 150,
                    }}
                    resizeMode='contain'
                />
                <Text
                    style={{ fontSize: 25, paddingVertical: 10 }}
                >
                    No like yet
                </Text>
                <Text style={{ color: '#69696b', textAlign: 'center', padding: 10 }}>Hit the orange button down
                    below to Create an order</Text>
            </View>
        );
    }
    return (
        <View style={{ flex: 1,padding: 25 }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 25,
                textAlign: 'center',
                marginBottom: 35
            }}>
                Favorite Food
            </Text>
            {NoLike()}
        </View>
    );
}