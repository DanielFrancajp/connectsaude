import React, { useState } from 'react'

import {
    View,
    Text,
}
    from 'react-native'
import { styles } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/HeaderLogo'
import { Input } from '../../components/Input'
import { ImgBackGround } from '../../components/imgBackGround'

export function RecoveryPassoword() {

    return (
        <>
            <ImgBackGround
            
            >
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