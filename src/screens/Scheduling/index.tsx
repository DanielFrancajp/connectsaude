import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { CardHome, Header } from '../../components';
import { Circle } from 'phosphor-react-native';
import { styles } from './styles';

export function Scheduling() {

    const navigation = useNavigation()

    function handleNewScheduling() {
        navigation.navigate('newscheduling')
    }
    function handleGoBack() {
        navigation.goBack()
    }
    return (
        <>

            <Header
                isHome={false}
                title='AGENDAMENTOS' 
                onPress={handleGoBack}
                />

            <View style={styles.container}>

                <View style={styles.contentScheduling}>
                    <CardHome
                        title='Adicione um agendamento'
                        onPress={handleNewScheduling}

                    />
                    <View style={{ paddingLeft: 40 }}>
                        <Text style={styles.text}> Meus Agendamentos</Text>
                    </View>
                </View>

                <View style={styles.contentHeader}>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.text}> Data</Text>
                    </View>
                    <Text style={styles.text}> Exames</Text>
                    <Text style={styles.text}> Status</Text>
                </View>

                <TouchableOpacity style={styles.contentSpecifications}>
                    <Text style={styles.textList}> 20/09/2022 </Text>
                    <View style={{ marginRight: 50 }}>
                        <Text style={styles.textList}>Consulta</Text>
                    </View>
                    <Circle color='red' size={28} weight="fill" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.contentSpecifications}>
                    <Text style={styles.textList}> 15/11/2022</Text>
                    <View style={{ marginRight: 60 }}>
                        <Text style={styles.textList}> Raio-X </Text>
                    </View>
                    <Circle color='green' size={28} weight="fill" />


                </TouchableOpacity>

                <TouchableOpacity style={styles.contentSpecifications}>
                    <Text style={styles.textList}> 08/01/2023</Text>
                    <View style={{ marginRight: 30 }}>
                        <Text style={styles.textList}>Endoscopia</Text>
                    </View>
                    <Circle color='gray' size={28} weight="fill" />



                </TouchableOpacity>

            </View>
        </>
    )
}