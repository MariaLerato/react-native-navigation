import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './landing'
import AddUser from './adduser'
import AboutUsers from './aboutuser';

const Menu = () =>{
    const Stack = createNativeStackNavigator()
    return(
        <>
            <Stack.Navigator initialRouteName={'landing'}>
                <Stack.Screen name={'landing'} component={Landing} />
                <Stack.Screen name={"aboutuser"} component={AboutUsers} />
            </Stack.Navigator>
        </>
    )
}

export default Menu