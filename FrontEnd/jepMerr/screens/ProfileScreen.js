import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 24
    }
});

export default Profile;