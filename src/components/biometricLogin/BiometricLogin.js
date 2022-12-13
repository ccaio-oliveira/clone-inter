import { View, Text, StyleSheet, } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import cores from "../cores";
import { useState } from "react";

export default ({marginFinger}) => {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    return (
        <TouchableOpacity style={[styles.fingerLogin, { marginTop: marginFinger }]} onPress={handleBiometricAuth}>
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