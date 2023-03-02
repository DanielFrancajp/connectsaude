import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { List, Bell, CaretLeft } from 'phosphor-react-native'
import { styles } from './styles'

import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'

type headerPros = {
    isHome: boolean;
    title: string;
    onPress?: () => void;
}



export function Header({ isHome, title, onPress }: headerPros) {

    return (
        <View style={styles.container}>

            {
                isHome ?
                    <View style={styles.containerHeader}>
                        <TouchableOpacity>
                            <List color="#2A65C8" size={32} weight="duotone" />
                        </TouchableOpacity>
                        <View style={styles.containerWelcome}>
                            <Text style={styles.text}>Bem vindo Daniel!</Text>
                            <Text style={styles.text}>como podemos te ajudar?</Text>
                            <Text style={styles.text}>Tipo sanguíneo: O +</Text>
                        </View>
                        <TouchableOpacity >
                            <Bell color="#2A65C8" size={32} />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.containerHeader1}>
                        <TouchableOpacity onPress={onPress}>
                            <CaretLeft color="#2A65C8" size={27} weight="bold" />
                        </TouchableOpacity>
                        <Text style={styles.text}>{title}</Text>
                        <View />
                    </View>
            }

        </View>
    )
}