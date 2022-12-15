import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Routes from './src/components/routes/Routes';

export default function App() {

    return (
        <View style={styles.container}>
            <Routes />
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
