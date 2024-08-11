import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const TipsCard: React.FC = () => {
  const tips = [
    'Walk or bike for short trips.',
    'Use public transportation.',
    'Carpool when possible.',
    'Drive fuel-efficient vehicles.',
    'Avoid unnecessary flights.',
    'Turn off lights when not in use.',
    'Unplug electronics when not in use.',
    'Use energy-efficient appliances.',
    'Switch to LED bulbs.',
    'Reduce, reuse, and recycle.',
    'Eat more plant-based meals.',
    'Buy local and seasonal produce.',
    'Avoid single-use plastics.',
    'Compost food waste.',
    'Wash clothes in cold water.',
    'Air dry your laundry.',
    'Insulate your home properly.',
    'Install a programmable thermostat.',
    'Reduce water heating temperature.',
    'Support renewable energy sources.',
  ];
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
            fill="white"
          />
        </Svg>
        <View style={styles.starContainer}>
          <Svg width="8" height="8" viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="white"
            />
          </Svg>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Tips</Text>
        <Text style={styles.subtitle}>
          {tips[Math.floor(Math.random() * 19)]}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8ECFBC',
    borderRadius: 20,
    padding: 15,
    marginBottom: 80,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  starContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
  },
});

export default TipsCard;
