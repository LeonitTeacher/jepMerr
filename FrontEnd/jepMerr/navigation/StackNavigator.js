import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useToken } from "../TokenContext";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  const { getToken } = useToken();
  const token = getToken();

  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      {!token && (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
