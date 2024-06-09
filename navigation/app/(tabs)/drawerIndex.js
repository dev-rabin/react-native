import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DashboardScreen from '../../screens/DashboardScreen';
import DashboardSettingsScreen from '../../screens/DashboardSettingsScreen';
const Drawer = createDrawerNavigator();

export default function DashboardApp() {
    return (
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor : "white",
            drawerActiveBackgroundColor : "grey",
            drawerContentStyle : {
                backgroundColor : {
                    backgroundColor : "red"
                }
            }
        }}>
            <Drawer.Screen name='Dashboard' component={DashboardScreen}/>
            <Drawer.Screen name='Settings' component={DashboardSettingsScreen}/>
        </Drawer.Navigator>
    )
}