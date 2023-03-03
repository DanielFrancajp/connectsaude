import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { View, Text, Image,Alert } from 'react-native'
import { Header } from '../../components'
import { Button } from '../../components/Button'
import { styles } from './styles'

export function Medicines() {

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack()
    }
    function handleDownload(){
        Alert.alert('Download efetuado com sucesso!')
    }

    return (
        <>
            <Header
                isHome={false}
                title="MEDICAMENTOS"
                onPress={handleGoBack}
            />

            <View style={styles.container}>

                <View style={styles.contentTitle}>
                    <Text style={styles.Text}>Aqui você terá acesso aos medicamentos </Text>
                    <Text style={styles.Text}>disponibilizados em seu cadastrado no CNS</Text>
                </View>

                <View style={styles.contentMedicines}>
                    <Image
                        source={require("../../../assets/medicamentos.png")}
                    />
                </View>
                <View style={styles.contentButton}>
                    <Button
                    button='DOWNLOAD'
                    icon
                    onPress={handleDownload}

                    />
                </View>
            </View>
        </>
    )
}