import { StyleSheet } from 'react-native'; 

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
        backgroundColor: "#33356d",
        padding: 20,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    searchInput: {
        backgroundColor: "rgba(255,255,255,.5)",
        color: 'white'
    },
    logo: {
        fontSize: 28,
        textAlign: "center",
        letterSpacing: 2,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    main: {
        marginTop: 15,
        paddingBottom: 250,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#33356d",
        height: '100%',
        overflow: 'hidden'
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
        backgroundColor: 'rgba(255, 255, 255, .5)',
        padding: 15,
        borderRadius: 100,
        marginBottom: 10,
    },
    categoryText: {
        textAlign: 'center',
        color: 'white'
    },
    products: {
        marginTop: 20,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    productWrapper: {
        width: 180,
        backgroundColor: 'rgba(255,255,255,.5)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20
    },
    productImage: {
        height: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'

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
        backgroundColor: "#33356d",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#33356d',
    },
    modalContent: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        padding: 10
    },
    swipperWrapper: {
        borderRadius: 10,
        height: 400,
    },  
    modalCloseButton: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255,255,255,.5)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    slide: {
        width: '100%',
        height: 300,
        borderRadius: 10
    },
    imageSwipper: {
        width: '100%',
        height: 300,
        objectFit: 'contain',
        borderRadius: 20,
    },
    productDetails: {
        paddingTop: 10,
        height: 400
    },
    productTitleText: {
        fontSize: 24,
        marginBottom: 10,
        color: 'white'
    },
    productDesceription: {
        fontSize: 14,
        marginTop: 10,
        lineHeight: 20,
        color: 'white'
    },
    singleAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'fixed',
        bottom: 0,
        width: '100%'
        
    },
    addToCart: {
        width: '49.5%',
        height: 40,
        backgroundColor: 'rgba(255,255,255,.5)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5
    },
    buyNow: {
        width: '49.5%',
        height: 40,
        backgroundColor: '#c3e703',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5
    }
});

export default styles;