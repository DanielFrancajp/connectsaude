import React from "react";

import { View, Text } from 'react-native'
import { styles } from "./styles";
import { Header } from "../../components/Header";

export function EletronicMedicalRecord() {
    return (
        <>
            <Header
                isHome={false}
                title={"PRONTUÁRIO ELETRÔNICO"}

            />
            <View style={styles.container}>
                
                <Text></Text>
            </View>
        </>
    )
}