import React from "react";

import {
    Image,
    TouchableOpacity,
    View,
    Text,
    ImageBackground
} from "react-native";
import { styles } from './styles'

import { Header } from '../../Header'

import { UserPlus, EyeSlash } from 'phosphor-react-native'
import { Input } from "../../Input";
import { Button } from "../../Button";

export default function Home() {
    return (

        <>
            <ImageBackground
                source={require('../../../../assets/background.png')}
                style={styles.background}
            >
                <View style={styles.container}>

                    <Header />

                    <View>
                        <View style={styles.containerInput}>
                            <View style={{ paddingTop: 50, paddingLeft: 25 }}>
                                <Text style={styles.text}>
                                    Login
                                </Text>
                            </View>
                            <Input />
                        </View>

                        <View>
                            <View style={styles.containerInput}>
                                <View style={{ paddingLeft: 25 }}>
                                    <Text style={styles.text}>
                                        Senha
                                    </Text>
                                </View>
                                <Input />
                            </View>
                        </View>

                        <View >
                            <TouchableOpacity style={styles.iconEye}>
                                <EyeSlash color="#5697BF" size={24} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: "center", alignItems: 'center' }}>
                            <Text >
                                Entrar
                            </Text>
                            <Button />
                        </View>

                        <View style={styles.Form}>
                            <TouchableOpacity style={styles.buttonRegister}>
                                <UserPlus color="#5697BF" size={24} />
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
                                style={{ marginLeft: 20 }}
                            />
                            <Image
                                source={require("../../../../assets/estadopb.png")}
                                style={{ marginLeft: 10 }}
                            />
                            <Image
                                source={require("../../../../assets/prefeiturajp.png")}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>

        </>

    )
}