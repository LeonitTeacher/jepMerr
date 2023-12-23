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
  Modal
} from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import styles from "./css/ProductStyle";


class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      refreshing: false,
      modalVisible: false,
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


  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { products, loading, refreshing } = this.state;




    return (
      <View style={styles.container}>
        {/* Search product */}
        <View style={styles.searchContainer}>
          <Text style={styles.logo}>JepMerr</Text>
          <SafeAreaView>
            <Searchbar
              placeholder="Search product"
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
            <Text style={{ fontSize: 22, fontWeight: "bold", padding: 20, color: '#fff' }}>Categories</Text>
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
            <Text style={{ fontSize: 22, fontWeight: "bold", padding: 20, color: '#fff' }}>Products</Text>
            <View style={styles.products}>
              <View style={styles.productWrapper}>
                <TouchableOpacity onPress={this.openModal}>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />
                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16, color: 'white' }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>

                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ color: 'white' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity onPress={this.openModal}>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />
                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16, color: 'white' }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>

                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ color: 'white' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity onPress={this.openModal}>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />
                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16, color: 'white' }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>

                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ color: 'white' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.productWrapper}>
                <TouchableOpacity onPress={this.openModal}>
                  <View style={styles.productImage}>
                    <Image
                      source={require('../assets/images/samsung2.jpg')}
                      style={{ width: '100%', height: '100%', borderRadius: 10 }}
                    />
                  </View>
                  <View style={styles.productName}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Samsung galaxy 23 Ultra</Text>
                  </View>

                  <View style={styles.productPrice}>
                    <Text style={{ fontSize: 16, color: 'white' }}>1500.00€</Text>
                    <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                  </View>

                  <View style={styles.productAction}>
                    <TouchableOpacity style={styles.cartBtn}>
                      <Text style={{ color: 'white' }}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.modalCloseButton} onPress={this.closeModal}>
                <Icon name="long-arrow-left" color={'#33356d'} size={30} />
              </TouchableOpacity>

              <Swiper style={styles.swipperWrapper} showsButtons={false} loop={false}>
                <View style={styles.slide}>
                  <Image source={require('../assets/images/samsung2.jpg')} style={styles.imageSwipper} />
                </View>
                <View style={styles.slide}>
                  <Image source={require('../assets/images/samsung2.jpg')} style={styles.imageSwipper} />
                </View>
                <View style={styles.slide}>
                  <Image source={require('../assets/images/samsung2.jpg')} style={styles.imageSwipper} />
                </View>
                <View style={styles.slide}>
                  <Image source={require('../assets/images/samsung2.jpg')} style={styles.imageSwipper} />
                </View>
              </Swiper>

              <View style={styles.productDetails}>
                <Text style={styles.productTitleText}>Samsung galaxy 23 Ultra</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 30, gap: 10, marginBottom: 10 }}>
                  <Text style={{ fontSize: 18, color: 'white' }}>1500.00€</Text>
                  <Text style={{ fontSize: 16, textDecorationLine: 'line-through', color: '#999' }}>1900.00€</Text>
                </View>
                <ScrollView>
                  <Text style={styles.productDesceription}>
                    Introducing the Samsung Galaxy S23 Ultra, the pinnacle of innovation and cutting-edge technology. Boasting a stunning design and a vibrant, high-resolution display, the Galaxy S23 Ultra offers an immersive visual experience. Equipped with a powerful and efficient processor, it ensures seamless multitasking and enhanced performance for demanding applications.
                  </Text>
                </ScrollView>
              </View>

              <View style={styles.singleAction}>
                <TouchableOpacity style={styles.addToCart}>
                  <Text style={{ color: 'white' }}>Add to cart</Text>
                  <Icon name="shopping-cart" color={'white'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyNow}>
                  <Text style={{ color: '#33356d'}}>Buy now </Text>
                  <Icon name="credit-card" size={20} color={'#33356d'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}



export default ProductScreen;
