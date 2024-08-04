import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/Routes';

type Intro2ScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Intro2'>;
};

const Intro2Screen: React.FC<Intro2ScreenProps> = ({ navigation }) => {

    return (
        <View style={styles.frame}>
            <Text style={styles.title}>What is a Carbon FootPrint ?</Text>
            <Text style={styles.subtitle}>
                Your carbon footprint is the total amount of greenhouse gases produced by your actions.
                It includes direct emissions from activities like driving a car, and indirect emissions from the
                products you buy and the food you eat
            </Text>
            <View style={styles.carbonFootprintInfo}>
                <Text style={styles.infoTitle}>Why keep track your Carbon Footprint?</Text>
                {[
                    'Understand Your Impact',
                    'Empower Your Choices',
                    'Track Real Progress',
                    'Set Achievable Goals',
                    'Inspire Others',
                    'Save Money',
                    'Drive Global Change',
                    'Leave a Positive Legacy'
                ].map((item, index) => (
                    <Text key={index} style={styles.infoItem}>{`${index + 1}. ${item}`}</Text>
                ))}
                {/* <Image
                    source={require('../assets/leaf-mascot.png')}
                    style={styles.mascot}
                /> */}
            </View>
            <Text style={styles.subtitle}>
                CarbonSmart makes this process easy and fun
            </Text>
            <TouchableOpacity style={styles.nextButton} onPress={() => {
            navigation.navigate('Intro3');
          }}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
        padding: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
        fontFamily:'NTR'
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily:'NTR'
    },
    carbonFootprintInfo: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        fontFamily:'NTR'
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        fontFamily:'NTR'
    },
    infoItem: {
        marginBottom: 5,
        color: 'black',
    },
    nextButton: {
        backgroundColor: '#45a049',
        padding: 14,
        width:70,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily:'NTR'
    },
});

export default Intro2Screen;