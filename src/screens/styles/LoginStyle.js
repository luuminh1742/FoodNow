import { StyleSheet } from "react-native";

export default LoginStyle = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#f2f2f2'
    },
    // Header
    header: {
        flex: 2,
        height: 380,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    imageLogo: {
        width: 130,
        height: 130,
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        bottom: 0,

        position: 'absolute'
    },
    touchableHeader: {
        width: '33%',
        alignItems: 'center',
        paddingBottom: 5,
        // borderBottomColor:'#FA4A0C',
        // borderBottomWidth:3
    },
    textTouchableHeader: {
        fontSize: 18,

    },
    checkedTouchableHeader: {
        borderBottomColor: '#FA4A0C',
        borderBottomWidth: 3
    },


    // Header end !
    content: {
        flex: 3,
    },

    login: {
        paddingHorizontal: 50,
        paddingTop: 15,
        flex: 1,
    },
    viewForm: {
        //alignItems: 'center',
        justifyContent: 'center',
        //paddingBottom:50
    },
    formGroup: {
        marginVertical: 15
    },
    formLabel:{
        color:'#b1b1b1'
    },
    textInput: {
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingTop: 1
    },
    touchableLoginAndSignUp:{
        backgroundColor: '#FA4A0C',
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
        padding:15,
        marginTop:20
    },
    textTouchableLoginAndSingUp:{
        color:'#fff'
    }
})