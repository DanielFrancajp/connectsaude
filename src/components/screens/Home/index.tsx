import React from "react";

import {
    Image,
    TouchableOpacity,
    View,
    Text,
} from "react-native";
import { styles } from './styles'

import { UserPlus, EyeSlash } from 'phosphor-react-native'
import { Input } from "../../Input";
import { Button } from "../../Button";
import { ImgBackGround } from "../../imgBackGround";

export default function Home() {
    return (

        <>
            <ImgBackGround >
                <View style={styles.container}>

                <View style={styles.imageLogin}>
            <Image
                source={require("../../../../assets/Logo.png")}                
            />
        </View>

                    <View>
                        <View style={styles.containerInput}>
                            <View style={{ paddingTop: 50, paddingLeft: 25 }}>
                                <Text style={styles.text}>
                                    Login
                                </Text>
                            </View>
                            <Input
                                placeHolder="Digite seu nome "
                            />
                        </View>

                        <View>
                            <View style={styles.containerInput}>
                                <View style={{ paddingLeft: 25 }}>
                                    <Text style={styles.text}>
                                        Senha
                                    </Text>
                                </View>
                                <Input
                                    placeHolder="Digite sua senha "
                                />
                            </View>
                        </View>

                        <View >
                            <TouchableOpacity style={styles.iconEye}>
                                <EyeSlash color="#5697BF" size={24} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: "center", alignItems: 'center' }}>
                            <Button
                                button={"Entrar"}
                            />
                        </View>

                        <View style={styles.Form}>
                            <TouchableOpacity style={styles.buttonRegister}>
                                <UserPlus color="#5697BF" size={24} weight="fill" />
                                <Text style={styles.text}>
                                    Cadastre-se
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.Form}>
                            <TouchableOpacity style={styles.buttonRegister}>
                                <Text style={styles.text}>
                                    Esqueceu a senha?
                                </Text>
                            </TouchableOpacity>
                        </View>



                        <View style={styles.Logos}>
                            <Image
                                source={require("../../../../assets/logosus.png")}
                            />
                            <Image
                                source={require("../../../../assets/estadopb.png")}
                            />
                            <Image
                                source={require("../../../../assets/prefeiturajp.png")}
                            />
                        </View>
                    </View>
                </View>
            </ImgBackGround>

        </>

    )
}