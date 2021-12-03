import React from 'react';
import { TouchableOpacity, StyleSheet, Text, } from 'react-native';

import { SPACING } from '../utils/constants';
import colors from '../utils/colors';

function MainActionButton({ title, pressEvent }) {
    return (
        <TouchableOpacity onPress={pressEvent} style={styles.container}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: SPACING.MEDIUM,
        marginBottom: SPACING.MEDIUM,
        height: 48,
        backgroundColor: colors.primaryBlue,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    btnText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.lightGrayWhite
    }
})

export default MainActionButton;