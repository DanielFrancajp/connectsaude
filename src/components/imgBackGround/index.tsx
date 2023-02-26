import React from 'react'

import {
    ImageBackground,
    
} from 'react-native'
import { Header } from '../Header'

interface childrenProps {
    children: React.ReactNode
    isHome: boolean
    isLogin?: boolean
}

export function ImgBackGround({ children, isHome, isLogin }: childrenProps) {
    return (
            
            <ImageBackground style={{ flex: 1 }}
                source={require('../../../assets/background.png')}
            >
            {!isLogin &&
                 <Header isHome={isHome} />
            }
               {children}
            </ImageBackground>
           
    )
}