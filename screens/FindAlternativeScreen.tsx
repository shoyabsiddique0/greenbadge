import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import Search from '../components/svg/search';
import {RootStackParamList} from '../navigations/Routes';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Alternative'>;
};
const FindAlternativeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'< Home'}</Text>
        </TouchableOpacity>
      </View>

      <View style={{}}>
        <Search></Search>
      </View>

      <Text style={styles.title}>Find an alternative</Text>

      <Text style={styles.subtitle}>
        Let me find a sustainable alternative for whatever product you currently
        use! It's as simple as 1-2-3:
      </Text>

      <View style={styles.instructionsContainer}>
        <InstructionStep
          number="1"
          text="Bring the product up close to the scanner's view"
        />
        <InstructionStep
          number="2"
          text="Take a photo to recognize and register the product"
        />
        <InstructionStep
          number="3"
          text="If it's not recognizing the product, scan the barcode instead"
        />
      </View>

      <View
        style={{justifyContent: 'center', width: '100%', flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.buttonText}>Got it!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const MagnifyingGlassIcon = () => (
  <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    <Path
      d="M22 38C30.8366 38 38 30.8366 38 22C38 13.1634 30.8366 6 22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M44 44L33 33"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
interface InstructionStepInteface {
  number: string;
  text: string;
}
const InstructionStep: React.FC<InstructionStepInteface> = ({number, text}) => (
  <View style={styles.instructionStep}>
    <Text style={styles.stepNumber}>{number}</Text>
    <Text style={styles.stepText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  header: {
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
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  instructionsContainer: {
    marginBottom: 30,
  },
  instructionStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  stepNumber: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  stepText: {
    color: '#FFFFFF',
    fontSize: 20,
    flex: 1,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 12,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FindAlternativeScreen;
