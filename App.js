import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/screens/Home/index";
import Cadastrar from "./src/screens/Cadastrar/index";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            title: '',
            headerStyle: {
              backgroundColor: "#067"
            }
          }}
        />

        <Stack.Screen 
          name="Cadastrar" 
          component={Cadastrar}
          options={{ 
            title: '',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
