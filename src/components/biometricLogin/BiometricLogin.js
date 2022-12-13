import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import cores from "../cores";
import { useState, useEffect } from "react";
import * as LocalAuthentication from 'expo-local-authentication';

export default ({marginFinger}) => {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    useEffect(() => {
        (async() => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        });
    }, []);

    return (
        <TouchableOpacity activeOpacity={1.0} style={[styles.fingerLogin, { marginTop: marginFinger }]}>
            <Ionicons name="finger-print-sharp" size={34} color={cores.orangeTxt} />
            <Text style={{ color: cores.orangeTxt, width: 180, textAlign: "center", marginTop: 10 }}>
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