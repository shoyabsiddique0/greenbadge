import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Achievements from '../components/svg/achievements';
import Settings from '../components/svg/settings';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import Leaf from '../components/svg/leaf';
import Ring from '../components/svg/circle';
import CarbonFootprintCard from '../components/carbonFootPrintCard';
import WeeklyFootprintChart from '../components/weeklyFootprintChart';
import PieChartLegend from '../components/pieChart';
import TipsCard from '../components/tipsCard';
import AddActivitiesButton from '../components/actionButton';
import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {StackNavigationProp} from '@react-navigation/stack';
export type RootStackParamList = {
  Home: undefined;
  Achievement: undefined;
};
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#262626', flex: 1}}>
      <Image
        source={require('../assets/home_bg.png')}
        style={{zIndex: -1, position: 'absolute'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Image
          source={require('../assets/Greenbadge.png')}
          style={{margin: 10}}
        />
        <View style={{flexDirection: 'row', margin: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('Achievement')}>
            <Achievements />
          </TouchableOpacity>
          <View style={{margin: 5}} />
          <Settings />
        </View>
      </View>
      <ScrollView>
        <View style={{marginTop: '70%'}}>
          <CarbonFootprintCard footprint={120}></CarbonFootprintCard>
        </View>
        <WeeklyFootprintChart></WeeklyFootprintChart>
        <PieChartLegend></PieChartLegend>
        <TipsCard></TipsCard>
      </ScrollView>
      <AddActivitiesButton onPress={() => console.warn()}></AddActivitiesButton>
    </View>
  );
};

export default HomeScreen;
