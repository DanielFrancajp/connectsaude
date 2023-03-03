import { AlignRight } from 'phosphor-react-native'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        margin: 14,
        backgroundColor: '#2A65C8',
        borderRadius: 15
    },
    textTitle: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textVaccines: {
        color: '#FFF',
        fontSize: 24,
        marginHorizontal: 16,
    },

    viewText: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    viewLine: {
        borderWidth: 2,
        borderColor: "#ffffff",
        width: "20%",
        height: 1,
        justifyContent: 'center'
    }

})