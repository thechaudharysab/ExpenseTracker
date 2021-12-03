import React, { useCallback, useState } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Image, View, } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import Animation from 'lottie-react-native';

import { SPACING } from '../utils/constants';
import colors from '../utils/colors';

function Dashboard({ navigation }) {

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                headerLeft: null,
                headerTintColor: colors.secondaryDarkBlue,
                headerRight: () => <TouchableOpacity onPress={() => { navigation.navigate("Add Edit Transaction") }} style={styles.navButonStyle}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primaryBlue }}>+</Text>
                </TouchableOpacity>,
                headerStyle: {
                    backgroundColor: colors.lightGrayWhite,
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    },
                },
            });
        }, [navigation])
    );

    return (
        <View style={{ flex: 2, backgroundColor: colors.lightGrayWhite, }}>

            {/* User Card */}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: SPACING.LARGE, marginBottom: SPACING.LARGE }}>
                <Text style={{ textAlign: 'center', fontSize: 12 }}>Balance</Text>
                <Text style={{ fontSize: 24, fontWeight: '200', textAlign: 'center' }}>$ 00.00</Text>
            </View>

            <ScrollView contentContainerStyle={styles.container}>

                {/* Transactions */}
                <View style={styles.transactionsView}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginTop: SPACING.MEDIUM, marginBottom: SPACING.SMALL }}>Your Transactions</Text>
                        <Text style={{ marginTop: SPACING.MEDIUM, marginBottom: SPACING.SMALL, color: colors.primaryBlue, fontWeight: 'bold' }}>ⓘ</Text>
                    </View>


                    <TouchableOpacity style={styles.transactionCard}>
                        <Text>Transaction Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionCard}>
                        <Text>Transaction Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionCard}>
                        <Text>Transaction Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionCard}>
                        <Text>Transaction Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionCard}>
                        <Text>Transaction Name</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrayWhite,
        // padding: SPACING.LARGE,
    },
    navButonStyle: {
        marginRight: SPACING.MEDIUM,
        backgroundColor: colors.white,
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    cardContainer: {
        backgroundColor: 'white',
        padding: SPACING.MEDIUM
    },
    transactionCard: {
        backgroundColor: colors.lightGrayWhite,
        padding: SPACING.SMALL,
        borderRadius: 8,
        marginTop: SPACING.SMALL,
        marginBottom: SPACING.SMALL,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.22,
        elevation: 3,
    },
    animationStyle: {
        height: 100,
        margin: SPACING.SMALL
    },
    transactionsView: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: SPACING.SMALL,
        padding: SPACING.MEDIUM,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.22,
        elevation: 3,
    }
})

export default Dashboard;