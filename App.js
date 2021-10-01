import React from 'react';
import Menu from './components/menu';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutUsers from './components/aboutuser';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MyProfile from './components/about';
import Contact from './components/profile';

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'menu'} component={Menu} 
         options={{tabBarLabel:'Home',
         tabBarIcon:({color,size})=>(
         <MaterialCommunityIcons name="home"
         color={color} 
         size={size}/> ),}} />
        <Tab.Screen name={'about'} component={MyProfile} 
         options={{tabBarLabel:'Resume',
         tabBarIcon:({color,size})=>(
         <MaterialCommunityIcons name="account"
         color={color} 
         size={size}/> ),}}
        />
        <Tab.Screen name={'profile'} component={Contact}
                options={{tabBarLabel:'Profile',
                tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="phone"
                color={color} 
                size={size}/> ),}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
