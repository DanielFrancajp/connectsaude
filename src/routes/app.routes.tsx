import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import { LoggedInUser } from '../screens/LoggedInUser';
import { NewScheduling } from '../screens/NewScheduling';
import { RecoveryPassoword } from '../screens/RecoverPassword';
import { Register } from '../screens/Register';
import { Scheduling } from '../screens/Scheduling';
import { Vaccines } from '../screens/Vaccines';
import { SusCard } from '../screens/SusCard';
import { MyExams } from '../screens/MyExams';
import { MyHistoric } from '../screens/MyHistoric';
import { Others } from '../screens/Others';
import { EletronicMedicalRecord } from '../screens/ElectronicMedicalRecord';
import { Medicines } from '../screens/Medicines';

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

            <Screen
                name='loggedinuser'
                component={LoggedInUser}
            />

            <Screen
                name='Agendamentos'
                component={Scheduling}
            />

            <Screen
                name='Vacinas'
                component={Vaccines}
            />
            <Screen
                name='CartaoSus'
                component={SusCard}
            />
            <Screen
                name='MeusExames'
                component={MyExams}
            />

            <Screen
                name='MeuHistorico'
                component={MyHistoric}
            />
            <Screen
                name='Outros'
                component={Others}
            />

            <Screen
                name='newscheduling'
                component={NewScheduling}
            />

            <Screen
                name='eletronicmedicalrecord'
                component={EletronicMedicalRecord}
            />
            <Screen
                name='medicines'
                component={Medicines}
            />


        </Navigator>
    )
}