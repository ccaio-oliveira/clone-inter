import { View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import cores from "../../cores";
import { useState, useEffect } from "react";
import * as LocalAuthentication from 'expo-local-authentication';

export default ({marginFinger, navigation, user}) => {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    useEffect(() => {
        (async() => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        });
    }, []);

    const fallBackDefaultAuth = () => {
        console.log('fall Back to Password Authentication');
    }

    const handleBiometricAuth = async () => {
        const isBiometricAvaliable = await LocalAuthentication.hasHardwareAsync();
        if(!isBiometricAvaliable){
            return Alert.alert(
                "Por favor, inserir sua senha", 
                "biometric Authentication not Password",
                "Ok",
                () => fallBackDefaultAuth()
            )
        }

        let supportBiometrics;

        if(isBiometricAvaliable){
            supportBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
        }

        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if(!savedBiometrics){
            return Alert.alert(
                "Por favor, inserir sua senha", 
                "biometric Authentication not Password",
                "Ok",
                () => fallBackDefaultAuth()
            )
        }

        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticação',
            cancelLabel: 'Senha',
            disableDeviceFallback: true
        })

        if(!!biometricAuth.success){
            navigation.navigate('Home', {user: user});
        }

    }

    return (
        <TouchableOpacity style={[styles.fingerLogin, { marginTop: marginFinger }]} onPress={handleBiometricAuth}>
            <Ionicons name="finger-print-sharp" size={34} color={cores.darkGreen} />
            <Text style={{ color: cores.darkGreen, width: 180, textAlign: "center", marginTop: 10 }}>
                Entre utilizando sua impressão digital
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fingerLogin: {
        alignItems: "center",
    }
})