import React from "react";
import {
    ImageBackground,
    View,
    Text,
    ScrollView
} from 'react-native'

import { styles } from "./styles";
import { Header } from "../../Header";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { ImgBackGround } from '../../imgBackGround'

export function Register() {
    return (

        <>
            <ImgBackGround>
                <ScrollView>
                    <View style={styles.container}>
                        <Header />

                        <View style={styles.containerRegister}>
                            <Text style={styles.textRegister}>
                                Vamos realizar seu  cadastro
                            </Text>
                        </View>

                        <Text style={styles.textRegister}>Nome Completo</Text>
                        <Input
                            placeHolder="Digite seu nome"
                        />

                        <Text style={styles.textRegister}>Seu Cpf</Text>
                        <Input
                            placeHolder="Digite seu cpf"
                        />

                        <Text style={styles.textRegister}>Data de Nascimento</Text>
                        <Input
                            placeHolder="DD/MM/AAAA"

                        />

                        <Text style={styles.textRegister}>Digite sua senha</Text>
                        <Input
                            placeHolder="Digite sua senha"
                        />

                        <Text style={styles.textRegister}>Confirme sua senha</Text>
                        <Input
                            placeHolder="Confirme sua senha"

                        />

                        <Text style={styles.textRegister}>Digite seu e-mail</Text>
                        <Input
                            placeHolder="Digite seu e-mail"
                        />

                        <Button
                            button="Cadastrar"
                        />

                    </View>
                </ScrollView>
            </ImgBackGround>
        </>
    )
}