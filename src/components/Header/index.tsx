import React from 'react'
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
}
export function Header({ isHome, title }: headerPros) {
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
                    <View style={styles.containerHeader}>
                        <TouchableOpacity>
                            <CaretLeft size={32} weight="fill" />
                        </TouchableOpacity>
                        <Text style={styles.text}>{title}</Text>
                        <View />
                    </View>
            }

        </View>
    )
}