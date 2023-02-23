import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import { RecoveryPassoword } from '../screens/RecoverPassword';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />

            <Screen
                name="recoverypassword"
                component={RecoveryPassoword}
            />
            <Screen
                name='register'
                component={Register}
            />
        </Navigator>
    )
}