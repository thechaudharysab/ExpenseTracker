import React, { useCallback, useRef, useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Image, View, Dimensions, Alert } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import Animation from 'lottie-react-native';
import RNModal from "react-native-modalbox";

import menuAnimation from '../assets/animations/financial-characters-consulting-each-other.json';
import { SPACING } from '../utils/constants';
import colors from '../utils/colors';
import TransactionCell from '../components/TransactionCell';

import transactionServices from '../utils/services/transactionServices';

function Dashboard(props) {

    const menuRef = useRef();
    const windowHeight = Dimensions.get('window').height;

    const [transactions, setTransactions] = useState([]);

    useFocusEffect(
        useCallback(() => {
            props.navigation.setOptions({
                headerLeft: null,
                headerTintColor: colors.secondaryDarkBlue,
                headerLeft: () => <TouchableOpacity onPress={() => { menuRef.current.open(); }} style={[styles.navButonStyle, { marginLeft: SPACING.MEDIUM, }]}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primaryBlue }}>☰</Text>
                </TouchableOpacity>,
                headerRight: () => <TouchableOpacity onPress={() => { props.navigation.navigate("Add Edit Transaction") }} style={[styles.navButonStyle, { marginRight: SPACING.MEDIUM, }]}>
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
        }, [props.navigation])
    );

    useEffect(() => {
        transactionServices.getAllTransactions().then((allTransactions) => {
            setTransactions(allTransactions)
        }).catch((error) => {
            Alert.alert("Error", error)
        })
    }, [])

    return (
        <View style={{ flex: 2, backgroundColor: colors.lightGrayWhite, }}>

            {/* User Card */}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: SPACING.LARGE, marginBottom: SPACING.LARGE }}>
                <Text style={{ textAlign: 'center', fontSize: 12 }}>Balance</Text>
                <Text style={{ fontSize: 24, fontWeight: '200', textAlign: 'center' }}>RM 00.00</Text>
            </View>

            <ScrollView contentContainerStyle={styles.container}>

                {/* Transactions */}
                <View style={styles.transactionsView}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginTop: SPACING.MEDIUM, marginBottom: SPACING.SMALL }}>Your Transactions</Text>
                        <TouchableOpacity style={{ paddingLeft: 20, alignSelf: 'flex-end' }} onPress={() => {
                            alert("Search is not available in this version")
                        }}>
                            <Text style={{ marginTop: SPACING.MEDIUM, marginBottom: SPACING.SMALL, color: colors.primaryBlue, fontWeight: 'bold' }}>🔍</Text>
                        </TouchableOpacity>

                    </View>

                    {transactions.map((transaction, index) => (
                        <TransactionCell key={index} transactionType={transaction.TransactionType} transactionAmount={transaction.TransactionAmount}
                            transactionTitle={transaction.TransactionTitle} transactionDesc={transaction.TransactionDescription}
                            transactionDate={transaction.TransactionDate} />
                    ))}

                </View>

            </ScrollView>

            {/* Menu Modal Start */}
            <RNModal ref={menuRef} position={'bottom'} swipeArea={20} coverScreen={true}
                style={{ backgroundColor: colors.yellow, borderTopStartRadius: 25, borderTopRightRadius: 25, padding: 10, height: windowHeight - 350 }}>
                <Text style={{ alignSelf: 'center', margin: 10, fontWeight: 'bold' }}>Menu</Text>

                <View style={{ flexDirection: 'row', flexShrink: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: SPACING.MEDIUM }}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => {
                        menuRef.current.close();
                        navigation.navigate("Add Edit Transaction")
                    }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Add New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Github</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => {
                        menuRef.current.close();
                        navigation.navigate("Login")
                    }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Logout</Text>
                    </TouchableOpacity>
                </View>

                <Animation source={menuAnimation} loop={true} autoPlay={true} style={{ position: 'absolute', width: windowHeight - 400, bottom: 0, alignSelf: 'center' }} />
                <Text style={{ fontSize: 10, alignSelf: 'center', position: 'absolute', bottom: 30, }}>Expense Tracker v1.0</Text>
            </RNModal>
            {/* Menu Modal End */}

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrayWhite,
        flexGrow: 1
        // padding: SPACING.LARGE,
    },
    navButonStyle: {
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
    },
    menuItem: {
        backgroundColor: colors.white,
        padding: SPACING.SMALL,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: SPACING.SMALL,
        marginBottom: SPACING.SMALL,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
})

export default Dashboard;