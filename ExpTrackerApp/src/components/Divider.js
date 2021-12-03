import React from 'react';
import { View, StyleSheet } from 'react-native';

import { SPACING } from '../utils/constants';

import colors from '../utils/colors';

function Divider({ topMarginValue = SPACING.MEDIUM, bottomMarginValue = SPACING.MEDIUM }) {
    return (
        <View style={[styles.divider, {
            marginTop: topMarginValue, marginBottom: bottomMarginValue,
        }]} />
    );
}

const styles = StyleSheet.create({
    divider: {
        borderBottomColor: colors.border,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignSelf: "stretch",
        width: "100%",
    },
})

export default Divider;