import React, { useState } from "react"
import { TextInput, View } from "react-native";
import { styles } from "./styles";


interface placeHolderProps {
    placeHolder: string;
}

export function Input({ placeHolder }: placeHolderProps) {

    const [color, setColor] = useState("")


    return (


        <View>
            <TextInput
                style={[styles.input, { opacity: color != "" ? 1 : 0.7 }]}
                placeholder={placeHolder}
                placeholderTextColor="#2A65C8"
                onChangeText={setColor}
            />

        </View>
    )
}