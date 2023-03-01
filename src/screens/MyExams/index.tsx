import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { CardHome, Header } from '../../components';
import { styles } from './styles';

export function MyExams() {

    const navigation = useNavigation()

    function handleNewScheduling() {
    }


    return (
        <>

            <Header
                isHome={false}
                title='MEUS EXAMES' />

            <View style={styles.container}>

                <View style={styles.contentScheduling}>

                    <View >
                        <Text style={styles.text}> Aqui está a lista de seus</Text>
                    </View>

                    <View >
                        <Text style={styles.text}> exames realizados !</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.contentData}>
                        <View >
                            <Text style={styles.text}> Data</Text>
                        </View>
                        <Text style={styles.text}> Exames</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.contentSpecifications}>
                    <Text style={styles.text}> 05/01/2021 </Text>
                    <View >
                        <Text style={styles.text}>Hemograma</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contentSpecifications}>
                    <Text style={styles.text}>  15/11/2021</Text>
                    <View >
                        <Text style={styles.text}>Teste de lactose</Text>
                    </View>


                </TouchableOpacity>

                <TouchableOpacity style={styles.contentSpecifications}>
                    <Text style={styles.text}>17/11/2021</Text>
                    <View >
                        <Text style={styles.text}>Exame de urina</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contentSpecifications}>
                    <Text style={styles.text}>01/01/2022</Text>
                    <View >
                        <Text style={styles.text}>Tomografia Facial</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contentSpecifications}>
                    <Text style={styles.text}>15/01/2022</Text>
                    <View >
                        <Text style={styles.text}>R. Cx Toráxica</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contentSpecifications}>
                    <Text style={styles.text}>08/01/2022</Text>
                    <View >
                        <Text style={styles.text}>R. Tornozelo esq.</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}