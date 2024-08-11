import {View, Text} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import LeafHi from '../components/svg/LeafHi';
import {Circle} from 'react-native-svg';
import Search from '../components/svg/search';
import Steps from '../components/svg/steps.';
import GradientCard from '../components/gradientCard';
import Achievements from '../components/svg/achievements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigations/Routes';
import store from '../stores/ProfileStore';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Achievement'>;
};
const AchievementsScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const userProfile = store.getRawState();
  return (
    <ScrollView style={{backgroundColor: '#262626'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 40,
            margin: 10,
            alignItems: 'center',
          }}>
          <LeafHi></LeafHi>
          <View>
            <Text
              style={{
                color: 'white',
                fontWeight: '900',
                fontSize: 18,
                fontStyle: 'italic',
              }}>
              Hi, {userProfile.data.name.split(' ')[0]}
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: '900',
                fontSize: 18,
                fontStyle: 'italic',
              }}>
              {}
            </Text>
          </View>
          {/* <View
            style={{
              backgroundColor: '#2d3628',
              width: 56,
              height: 56,
              borderRadius: 38,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Search></Search>
          </View> */}
        </View>
        <View
          style={{
            borderColor: '#BFBFBF',
            borderRadius: 24,
            borderWidth: 1,
            margin: 10,
            marginTop: 40,
            padding: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Steps></Steps>
            <Text
              style={{
                color: 'white',
                fontWeight: '900',
                marginLeft: '20%',
                fontSize: 18,
              }}>
              Steps: 2000+
            </Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={{color: 'white', fontWeight: '900', fontSize: 18}}>
              Lets Keep Going
            </Text>
            <Text style={{color: 'white', fontWeight: '900', fontSize: 18}}>
              Keep participating in weekly challenges
            </Text>
          </View>
        </View>
        <GradientCard></GradientCard>
        <View style={{marginTop: 16, marginLeft: 16}}>
          <Text
            style={{
              color: '#76B624',
              opacity: 0.9,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Week winner
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            borderWidth: 1,
            margin: 16,
            borderColor: '#BFBFBF',
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 20}}>
              Alfred Owen
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Achievements></Achievements>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 16,
                  marginLeft: 5,
                }}>
                4 h 20 min
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default AchievementsScreen;
