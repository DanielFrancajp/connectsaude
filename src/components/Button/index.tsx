import { styles } from "./styles";


import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";


interface buttonProps {
    button: string;
    onPress: () => void;
}

export function Button({ button, onPress}: buttonProps) {
    return (

        <View style={styles.containerButton}>
            <TouchableOpacity onPress={onPress} style={styles.button}
                
            >
                <Text style={styles.text}>{button}</Text>
            </TouchableOpacity>
        </View>

    )
}