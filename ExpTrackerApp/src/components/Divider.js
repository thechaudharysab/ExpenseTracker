import React from 'react';
import { View, StyleSheet } from 'react-native';

import { SPACING } from '../utils/constants';

import colors from '../utils/colors';

function Divider(props) {
    return (
        <View style={styles.divider} />
    );
}

const styles = StyleSheet.create({
    divider: {
        borderBottomColor: colors.border,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignSelf: "stretch",
        width: "100%",
        marginTop: SPACING.MEDIUM,
        marginBottom: SPACING.MEDIUM,
    },
})

export default Divider;