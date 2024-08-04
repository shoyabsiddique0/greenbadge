import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/Routes';

type Intro1ScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Intro1'>;
};

const Intro1Screen: React.FC<Intro1ScreenProps> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <Text style={styles.welcomeText}>
                    Hello and welcome to <Text style={styles.brandName}>CarbonSmart</Text>
                </Text>

                <Text style={styles.tagline}>
                    Your personal guide to reducing your carbon footprint!
                </Text>
                <View style={styles.infoBox}>
                    <Text style={styles.infoBoxTitle}>Did you know?</Text>
                    <Text style={styles.infoBoxContent}>
                        An average person produces about 4 tons of CO2 per year? That's equivalent to driving a car for 15,000 miles!
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={() => {
            navigation.navigate('AddActivity');
          }}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 20,
        flexDirection:'column'
    },
    contentWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        verticalAlign:'top',
        marginBottom: 10,
        marginTop:30,
        fontFamily:'NTR',
        paddingTop:0
    },
    brandName: {
        color: '#8BC34A',
    },
    tagline: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily:'NTR'
    },
    infoBox: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal:20,
        borderRadius: 28,
        marginTop: 20,
        height:184,
        // width:296,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center'
    },
    infoBoxTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        marginLeft:110,
        // lineHeight:2,
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'NTR'
    },
    infoBoxContent: {
        fontSize: 16,
        color: 'black',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        fontFamily:'NTR',
        marginTop:10
    },
    nextButton: {
        backgroundColor: '#45a049',
        padding: 14,
        width:70,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
    nextButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily:'NTR'
    },
});

export default Intro1Screen;
