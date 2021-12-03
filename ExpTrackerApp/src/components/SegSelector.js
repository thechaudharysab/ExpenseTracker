import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { SPACING } from '../utils/constants';
import colors from '../utils/colors';

function SegSelector({ options, selectedIndex = 0, updatedTabAction }) {

    const [updatedSelectedIndex, setUpdatedSelectedIndex] = useState(selectedIndex);

    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <TouchableOpacity key={index} style={[styles.optionView, {
                    backgroundColor: (updatedSelectedIndex === index) ? colors.primaryBlue : 'transparent',
                    width: `${100 / options.length}%`,
                }]} onPress={() => {
                    setUpdatedSelectedIndex(index);
                    updatedTabAction(index);
                }}>
                    <Text style={[styles.optionViewText, { color: (updatedSelectedIndex === index) ? colors.white : colors.lightGrayText }]}>{option}</Text>
                </TouchableOpacity>
            ))}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.border,
        height: 40,
        borderRadius: 8,
        // padding: 1,
        justifyContent: 'space-between'
    },
    optionView: {
        padding: SPACING.SMALL,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    optionViewText: {
        fontWeight: 'bold',
    }
})

export default SegSelector;