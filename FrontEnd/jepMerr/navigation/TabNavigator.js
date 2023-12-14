import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import Home from '../screens/HomeScreen';
import ShoppingCart from '../screens/CartScreen';
import Profile from '../screens/ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MyTabs() {


  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: { marginBottom: 10 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-circle" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default MyTabs;