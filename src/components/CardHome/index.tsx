import React from 'react';
import { styles } from "./styles";
import { Calendar } from 'phosphor-react-native'
import { SvgProps } from 'react-native-svg';

import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface buttonProps {
    icon?: React.FC<SvgProps>;
    title: string;
    onPress: () => void;
}

export function CardHome({ 
    title,
    icon: Icon, 
    onPress 
}: buttonProps) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container} >

                <View style={styles.icon} >
                <Calendar size={85} color={"#fff"} />
                </View>
                <View style={styles.title} >
                    <Text style={styles.textTitle} >{title}</Text>
                </View>

            </View>
        </TouchableOpacity>

    )
}