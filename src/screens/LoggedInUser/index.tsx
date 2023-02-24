import React from 'react'
import { styles } from './styles'

import {
    View,
    Text,
} from 'react-native'

import { Header } from '../../components/Header'
import { ImgBackGround } from '../../components/imgBackGround'
export function LoggedInUser() {
    return (
        <ImgBackGround>
            <Header isHome={true} />
        </ImgBackGround>



    )
}