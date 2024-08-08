import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Svg, Circle, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import Leaf from './svg/leaf';

interface CarbonFootprintCardProps {
  footprint: number;
}

const CarbonFootprintCard: React.FC<CarbonFootprintCardProps> = ({
  footprint,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>See your carbon footprint today!</Text>
      <View style={styles.content}>
        <View style={styles.circleContainer}>
          <Svg height="120" width="120" viewBox="0 0 100 100">
            <Defs>
              <LinearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="1">
                <Stop offset={0.40625} stopColor="#FF8A00" />
                <Stop offset={0.5} stopColor="#78D4D4" />
                <Stop offset={0.796875} stopColor="#78D4D4" />
              </LinearGradient>
            </Defs>
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e0e0e0"
              strokeWidth="10"
              fill="none"
            />
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#progressGradient)"
              strokeWidth="10"
              fill="none"
              strokeDasharray={`${Math.min(footprint / 2, 283)} 283`}
              strokeLinecap="round"
            />
          </Svg>
          <View style={styles.circleText}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.footprintValue}>{footprint}</Text>
              <Text style={styles.footprintUnit}>kg</Text>
            </View>
            <Text style={styles.today}>Today</Text>
          </View>
        </View>
        <View style={styles.mascot}>
          <Leaf></Leaf>
        </View>
      </View>
      <Text style={styles.goodJob}>Good job!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  circleContainer: {
    position: 'relative',
  },
  circleText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footprintValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  footprintUnit: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  today: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  mascot: {
    marginLeft: 'auto',
  },
  goodJob: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
    marginRight: 10,
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
});

export default CarbonFootprintCard;
