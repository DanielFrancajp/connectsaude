import { styles } from "./styles";

import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

interface buttonProps {
    button: string;
}

export function Button({ button }: buttonProps) {
    return (

        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{button}</Text>
            </TouchableOpacity>
        </View>

    )
}