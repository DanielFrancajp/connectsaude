import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    contentScheduling: {
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop:15,
       },
    text: {
        color: '#2A65C8',
        fontWeight: 'bold',
        fontSize: 15,
    },
    textList: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    
    contentData:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#0B80C8',
        marginBottom:15

    },
    contentSpecifications: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginHorizontal: 12,
        marginVertical: 7,
        borderWidth: 1,
        borderBottomColor: '#0B80C8',
        borderRadius: 12,
        backgroundColor: "#2A65C8",
        elevation: 8
    },
   

})