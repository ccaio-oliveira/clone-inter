import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default ({ route }) => {
    const { dataUser } = route.params;
    const navigation = useNavigation();
    console.log(dataUser);
    console.log('oi');
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
})