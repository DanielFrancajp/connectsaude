import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft:5,
        borderBottomWidth: 1,
        borderBottomColor: '#0B80C8',
        // alignItems: 'center',
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    containerWelcome: {
        flexDirection: 'column',
    },

    text: {
        color: '#2A65C8',
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.7
    },


})