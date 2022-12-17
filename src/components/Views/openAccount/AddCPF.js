import { StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native"
import { useNavigation } from '@react-navigation/native';
import HeaderNavigation from "../../headerNavigation/HeaderNavigation";
import cores from './../../cores';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default ({ route }) => {
    const { dataUser } = route.params;
    const [cpf, setCpf] = useState('');
    const [btnIsAble, setBtnIsAble] = useState(styles.disabledBtn);
    const [txtAble, setTxtAble] = useState(styles.txtDisabled);
    const [inpCheckDisable, setInpCheckDisable] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [colorCheck, setColorCheck] = useState('#DCDCDC');
    const navigation = useNavigation();
    let fullName = dataUser.fullName;
    fullName = fullName.split(' ');

    const cpfIsValid = () => {
        if (cpf.length !== 13) {
            setBtnIsAble(styles.disabledBtn);
            setTxtAble(styles.txtDisabled);
            setInpCheckDisable(true);
            setColorCheck('#DCDCDC');
        } else {
            setBtnIsAble(styles.abledBtn);
            setTxtAble(styles.txtAbled);
            setInpCheckDisable(false);
            setColorCheck(cores.darkGreen);
        }
    }

    const styleInpCheck = inpCheckDisable === true ? styles.inpCheckAb : styles.inpCheckDisab;

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
                    <View style={styles.confirmTerms}>
                        <Text style={{ fontWeight: "bold" }}>
                            Li e concordo com os Termos e Condições de <Text style={txtAble}>Abertura de Conta</Text>, com a <Text style={txtAble}>Política de Privacidade Inter </Text>
                            e com os Termos e condições de <Text style={txtAble}>Uso do Super App Inter</Text>.
                        </Text>
                        <BouncyCheckbox 
                            size={25}
                            fillColor={colorCheck}
                            unfillColor="#fff"
                            innerIconStyle={{ borderWidth: 3, borderRadius: 8 }}
                            disableText={true}
                            isChecked={isChecked}
                            disabled={inpCheckDisable}
                            onPress={(isChecked) => { setIsChecked(isChecked)}}
                        />
                    </View>
                    <TouchableOpacity disabled={inpCheckDisable} style={btnIsAble}>
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
    },
    confirmTerms: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignItems: "center"
    }
})