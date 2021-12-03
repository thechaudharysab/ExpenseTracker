import React, { useCallback, useState } from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

import RNModal from "react-native-modalbox";
import DatePicker from 'react-native-date-picker'


import { SPACING, COMMON_STYLES } from '../utils/constants';
import colors from '../utils/colors';
import SegSelector from '../components/SegSelector';

function AddEditTransaction({ navigation }) {

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                headerTintColor: colors.secondaryDarkBlue,
                title: "Add New Transaction",
                headerStyle: {
                    // backgroundColor: colors.lightGrayWhite,
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    },
                },
            });
        }, [navigation])
    );

    const [transactionType, setTransactionType] = useState("Income")
    const tabOptions = ["Income", "Expense"]

    const [transactionAmount, setTransactionAmount] = useState("")
    const [transactionTitle, setTransactionTitle] = useState("")
    const [transactionDesc, setTransactionDesc] = useState("")
    const [transactionDate, setTransactionDate] = useState(new Date());

    function tabUpdated(index) {
        setTransactionType(tabOptions[index]);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <KeyboardAvoidingView>
                <Text style={COMMON_STYLES.textInputLabel}>Selected Transaction Type: <Text style={{ fontWeight: 'bold', color: colors.primaryBlue }}>{transactionType}</Text></Text>
                <SegSelector options={tabOptions} selectedIndex={0} updatedTabAction={(selectedIndex) => tabUpdated(selectedIndex)} />
            </KeyboardAvoidingView>

            <Text style={COMMON_STYLES.textInputLabel}>Amount *</Text>
            <View style={[COMMON_STYLES.textFieldActive, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <Text style={{ marginRight: SPACING.SMALL, color: colors.lightGrayText }}>RM</Text>
                <TextInput placeholder={'Enter Amount'} value={transactionAmount} style={{ flex: 1 }}
                    keyboardType={'decimal-pad'} onChangeText={(a) => setTransactionAmount(a)} />
            </View>

            <Text style={COMMON_STYLES.textInputLabel}>Transaction Title *</Text>
            <TextInput placeholder={'e.g. Lunch at Nandos'} value={transactionTitle}
                style={COMMON_STYLES.textFieldActive}
                onChangeText={(t) => setTransactionTitle(t)} />

            <Text style={COMMON_STYLES.textInputLabel}>Description</Text>
            <TextInput placeholder={' '} value={transactionDesc}
                style={COMMON_STYLES.textFieldActive}
                onChangeText={(d) => setTransactionDesc(d)} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.LARGE,
        // backgroundColor: colors.lightGrayWhite,
        flex: 1,
    }
})

export default AddEditTransaction;