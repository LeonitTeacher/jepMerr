import React, { Component, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      refreshing: false,
    };
  }


  onRefresh = async () => {
    this.setState({ refreshing: true });

    // Fetch new data or perform any asynchronous task
    // For demonstration purposes, I'm using a simple setTimeout
    setTimeout(() => {
      // Update your data
      // Replace this with your data fetching logic
      const newData = [...this.state.products, { id: this.state.products.length + 1, text: `Item ${this.state.products.length + 1}` }];
      this.setState({ products: newData, refreshing: false });
    }, 1000); // Simulating an asynchronous task
  };

  // componentDidMount() {
  //   this.fetchAllProducts();
  // }

  // fetchAllProducts = async () => {
  //   try {
  //     const response = await fetch("http://123.123.123:8000/products/allProducts/");
  //     const data = await response.json();
  //     this.setState({ products: data, loading: false });
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };

  // renderProductItem = ({ item }) => {
  //   return (
  //     <View style={styles.productItem}>
  //       <Text style={styles.title}>{item.name}</Text>
  //       <Text style={styles.description}>{item.description}</Text>
  //       <Text style={styles.price}>Price: ${item.price}</Text>
  //       {/* You can add more details or buttons for each product */}
  //     </View>
  //   );
  // };

  render() {
    const { products, loading, refreshing } = this.state;




    return (
      <View style={styles.container}>
        {/* {loading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : (
          <FlatList
            data={products}
            renderItem={this.renderProductItem}
            keyExtractor={(item) => item.id.toString()} // Assuming products have unique IDs
            contentContainerStyle={styles.productList}
          />
        )} */}


        {/* Search product */}
        <View style={styles.searchContainer}>
          <Text style={styles.logo}>JepMerr</Text>
          <SafeAreaView>
            <Searchbar
              placeholder="Search product"
              // value={searchQuery}
              // onChangeText={(text) => setSearchQuery(text)}
              style={styles.searchInput}
            />
          </SafeAreaView>
        </View>

        <View style={styles.main}>
          {/* categories cards */}
          <ScrollView 
            refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
          }>
            <Text style={{ fontSize: 22, fontWeight: "bold", padding: 20 }}>Categories</Text>
            <ScrollView horizontal={true}>
              <View style={styles.categoryWrapper}>
                <TouchableOpacity>
                  <View style={styles.categoryImage}>
                    <Image
                      source={require('../assets/Icons/smartphone.png')}
                      style={{ width: 64, height: 64 }}
                    />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Phones</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.categoryWrapper}>
                <TouchableOpacity>
                  <View style={styles.categoryImage}>
                    <Image
                      source={require('../assets/Icons/video-game-controller.png')}
                      style={{ width: 64, height: 64 }}
                    />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Consoles</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.categoryWrapper}>
                <TouchableOpacity>
                  <View style={styles.categoryImage}>
                    <Image
                      source={require('../assets/Icons/laptop.png')}
                      style={{ width: 64, height: 64 }}
                    />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Laptops</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.categoryWrapper}>
                <TouchableOpacity>
                  <View style={styles.categoryImage}>
                    <Image
                      source={require('../assets/Icons/monitor.png')}
                      style={{ width: 64, height: 64 }}
                    />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Monitors</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.categoryWrapper}>
                <TouchableOpacity>
                  <View style={styles.categoryImage}>
                    <Image
                      source={require('../assets/Icons/smartphone.png')}
                      style={{ width: 64, height: 64 }}
                    />
                  </View>
                  <View style={styles.categoryName}>
                    <Text style={styles.categoryText}>Phones</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>


            {/* products items */}
            <Text style={{ fontSize: 22, fontWeight: "bold", padding: 20 }}>Products</Text>
            <View style={styles.products}>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />

                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16 }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16 }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>
                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ textAlign: 'center', color: '#000' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />

                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16 }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16 }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>
                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ textAlign: 'center', color: '#000' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />

                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16 }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16 }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>
                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ textAlign: 'center', color: '#000' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />

                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16 }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16 }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>
                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ textAlign: 'center', color: '#000' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />

                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16 }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16 }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>
                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ textAlign: 'center', color: '#000' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />

                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16 }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16 }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>
                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ textAlign: 'center', color: '#000' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />

                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16 }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16 }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>
                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ textAlign: 'center', color: '#000' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />

                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16 }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16 }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>
                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ textAlign: 'center', color: '#000' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />

                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16 }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16 }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>
                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ textAlign: 'center', color: '#000' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    // paddingTop: 20,
    backgroundColor: "#F5F5F5",
    marginTop: 20,
  },
  productList: {
    paddingBottom: 20,
  },
  productItem: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2196F3",
  },
  loadingText: {
    fontSize: 20,
    alignSelf: "center",
  },
  searchContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  searchInput: {
    backgroundColor: "#f3f3f3",
  },
  logo: {
    fontSize: 28,
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  main: {
    marginTop: 15,
    paddingBottom: 250,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    height: '100%'
    // padding: 20,
  },
  categoryWrapper: {
    width: 120,
    height: 120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  categoryImage: {
    backgroundColor: '#f3f3f3',
    padding: 15,
    borderRadius: 100,
    marginBottom: 10
  },
  categoryText: {
    textAlign: 'center'
  },
  products: {
    marginTop: 20,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  productWrapper: {
    width: 180,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    padding: 10
  },
  productImage: {
    height: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'

  },
  favorite: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: '#f3f3f3',
    padding: 5,
    borderRadius: 50
  },
  productName: {
    marginTop: 10,
  },

  productPrice: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    marginTop: 10
  },
  productAction: {
    marginTop: 10
  },
  cartBtn: {
    width: '100%',
    height: 40,
    backgroundColor: "#c3e703",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
});

export default ProductScreen;
