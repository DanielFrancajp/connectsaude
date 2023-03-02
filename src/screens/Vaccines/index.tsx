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

                <Text style={styles.textVaccines}> Dengue ------------------- 250 UNDS</Text>
                <Text style={styles.textVaccines}> Gripe ----------------------- 200 UNDS</Text>
                <Text style={styles.textVaccines}> Hepatite ------------------ 180 UNDS</Text>
                <Text style={styles.textVaccines}> Febre amarela --------- 125 UNDS</Text>
                <Text style={styles.textVaccines}> Covid-19 ------------------ 100 UNDS</Text>

                <View style={{ marginTop: 25 }}>
                    <Text style={styles.textTitle}>
                        Lista de Vacinas já aplicadas
                    </Text>
                </View>
                <Text style={styles.textVaccines}> Antitetânica ---------- 15/04/2019</Text>
                <Text style={styles.textVaccines}> Antitetânica ---------- 10/03/2021</Text>
                <Text style={styles.textVaccines}> Antitetânica ---------- 17/04/2022</Text>



            </View>
            <Button
                button='DOWNLOAD'
                onPress={handleDownload}
                icon
            />

        </>
    )
}