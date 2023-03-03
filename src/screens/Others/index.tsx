import React from 'react'

import { useNavigation } from '@react-navigation/native'

import {
    View,
    Text
} from 'react-native'

import { styles } from './styles'
import { CardHome } from '../../components'
import { Header } from '../../components'

export function Others() {

    const navigation = useNavigation();

    function handleEletronicMedicalRecord(){
        navigation.navigate('eletronicmedicalrecord')
    }

    function handleMedicine(){
        navigation.navigate('medicines')
    }

    function goBack(){
        navigation.goBack()
    }


    return (
        <>
            <Header
                isHome={false}
                title='OUTROS'
                onPress={goBack}
                
            />
            <View style={styles.container}>
                <CardHome
                    title='Prontuário eletrônico'
                    onPress={handleEletronicMedicalRecord}
                />

                <CardHome
                    title='Medicamentos'
                    onPress={handleMedicine}
                />
            </View>
        </>
    )
}

