import { styles } from "./styles";

import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

export function Button() {
    return (

        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>

    )
}