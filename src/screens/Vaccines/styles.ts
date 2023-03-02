import { AlignRight } from 'phosphor-react-native'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 5,
        margin: 14,
        backgroundColor: '#2A65C8',
        borderRadius: 15
    },
    textTitle: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    },
    textVaccines: {
        color: '#FFF',
        fontSize: 24,
    },
   
    viewText: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: "center",
    },
    viewLine: {
        borderWidth: 2,
        borderColor: "#ffffff",
        width: "20%",
        height: 1,
        justifyContent: 'center'
    }

})