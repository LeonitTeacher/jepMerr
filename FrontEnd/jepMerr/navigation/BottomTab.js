import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import ShoppingCart from '../screens/CartScreen';
import Profile from '../screens/ProfileScreen';
import { TokenProvider } from '../TokenContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddCategoryScreen from '../screens/AddCategoryScreen';
import AuthStackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();


const MyTabs = (props) => {
    return (
        <TokenProvider>
            <View style={styles.container}>
                <Tab.Navigator
                    initialRouteName="ProductScreen"
                    screenOptions={{
                        tabBarActiveTintColor: '#fff',
                        tabBarStyle: {
                            backgroundColor: '#33356d',
                            position: 'absolute',
                            bottom: 0,
                            left: '2.5%',
                            right: '2.5%',
                            height: 70,
                            paddingBottom: 10,
                            borderRadius: 30,
                            marginBottom: 20,
                        },
                        tabBarLabelStyle: {
                            fontSize: 12,
                        },
                        tabBarIconStyle: {
                            marginBottom: -15,
                        },
                        headerShown: false
                    }}
                >
                    <Tab.Screen
                        name="ProductScreen"
                        component={ProductScreen}
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
                        component={AuthStackNavigator}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="user-circle" size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Add Category"
                        component={AddCategoryScreen}
                        options={{
                            tabBarLabel: 'Add Category',
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="folder" size={size} color={color} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </View>
        </TokenProvider>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
});

export default MyTabs;
