import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfileStyle from './styles/ProfileStyle';
import { RadioButton } from 'react-native-paper';

const styles = ProfileStyle;

export default ProfileScreen = () => {
    const [checked, setChecked] = React.useState('first');
    return (
        <View style={styles.container}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 25,
                textAlign: 'center',
                marginBottom: 35
            }}>
                My Profile
            </Text>
            <ScrollView>
                <Text style={{ fontSize: 20 }}>Information</Text>
                <View style={styles.viewInformation}>
                    <Image
                        source={require('../../assets/images/information_avatar.png')}
                        style={{ width: 60, height: 60 }}
                    />
                    <View
                        style={{ marginLeft: 15 }}
                    >
                        <Text style={{ fontSize: 20 }}>Lưu Bá Minh</Text>
                        <Text style={{ color: '#69696b' }}>minhit1742@gmail.com</Text>
                        <Text style={{ color: '#69696b' }}>Yen Hung - Yen Dinh - Thanh Hoa</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 20, marginTop: 20 }}>Payment Method</Text>
                <View style={styles.viewPayment}>
                    <View>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <View style={[styles.card, { backgroundColor: '#F47B0A' }]}>
                                <Image
                                    source={require('../../assets/icons/bi_credit-card-2-front-fill.png')}
                                    style={{ width: 25, height: 25 }}
                                />
                            </View>
                            <Text style={{ fontSize: 20, paddingVertical: 10 }}>Card</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                            <View style={[styles.card, { backgroundColor: '#EB4796' }]}>
                                <Image
                                    source={require('../../assets/icons/bi_credit-card-2-front-fill.png')}
                                    style={{ width: 25, height: 25 }}
                                />
                            </View>
                            <Text style={{ fontSize: 20, paddingVertical: 10 }}>Mobile Money</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <RadioButton
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('third')}
                            />
                            <View style={[styles.card, { backgroundColor: '#0038FF' }]}>
                                <Image
                                    source={require('../../assets/icons/bi_credit-card-2-front-fill.png')}
                                    style={{ width: 25, height: 25 }}
                                />
                            </View>
                            <Text style={{ fontSize: 20, paddingVertical: 10 }}>Pay on delivery</Text>
                        </View>


                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#FA4A0C',
                        padding: 17,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 15
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 18 }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}