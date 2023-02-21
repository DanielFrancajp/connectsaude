import { styles } from "./styles";

import {
    Text,
    TouchableOpacity
} from "react-native";

export function Button() {
    return (

        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                Entrar
            </Text>
        </TouchableOpacity>


    )
}