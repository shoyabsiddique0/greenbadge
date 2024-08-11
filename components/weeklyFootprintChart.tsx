// import React, {useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {Picker} from '@react-native-picker/picker';

// interface DayData {
//   day: number;
//   value: number;
//   color: string;
// }

// interface WeekData {
//   startDate: string;
//   endDate: string;
//   data: DayData[];
// }

// const WeeklyFootprintChart: React.FC = () => {
//   const weeklyData: WeekData[] = [
//     {
//       startDate: '24 Dec',
//       endDate: '30 Dec',
//       data: [
//         {day: 24, value: 180, color: '#C0B283'},
//         {day: 25, value: 100, color: '#86C3D7'},
//         {day: 26, value: 160, color: '#DCD0C0'},
//         {day: 27, value: 240, color: '#F4A261'},
//         {day: 28, value: 120, color: '#A8DADC'},
//         {day: 29, value: 200, color: '#69B34C'},
//         {day: 30, value: 220, color: '#97D8B2'},
//       ],
//     },
//     // Add more weeks as needed
//     {
//       startDate: '17 Dec',
//       endDate: '23 Dec',
//       data: [
//         {day: 17, value: 150, color: '#C0B283'},
//         {day: 18, value: 130, color: '#86C3D7'},
//         {day: 19, value: 180, color: '#DCD0C0'},
//         {day: 20, value: 200, color: '#F4A261'},
//         {day: 21, value: 160, color: '#A8DADC'},
//         {day: 22, value: 190, color: '#69B34C'},
//         {day: 23, value: 210, color: '#97D8B2'},
//       ],
//     },
//   ];

//   const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
//   const currentWeek = weeklyData[selectedWeekIndex];
//   const maxValue = Math.max(...currentWeek.data.map(d => d.value));

//   return (
//     <View style={styles.card}>
//       <View style={styles.header}>
//         <View style={styles.weekButton}>
//           <Text style={styles.weekButtonText}>Week</Text>
//         </View>
//         <Picker
//           selectedValue={selectedWeekIndex}
//           style={styles.picker}
//           onValueChange={itemValue => setSelectedWeekIndex(itemValue)}>
//           {weeklyData.map((week, index) => (
//             <Picker.Item
//               key={index}
//               label={`${week.startDate} - ${week.endDate}`}
//               value={index}
//             />
//           ))}
//         </Picker>
//       </View>
//       <View style={styles.chart}>
//         {currentWeek.data.map((day, index) => (
//           <View key={index} style={styles.dayColumn}>
//             <View
//               style={[
//                 styles.bar,
//                 {
//                   height: `${(day.value / maxValue) * 100}%`,
//                   backgroundColor: day.color,
//                 },
//               ]}
//             />
//             <Text style={styles.dayText}>{day.day}</Text>
//             {day.value === maxValue && (
//               <View style={styles.highlightBadge}>
//                 <Text style={styles.highlightText}>{day.value}kg</Text>
//               </View>
//             )}
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 20,
//     color: '#000',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//     color: '#000',
//   },
//   weekButton: {
//     backgroundColor: '#E0E0E0',
//     borderRadius: 15,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//   },
//   weekButtonText: {
//     fontWeight: 'bold',
//     color: '#585858',
//   },
//   picker: {
//     flex: 1,
//     marginLeft: 10,
//     color: '#000',
//   },
//   chart: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//     height: 200,
//   },
//   dayColumn: {
//     alignItems: 'center',
//     width: '14%',
//     color: '#000',
//   },
//   bar: {
//     width: '60%',
//     borderRadius: 10,
//   },
//   dayText: {
//     marginTop: 5,
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   highlightBadge: {
//     position: 'absolute',
//     top: -25,
//     backgroundColor: '#E0E0E0',
//     borderRadius: 5,
//     padding: 2,
//   },
//   highlightText: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     color: '#585858',
//   },
// });

// export default WeeklyFootprintChart;

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {parseISO, startOfWeek, endOfWeek, format, parse} from 'date-fns';
import Activity from '../utils/activity';

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

const processData = (data: Activity[]): WeekData[] => {
  const groupedData: {[key: string]: {[day: string]: DayData}} = {};
  console.log(data, 'data');
  data.forEach(item => {
    console.log(item.timestamp.split(' UTC')[0], 'timestamp');

    const date = parse(
      item.timestamp.split(' +')[0],
      'yyyy-MM-dd HH:mm:ss.SSSSSSS',
      new Date(),
    );
    console.log(date, 'date');
    const weekStart = startOfWeek(date, {weekStartsOn: 1});
    console.log(weekStart, 'weekStart');
    const weekEnd = endOfWeek(date, {weekStartsOn: 1});
    console.log(weekEnd, 'weekEnd');
    const formattedStart = format(weekStart, 'dd MMM');
    console.log(formattedStart, 'formattedStart');
    const formattedEnd = format(weekEnd, 'dd MMM');
    console.log(formattedEnd, 'formattedEnd');

    const weekKey = `${formattedStart} - ${formattedEnd}`;
    if (!groupedData[weekKey]) {
      groupedData[weekKey] = {};
    }

    const day = format(date, 'dd');
    if (!groupedData[weekKey][day]) {
      groupedData[weekKey][day] = {
        day: parseInt(day, 10),
        value: 0,
        color: '#538313',
      }; // Default color
    }

    groupedData[weekKey][day].value += item.carbonFootprint;
  });

  const result: WeekData[] = Object.keys(groupedData).map(weekKey => {
    const daysData: DayData[] = Object.keys(groupedData[weekKey]).map(day => ({
      day: groupedData[weekKey][day].day,
      value: groupedData[weekKey][day].value,
      color: groupedData[weekKey][day].color,
    }));

    return {
      startDate: weekKey.split(' - ')[0],
      endDate: weekKey.split(' - ')[1],
      data: daysData,
    };
  });

  return result;
};

interface props {
  userActivity: Activity[];
}

const WeeklyFootprintChart: React.FC<props> = userActivity => {
  if (userActivity.userActivity.length == 0) {
    return (
      <View
        style={{
          backgroundColor: 'white',
          margin: 20,
          padding: 20,
          borderRadius: 8,
          alignContent: 'center',
        }}>
        <Text style={{color: 'black', textAlign: 'center'}}>
          No activity data available
        </Text>
      </View>
    );
  }
  const rawData: Activity[] = userActivity.userActivity;

  console.log(rawData, 'rawData');
  const weeklyData: WeekData[] = processData(rawData);

  const [selectedWeekIndex, setSelectedWeekIndex] = useState<number>(0);
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
          onValueChange={(itemValue: number) =>
            setSelectedWeekIndex(itemValue)
          }>
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
                <Text style={styles.highlightText}>
                  {parseFloat(day.value.toPrecision(3))}kg
                </Text>
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
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    color: '#000',
  },
  weekButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  weekButtonText: {
    fontWeight: 'bold',
    color: '#585858',
  },
  picker: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 200,
    color: '#000',
  },
  dayColumn: {
    alignItems: 'center',
    width: '14%',
    color: '#000',
  },
  bar: {
    width: '60%',
    borderRadius: 10,
  },
  dayText: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#000',
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
    color: '#585858',
  },
});

export default WeeklyFootprintChart;
