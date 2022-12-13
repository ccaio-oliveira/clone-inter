import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Login from './src/components/login/Login';
import users from './src/components/users';

export default function App() {

    return (
        <View style={[styles.container]}>
            <Login user={users.caio} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
});
