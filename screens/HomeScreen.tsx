import {View, Text, Image} from 'react-native';
import React from 'react';
import Achievements from '../components/svg/achievements';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: '#262626', flex: 1}}>
      <Image
        source={require('../assets/home_bg.png')}
        style={{zIndex: -1, position: 'absolute'}}
      />
      <View>
        <Image
          source={require('../assets/Greenbadge.png')}
          style={{margin: 10}}
        />
        <View>
          <Achievements />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
