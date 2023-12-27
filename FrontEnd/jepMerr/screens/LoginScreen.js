import React, { useState,useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useToken } from '../TokenContext';

const LoginScreen = (props) => {
  const { getToken, saveToken } = useToken();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const token = getToken();

  useEffect(() => {
    if (token !== null) {
      // Token exists, navigate to another screen
      props.navigation.navigate('ProductScreen');
    }
  }, [token]);

  const handleLogin = () => {
    // Your API endpoint for login
    const apiUrl = 'http://192.168.200.199:8000/account/login/';

    // Data to be sent in the POST request
    const data = {
      username: username,
      password: password,
    };

    // Sending POST request using fetch
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        // Handle the API response here
        console.log('Login response:', result);
        saveToken(result.token);
        // You can add logic to handle success or failure of login
      }).then(()=>props.navigation.navigate("ProductScreen"))
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
