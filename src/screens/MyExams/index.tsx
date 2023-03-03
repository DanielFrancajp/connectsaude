import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';

import { Header } from '../../components';
import { styles } from './styles';
import { DownloadSimple } from 'phosphor-react-native';

export function MyExams() {

    const navigation = useNavigation()

    function handleDownload(){
        Alert.alert('Download efetuado com sucesso!')
    }

    function handleNewScheduling() {
        navigation.goBack()
    }

    return (
        <>

            <Header
                isHome={false}
                title='MEUS EXAMES'
                onPress={handleNewScheduling}
            />


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

                <TouchableOpacity 
                style={styles.contentSpecifications}
                onPress={handleDownload}
                >
                    <Text style={styles.textList}> 05/02/2020 </Text>
                    <View >
                        <Text style={styles.textList}>Hemograma</Text>
                    </View>

                    <View>
                        <DownloadSimple color="white" size={32} weight="fill" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.contentSpecifications}
                onPress={handleDownload}
                >
                    <Text style={styles.textList}> 07/03/2020 </Text>
                    <View >
                        <Text style={styles.textList}>Citológico</Text>
                    </View>
                    <View>
                        <DownloadSimple color="white" size={32} weight="fill" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.contentSpecifications}
                onPress={handleDownload}
                >
                    <Text style={styles.textList}> 20/09/2022 </Text>
                    <View >
                        <Text style={styles.textList}>Consulta</Text>
                    </View>
                    <View>
                        <DownloadSimple color="white" size={32} weight="fill" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.contentSpecifications}
                onPress={handleDownload}
                >
                    <Text style={styles.textList}> 10/10/2020 </Text>
                    <View >
                        <Text style={styles.textList}>RaioX mão esq.</Text>
                    </View>
                    <View>
                        <DownloadSimple color="white" size={32} weight="fill" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.contentSpecifications}
                onPress={handleDownload}
                >
                    <Text style={styles.textList}> 15/09/2021 </Text>
                    <View >
                        <Text style={styles.textList}>Ultrasom</Text>
                    </View>
                    <View>
                        <DownloadSimple color="white" size={32} weight="fill" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.contentSpecifications}
                onPress={handleDownload}
                >
                    <Text style={styles.textList}> 20/09/2022 </Text>
                    <View >
                        <Text style={styles.textList}>Cx toráxica</Text>
                    </View>
                    <View>
                        <DownloadSimple color="white" size={32} weight="fill" />
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}