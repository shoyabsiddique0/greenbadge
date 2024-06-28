import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

interface DayData {
  day: number;
  value: number;
  color: string;
}

interface WeekData {
  startDate: string;
  endDate: string;
  data: DayData[];
}

const WeeklyFootprintChart: React.FC = () => {
  const weeklyData: WeekData[] = [
    {
      startDate: '24 Dec',
      endDate: '30 Dec',
      data: [
        {day: 24, value: 180, color: '#C0B283'},
        {day: 25, value: 100, color: '#86C3D7'},
        {day: 26, value: 160, color: '#DCD0C0'},
        {day: 27, value: 240, color: '#F4A261'},
        {day: 28, value: 120, color: '#A8DADC'},
        {day: 29, value: 200, color: '#69B34C'},
        {day: 30, value: 220, color: '#97D8B2'},
      ],
    },
    // Add more weeks as needed
    {
      startDate: '17 Dec',
      endDate: '23 Dec',
      data: [
        {day: 17, value: 150, color: '#C0B283'},
        {day: 18, value: 130, color: '#86C3D7'},
        {day: 19, value: 180, color: '#DCD0C0'},
        {day: 20, value: 200, color: '#F4A261'},
        {day: 21, value: 160, color: '#A8DADC'},
        {day: 22, value: 190, color: '#69B34C'},
        {day: 23, value: 210, color: '#97D8B2'},
      ],
    },
  ];

  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
  const currentWeek = weeklyData[selectedWeekIndex];
  const maxValue = Math.max(...currentWeek.data.map(d => d.value));

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.weekButton}>
          <Text style={styles.weekButtonText}>Week</Text>
        </View>
        <Picker
          selectedValue={selectedWeekIndex}
          style={styles.picker}
          onValueChange={itemValue => setSelectedWeekIndex(itemValue)}>
          {weeklyData.map((week, index) => (
            <Picker.Item
              key={index}
              label={`${week.startDate} - ${week.endDate}`}
              value={index}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.chart}>
        {currentWeek.data.map((day, index) => (
          <View key={index} style={styles.dayColumn}>
            <View
              style={[
                styles.bar,
                {
                  height: `${(day.value / maxValue) * 100}%`,
                  backgroundColor: day.color,
                },
              ]}
            />
            <Text style={styles.dayText}>{day.day}</Text>
            {day.value === maxValue && (
              <View style={styles.highlightBadge}>
                <Text style={styles.highlightText}>{day.value}kg</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  weekButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  weekButtonText: {
    fontWeight: 'bold',
  },
  picker: {
    flex: 1,
    marginLeft: 10,
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 200,
  },
  dayColumn: {
    alignItems: 'center',
    width: '14%',
  },
  bar: {
    width: '60%',
    borderRadius: 10,
  },
  dayText: {
    marginTop: 5,
  },
  highlightBadge: {
    position: 'absolute',
    top: -25,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    padding: 2,
  },
  highlightText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default WeeklyFootprintChart;
