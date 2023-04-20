import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import PopUpMenu from "../MiniMenu";

export default function Home({ navigation }){
    return (
        <View style={estilo.container}>
            <PopUpMenu />
            <Button
                title="Cadastrar"
                onPress={ () => navigation.navigate('Cadastrar') }
            />

            <Button
                title="Ver Todos"
            />

            <View style={estilo.containerMain}>

            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#068',
        alignItems: 'center',
    },
    containerMain: {
        flex: 1,
        marginTop: 10,
        width: "95%",
        padding: 4,
        backgroundColor: "white",
        borderRadius: 10,
    },
});