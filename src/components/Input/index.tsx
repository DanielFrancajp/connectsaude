import { TextInput, View } from "react-native";
import { styles } from "./styles";

export function Input() {
    return (


        <View>
            <TextInput
                style={styles.input}
                placeholder="Digite seus dados aqui"
                placeholderTextColor="#2A65C8"
            />

        </View>
    )
}