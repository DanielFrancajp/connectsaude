import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { View, Text, Alert } from 'react-native'

import { styles } from './styles'
import { Header } from '../../components'
import { Button } from '../../components/Button'

export function Vaccines() {

    const navigation = useNavigation()

    function handleDownload() {
        Alert.alert("Download pdf concluído!")
    }

    function handleGoBack() {
        navigation.goBack()
    }




    return (
        <>
            <Header
                title='CARTEIRA DE VACINAÇÃO'
                isHome={false}
                onPress={handleGoBack}
            />

            <View style={styles.container}>
                <Text style={styles.textTitle}>
                    Lista de Vacinas disponíveis
                </Text>
                <Text style={styles.textTitle}>
                    unidade PSF torre
                </Text>
                <View style={styles.viewText} >
                    <Text style={styles.textVaccines}>Febre a.</Text>
                    <View style={styles.viewLine} />
                    <Text style={styles.textVaccines}>10 UNDS</Text>
                </View>


                <View style={styles.viewText} >
                    <Text style={styles.textVaccines}>Antitetanica</Text>
                    <View style={styles.viewLine} />
                    <Text style={styles.textVaccines}>07 UNDS</Text>
                </View>
                <View style={styles.viewText} >
                    <Text style={styles.textVaccines}>Rubeola</Text>
                    <View style={styles.viewLine} />
                    <Text style={styles.textVaccines}>05 UNDS</Text>
                </View>


                <View style={{ marginTop: 25 }}>
                    <Text style={styles.textTitle}>
                        Lista de Vacinas já aplicadas
                    </Text>
                </View>


                <View style={styles.viewText} >
                    <Text style={styles.textVaccines}>Rubeola</Text>
                    <View style={styles.viewLine} />
                    <Text style={styles.textVaccines}>05 UNDS</Text>
                </View>


            </View>
            <Button
                button='DOWNLOAD'
                onPress={handleDownload}
                icon
            />

        </>
    )
}