import { ScrollView, StyleSheet, Text, View } from "react-native"

export default ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <Text>Home</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    }
})