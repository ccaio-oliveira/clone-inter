import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../login/Login";
import Home from "../Home/Home";
import ChangeAccount from "../changeAccount/ChangeAccount";
import 'react-native-gesture-handler';
import { useState } from 'react';
import Welcome from "../openAccount/Welcome";

const Stack = createNativeStackNavigator();

export default () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ChangeAccount" component={ChangeAccount} />
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}