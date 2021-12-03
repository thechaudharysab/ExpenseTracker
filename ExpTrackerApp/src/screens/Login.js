import React, { useCallback } from 'react';
import { ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

import colors from '../utils/colors';
import { COMMON_STYLES } from '../utils/constants';

function Login({ navigation }) {

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({ headerShown: false });
        }, [navigation])
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.mainLogoText}>Expense Tracker</Text>
            <Text style={COMMON_STYLES.subHeading}>The world's simplest expense tracking app!</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    mainLogoText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
})

export default Login;