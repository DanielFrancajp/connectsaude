import React from 'react'
import { List, Bell } from 'phosphor-react-native'
import { styles } from './styles'

import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <TouchableOpacity>
                    <List color="#2A65C8" size={32} weight="duotone" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBell}>
                    <Bell color="#2A65C8" size={32} />
                </TouchableOpacity>
                <View style={styles.linerBorder}>
                </View>
            </View>
        </View>
    )
}