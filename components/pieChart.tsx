// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import Svg, {Circle, Path} from 'react-native-svg';

// interface DataItem {
//   label: string;
//   value: number;
//   color: string;
// }

// const PieChartLegend: React.FC = () => {
//   const data: DataItem[] = [
//     {label: 'Transportation', value: 420, color: '#5B69FF'},
//     {label: 'Lifestyle', value: 203, color: '#FF5B5B'},
//     {label: 'Consumption Habits', value: 104, color: '#5BFFC2'},
//   ];

//   const total = data.reduce((sum, item) => sum + item.value, 0);

//   const getPath = (startAngle: number, endAngle: number): string => {
//     const radius = 50;
//     const center = 60;
//     const x1 = center + radius * Math.cos(startAngle);
//     const y1 = center + radius * Math.sin(startAngle);
//     const x2 = center + radius * Math.cos(endAngle);
//     const y2 = center + radius * Math.sin(endAngle);
//     const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';
//     return `M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
//   };

//   let startAngle = 0;

//   return (
//     <View style={styles.container}>
//       <View style={styles.chartContainer}>
//         <Svg height="120" width="120" viewBox="0 0 120 120">
//           {data.map((item, index) => {
//             const sweepAngle = (item.value / total) * 2 * Math.PI;
//             const endAngle = startAngle + sweepAngle;
//             const path = getPath(startAngle, endAngle);
//             startAngle = endAngle;
//             return <Path key={index} d={path} fill={item.color} />;
//           })}
//           <Circle cx="60" cy="60" r="30" fill="white" />
//         </Svg>
//       </View>
//       <View style={styles.legendContainer}>
//         {data.map((item, index) => (
//           <View key={index} style={styles.legendItem}>
//             <View style={[styles.colorDot, {backgroundColor: item.color}]} />
//             <Text style={styles.legendText}>
//               {item.label} ({item.value}Kg)
//             </Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 15,
//     alignItems: 'center',
//     shadowColor: '#000',
//     margin: 20,

//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   chartContainer: {
//     width: 120,
//     height: 120,
//   },
//   legendContainer: {
//     flex: 1,
//     marginLeft: 15,
//   },
//   legendItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   colorDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginRight: 5,
//   },
//   legendText: {
//     fontSize: 12,
//     color: '#5B5B5B',
//   },
// });

// export default PieChartLegend;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';
import Activity from '../utils/activity';
import colors from '../utils/colors';

interface DataItem {
  label: string;
  value: number;
  color: string;
}

const PieChartLegend: React.FC<{activities: Activity[]}> = ({activities}) => {
  // Map the activities to DataItem format
  const activityColors: {[key: string]: string} = {
    Transportation: '#5B69FF',
    Lifestyle: '#FF5B5B',
    'Consumption Habits': '#5BFFC2',
  };

  const data: DataItem[] = activities.map((activity, index) => ({
    label: activity.activityId,
    value: activity.carbonFootprint,
    color: colors[index] || '#000000', // Default color if not in the map
  }));

  const total = data.reduce((sum, item) => sum + item.value, 0);
  console.log(total, 'total');

  const getPath = (startAngle: number, endAngle: number): string => {
    const radius = 50;
    const center = 60;
    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);
    const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';
    return `M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
  };

  let startAngle = 0;
  if (data.length == 0) {
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
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Svg height="120" width="120" viewBox="0 0 120 120">
          {data.map((item, index) => {
            const sweepAngle = (item.value / total) * 2 * Math.PI;
            const endAngle = startAngle + sweepAngle;
            console.log('chart', (item.value / total) * 2 * Math.PI);
            const path = getPath(startAngle, endAngle);
            startAngle = endAngle;
            return <Path key={index} d={path} fill={item.color} />;
          })}
          <Circle cx="60" cy="60" r="30" fill="white" />
        </Svg>
      </View>
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.colorDot, {backgroundColor: item.color}]} />
            <Text style={styles.legendText}>
              {item.label} ({item.value}Kg)
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    margin: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartContainer: {
    width: 120,
    height: 120,
  },
  legendContainer: {
    flex: 1,
    marginLeft: 15,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#5B5B5B',
  },
});

export default PieChartLegend;
