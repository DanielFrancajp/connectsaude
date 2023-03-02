import React from "react";
import {
    View,
    Text,
    ScrollView,
    Alert
} from 'react-native'
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { Header } from "../../components/HeaderLogo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ImgBackGround } from '../../components/imgBackGround'

export function Register() {

    const navigation= useNavigation();

 

    function handleRegister() {
        Alert.alert('Usuário cadastrado com sucesso!')
    }

    return (

        <>
            <ImgBackGround isLogin >
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
                            onPress={handleRegister}
                        />

                    </View>
                </ScrollView>
            </ImgBackGround>
        </>
    )
}