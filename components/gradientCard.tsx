import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import store from '../stores/ProfileStore';

const {width} = Dimensions.get('window');

const GradientCard = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6BC53F', '#000000']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradient}>
        <View style={styles.content}>
          <Text style={styles.title}>Your Available points</Text>
          <Text style={styles.points}>
            {store.getRawState().data.score}{' '}
            <Text style={styles.ptsLabel}>pts.</Text>
          </Text>
          <View style={styles.weekPointsContainer}>
            <Text style={styles.weekPointsLabel}>This week points</Text>
            <Text style={styles.weekPoints}>25/50 pts</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    margin: 20,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: '#e0f0e0',
    fontSize: 16,
    fontWeight: '500',
  },
  points: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ptsLabel: {
    fontSize: 18,
  },
  weekPointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  weekPointsLabel: {
    color: '#e0f0e0',
    fontSize: 16,
  },
  weekPoints: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    marginTop: 10,
  },
  progressBar: {
    width: '50%', // Adjust based on actual progress
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 2,
  },
});

export default GradientCard;
