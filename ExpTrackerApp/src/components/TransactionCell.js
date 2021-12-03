import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SPACING } from '../utils/constants';
import colors from '../utils/colors';
import moment from 'moment';

function TransactionCell({ transactionType, transactionAmount, transactionTitle, transactionDesc, transactionDate, }) {
    return (
        <TouchableOpacity style={styles.transactionCard}>
            <Text style={styles.transactionTitleText}>{transactionTitle}</Text>
            <Text style={[styles.transactionAmountText, { color: (transactionType === 'Income') ? colors.green : colors.red }]}>RM {transactionAmount}</Text>
            <Text style={styles.transactionDescText}>{transactionDesc}</Text>
            <Text style={styles.transactionDateText}><Text style={{ color: colors.green, fontWeight: 'bold' }}>{transactionType}</Text> added on <Text style={{ fontWeight: 'bold' }}>{moment(transactionDate).format("DD MMMM YYYY")}</Text></Text>
        </TouchableOpacity>
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