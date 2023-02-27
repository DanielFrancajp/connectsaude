    import React from 'react'

    import { View, Text, Image,Alert } from 'react-native'
    import { styles } from './styles'

    import { Header } from '../../components'
    import { Button } from '../../components/Button'


    export function SusCard() {

        function handleDownload() {
            Alert.alert("Download pdf concluído!")
        }


    return (
        <>

            <Header
                isHome={false}
                title="Cartão do SUS"
            />

            <View style={styles.container}>

                <View style={styles.firstCard}>
                    <Image
                        source={require("../../../assets/CartaoSUS.png")}
                    />
                    <Text style={styles.text}>Frente do cartão</Text>


                </View>
            </View>

            <View style={styles.secondCard}>
                <Image
                    source={require("../../../assets/CartaoSUS.png")}
                    
                />
                    <Text style={styles.text}>Verso do cartão</Text>

            </View>

            <Button 
             button='Donwload '
             onPress={handleDownload}
            />


        </>
    )
}