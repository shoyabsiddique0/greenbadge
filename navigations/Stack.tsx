import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Achievement" component={AchievementsScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
