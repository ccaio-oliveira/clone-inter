import { Text, View, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import cores from './../cores';
import { useEffect, useState } from "react";
import BiometricLogin from "../biometricLogin/BiometricLogin";
import users from './../users';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const [user, setUser] = useState(users.caio);
    const userLogged = user;
    let fullName = userLogged.nome_completo;
    const numAccount = userLogged.num_conta;
    const [secureEntry, setSecureEntry] = useState(true);
    const [eyeIcon, setEyeIcon] = useState('eye-off');
    const [marginFinger, setMarginFinger] = useState(80);
    const [passConf, setPassConf] = useState('');
    const navigation = useNavigation();

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

    useEffect(() => {
        const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
            setMarginFinger(10);
        });
        const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
            setMarginFinger(80);
        });

        return () => {
            showKeyboard.remove();
            hideKeyboard.remove();
        }
    }, []);

    const getUser = (user) => {
        return setUser(user);
    }

    const validPass = () => {
        if(passConf === user.password){
            navigation.navigate('Home', { user: user });
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity activeOpacity={0.9} style={{ alignItems: "flex-end" }}>
                    <AntDesign name="questioncircleo" size={24} color="#FB7B05" />
                </TouchableOpacity>
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
                        <TouchableOpacity onPress={() => navigation.navigate('ChangeAccount', {getUser: getUser })}>
                            <Text style={styles.changeAccTxt}>Trocar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.passwordArea}>
                    <Text style={{ color: cores.greyTxt, fontWeight: '500' }}>Senha</Text>
                    <TextInput secureTextEntry={secureEntry} style={styles.inpPassword} value={passConf} onChangeText={setPassConf} />
                    <View style={styles.eyePass}>
                        <Feather name={eyeIcon} size={24} color={cores.orangeTxt} onPress={() => { changeSecureEntry(); changeEye(); }} />
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={validPass}>
                    <Text style={styles.btnTxt}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.fgtPass}>
                    <Text style={styles.fgtPassTxt}>Esqueci minha senha</Text>
                </View>
                <BiometricLogin marginFinger={marginFinger} navigation={navigation} user={user} />
                <View style={[styles.footer, { marginTop: marginFinger }]}>
                    <Text style={styles.iSafe}>
                        <MaterialCommunityIcons name="shield-lock-outline" size={15} color={cores.orangeTxt} /> iSafe
                    </Text>
                    <Text style={styles.changeAccTxt}>Trocar ou abrir conta</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: "space-between",
        backgroundColor: '#fff'
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
        borderRadius: 10,
        paddingRight: 50,
        fontWeight: "bold"
    },
    eyePass: {
        position: "absolute",
        right: 20,
        top: 35,
        zIndex: 10
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
    },
    footer: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    iSafe: {
        alignContent: "center",
        justifyContent: "center",
        color: cores.orangeTxt,
        fontWeight: "bold"
    }
})