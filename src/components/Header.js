import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

export default Header = (props) => {
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                style={styles.icon}
                
            >
                <Icon
                    name='arrow-back-ios'
                    size={20}
                />
            </TouchableOpacity> */}
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    icon: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    }
})