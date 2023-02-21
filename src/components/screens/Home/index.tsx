import React from "react";

import {
    Image,
    TouchableOpacity,
    View,
    Text
} from "react-native";
import { styles } from './styles'

import { Input } from "../../Input";
import { Button } from "../../Button";

export default function Home() {
    return (

        <>
            <View style={styles.container}>

                <View>
                    <Image
                        source={require("../../../../assets/Logo.png")}
                        style={styles.LogoHome}
                    />
                </View>

                <View>

                    <Input
                    />

                    <View style={styles.formButton}>
                        <Button
                        />
                    </View>

                    <View style={styles.buttonRegister}>
                        <TouchableOpacity>
                            <Text style={styles.text}>
                                Cadastre-se
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonRegister}>
                        <TouchableOpacity>
                            <Text style={styles.text}>
                               Esqueceu a senha?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={require("../../../../assets/logosus.png")}
                        style={styles.logoBackground}
                    />
                </View>
            </View>
        </>

    )
}