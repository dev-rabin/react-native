import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen.js';
import AboutScreen from '../../screens/AboutScreen.js';
import { Pressable, StatusBar, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function StackApp() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="purple"/>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerRight: () => (
              <Pressable onPress={() => alert("Menu is pressed!")}>
                <Text style={{ color: "white", fontSize: 12 }}>Menu</Text>
              </Pressable>
            ),
          }} 
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          initialParams={{ name: "Guest" }} 
        />
      </Stack.Navigator>
      </>
  );
}
