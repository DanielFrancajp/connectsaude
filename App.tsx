import React from 'react';
import { StatusBar } from 'react-native';

import Home from "./src/components/screens/Home";
import { Register } from './src/components/screens/Register';
import { RecoveryPassoword } from './src/components/screens/RecoverPassword';


export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={'#2A65C8'}
      />
      <RecoveryPassoword />
    </>
  )
}