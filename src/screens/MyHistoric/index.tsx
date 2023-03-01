import { useNavigation } from "@react-navigation/native"

import { View, Text, TouchableOpacity } from 'react-native'
import { Header } from "../../components"
import { styles } from './styles'

export function MyHistoric() {

    const navigation = useNavigation()

    return (
        <>
            <Header
                title="Doenças e alergias"
            />

            <View style={styles.contentHistoric}>

                <View >
                    <Text style={styles.text}> Aqui você terá acesso ao histórico de</Text>
                </View>

                <View >
                    <Text style={styles.text}> doenças e alergias que o paciênte possuí</Text>
                </View>
            </View>

            <View style={styles.contentSpecifications}>
                <Text style={styles.text}>  Data</Text>
                    <Text style={styles.text}>Nome</Text>
                <View >
                </View>

            


            </View>
        </>
    )
}