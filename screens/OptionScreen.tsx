import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import Leaf from '../components/svg/leaf';
import {RootStackParamList} from '../navigations/Routes';
import {StackNavigationProp} from '@react-navigation/stack';

interface Option {
  text: string;
  score: number;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

const questionsData: Question[] = [
  {
    id: 1,
    question: 'Transportation',
    options: [
      {text: 'Walking/Cycling', score: 10},
      {text: 'Public Transport', score: 5},
      {text: 'Private Vehicle', score: 0},
    ],
  },
  {
    id: 2,
    question: 'Home Energy',
    options: [
      {text: 'Renewable Energy Sources', score: 10},
      {text: 'Mixed Energy Sources', score: 5},
      {text: 'Fossil Fuel-based Energy', score: 0},
    ],
  },
  {
    id: 3,
    question: 'Diet',
    options: [
      {text: 'Plant-based/Vegan', score: 10},
      {text: 'Vegetarian/Pescatarian', score: 5},
      {text: 'Meat-heavy Diet', score: 0},
    ],
  },
  {
    id: 4,
    question: 'Consumer Goods',
    options: [
      {text: 'Second-hand/Upcycled', score: 10},
      {text: 'Mix of New and Second-hand', score: 5},
      {text: 'All New Products', score: 0},
    ],
  },
  {
    id: 5,
    question: 'Waste Management',
    options: [
      {text: 'Reduce, Reuse, Recycle, and Compost', score: 10},
      {text: 'Some Recycling and Composting', score: 5},
      {text: 'No Recycling or Composting', score: 0},
    ],
  },
  {
    id: 6,
    question: 'Water Usage',
    options: [
      {text: 'Low Usage with Conservation Methods', score: 10},
      {text: 'Average Usage', score: 5},
      {text: 'High Usage without Conservation', score: 0},
    ],
  },
  {
    id: 7,
    question: 'Electronics',
    options: [
      {text: 'Energy-efficient, Long-lasting Devices', score: 10},
      {text: 'Mix of Efficient and Standard Devices', score: 5},
      {text: 'Frequently Upgraded, Energy-intensive Devices', score: 0},
    ],
  },
  {
    id: 8,
    question: 'Clothing',
    options: [
      {text: 'Minimal Purchases, Mostly Second-hand', score: 10},
      {text: 'Moderate Purchases, Some Sustainable Brands', score: 5},
      {text: 'Frequent Purchases, Fast Fashion', score: 0},
    ],
  },
  {
    id: 9,
    question: 'Travel',
    options: [
      {text: 'Local/Regional Trips', score: 10},
      {text: 'Occasional Long-distance, Non-air Travel', score: 5},
      {text: 'Frequent Air Travel', score: 0},
    ],
  },
  {
    id: 10,
    question: 'Home Appliances',
    options: [
      {text: 'All Energy-efficient Appliances', score: 10},
      {text: 'Mix of Efficient and Standard Appliances', score: 5},
      {text: 'Older, Inefficient Appliances', score: 0},
    ],
  },
];
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Progress'>;
};
const DecisionScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<number, number>
  >({});
  const [totalScore, setTotalScore] = useState<number>(0);

  const currentQuestion = questionsData[currentQuestionIndex];

  useEffect(() => {
    calculateTotalScore();
  }, [selectedOptions]);

  const handleOptionSelect = (optionIndex: number): void => {
    setSelectedOptions(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const calculateTotalScore = (): void => {
    const score = Object.entries(selectedOptions).reduce(
      (total, [questionIndex, selectedOptionIndex]) => {
        const question = questionsData[Number(questionIndex)];
        return total + question.options[selectedOptionIndex].score;
      },
      0,
    );
    setTotalScore(score);
  };

  const handleNextQuestion = (): void => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = (): void => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const renderOption = ({
    item,
    index,
  }: ListRenderItemInfo<Option>): React.ReactElement => (
    <TouchableOpacity
      style={[
        styles.option,
        selectedOptions[currentQuestionIndex] === index &&
          styles.selectedOption,
      ]}
      onPress={() => handleOptionSelect(index)}>
      <Text style={styles.optionText}>{item.text}</Text>
      <View style={styles.scoreContainer}>
        {/* <Image
          source={require('./assets/leaf-icon.png')}
          style={styles.leafIcon}
        /> */}
        <Text style={styles.scoreText}>{item.score}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Take the right decisions</Text>

      <View style={styles.mascotContainer}>
        {/* <Image
          source={require('./assets/leaf-mascot.png')}
          style={styles.mascot}
        />
        <Image source={require('./assets/sun.png')} style={styles.sun} /> */}
        <Leaf />
      </View>

      <View
        style={{
          width: '100%',
          padding: 26,
          backgroundColor: '#fff',
          borderRadius: 16,
        }}>
        <Text style={styles.question}>{currentQuestion.question}</Text>
        <FlatList
          data={currentQuestion.options}
          renderItem={renderOption}
          keyExtractor={(_, index) => index.toString()}
          style={styles.optionsContainer}
        />
        <View style={{paddingBottom: 20}}>
          <Text style={styles.scoreText}>Total Score: {totalScore}</Text>
        </View>
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={[
              styles.button,
              currentQuestionIndex === 0 && styles.disabledButton,
            ]}
            onPress={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              currentQuestionIndex === questionsData.length - 1 &&
                styles.disabledButton,
            ]}
            onPress={handleNextQuestion}
            disabled={currentQuestionIndex === questionsData.length - 1}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        {currentQuestionIndex === questionsData.length - 1 ? (
          <TouchableOpacity
            style={[styles.button, styles.decideButton, {}]}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>I've Decided</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mascotContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  mascot: {
    width: 100,
    height: 100,
  },
  sun: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 30,
    height: 30,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6F3FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#B3E0FF',
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leafIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  scoreText: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#A5D6A7',
  },
  decideButton: {
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DecisionScreen;
