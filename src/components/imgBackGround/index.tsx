import React from 'react'

import {
    ImageBackground,
    
} from 'react-native'

interface childrenProps {
    children: React.ReactNode
}

export function ImgBackGround({ children }: childrenProps) {
    return (
            <>
            <ImageBackground style={{ width: '100%', height: '100%' }}
                source={require('../../../assets/background.png')}
            >
                {children}
            </ImageBackground>
            </>
    )
}