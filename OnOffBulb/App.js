import React, {useState} from 'react';
import {Switch, StyleSheet, Image, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor: isEnabled ? 'yellow' : 'grey' }]}>
      
        <Image
          source={isEnabled ? require('./assets/On.png') : require('./assets/Off.png')
          }
          style={styles.bulb}
        />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.status}>
          {isEnabled ? 'ON' : 'OFF'}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  bulb: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  status: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default App;
