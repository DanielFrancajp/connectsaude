import React from "react";

import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Alert } from 'react-native'
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function EletronicMedicalRecord() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    function handleDownload() {
        Alert.alert("Download efetuado com sucesso!")
    }
    return (
        <>
            <Header
                isHome={false}
                title={"PRONTUÁRIO ELETRÔNICO"}
                onPress={goBack}

            />

            <View style={styles.container}>

                <View style={styles.contentTitle}>
                    <Text style={styles.Text}>Aqui você terá acesso ao seu prontuário</Text>
                </View>

                <Image source={require("../../../assets/prontuario.png")} />

                <View style={{ width: '100%' }}>

                    <Button
                        button="DOWNLOAD"
                        icon
                        onPress={handleDownload}
                    />
                </View>
            </View>
        </>
    )
}