import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';

function App(props) {

  const Stack = createStackNavigator();

  const defaultNavOptios = {
    headerBackTitleVisible: false,
    headerTintColor: "#000",
    cardStyle: { backgroundColor: "#FFFFFF" },
    headerStyle: {
      backgroundColor: "#fff",
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={defaultNavOptios} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={defaultNavOptios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
