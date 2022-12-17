import { ScrollView, StyleSheet, Text, View } from "react-native"

export default ({route}) => {
    const { user } = route.params;
    return (
        <ScrollView style={styles.container}>
            <Text>{user.nome_completo}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    }
})