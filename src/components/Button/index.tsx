import { styles } from "./styles";
import { DownloadSimple } from 'phosphor-react-native'


import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";


interface buttonProps {
    button: string;
    onPress: () => void;
    icon?: boolean;
}

export function Button({ button, onPress, icon }: buttonProps) {
    return (

        <View style={styles.containerButton}>
            <TouchableOpacity onPress={onPress} style={styles.button}

            >
                <View style={styles.containerIcon}>

                    <View />
                    <View />
                    <View>
                        <Text style={styles.text}>{button}</Text>
                    </View>
                    <View>
                        {icon &&
                            <DownloadSimple color="red" size={32} weight="fill" />

                        }
                    </View>
                </View>

            </TouchableOpacity>
        </View>

    )
}