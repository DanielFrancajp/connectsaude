import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ShieldCheck } from 'phosphor-react-native'

import { View, Text, Alert, FlatList } from 'react-native'

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

    const data = [
        { id: '1', Title: 'Rubeola', date: '20/05/2012', icon: 'ShieldCheck' },
        { id: '2', Title: 'Gripe', date: '10/07/2015' },
        { id: '3', Title: 'Téteno', date: '18/04/2012' },
        { id: '4', Title: 'Rubeola', date: '20/05/2012' },
        { id: '5', Title: 'Rubeola', date: '20/05/2012' },
    ]


    return (
        <>
            <Header
                title='CARTEIRA DE VACINAÇÃO'
                isHome={false}
                onPress={handleGoBack}
            />

            <View style={styles.container}>

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.textTitle}>
                        Lista de Vacinas já aplicadas
                    </Text>
                </View>

                <View style={styles.viewText}>
                    <FlatList
                        data={data}
                        extraData={data}
                        renderItem={({ item }) => (
                            
                            <Text style={styles.textVaccines}>{item.Title} {item.date}</Text>

                        )}
                        keyExtrator={item => item.id}
                    />
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