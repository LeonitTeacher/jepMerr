import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class Home extends Component {
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
      const response = await fetch("http://123.123.123:8000/products/allProducts/");
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
          <Text style={styles.loadingText}>Loading...</Text>
        ) : (
          <FlatList
            data={products}
            renderItem={this.renderProductItem}
            keyExtractor={(item) => item.id.toString()} // Assuming products have unique IDs
            contentContainerStyle={styles.productList}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F5F5F5',
  },
  productList: {
    paddingBottom: 20,
  },
  productItem: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  loadingText: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default Home;
