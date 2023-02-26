import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
        
    },
    containerInput: {
        width: '100%',
    },
    Form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textEnter: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        color: '#2A65C8',
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },

    buttonRegister: {
        flexDirection: 'row',
        paddingRight: 10,
        paddingBottom: 10,
    },

    iconEye: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 290,
        marginTop: -50,

    },
    Logos: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 130,
        justifyContent: 'space-around'
    },
    imageLogin: {
        alignItems: "center", 
        justifyContent: 'center',
    }
  

})