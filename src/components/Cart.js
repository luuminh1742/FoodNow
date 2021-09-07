import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Image,
    PanResponder,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Checkbox } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
    {
        "id": 1,
        "name": "Gà Rán",
        "price": 50000,
        "image": [
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F1-1.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7",
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F1-2.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7",
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F1-3.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7",
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F1-4.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7"
        ],
        "description": "Gà rán miền Nam Hoa Kỳ, hay còn gọi là gà rán, là một món ăn xuất xứ từ miền Nam Hoa Kỳ; nguyên liệu chính là những miếng thịt gà đã được lăn bột rồi chiên trên chảo, chiên ngập dầu, chiên áp suất hoặc chiên chân không. Lớp bột chiên xù sẽ giúp cho miếng gà có một lớp vỏ ngoài giòn rụm, còn phần thịt bên trong vẫn mềm và mọng nước. Nguyên liệu được sử dụng phổ biến nhất là gà thịt.",
        "menuId": 1
    },
    {
        "id": 2,
        "name": "Bún đậu mắm tôm",
        "price": 30000,
        "image": [
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F2-1.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7",
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F2-2.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7",
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F2-3.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7",
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F2-4.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7"
        ],
        "description": "Bún đậu mắm tôm là món ăn đơn giản, dân dã trong ẩm thực miền Bắc Việt Nam. Đây là món thường được dùng như bữa ăn nhẹ, ăn chơi. Thành phần chính gồm có bún tươi, đậu hũ chiên vàng, chả cốm, nem chua, mắm tôm pha chanh, ớt và ăn kèm với các loại rau thơm như tía tô, kinh giới, rau húng, xà lách, cà pháo...[1] Cũng như các món ăn dân gian khác, giá thành rẻ nên được nhiều người giới bình dân ăn nên thu nhập của những người buôn bán những món ăn này khá cao.",
        "menuId": 1
    },
    {
        "id": 3,
        "name": "Gà Popcorn",
        "price": 100000,
        "image": [
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F3-1.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7",
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F3-2.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7",
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F3-3.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7",
            "https://firebasestorage.googleapis.com/v0/b/myapp-6f399.appspot.com/o/images%2FFoods%2F3-4.jpg?alt=media&token=a49befed-b109-4378-8c5e-434cbf233ba7"
        ],
        "description": "Gà Popcorn là một món ăn hấp dẫn không chỉ với trẻ nhỏ, mà ngay cả người lớn cũng đều \"mê mệt\" món gà béo ngon và thơm lừng này. Tuy nhiên, nhiều người thường lo lắng các món chiên rán sử dụng quá nhiều dầu gây béo phì, tăng lượng mỡ máu, ảnh hưởng đến sức khỏe nên đành từ bỏ món ăn khoái khẩu này.",
        "menuId": 1
    },
]

let data = DATA;

const leftButtons = ['btn1', 'btn2', 'btn3'];
const rightButtons = ['btn1', 'btn2'];
const btnWidth = 60;
const offset = [-btnWidth * rightButtons.length, 0];

export default Cart = ({ navigation }) => {



    const header = () => {
        return (
            <View style={{ flexDirection: 'row', padding: 35, justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        justifyContent: 'center',

                    }}
                >
                    <Icon
                        name='arrow-back-ios'
                        size={25}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    //width: '100%'
                }}>Cart</Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        justifyContent: 'center',

                    }}
                >
                    <Icon
                        name='verified'
                        size={25}
                        color='#FA4A0C'
                    />
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            {header()}
            <ScrollView style={{ marginHorizontal: 35 }}>
                {data.map((item, index) => (
                    <CartItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        image={item.image[0]}
                    />
                ))}
            </ScrollView>
            <TouchableOpacity
                style={{
                    backgroundColor: '#FA4A0C',
                    borderRadius: 30,
                    padding: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 15,
                    marginHorizontal:35
                }}
            >
                <Text style={{ color: '#fff' }}>Complete order</Text>
            </TouchableOpacity>
        </View>

    )
}

