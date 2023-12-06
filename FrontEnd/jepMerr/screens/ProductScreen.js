import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchAllProducts();
  }

  fetchAllProducts = async () => {
    try {
      const response = await fetch("http://192.168.140.86/products/allProducts/");
      print(response)
      const data = await response.json();
      this.setState({ products: data, loading: false });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  renderProductItem = ({ item }) => {
    return (
      <View style={styles.productItem}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        {/* You can add more details or buttons for each product */}
      </View>
    );
  };

  render() {
    const { products, loading } = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={products}
            renderItem={this.renderProductItem}
            keyExtractor={(item) => item.id.toString()} // Assuming products have unique IDs
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  productItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ProductScreen;
