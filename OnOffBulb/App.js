import React, {useState} from 'react';
import {Switch, StyleSheet, Image, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaProvider> /// Add color background here!
      <SafeAreaView style={[styles.container, { backgroundColor: isEnabled ? 'yellow' : 'grey' }]}>
      
        <Image /// Then place the images here you can use url if you don't want to download the png file
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
// place the image on center and make the size bigger instead of small
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  bulb: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  status: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default App;
