import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Touchable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {RootStackParamList} from '../navigations/Routes';
import baseUrl from '../utils/const';
import Activity from '../utils/activity';
import {SafeAreaView} from 'react-native-safe-area-context';
import {parse} from 'date-fns/fp/parse';
import {removeItem} from 'react-native-shared-preferences';
import store from '../stores/ProfileStore';
import activityStore from '../stores/HomeStore';
import Camera from '../components/svg/camera';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [userData, setUserData] = useState<Activity[]>([]);
  const [sumOfActvity, setSumOfActvity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [allActivities, setAllActivities] = useState<Activity[]>([]);

  // useEffect(() => {
  //   setLoading(true);
  //   console.log(loading);

  //   const fetchActivities = async () => {
  //     try {
  //       console.log(store.getRawState().data.user_id);

  //       const response = await fetch(
  //         `${baseUrl}/userActivity/${store.getRawState().data.user_id}`,
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           method: 'GET',
  //         },
  //       );
  //       const jsonResponse = await response.json();
  //       console.log(jsonResponse);

  //       if (response.ok) {
  //         console.log('Fetched User Activity all', jsonResponse);
  //         setAllActivities(jsonResponse.data);
  //         console.log('User Activity', allActivities);
  //         // Handle successful login, e.g., navigate to another screen
  //         // navigation.replace('Home');
  //       } else {
  //         Alert.alert('Fetching User Activity Failed', jsonResponse.error);
  //         console.log(jsonResponse);
  //       }
  //     } catch (error) {
  //       console.error('Error during Fetching:', error);
  //       Alert.alert(
  //         'User Activity Error',
  //         'An error occurred during Fetching User Activity. Please try again.',
  //       );
  //     }
  //   };

  //   const fetchActivitiesToday = async () => {
  //     try {
  //       console.log(store.getRawState().data.user_id);
  //       const today = new Date();

  //       const yyyy = today.getUTCFullYear();
  //       const mm = String(today.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
  //       const dd = String(today.getUTCDate()).padStart(2, '0');

  //       const hours = String(today.getUTCHours()).padStart(2, '0');
  //       const minutes = String(today.getUTCMinutes()).padStart(2, '0');
  //       const seconds = String(today.getUTCSeconds()).padStart(2, '0');
  //       const milliseconds = String(today.getUTCMilliseconds()).padStart(
  //         3,
  //         '0',
  //       );

  //       // To get microseconds (using fractions of milliseconds):
  //       const microseconds =
  //         String(today.getTime() % 1000).padStart(3, '0') + '000';

  //       const formattedDateTimeUTC = `${yyyy}-${mm}-${dd} ${hours}:${minutes}:${seconds}.${milliseconds}${microseconds} +0000 UTC`;

  //       const body = JSON.stringify({timestamp: formattedDateTimeUTC});
  //       console.log(body, 'json');

  //       const response = await fetch(
  //         `${baseUrl}/userActivity/time/${store.getRawState().data.user_id}`,
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           method: 'POST',
  //           body: body,
  //         },
  //       );
  //       const jsonResponse = await response.json();
  //       console.log(jsonResponse);

  //       if (response.ok) {
  //         console.log('Fetched User Activity', jsonResponse);
  //         setUserData(jsonResponse);
  //         let sum = 0;
  //         jsonResponse.data.forEach((element: any) => {
  //           console.log(element.carbonFootprint);
  //           sum += element.carbonFootprint;
  //         });
  //         setSumOfActvity(parseFloat(sum.toPrecision(3)));
  //         // Handle successful login, e.g., navigate to another screen
  //         // navigation.replace('Home');
  //       } else {
  //         Alert.alert('Fetching User Activity Failed', jsonResponse.error);
  //         console.log(jsonResponse);
  //       }
  //     } catch (error) {
  //       console.error('Error during Fetching:', error);
  //       Alert.alert(
  //         'User Activity Error',
  //         'An error occurred during Fetching User Activity. Please try again.',
  //       );
  //     }
  //     setLoading(false);
  //   };
  //   fetchActivities();
  //   fetchActivitiesToday();
  //   console.log(loading);
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(store.getRawState().data.user_id, 'user id');

      try {
        // Fetch all activities
        const fetchActivities = async () => {
          // removeItem('profile');
          const response = await fetch(
            `${baseUrl}/userActivity/${store.getRawState().data.user_id}`,
            {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'GET',
            },
          );
          const jsonResponse = await response.json();
          if (response.ok) {
            setAllActivities(jsonResponse.data);
          } else {
            Alert.alert('Fetching User Activity Failed', jsonResponse.error);
          }
        };

        // Fetch today's activities
        const fetchActivitiesToday = async () => {
          const today = new Date();

          const yyyy = today.getUTCFullYear();
          const mm = String(today.getUTCMonth() + 1).padStart(2, '0');
          const dd = String(today.getUTCDate()).padStart(2, '0');
          const hours = String(today.getUTCHours()).padStart(2, '0');
          const minutes = String(today.getUTCMinutes()).padStart(2, '0');
          const seconds = String(today.getUTCSeconds()).padStart(2, '0');
          const milliseconds = String(today.getUTCMilliseconds()).padStart(
            3,
            '0',
          );
          const microseconds =
            String(today.getTime() % 1000).padStart(3, '0') + '000';

          const formattedDateTimeUTC = `${yyyy}-${mm}-${dd} ${hours}:${minutes}:${seconds}.${milliseconds}${microseconds} +0000 UTC`;

          const body = JSON.stringify({timestamp: formattedDateTimeUTC});

          const response = await fetch(
            `${baseUrl}/userActivity/time/${store.getRawState().data.user_id}`,
            {
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              body: body,
            },
          );
          const jsonResponse = await response.json();

          if (response.ok) {
            setUserData(jsonResponse.data);

            let sum = 0;
            jsonResponse.data.forEach((element: any) => {
              sum += element.carbonFootprint;
            });
            setSumOfActvity(parseFloat(sum.toPrecision(3)));
          } else {
            Alert.alert('Fetching User Activity Failed', jsonResponse.error);
          }
        };

        await Promise.all([fetchActivitiesToday(), fetchActivities()]).then(
          () => {
            console.log(allActivities, 'User Data');

            activityStore.update(state => {
              state = allActivities;
              console.log('activity updated', state);
            });
          },
        );
      } catch (error) {
        Alert.alert(
          'User Activity Error',
          'An error occurred during Fetching User Activity. Please try again.' +
            error,
        );
      } finally {
        setLoading(false); // Ensure loading is false after both requests complete
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#538313" />
      </SafeAreaView>
    );
  }
  return (
    <View style={{backgroundColor: '#262626', flex: 1}}>
      <Image
        source={require('../assets/home_bg.png')}
        style={{
          zIndex: -1,
          position: 'absolute',
          objectFit: 'fill',
          width: '100%',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Image
          source={require('../assets/CarbonSmart.png')}
          style={{
            margin: 10,
            width: '50%',
            height: '80%',
            objectFit: 'contain',
          }}
        />
        <View style={{flexDirection: 'row', margin: 10}}>
          <TouchableOpacity
            onPress={() => {
              // console.warn('Clicked on');
              navigation.navigate('Achievement');
            }}>
            <Achievements />
          </TouchableOpacity>
          <View style={{margin: 5}} />
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Settings />
          </TouchableOpacity>
          <View style={{margin: 5}} />
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <Camera />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{marginTop: '70%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Progress')}>
            <CarbonFootprintCard footprint={sumOfActvity}></CarbonFootprintCard>
          </TouchableOpacity>
        </View>

        <WeeklyFootprintChart
          userActivity={allActivities!}></WeeklyFootprintChart>
        <PieChartLegend activities={userData!}></PieChartLegend>
        <TipsCard></TipsCard>
      </ScrollView>
      <AddActivitiesButton
        onPress={() =>
          navigation.navigate('AddActivity')
        }></AddActivitiesButton>
    </View>
  );
};

export default HomeScreen;
