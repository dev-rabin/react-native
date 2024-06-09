import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DashboardScreen from "../../screens/DashboardScreen";
const BottomNavigation = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
import DashboardSettingsScreen from "../../screens/DashboardSettingsScreen";

export default function App () {
    return (
        <BottomNavigation.Navigator screenOptions={
            {
                tabBarLabelPosition : "below-icon",
                tabBarShowLabel : true,
                tabBarActiveTintColor : "red",
                tabBarInactiveTintColor : "blue",
            }
        }>
        <BottomNavigation.Screen name="Bottom Tab Dashboard" component={DashboardScreen} 
        options={{
            tabBarIcon : ({color}) => <Ionicons name="person" size={20} color="purple"/>,
            tabBarBadge:2
        }}/>
        <BottomNavigation.Screen name="Bottom Tab Setttings" component={DashboardSettingsScreen} options={{
            tabBarIcon : () => <Ionicons name="settings" size={20}
            />
        }} />
        </BottomNavigation.Navigator>
    )
}