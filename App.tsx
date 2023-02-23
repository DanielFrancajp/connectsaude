import React from 'react';
import { StatusBar } from 'react-native';
import Home from "./src/components/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={'#2A65C8'}
        
      />
      <Home />
    </>
  )
}