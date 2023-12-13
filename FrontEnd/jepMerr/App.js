import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CartScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
