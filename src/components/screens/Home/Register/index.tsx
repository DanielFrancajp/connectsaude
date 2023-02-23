import React from "react";
import {
    ImageBackground,
    View,
    Text,
    ScrollView
} from 'react-native'

import { styles } from "./styles";
import { Header } from "../../../Header";
import { Input } from "../../../Input";
import { Button } from "../../../Button";

export function Register() {
    return (

        <>
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
                    />

                    <Text style={styles.textRegister}>Seu Cpf</Text>
                    <Input />

                    <Text style={styles.textRegister}>Data de Nascimento</Text>
                    <Input />

                    <Text style={styles.textRegister}>Digite sua senha</Text>
                    <Input />

                    <Text style={styles.textRegister}>Confirme sua senha</Text>
                    <Input />

                    <Text style={styles.textRegister}>Digite seu e-mail</Text>
                    <Input />

                    <View style={{ alignItems: "center" }} >
                        <Text style={styles.Text}>Cadastrar</Text>
                        <Button
                        />
                    </View>

                </View>
            </ScrollView>
        </>
    )
}