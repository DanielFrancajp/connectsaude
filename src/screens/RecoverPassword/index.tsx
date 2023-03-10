import React, { useState } from 'react'

import {
    View,
    Text,
    Alert,
}
    from 'react-native'
import { styles } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/HeaderLogo'
import { Input } from '../../components/Input'
import { ImgBackGround } from '../../components/imgBackGround'

export function RecoveryPassoword() {

    function handleRecoveryPassworld() {
        Alert.alert('Enviamos um e-mail para redefinição de sua senha! ')
    }
    return (
        <>
            <ImgBackGround
                isLogin={true}

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
                        onPress={handleRecoveryPassworld}
                    />
                </View>
            </ImgBackGround>
        </>
    )
}