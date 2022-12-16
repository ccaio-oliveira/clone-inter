import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { AntDesign } from '@expo/vector-icons';
import cores from '../cores';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const [fullName, setFullName] = useState('');
    const [bornDate, setBornDate] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={cores.darkGreen} />
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Boas-vindas!</Text>
            </View>
            <View>
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
                                options={{ format: 'DD/MM/YYYY'}}
                                onChangeText={text => {
                                    setBornDate(text);
                                }}
                            />
                        </View>
                    </View>
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '60%',
        marginBottom: '10%'
    },
    input: {
        backgroundColor: '#F5F6FA',
        padding: 15,
        borderRadius: 10,
        paddingRight: 50,
        color: cores.greyTxt,
        fontWeight: '300',
        marginTop: 5
    },
    bornDateArea: {
        marginTop: 20
    },
    fullNameArea: {
        marginTop: 20
    }
})