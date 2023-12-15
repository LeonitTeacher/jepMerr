import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';

const items = [
  { id: 1, name: 'Item 1', price: '$10', quantity: 1, image: 'https://www.bootdey.com/image/280x280/00FFFF/000000' },
  { id: 2, name: 'Item 2', price: '$20', quantity: 1, image: 'https://www.bootdey.com/image/280x280/FF00FF/000000' },
  { id: 3, name: 'Item 3', price: '$30', quantity: 1, image: 'https://www.bootdey.com/image/280x280/FF7F50/000000' },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter((i) => i !== item));
  };

  const increaseQuantity = (item) => {
    const newCartItems = cartItems.map((i) => {
      if (i === item) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });
    setCartItems(newCartItems);
  };

  const decreaseQuantity = (item) => {
    const newCartItems = cartItems.map((i) => {
      if (i === item && i.quantity > 1) {
        return { ...i, quantity: i.quantity - 1 };
      }
      return i;
    });
    setCartItems(newCartItems);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.price.slice(1)); // Convert price to a number
    }, 0).toFixed(2);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Shopping Cart</Text>
        {cartItems.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <View style={styles.quantityContainer}>
                <Button title="-" onPress={() => decreaseQuantity(item)} />
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Button title="+" onPress={() => increaseQuantity(item)} />
              </View>
              <View style={styles.removeButton}>
                <TouchableOpacity onPress={() => removeItem(item)} style={styles.removeButtonTouchable}>
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        {/* Styling for "Add Item" button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            addItem({
              id: Math.random(),
              name: 'New Item',
              price: '$15',
              image: 'https://www.bootdey.com/image/280x280/FFD700/000000',
              quantity: 1,
            })
          }
        >
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>

        {/* Styling for "Checkout" button */}
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => console.log('Checkout pressed')}
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>

        {/* Modal for viewing zoomed-in product image */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <Image source={{ uri: selectedItem?.image }} style={styles.modalImage} />
            <Button title="Close" onPress={closeModal} />
          </View>
        </Modal>

        {/* Total Sum Section */}
        <View style={styles.totalSumContainer}>
          <Text style={styles.totalSumText}>Total: ${calculateTotalPrice()}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 30
  },
  scrollView: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  removeButton: {
    alignItems: 'center',
  },
  removeButtonTouchable: {
    backgroundColor: '#FF6347', // Tomato color
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center', // Align text vertically
    alignItems: 'center',
    marginRight: 10, // Add margin for separation from quantity controls
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  totalSumContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalSumText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  addButton: {
    backgroundColor: '#4CAF50', // Green color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: '#2196F3', // Blue color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff'
  }
  });

  export default ShoppingCart;
