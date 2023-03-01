import { useNavigation } from "@react-navigation/native"

import { View, Text, TouchableOpacity } from 'react-native'
import { Header } from "../../components"
import { styles } from './styles'

export function MyHistoric() {

    const navigation = useNavigation()

    return (
        <>
            <Header
                title="DOENÇAS E ALERGIAS"
                isHome={false}
            />

            <View style={styles.container}>

                <View style={styles.contentHistoric}>
                    <Text style={styles.text}> Aqui você terá acesso ao histórico de</Text>
                    <Text style={styles.text}> doenças e alergias que o paciênte possuí</Text>
                </View>


                <View style={styles.contentTitle}>
                    <View >
                        <Text style={styles.text}> Data da descoberta</Text>
                    </View>
                    <Text style={styles.text}> Doenças</Text>
                </View>

                <View style={styles.contentEspecifications}>
                    <Text style={styles.text}> 05/01/2000 </Text>
                    <View style={{ paddingRight: 25 }} >
                        <Text style={styles.text}>Diabetes</Text>
                    </View>

                </View>
                <View style={styles.contentEspecifications}>
                    <Text style={styles.text}> 07/05/2015 </Text>
                    <View >
                        <Text style={styles.text}>Hipertensão</Text>
                    </View>


                </View>
                <View style={styles.contentEspecifications}>
                    <Text style={styles.text}> 05/01/2021 </Text>
                    <View >
                        <Text style={styles.text}>Osteoporose</Text>
                    </View>

                </View>

                <View style={styles.contentTitle}>
                    <Text style={styles.text}> ALERGIAS</Text>
                </View>

                <View style={styles.contentEspecifications1}>
                    <Text style={styles.text}> 15/05/2010 </Text>
                    <View style={{ marginRight: 30 }}>
                        <Text style={styles.text}>Ácaro</Text>
                    </View>
                </View>

                <View style={styles.contentSymptoms}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}> Sintomas: Espirros; Nariz entupido ou coriza; Olhos </Text>
                        <View style={{ marginLeft: 5, marginBottom: 16 }}>
                            <Text style={styles.text}>lacrimejando com tom avermelhado.</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.contentEspecifications1}>
                    <Text style={styles.text}> 15/05/2010 </Text>
                    <View style={{ marginRight: 30 }}>
                        <Text style={styles.text}>Pelo canino</Text>
                    </View>
                </View>



                <View style={styles.contentSymptoms}>
                    <View style={{ marginLeft: 10, marginTop: 16 }}>
                        <Text style={styles.text}> Sintomas: Espirros; Dificuldade para respirar</Text>
                        <View style={{ marginLeft: 5 }}>
                        </View>
                    </View>
                </View>

                <View style={{ marginLeft: 10, marginTop: 16, alignItems: "center", paddingBottom: 10 }}>
                    <View style={{ paddingTop: 5, paddingBottom: 5 }}>
                        <Text style={styles.text}> OBSERVAÇÃO:</Text>
                    </View>
                    <Text style={styles.text}> Para descobrir a causa específica de seu problema, </Text>
                    <View style={{ marginLeft: 5 }}>
                        <Text style={styles.text}>consulte sempre o profissional de saúde.</Text>
                    </View>
                </View>
            </View>
        </>
    )
}