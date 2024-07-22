import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Svg, Circle, Path} from 'react-native-svg';
import {RootStackParamList} from '../navigations/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
import Achievements from '../components/svg/achievements';
import Settings from '../components/svg/settings';
import LeafHi from '../components/svg/LeafHi';
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Progress'>;
};
const ProgressScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{marginRight: 15}}>
          <Achievements />
        </View>

        <Settings />
      </View>

      <View style={styles.circularProgress}>
        <Text style={styles.progressNumber}>37</Text>
        <Text style={styles.progressSubtext}>3,047</Text>
      </View>

      <View style={styles.statsRow}>
        <StatItem label="Heart Pts" value="1,543" unit="Cal" />
        <StatItem label="Steps" value="1.25" unit="mi" />
        <StatItem label="" value="122" unit="Move Min" />
      </View>

      <TouchableOpacity style={styles.goalCard}>
        <View style={styles.goalHeader}>
          <Text style={styles.goalTitle}>Your daily goals</Text>
          <Text style={styles.goalSubtitle}>Last 7 days</Text>
        </View>
        <View style={styles.goalContent}>
          <Text style={styles.goalAchieved}>3/7</Text>
          <Text style={styles.goalAchievedLabel}>Achieved</Text>
          <View style={styles.weekDays}>
            {['S', 'S', 'M', 'T', 'W', 'T', 'F'].map((day, index) => (
              <DayCircle key={index} day={day} completed={index < 3} />
            ))}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.targetCard}>
        <View style={styles.targetHeader}>
          <Text style={styles.targetTitle}>Your weekly target</Text>
          <Text style={styles.targetSubtitle}>Sep 3 - 9 ✓</Text>
        </View>
        <View style={styles.targetContent}>
          <Text style={styles.targetProgress}>465 of 150</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>
        <View style={styles.messageBox}>
          <Text style={styles.message}>
            Nice work, John! Scoring at least 150 Points each week helps the
            planet stay fit and healthy.
          </Text>
          <LeafHi />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// DayCircle Component
const DayCircle: React.FC<{day: string; completed: boolean}> = ({
  day,
  completed,
}) => {
  return (
    <View
      style={[
        stylesDay.dayCircle,
        completed ? stylesDay.completed : stylesDay.incomplete,
      ]}>
      <Text style={stylesDay.dayText}>{day}</Text>
    </View>
  );
};

interface statInterface {
  label: string;
  value: string;
  unit: string;
}
// StatItem Component
const StatItem: React.FC<statInterface> = ({label, value, unit}) => {
  return (
    <View style={statStyles.container}>
      <Text style={statStyles.label}>{label}</Text>
      <Text style={statStyles.value}>{value}</Text>
      <Text style={statStyles.unit}>{unit}</Text>
    </View>
  );
};
const stylesDay = StyleSheet.create({
  dayCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  completed: {
    backgroundColor: '#4CAF50',
  },
  incomplete: {
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  dayText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});
const statStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    color: '#888888',
    fontSize: 12,
    marginBottom: 5,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  unit: {
    color: '#888888',
    fontSize: 12,
  },
});

// Helper components (AwardIcon, RecycleIcon, StatItem, DayCircle, LeafIcon) would be defined here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  circularProgress: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: '#4CAF50',
    alignSelf: 'center',
    marginBottom: 20,
  },
  progressNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  progressSubtext: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  goalCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  goalTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  goalSubtitle: {
    color: '#888888',
    fontSize: 14,
  },
  goalContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalAchieved: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  goalAchievedLabel: {
    color: '#888888',
    fontSize: 14,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  targetCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 15,
  },
  targetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  targetTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  targetSubtitle: {
    color: '#888888',
    fontSize: 14,
  },
  targetContent: {
    marginBottom: 10,
  },
  targetProgress: {
    color: '#4CAF50',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#444444',
    borderRadius: 5,
  },
  progressFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  messageBox: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  message: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
    marginRight: 10,
  },
});

export default ProgressScreen;
// export {DayCircle, StatItem};
