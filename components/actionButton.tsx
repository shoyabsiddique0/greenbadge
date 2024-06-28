import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

interface AddActivitiesButtonProps {
  onPress: () => void;
}

const AddActivitiesButton: React.FC<AddActivitiesButtonProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={styles.icon}>
          <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white" />
        </Svg>
        <Text style={styles.text}>Add Activities</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#76B947',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddActivitiesButton;
