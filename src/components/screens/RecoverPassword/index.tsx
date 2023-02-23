import React from 'react'

import {
    View,
    Text
}
    from 'react-native'
import { Button } from '../../Button'

import { Header } from '../../Header'
import { Input } from '../../Input'
import { styles } from './styles'
import { ImgBackGround } from '../../imgBackGround'

export function RecoveryPassoword() {
    return (
        <>
            <ImgBackGround>
                <View style={styles.container}>

                    <Header />

                    <View style={styles.containerRecoverPassword}>
                        <Text style={styles.textRegister}>Iremos auxiliar a recuperar a sua senha!</Text>
                    </View>

                    <Input
                        placeHolder='Digite seu CPF ou e-mail'
                    />

                    <Button
                        button='Enviar'
                    />
                </View>
            </ImgBackGround>
        </>
    )
}