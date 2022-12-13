import { createNativeStackNavigator, CardStyleInterpolators } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../login/Login";
import Home from "../Home/Home";
import ChangeAccount from "../changeAccount/ChangeAccount";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen 
                    name="ChangeAccount" 
                    component={ChangeAccount} 
                    screenOptions={{
                        gestureEnable: true,
                        gestureDirection: 'horizontal',
                        cardStyleInterpolator: CardStyleInterpolators
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}