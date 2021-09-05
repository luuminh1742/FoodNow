import React, { useRef, useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
    useWindowDimensions,
    ScrollView,
    Image,

} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Util from '../utilities/Util';

export default ModalProps = (props) => {

    const data = props.data;
    const header = () => {

        return (
            <View
                style={styles.header}
            >
                <TouchableOpacity
                    onPress={props.pressHideModal}
                >
                    <Icon
                        name='arrow-back-ios'
                        size={20}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name='favorite-border'
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    const showImages = () => {

        // const images = new Array(6).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');
        const images = data.image;

        const scrollX = useRef(new Animated.Value(0)).current;

        const { width: windowWidth } = useWindowDimensions();

        return (
            <View style={styles.container}>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal={true}
                        style={styles.scrollViewStyle}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX
                                    }
                                }
                            }
                        ], { useNativeDriver: false })}
                        scrollEventThrottle={1}
                    >
                        {images.map((image, imageIndex) => {
                            return (
                                <View
                                    style={{
                                        width: windowWidth,
                                        height: 250,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    key={imageIndex}
                                >
                                    <Image
                                        source={{ uri: image }}
                                        style={styles.card}
                                    />
                                </View>
                            );
                        })}
                    </ScrollView>
                    <View style={styles.indicatorContainer}>
                        {images.map((image, imageIndex) => {
                            const width = scrollX.interpolate({
                                inputRange: [
                                    windowWidth * (imageIndex - 1),
                                    windowWidth * imageIndex,
                                    windowWidth * (imageIndex + 1)
                                ],
                                outputRange: [8, 16, 8],
                                extrapolate: "clamp"
                            });
                            return (
                                <Animated.View
                                    key={imageIndex}
                                    style={[styles.normalDot, { width }]}
                                />
                            );
                        })}
                    </View>
                </View>
            </View>
        );
    }


    const showContent = () => {

        return (
            <View style={styles.viewContent}>
                <Text style={styles.textName}>{data.name}</Text>
                <Text style={styles.textPrice}>{Util.formatPrice(data.price)} VND</Text>
                <Text style={styles.textDescription}>Description</Text>
                <Text style={styles.textDescriptionDetail}>{data.description}</Text>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#FA4A0C',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding:15,
                        borderRadius:30,
                        marginVertical:15
                    }}
                >
                    <Text
                        style={{ color: '#fff' }}
                    >
                        Add to cart
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.status}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {header()}
                        <ScrollView>
                            {showImages()}
                            {showContent()}
                        </ScrollView>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        //padding: 35,
        // width: '100%',
        // height: '100%',
        flex: 1,
    },

    //==  header
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 35
    },
    // header end
    container: {
        //flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollContainer: {
        height: 300,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 250,
        // overflow: "hidden",
        // alignItems: "center",
        // justifyContent: "center",
        width: '70%',
        height: '70%'
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "#FA4A0C",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    ////////////////////////////////
    viewContent: {
        paddingHorizontal: 35,
        paddingVertical: 20
    },
    textName: {
        textAlign: "center",
        fontSize: 26,
    },
    textPrice: {
        textAlign: "center",
        fontSize: 20,
        color: '#FA4A0C'
    },
    textDescription: {
        fontSize: 20,
        marginTop: 10
    },
    textDescriptionDetail: {
        color: '#7b7b7d',
        textAlign: 'justify'
    }
});

