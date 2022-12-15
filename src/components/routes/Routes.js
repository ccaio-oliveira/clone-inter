import { createNativeStackNavigator, CardStyleInterpolators } from "@react-navigation/native-stack";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import Login from "../login/Login";
import Home from "../Home/Home";
import ChangeAccount from "../changeAccount/ChangeAccount";
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ChangeAccount" component={ChangeAccount} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}