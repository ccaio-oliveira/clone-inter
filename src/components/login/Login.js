import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import cores from './../cores';
import { useState } from "react";

export default ({ user }) => {
    const userLogged = user;
    let fullName = userLogged.nome_completo;
    const numAccount = userLogged.num_conta;
    const [secureEntry, setSecureEntry] = useState(true);
    const [eyeIcon, setEyeIcon] = useState('eye-off');

    fullName = fullName.split(' ');
    const encryptNumAcc = numAccount.replace(numAccount[0] + numAccount[1] + numAccount[2], '***');

    const changeSecureEntry = () => {
        if (!!secureEntry) {
            setSecureEntry(false);
        } else {
            setSecureEntry(true)
        }
    }

    const changeEye = () => {
        if (eyeIcon === 'eye-off') {
            setEyeIcon('eye');
        } else {
            setEyeIcon('eye-off');
        }
    }

    const clickHandler = () => {
        alert('Botão Clicado');
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={{ alignItems: "flex-end" }}>
                    <AntDesign name="questioncircleo" size={24} color="#FB7B05" />
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.logo}>inter</Text>
                </View>
            </View>
            <View>
                <View style={[styles.accountArea, { flexDirection: "row" }]}>
                    <View style={styles.data}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.initials}>{fullName[0][0]}{fullName[fullName.length - 1][0]}</Text>
                            <View>
                                <Text style={styles.nameTxt}>{fullName[0]} {fullName[fullName.length - 1]}</Text>
                                <Text style={styles.numAccTxt}>{encryptNumAcc}</Text>
                            </View>
                        </View>
                        <Text style={styles.changeAccTxt} onPress={clickHandler}>Trocar</Text>
                    </View>
                </View>
                <View style={styles.passwordArea}>
                    <Text style={{ color: cores.greyTxt, fontWeight: '500' }}>Senha</Text>
                    <TextInput secureTextEntry={secureEntry} style={styles.inpPassword} />
                    <View style={styles.eyePass}>
                        <Feather name={eyeIcon} size={24} color={cores.orangeTxt} onPress={() => { changeSecureEntry(); changeEye(); }} />
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={clickHandler}>
                    <Text style={styles.btnTxt}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.fgtPass}>
                    <Text style={styles.fgtPassTxt}>Esqueci minha senha</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: "space-between"
    },
    logo: {
        alignItems: "center",
        fontSize: 45,
        color: cores.orangeTxt,
        fontWeight: "bold",
        paddingTop: 10
    },
    accountArea: {
        borderColor: '#DEDEDE',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12
    },
    data: {
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1
    },
    initials: {
        backgroundColor: '#6B6C71',
        padding: 10,
        paddingVertical: 11,
        borderRadius: 200,
        color: '#fff',
        letterSpacing: 1,
        fontSize: 19,
        fontWeight: 'bold',
        marginRight: 20
    },
    nameTxt: {
        color: cores.greyTxt,
        fontWeight: '500',
        opacity: 0.7,
        fontSize: 13
    },
    numAccTxt: {
        fontWeight: "bold"
    },
    changeAccTxt: {
        color: cores.orangeTxt,
        fontWeight: "bold",
        fontSize: 14
    },
    passwordArea: {
        marginTop: 20
    },
    inpPassword: {
        backgroundColor: '#F5F6FA',
        padding: 15,
        borderRadius: 10
    },
    eyePass: {
        position: "absolute",
        right: 20,
        top: 35
    },
    button: {
        backgroundColor: cores.orangeTxt,
        color: '#fff',
        alignItems: "center",
        padding: 13,
        marginTop: 32,
        borderRadius: 7
    },
    btnTxt: {
        color: '#fff',
        fontWeight: "bold"
    },
    fgtPass: {
        alignItems: "center",
        marginTop: 32,
    },
    fgtPassTxt: {
        color: cores.orangeTxt,
        fontWeight: "bold"
    }
})