const CartItem = (props) => {
    let panValue = { x: 0, y: 0 };
    let isOpenState = useRef(false).current;
    const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const itemTranslate = pan.x.interpolate({ inputRange: offset, outputRange: offset, extrapolate: 'clamp' });
    const translateRightBtns = pan.x.interpolate({ inputRange: [0, rightButtons.length * btnWidth], outputRange: [0, rightButtons.length * btnWidth], extrapolate: 'clamp' });
    useEffect(() => {
        pan.addListener(value => {
            panValue = value;
        });
    }, [])
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => false,
            onMoveShouldSetPanResponderCapture: (e, g) => Math.abs(g.dx) > 10,
            onMoveShouldSetPanResponder: (e, g) => false,
            onPanResponderGrant: () => {
                pan.setOffset({ x: panValue.x, y: panValue.y });
                pan.setValue({ x: 0, y: 0 });
            },
            onPanResponderMove: Animated.event([null, { dx: pan.x }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (e, g) => {
                pan.flattenOffset();
                if (g.vx > 0.5 || g.dx > btnWidth * leftButtons.length / 2) {
                    if (isOpenState && g.dx > 0) {
                        reset();
                        return;
                    }
                    move(false);
                    return;
                }
                if (g.vx < -0.5 || g.dx < -btnWidth * rightButtons.length / 2) {
                    if (isOpenState && g.dx < 0) {
                        reset();
                        return;
                    }
                    move(true);
                    return;
                }
                reset()

            },
            onPanResponderTerminate: () => {
                reset();
            },
        }),
    ).current;
    const reset = () => {
        isOpenState = false;
        Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
            bounciness: 0
        }).start();
    }
    const move = (toLeft) => {
        isOpenState = true;
        Animated.spring(pan, {
            toValue: { x: toLeft ? -btnWidth * rightButtons.length : btnWidth * leftButtons.length, y: 0 },
            useNativeDriver: true,
            bounciness: 0
        }).start();
    }
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.btnContainer, { transform: [{ translateX: translateRightBtns }], alignSelf: 'flex-end' }]}>

                <TouchableOpacity
                    onPress={reset}
                    style={styles.btn}
                >
                    <Icon
                        name='favorite-border'
                        size={25}
                        color='#FA4A0C'
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={reset}
                    style={styles.btn}
                >
                    <Icon
                        name='restore-from-trash'
                        size={25}
                        color='#f00'
                    />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.item, { transform: [{ translateX: itemTranslate }] }]} {...panResponder.panHandlers} >

                <View
                    style={{ alignItems: 'center', justifyContent: 'center', paddingRight: 10 }}
                >
                    <Checkbox
                        style={{ alignSelf: "center", }}
                    />
                </View>


                <Image
                    source={{ uri: props.image }}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50
                    }}
                />
                <View
                    style={{
                        marginLeft: 10
                    }}
                >
                    <Text style={{ fontSize: 18 }}>{Util.formatName(props.name)}</Text>
                    <Text style={{ color: '#FA4A0C', paddingVertical: 5 }}>{Util.formatPrice(props.price)} VND</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '75%'
                    }}>
                        <View
                            style={{
                                backgroundColor: '#FA4A0C',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                padding: 2,
                                width: 70,
                                borderRadius: 50
                            }}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#fff' }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ color: '#fff' }}>1</Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#fff' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        marginBottom: 3,
        marginVertical: 10,
        backgroundColor: "#f2f2f2",
        //alignItems:'center'
    },
    item: {
        height: '100%',
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        flexDirection: 'row',
    },
    txt: {
        color: '#000',
        letterSpacing: 1
    },
    btnContainer: {
        height: '100%',
        position: 'absolute',
        flexDirection: 'row',
        paddingVertical: 10
    },
    btn: {
        height: '100%',
        width: btnWidth,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
