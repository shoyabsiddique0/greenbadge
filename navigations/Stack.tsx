import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import ProductScreen from '../screens/ProductScreen';
import FindAlternativeScreen from '../screens/FindAlternativeScreen';
import CameraScreen from '../screens/CameraScreen';
import PermissionsPage from '../screens/PermissionScreen';
import ProgressScreen from '../screens/ProgressScreen';
import DecisionScreen from '../screens/OptionScreen';
import SignupScreen from '../screens/signup';
import LoginScreen from '../screens/login';
const Stack = createStackNavigator();
const MyStack: React.FC<{showPermissionsPage: boolean}> = ({
  showPermissionsPage,
}) => {
  return (
    <Stack.Navigator
      initialRouteName={showPermissionsPage ? 'PermissionsPage' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Achievement" component={AchievementsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Alternative" component={FindAlternativeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="PermissionsPage" component={PermissionsPage} />
      <Stack.Screen name="Progress" component={ProgressScreen} />
      <Stack.Screen name="DecisionScreen" component={DecisionScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
