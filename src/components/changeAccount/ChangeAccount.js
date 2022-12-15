import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import users from './../users';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import cores from './../cores';

export default ({ route }) => {
    const { getUsers } = route.params;
    const navigation = useNavigation();
    const allUsers = Object.values(users);

    const userLog = (user) => {
        getUsers(user);
        navigation.navigate('Login');
    }

    const getNameSub = (user) => {
        let allName = user.nome_completo;
        allName = allName.split(' ');
        return allName[0] + ' ' + allName[allName.length - 1];
    }

    const getInicial = (user) => {
        let fullName = user.nome_completo;
        fullName = fullName.split(' ');
        return fullName[0][0] + fullName[fullName.length - 1][0];
    }

    const encryptNumAcc = (numAccount) => {
        const encryptNumAcc = numAccount.replace(numAccount[0] + numAccount[1] + numAccount[2], '***');
        return encryptNumAcc;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={cores.darkGreen} />
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Contas</Text>
            </View>
            <View style={styles.users}>
                {allUsers.map(user => (
                    <TouchableOpacity onPress={() => userLog(user)} key={user.id} style={styles.chooseUser}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.initials}>{getInicial(user)}</Text>
                            <View>
                                <Text style={styles.nameTxt}>{getNameSub(user)}</Text>
                                <Text style={styles.numAccTxt}>{encryptNumAcc(user.num_conta)}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ zIndex: 10}}>
                            <Feather name="trash" size={24} color={cores.darkGreen} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.addAccount}>
                    <TouchableOpacity style={styles.loginNewAcc}>
                        <Text style={styles.loginNewAccTxt}>Entrar com outra conta</Text>
                        <AntDesign name="arrowright" size={24} color={cores.darkGreen} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addNewAcc}>
                        <Text style={styles.addNewAccTxt}>Abrir conta digital gratuita</Text>
                        <AntDesign name="arrowright" size={24} color="#fff" />
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
        justifyContent: "space-between"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '60%'
    },
    chooseUser: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        borderColor: '#DEDEDE',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginBottom: 17
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
    loginNewAcc: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: cores.darkGreen,
        padding: 10,
        borderRadius: 10
    },
    loginNewAccTxt: {
        color: cores.darkGreen,
        fontWeight: "bold"
    },
    addNewAcc: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: cores.darkGreen,
        borderRadius: 10,
        padding: 10,
        marginTop: 20
    },
    addNewAccTxt: {
        color: "#fff",
        fontWeight: "bold"
    }
})