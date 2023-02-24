import React from 'react';
import { StatusBar } from 'react-native';

import { Routes } from './src/routes';
import { LoggedInUser } from './src/screens/LoggedInUser';


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