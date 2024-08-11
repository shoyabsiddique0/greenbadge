import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import ProductData from '../utils/product';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigations/Routes';
import {RouteProp} from '@react-navigation/native';
import productStore from '../stores/ProductStore';

type ProductDetailsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductDetails'>;
};

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
  navigation,
}) => {
  const [product, setProduct] = useState<ProductData>(
    productStore.getRawState(),
  );

  console.log('product', product);

  return (
    <ScrollView style={styles.container}>
      {product.image_link ? (
        <Image source={{uri: product.image_link}} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text>No Image Available</Text>
        </View>
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.detail}>Barcode ID: {product.barcode_id}</Text>
        <Text style={styles.detail}>EAN: {product.ean}</Text>
        {/* <Text style={styles.detail}>User ID: {product.user_id}</Text> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProductDetailsScreen;
