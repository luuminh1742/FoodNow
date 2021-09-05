import React from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Util from '../utilities/Util';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ListCart = () => {

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

    const renderItem = (item) => {

        return (
            <View
                key={item.id}
                style={{
                    backgroundColor: '#fff',
                    marginBottom: 10,
                    borderRadius: 20,
                    padding: 20,
                    flexDirection: 'row',
                }}
            >
                <Image
                    source={{ uri: item.image[0] }}
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
                    <Text style={{ fontSize: 18 }}>{Util.formatName(item.name)}</Text>
                    <Text style={{ color: '#FA4A0C', paddingVertical: 5 }}>{Util.formatPrice(item.price)} VND</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width:'75%'
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

                        <TouchableOpacity>
                            <Icon
                                name='favorite-border'
                                size={25}
                                color='#FA4A0C'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                name='restore-from-trash'
                                size={25}
                                color='#f00'
                            />
                        </TouchableOpacity>
                    </View>



                </View>
            </View>
        );
    }

    return (
        <ScrollView>
            {
                DATA.map((item) => renderItem(item))
            }
        </ScrollView>
    )
}