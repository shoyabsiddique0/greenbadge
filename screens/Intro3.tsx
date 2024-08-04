import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/Routes';

type Intro3ScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Intro3'>;
};

const Intro3Screen: React.FC<Intro3ScreenProps> = ({ navigation }) => {
 

    return (
        <View style={styles.frame}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.brandName}>CarbonSmart !</Text>
                <Text style={styles.description}>
                    With CarbonSmart, you'll learn how your daily choices impact the
                    environment and discover easy ways to make a positive change.
                </Text>
                <TouchableOpacity style={styles.ecoWarriorButton} onPress={() => {
            navigation.navigate('AddActivity');
          }}>
                    <Text style={styles.buttonText}>I choose to be a Eco Warrior</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        backgroundColor: '#262626',
        borderWidth: 2,
        borderColor: '#4CAF50',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    brandName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 40,
    },
    ecoWarriorButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        fontFamily:'NTR'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default Intro3Screen;