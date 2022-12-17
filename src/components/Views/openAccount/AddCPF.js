import { StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native"
import { useNavigation } from '@react-navigation/native';
import HeaderNavigation from "../../headerNavigation/HeaderNavigation";
import cores from './../../cores';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';

export default ({ route }) => {
    const { dataUser } = route.params;
    const [cpf, setCpf] = useState('');
    const [btnIsAble, setBtnIsAble] = useState(styles.disabledBtn);
    const [txtAble, setTxtAble] = useState(styles.txtDisabled);
    const [inpCheckAble, setInpCheckAble] = useState(false);
    const navigation = useNavigation();
    let fullName = dataUser.fullName;
    fullName = fullName.split(' ');

    const cpfIsValid = () => {
        if (cpf.length !== 13) {
            setBtnIsAble(styles.disabledBtn);
            setTxtAble(styles.txtDisabled);
            setInpCheckAble(false);
        } else {
            setBtnIsAble(styles.abledBtn);
            setTxtAble(styles.txtAbled);
            setInpCheckAble(true);
        }

    }

    const styleInpCheck = inpCheckAble === true ? styles.inpCheckAb : styles.inpCheckDisab;

    return (
        <View style={styles.container}>
            <HeaderNavigation page="CPF" />
            <View style={styles.content}>
                <View>
                    <Text>
                        <Text style={{ color: cores.darkGreen }}>{fullName[0]}</Text>, somos um banco digital e de verdade. Pra registrar tudo direitinho,
                        precisamos do seu CPF.
                    </Text>
                    <View style={styles.inpArea}>
                        <Text style={{ color: cores.greyTxt, fontWeight: '500' }}>CPF</Text>
                        <TextInputMask
                            type={'cpf'}
                            value={cpf}
                            placeholder='Digite apenas os dígitos'
                            style={styles.input}
                            onChangeText={txt => {
                                setCpf(txt);
                                cpfIsValid();
                            }}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <View>
                        <Text style={{ fontWeight: "bold" }}>
                            Li e concordo com os Termos e Condições de <Text style={txtAble}>Abertura de Conta</Text>, com a <Text style={txtAble}>Política de Privacidade Inter </Text>
                            e com os Termos e condições de <Text style={txtAble}>Uso do Super App Inter</Text>.
                        </Text>
                    </View>
                    <TouchableOpacity disabled={inpCheckAble} style={btnIsAble}>
                        <Text>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    content: {
        flex: 1,
        justifyContent: "space-between"
    },
    inpArea: {
        marginTop: 25
    },
    input: {
        backgroundColor: '#F5F6FA',
        padding: 15,
        borderRadius: 10,
        paddingRight: 50,
        color: cores.greyTxt,
        fontWeight: 'bold',
        marginTop: 5
    },
    txtDisabled: {
        color: '#DCDCDC',
    },
    txtAbled: {
        color: cores.darkGreen
    }
})