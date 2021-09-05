import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemProduct from './ItemProduct';
const data = require('../fake-data.json');

export default ModalSearch = (props) => {

  const [dataSearch, setDataSearch] = useState([]);

  const [textSearch, setTextSearch] = useState('');

  const ItemNotFound = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 35,
          //backgroundColor:'#fff',
          flex: 1
        }}
      >

        <Image
          source={require('../../assets/images/feather_search.png')}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Item not found</Text>
        <Text style={{ color: '#69696b', textAlign: 'center' }}>
          Try searching the item with a different keyword.
        </Text>
      </View>
    );
  }

  const ItemFound = () => {


    const renderItemSearch = ({ item }) => {
      return (
        <ItemProduct
          image={item.image[0]}
          name={item.name}
          price={item.price}
          showProductDetail={() => { }}
        />
      );
    }

    return (
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: '#f9f9f9',
          flex: 1,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Text style={{
          textAlign: 'center',
          fontSize: 20,
          paddingVertical: 15
        }}>
          Found {dataSearch.length} results
        </Text>
        <FlatList
          data={dataSearch}
          renderItem={renderItemSearch}
          numColumns={2}
        />
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
            <View
              style={styles.header}
            >
              <TouchableOpacity
                onPress={props.pressHideModal}
                style={{
                  justifyContent: 'center'
                }}
              >
                <Icon
                  style={{

                  }}
                  name='arrow-back-ios'
                  size={20}
                />
              </TouchableOpacity>

              <TextInput
                style={styles.inputSearch}
                placeholder="Search"
                onChangeText={value => {

                  if (value !== '') {
                    let tmp = data.products.filter((item) => {
                      return item.name.toLowerCase().includes(value.toLowerCase());
                    });
                    setDataSearch(tmp);
                  }

                }}
              />

            </View>
            {
              //textSearch === ''?ItemNotFound(): 
              dataSearch.length === 0 ?
                ItemNotFound()
                : ItemFound()
            }

          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    width: '100%',
    height: '100%',
  },
  //==  header
  header: {
    flexDirection: "row",
    //justifyContent: "space-between",
    //padding: 35,
    paddingHorizontal: 35,
    paddingTop: 30,
    paddingBottom: 35,
    //backgroundColor:'#fff'
  },
  inputSearch: {
    paddingHorizontal: 25,
    backgroundColor: "#efeeee",
    borderRadius: 30,
    width: '90%',
  },

  // header end
})

