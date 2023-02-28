import React, { useState } from 'react'

import {
    View,
    TextInput,
    Alert

} from 'react-native'

import { styles } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function NewScheduling() {

    const [color, setColor] = useState("")

    function handleDownload() {
        Alert.alert("Agendamento concluído ")
    }

    return (

        <>
            <Header isHome={false}
                title={"Hospital Santa Isabel"}
            />
            <View style={styles.container}>
                <View>

                    <Input
                        placeHolder='Endereço'
                    />
                    <Input
                        placeHolder='Tipo de exame'
                    />
                    <Input
                        placeHolder='dd//mm/aaaa'
                    />

                    <View style={styles.content}>

                        <TextInput
                            style={styles.input}
                            placeholder='Descrição do exame'
                            placeholderTextColor="#2A65C8"
                            onChangeText={setColor}
                            multiline={true}
                            textAlignVertical={"top"}
                        />

                    </View>
                </View>


                <Button
                    button='Confirmar Agendamento'
                    onPress={handleDownload}

                />
            </View>

        </>
    )
}