import React from 'react'
import { styles } from './styles'

import {
    View,
    Text,
} from 'react-native'

import { Header } from '../../components/Header'
export function LoggedInUser() {
    return (
        <View style={styles.container}>
            <Header />
        </View>



    )
}