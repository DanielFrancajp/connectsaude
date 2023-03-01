import React, { useState } from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { ListItensHome } from "../../Utils/ListItensHome";


import {
    View,
    Text,
    FlatList,
} from 'react-native'

import {
    ImgBackGround,
    CardHome
} from "../../components"

export function LoggedInUser() {

    const navigation = useNavigation()

    function handleScheduling(item: any) {
        navigation.navigate(item.title)
    }


    return (
        <ImgBackGround isHome >

            <View style={styles.container}>

                <View style={styles.title} >
                    <Text style={styles.text}>A medicina na palma da sua mão !</Text>
                </View>

                <FlatList
                    data={ListItensHome}
                    extraData={ListItensHome}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <CardHome
                            title={item.title}
                            onPress={() => handleScheduling(item)}
                        />


                    )}
                    keyExtractor={item => item.id}
                />



            </View>




        </ImgBackGround>

    )
}