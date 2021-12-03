import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import transactionServices from '../utils/services/transactionServices';

import { SPACING } from '../utils/constants';
import Divider from '../components/Divider';
import colors from '../utils/colors';
import moment from 'moment';

function TransactionCell({ transactionType, transactionAmount, transactionTitle, transactionDesc, transactionDate, deleteActionPressed }) {
    return (
        <View style={styles.transactionCard}>
            <Text style={styles.transactionTitleText}>{transactionTitle}</Text>
            <Text style={[styles.transactionAmountText, { color: (transactionType === 'Income') ? colors.green : colors.red }]}>RM {transactionAmount}</Text>
            <Text style={styles.transactionDescText}>{transactionDesc}</Text>
            <Divider topMarginValue={SPACING.SMALL} bottomMarginValue={SPACING.SMALL} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[styles.transactionDateText, { width: '85%' }]}><Text style={{ color: (transactionType === 'Income') ? colors.green : colors.red, fontWeight: 'bold' }}>{transactionType}</Text> added on <Text style={{ fontWeight: 'bold' }}>{moment(transactionDate).format("DD MMMM YYYY")}</Text></Text>
                <TouchableOpacity onPress={() => {
                    alert("Edit is not available in this version")
                }}>
                    <Text style={styles.transactionDateText}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Alert.alert('Delete Transaction', `Are you sure you want to delete ${transactionTitle} transaction?`, [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Yes, Delete', style: 'destructive', onPress: () => deleteActionPressed() },
                    ])
                    // deleteActionPressed(transactionId)
                }}>
                    <Text style={styles.transactionDateText}>🗑️</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    transactionCard: {
        backgroundColor: colors.lightGrayWhite,
        padding: SPACING.MEDIUM,
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

    transactionAmountText: { fontWeight: 'bold', fontSize: 16, marginTop: SPACING.SMALL / 2, marginBottom: SPACING.SMALL },
    transactionTitleText: { fontSize: 16 },
    transactionDescText: { fontSize: 12, color: colors.lightGrayText },
    transactionDateText: { fontSize: 10, marginTop: SPACING.SMALL },
})

export default TransactionCell;