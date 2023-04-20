import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Cadastrar(){
    return (
        <View style={estilo.container}>
            <Text style={estilo.textMain}>Cadastrar</Text>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMain: {
        fontSize: 24,
    },
});