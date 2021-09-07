import React, { useEffect, useRef, useState } from 'react';
import {
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import HomeStyle from './styles/HomeStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemProduct from '../components/ItemProduct';
import NetInfo from "@react-native-community/netinfo";
import ModalProduct from '../components/ModalProduct';
import ModalSearch from '../components/ModalSearch';



const styles = HomeStyle;
const data = require('../fake-data.json');


export default HomeScreen = (props) => {


    const [dataProducts, setDataProducts] = useState(data.products);
    const [selectedIdMenu, setSelectedIdMenu] = useState(0);
    const DATA_MENU = data.menu;
    const flatListRef = useRef();

    const header = () => {

        return (
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={props.pressMoveToMap}
                >
                    <Icon
                        style={styles.iconHeader}
                        name='place'
                        size={25}
                    />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Hà Nội</Text>
                <TouchableOpacity
                    onPress={props.pressMoveToCart}
                >
                    <Image
                        source={require('../../assets/icons/shopping-cart.png')}
                        resizeMode='contain'
                        style={styles.iconHeader}
                    />
                </TouchableOpacity>
            </View>
        );
    }


    const search = () => {
        const [modalVisibleSearch, setModalVisibleSearch] = useState(false);
        const showModalSearch = () => {
            setModalVisibleSearch(true);
        }
        return (
            <View>
                <ModalSearch
                    status={modalVisibleSearch}
                    pressHideModal={() => setModalVisibleSearch(false)}
                />
                <TouchableOpacity
                    style={styles.search}
                    onPress={() => { showModalSearch() }}
                >
                    <Icon
                        name='search'
                        size={20}
                    />
                    <Text style={styles.textSearch}>Search</Text>
                </TouchableOpacity>
            </View>
        );
    }


    const menu = () => {



        const pressItemMenuHandler = (id) => {
            setSelectedIdMenu(id);
        }
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={[
                        styles.menuItem,
                        selectedIdMenu === item.id ? styles.selectedMenuItem : undefined
                    ]}
                    onPress={() => {
                        pressItemMenuHandler(item.id);

                    }}
                >
                    <Text style={[
                        styles.menuText,
                        selectedIdMenu === item.id ? styles.selectedMenuText : undefined
                    ]}

                    >{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <FlatList
                data={DATA_MENU}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.menu}
            />
        );
    }



    const listFood = () => {

        const [modalVisible, setModalVisible] = useState(false);
        const [dataModal, setDataModal] = useState({
            name: '',
            price: 0,
            description: '',
            image: []
        });

        const filterData = () => {
            return dataProducts.filter((item) => {
                if (selectedIdMenu === 0) {
                    return true;
                }
                return item.menuId === selectedIdMenu;
            })
        }

        const pressShowProduct = (item) => {
            setModalVisible(true);
            setDataModal(item);
        }

        const renderItem = ({ item }) => {
            return (
                <ItemProduct
                    image={item.image[0]}
                    name={item.name}
                    price={item.price}
                    showProductDetail={() => pressShowProduct(item)}
                />
            );

        }
        const onPressScrollListMessage = () => {
            flatListRef.current.scrollToEnd({ animating: true });
        }

        return (
            filterData().length === 0 ?
                <View style={styles.viewNotFound}>
                    <Image
                        source={require('../../assets/images/no-product-found.png')}
                        style={styles.imageNotFount}
                        resizeMode='contain'
                    />
                </View>
                :
                <View>
                    <ModalProduct
                        status={modalVisible}
                        pressHideModal={() => setModalVisible(false)}
                        data={dataModal}
                    />
                    <FlatList
                        ref={flatListRef}
                        data={filterData()}
                        renderItem={renderItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.listFood}
                    />
                </View>

        );
    }


    const pressItemMenuHandler = () => {
        alert('hello')
    }
    const unsubscribe = NetInfo.addEventListener(state => {
        if (!state.isConnected) {
            //alert('Please connect wifi now!')
        }
    });
    useEffect(() => {
        unsubscribe();
    }, [selectedIdMenu])
    return (
        <View style={styles.container}>
            {header()}
            <Text style={styles.textTitle}>Delicious food for you</Text>
            {search()}
            {menu()}
            {listFood()}
        </View>
    );
}