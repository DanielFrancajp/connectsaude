import React from 'react';
import { StatusBar } from 'react-native';

import { Routes } from './src/routes';


export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={'#2A65C8'}
      />
      <Routes />
    </>
  )
}