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
}
export function Header({isHome}: headerPros) {
    return (
        <View style={styles.container}>

            {isHome ?
         <View style={styles.containerHeader}>
         <TouchableOpacity>
             <List color="#2A65C8" size={32} weight="duotone" />
         </TouchableOpacity>
         <Text>bem vindo</Text>
         <TouchableOpacity style={styles.buttonBell}>
             <Bell color="#2A65C8" size={32} />
         </TouchableOpacity>
         </View>
         :
         <View style={styles.containerHeader}>
                <TouchableOpacity>
                <CaretLeft size={32} weight="fill" />
                </TouchableOpacity>
                <Text>bem vindo</Text>
                <View />
                </View>   
        }

        </View>
    )
}