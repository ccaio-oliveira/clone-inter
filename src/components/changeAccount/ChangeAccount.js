import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { useState } from 'react';
import users from './../users';
import { useNavigation } from '@react-navigation/native';

export default ({ route }) => {
    const { getUser } = route.params;
    const navigation = useNavigation();

    const userLog = (user) => {
        getUser(user);
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => userLog(users.caio)}>
                <Text>Caio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => userLog(users.fernanda)}>
                <Text>Fernanda</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff'
    }
})