import React, { useCallback, useState, useRef } from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, Dimensions, Keyboard, Alert } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

import RNModal from "react-native-modalbox";
import DatePicker from 'react-native-date-picker'

import { SPACING, COMMON_STYLES } from '../utils/constants';
import colors from '../utils/colors';
import SegSelector from '../components/SegSelector';
import MainActionButton from '../components/MainActionButton';
import moment from 'moment';

import transactionServices from '../utils/services/transactionServices';

function AddEditTransaction(props) {

    useFocusEffect(
        useCallback(() => {
            props.navigation.setOptions({
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
        }, [props.navigation])
    );

    const windowHeight = Dimensions.get('window').height;

    const [transactionType, setTransactionType] = useState("Income")
    const tabOptions = ["Income", "Expense"]

    const [transactionAmount, setTransactionAmount] = useState("")
    const [transactionTitle, setTransactionTitle] = useState("")
    const [transactionDesc, setTransactionDesc] = useState("")
    const [transactionDate, setTransactionDate] = useState(new Date());

    const transactionDateRef = useRef();

    function tabUpdated(index) {
        setTransactionType(tabOptions[index]);
    }

    function submitPressed() {

        if (transactionAmount === "") {
            Alert.alert("Error", "Amount is required")
        } else if (transactionTitle === "") {
            Alert.alert("Error", "Transaction title is required")
        } else {
            let tObject = {
                "TransactionType": transactionType,
                "TransactionCurrency": "RM",
                "TransactionAmount": parseFloat(transactionAmount),
                "TransactionTitle": transactionTitle,
                "TransactionDescription": transactionDesc,
                "TransactionDate": moment(transactionDate).format("YYYY-MM-DDTHH:mm:ssZ"),
                "TransactionDateAdded": moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ"),
                "TransactionDateModified": moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ")
            }

            transactionServices.postNewTransaction(tObject).then(() => {
                Alert.alert("Success", `${transactionType} Transaction has been successfully added.`)
                props.navigation.popToTop();
            }).catch((error) => {
                Alert.alert("Error", JSON.stringify(error))
            })

        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <KeyboardAvoidingView>
                <Text style={COMMON_STYLES.textInputLabel}>Selected Transaction Type: <Text style={{ fontWeight: 'bold', color: colors.primaryBlue }}>{transactionType}</Text></Text>
                <SegSelector options={tabOptions} selectedIndex={0} updatedTabAction={(selectedIndex) => tabUpdated(selectedIndex)} />

                <Text style={COMMON_STYLES.textInputLabel}>{transactionType} Title *</Text>
                <TextInput placeholder={'e.g. Lunch at Nandos'} value={transactionTitle}
                    style={COMMON_STYLES.textFieldActive}
                    onChangeText={(t) => setTransactionTitle(t)} />

                <Text style={COMMON_STYLES.textInputLabel}>Amount *</Text>
                <View style={[COMMON_STYLES.textFieldActive, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                    <Text style={{ marginRight: SPACING.SMALL, color: colors.lightGrayText }}>RM</Text>
                    <TextInput placeholder={'Enter Amount'} value={transactionAmount} style={{ flex: 1 }}
                        keyboardType={'decimal-pad'} onChangeText={(a) => setTransactionAmount(a)} />
                </View>

                <Text style={COMMON_STYLES.textInputLabel}>Description</Text>
                <TextInput placeholder={' '} value={transactionDesc} multiline={true}
                    style={[COMMON_STYLES.textFieldActive, { height: COMMON_STYLES.textFieldActive.height + 40 }]}
                    onChangeText={(d) => setTransactionDesc(d)} />

                <Text style={COMMON_STYLES.textInputLabel}>Transaction Date *</Text>
                <TextInput style={COMMON_STYLES.textFieldActive} placeholder={'DD-MM-YYYY'} onFocus={() => { Keyboard.dismiss(); transactionDateRef.current.open(); }}
                    value={`${moment(transactionDate).format("DD MMMM YYYY")}`} isEditable={false} />
                {/* ${transactionDate.getDate()} ${transactionDate.getMonth() + 1} ${transactionDate.getFullYear()} */}
                <RNModal ref={transactionDateRef} position={'bottom'} swipeArea={20} coverScreen={true}
                    style={{ backgroundColor: '#fff', borderTopStartRadius: 25, borderTopRightRadius: 25, padding: 10, height: windowHeight * 0.32 }}>
                    <Text style={{ alignSelf: 'center', margin: 10, fontWeight: 'bold' }}>Select Transaction Date</Text>
                    <DatePicker
                        style={{ alignSelf: 'center' }}
                        date={transactionDate}
                        onDateChange={setTransactionDate}
                        mode={'date'}
                        androidVariant={'iosClone'}
                        maximumDate={new Date()}
                        textColor={colors.primaryBlue}
                    />
                </RNModal>
            </KeyboardAvoidingView>
            <MainActionButton title={"Add Transaction"} pressEvent={() => {
                submitPressed();
            }} />

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