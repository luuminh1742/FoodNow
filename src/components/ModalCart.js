import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListCart from "./ListCart";
import SwipableListButton from './SwipableListButton';


export default ModalCart = (props) => {


    const header = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={props.pressHideModalCart}
                    style={{
                        justifyContent: 'center',
                        position: 'absolute',
                        top: 5,
                        zIndex: 100
                    }}
                >
                    <Icon
                        name='arrow-back-ios'
                        size={20}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '100%'
                }}>Cart</Text>
            </View>
        );
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.status}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {header()}
                    {/* <View style={{ marginTop: 20 }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 10
                        }}>
                            <Image
                                source={require('../../assets/icons/iwwa_swipe.png')}
                                style={{ width: 25, height: 25 }}
                            />
                            <Text>
                                swipe on an item to delete
                            </Text>
                        </View>
                    </View> */}
                    <View style={{ marginTop: 20 }}></View>
                    <ListCart />
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#FA4A0C',
                            borderRadius: 30,
                            padding: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 10
                        }}
                    >
                        <Text style={{ color: '#fff' }}>Complete order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    modalView: {
        backgroundColor: "#f2f2f2",
        padding: 30,
        flex: 1,
    },

});
