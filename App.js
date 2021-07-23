import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,
} from 'react-native';
import Screen1 from './Screen1';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" translucent={false} backgroundColor="transparent" />
      <Screen1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
