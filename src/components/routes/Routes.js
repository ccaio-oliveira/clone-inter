import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Views/login/Login";
import Home from "../Views/Home/Home";
import ChangeAccount from "../Views/changeAccount/ChangeAccount";
import Welcome from "../Views/openAccount/Welcome";
import AddCPF from "../Views/openAccount/AddCPF";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ChangeAccount" component={ChangeAccount} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="AddCPF" component={AddCPF} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}