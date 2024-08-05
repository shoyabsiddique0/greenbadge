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

type ProfileScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.pointsContainer}>
                <Text style={styles.pointsText}>230 pts</Text>
            </View>
            
            <View style={styles.profileInfo}>
                <Image
                    source={require('../assets/default-avatar.png')}
                    style={styles.avatar}
                />
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.email}>johndoe@example.com</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>45</Text>
                    <Text style={styles.statLabel}>Activities</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>320</Text>
                    <Text style={styles.statLabel}>kg CO2 Saved</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Achievements</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 20,
        alignItems: 'center',
    },
    pointsContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#538316',
        borderRadius: 15,
        padding: 10,
    },
    pointsText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    profileInfo: {
        alignItems: 'center',
        marginTop: 50,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#CCC',
        marginBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 30,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#538316',
    },
    statLabel: {
        fontSize: 14,
        color: '#CCC',
    },
    button: {
        backgroundColor: '#538316',
        padding: 15,
        borderRadius: 5,
        width: '90%',
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;