import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FormatPrice from '../utilities/FormatPrice';
import Util from '../utilities/Util';


export default ItemProduct = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.showProductDetail}
        >
            <Image
                source={{uri:props.image}}
                style={styles.imageProduct}
            />
            <Text style={styles.textNameProduct}>{Util.formatName(props.name,20)}</Text>
            <Text style={styles.textPriceProduct}>{Util.formatPrice(props.price)} VND</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        borderRadius:30,
        margin:10,
        padding:20,
        width:150,
        alignItems: 'center',
        borderWidth:0.5,
        borderColor:'#eaeaea'
    },
    imageProduct:{
        borderRadius:100,
        width:120,
        height:120,
    },
    textNameProduct:{
        marginTop:10,
        fontWeight:'bold',
        fontSize:17,
        textAlign: 'center',
        height:50
    },
    textPriceProduct:{
        marginTop:10,
        color:'#FA4A0C'
    }
})