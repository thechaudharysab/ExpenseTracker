import React from 'react';
import { TouchableOpacity, StyleSheet, Text, } from 'react-native';

import { SPACING } from '../utils/constants';
import colors from '../utils/colors';

function SecondaryActionButton({ title, pressEvent }) {
    return (

        <TouchableOpacity onPress={pressEvent} style={styles.container}>
            <Text style={{ color: colors.primaryBlue, fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        height: 48,
        borderColor: colors.primaryBlue,
        borderRadius: 8,
        padding: SPACING.SMALL,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    }
})

export default SecondaryActionButton;