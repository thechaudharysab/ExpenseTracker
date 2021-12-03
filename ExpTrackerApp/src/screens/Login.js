import React, { useCallback, useState } from 'react';
import { ScrollView, Text, StyleSheet, Dimensions, KeyboardAvoidingView, Image, TextInput, View, Platform, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

import Animation from 'lottie-react-native';

import colors from '../utils/colors';

import { COMMON_STYLES, SPACING } from '../utils/constants';
import financeBlue from '../assets/animations/finance-blue.json';
import MainActionButton from '../components/MainActionButton';
import Divider from '../components/Divider';
import SecondaryActionButton from '../components/SecondaryActionButton';

function Login({ navigation }) {

    const windowWidth = Dimensions.get('window').width;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [hidePassword, setHidePassword] = useState(true);

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({ headerShown: false });
        }, [navigation])
    );

    function checkLogin() {
        if (email === 'test@domain.com' && password === '12345678') {
            //Goto dashboard
            navigation.navigate("Dashboard")
        } else {
            Alert.alert("Invalid Login Information", "The login information is invalid or not found. Please correct the information and try again.")
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'position' : null}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}>

                <Animation source={financeBlue} loop={true} autoPlay={true} style={{ width: windowWidth - 150, height: windowWidth - 150, alignSelf: 'center' }} />
                <Text style={styles.mainLogoText}>Expense Tracker</Text>
                <Text style={[COMMON_STYLES.subHeading, { alignSelf: 'center' }]}>The world's simplest expense tracking app!</Text>

                <View style={{ width: '100%', marginTop: SPACING.LARGE, marginBottom: SPACING.LARGE }}>

                    <Text style={COMMON_STYLES.textInputLabel}>Email Address</Text>
                    <TextInput placeholder={'Your email address'} value={email} autoCapitalize={'none'}
                        keyboardType={'email-address'} style={COMMON_STYLES.textFieldActive}
                        onChangeText={(e) => setEmail(e)} />

                    <Text style={COMMON_STYLES.textInputLabel}>Password</Text>
                    <View style={[COMMON_STYLES.textFieldActive, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                        <TextInput placeholder={'Enter Password'} value={password} secureTextEntry={hidePassword} style={{ flex: 1 }}
                            keyboardType={'default'} onChangeText={(p) => setPassword(p)} />
                        <TouchableOpacity onPress={() => { setHidePassword(!hidePassword); }}>
                            <Image source={hidePassword ? require('../assets/icons/hide.png') : require('../assets/icons/show.png')} style={{ width: 20, height: 20, marginRight: SPACING.SMALL }} />
                        </TouchableOpacity>
                    </View>


                    <MainActionButton title="Login" pressEvent={() => { checkLogin() }} />
                    <TouchableOpacity onPress={() => Alert.alert("Demo login info", "Email: test@domain.com Password: 12345678")}>
                        <Text style={{ fontSize: 12, alignSelf: 'center', textDecorationLine: 'underline', color: colors.secondaryDarkBlue }}>Forgot Login Information</Text>
                    </TouchableOpacity>

                    <Divider />

                    <Text style={{ alignSelf: 'center', marginBottom: SPACING.SMALL }}>Don't have a account?</Text>
                    <SecondaryActionButton title={'Create an Account'} pressEvent={() => {
                        Alert.alert("Coming Soon", "This functionality is not available yet.")
                    }} />

                </View>

            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.LARGE,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: SPACING.LARGE,
    },
    mainLogoText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: -SPACING.LARGE,
    },
})

export default Login;