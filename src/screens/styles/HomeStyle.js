import { StyleSheet } from "react-native";

export default HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 25
    },
    // header
    header: {
        flexDirection: 'row',
        //height:30,
        justifyContent: 'space-between',
        //backgroundColor:'#0ff'

    },
    iconHeader:{
        width:22,
        height:22,
        top:7
    },
    textHeader:{
        backgroundColor:'#e8e8e8',
        width:'60%',
        textAlign:'center',
        padding:10,
        borderRadius:25
    },
    // header end
    textTitle: {
        fontSize: 37,
        marginTop: 20,
        width: '70%'
    },
    textInputSearch: {
        backgroundColor: '#EFEEEE',
        borderRadius: 30
    },
    search: {
        backgroundColor: '#efeeee',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        marginTop: 20,
    },
    textSearch: {
        color: '#878686',
        marginLeft: 15
    },

    menu: {
        marginTop: 15,
        height: 45,
        marginBottom:0,
    },
    menuItem: {
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuText: {
        fontSize: 17
    },

    selectedMenuItem: {
        borderBottomColor: '#FA4A0C',
        borderBottomWidth: 3,
    },
    selectedMenuText: {
        color: '#FA4A0C'
    },
    
    listFood:{
        //backgroundColor: '#0ff',
        
    },
    imageNotFount:{
        width:170,
        height:170,
    },
    viewNotFound:{
        alignItems: 'center',
        justifyContent: 'center',
        top:-70
    }

})