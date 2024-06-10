import { Pressable, StatusBar, Text, View } from "react-native";
import UserDashboard from "../../views/user_dashboard";
import UserProfile from "../../views/user_profile";
import ProfileSettings from "../../views/profile_settings";
import ProfileUpdate from "../../views/profile_update";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="violet" barStyle="light-content" />
        <Stack.Navigator initialRouteName="Profile Update">
          <Stack.Screen name="User Dashboard" component={UserDashboard} />
          <Stack.Screen
            name="User Profile"
            component={UserProfile}
            options={({ navigation }) => ({
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate("Profile Edit")}>
                  <Ionicons
                    name="pencil"
                    color="white"
                    size={20}
                    style={{ backgroundColor: "#4e26a3", borderRadius: 50, padding: 5 }}
                  />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen name="Profile Edit" component={ProfileSettings} />
          <Stack.Screen name="Profile Update" component={ProfileUpdate} />
        </Stack.Navigator>
    </>
  );
}
