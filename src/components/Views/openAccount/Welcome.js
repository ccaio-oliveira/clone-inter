import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import cores from '../../cores';
import { useNavigation } from '@react-navigation/native';
import HeaderNavigation from '../../headerNavigation/HeaderNavigation';

export default () => {
    const [fullName, setFullName] = useState('');
    const [bornDate, setBornDate] = useState('');
    const [dataUser, setDataUser] = useState({});
    const navigation = useNavigation();

    let checkName = fullName;
    checkName = checkName.split(' ');
    const isDisabled = checkName <= 2 || bornDate === '' ? true : false;
    const btnStyle = !isDisabled ? styles.contBtn : styles.disBtn;

    const saveNameAndBornDate = () => {
        let name = fullName;
        name = name.trim('');
        if(dataUser.fullName === undefined) {
            setDataUser({ fullName: name, bornDate });
        } else {
            navigation.navigate('AddCPF', { dataUser: dataUser });
        }
    }

    return (
        <View style={styles.container}>
            <HeaderNavigation page="Boas-Vindas!" />
            <View style={styles.content}>
                <View>
                    <Text style={{ marginBottom: 5 }}>
                        Para começar, informe pra gente seu nome e sua data de nascimento.
                    </Text>
                    <Text>
                        Caso você esteja abrindo a conta para uma pessoa <Text style={{ fontWeight: 'bold' }}>menor de idade</Text> preencha com o nome e a data de nascimento dessa pessoa.
                    </Text>
                    <View style={styles.inpArea}>
                        <View style={styles.fullNameArea}>
                            <Text style={{ color: cores.greyTxt, fontWeight: '500' }}>Nome</Text>
                            <TextInput placeholder='Digite seu nome completo' style={styles.input} value={fullName} onChangeText={setFullName} />
                        </View>
                        <View style={styles.bornDateArea}>
                            <Text style={{ color: cores.greyTxt, fontWeight: '500' }}>Data de nascimento</Text>
                            <TextInputMask
                                style={styles.input}
                                placeholder="DD/MM/AAAA"
                                value={bornDate}
                                keyboardType='numeric'
                                type={'datetime'}
                                options={{ format: 'DD/MM/YYYY' }}
                                onChangeText={text => {
                                    setBornDate(text);
                                }}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={btnStyle}
                    disabled={isDisabled}
                    onPress={() => saveNameAndBornDate()}
                >
                    <Text style={btnStyle === styles.contBtn ? { color: '#fff' } : { color: cores.greyTxt }}>Continuar</Text>
                </TouchableOpacity>
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
        justifyContent: 'space-between'
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
    bornDateArea: {
        marginTop: 20
    },
    fullNameArea: {
        marginTop: 20
    },
    contBtn: {
        backgroundColor: cores.darkGreen,
        color: '#fff',
        alignItems: "center",
        padding: 13,
        marginTop: 32,
        borderRadius: 7
    },
    disBtn: {
        backgroundColor: '#F5F6FA',
        alignItems: "center",
        padding: 13,
        marginTop: 32,
        borderRadius: 7
    }
})