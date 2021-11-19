import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./pages/Main/index"
import { Container } from './Styles';

export default function App() {
  return (
    <Container>
      <Main/>
      <StatusBar style="light" />
    </Container>
  );
}

