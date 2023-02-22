import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Input() {
    return (

        <>
            <View style={styles.container}>
                <View style={{paddingTop:50}}>
                <Text style={styles.text}>
                    Login
                </Text>
                </View>
            </View>


            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    placeholderTextColor="#2A65C8"
                    
                />

                <View style={styles.container}>
                    <Text style={styles.text}>
                        Senha
                    </Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    placeholderTextColor="#2A65C8"
                    

                />
            </View>
        </>
    )
}