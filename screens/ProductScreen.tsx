import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Svg, Path, Circle} from 'react-native-svg';
import SadLeaf from '../components/svg/sadLeaf';
import {RootStackParamList} from '../navigations/Routes';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Product'>;
};

const ProductScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'< Home'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Saved products</Text>
      <Text style={styles.subtitle}>
        You don't seem to have any saved products yet!
      </Text>
      <SadLeaf />
      <Text style={styles.message}>
        Try finding an alternative for your products to reduce your impact!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Alternative')}>
          Find an alternative
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  message: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    marginTop: 20,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductScreen;
