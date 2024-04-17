import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import ProfileDetail from './components/ProfileDetail';
import VisitorCommemt from './components/VisitorComment';

const PlaceholderImage = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        Profile Page for Xinran Zhang
      </Text>
      <View>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

      <Text style={{top: 70, color: '#ccc'}}>
        It's another great day to work! 
      </Text>
      <ProfileDetail/>
      <VisitorCommemt/>
      <StatusBar style="auto" />
      <View style={styles.footerContainer}>
        <Button label="Take a break" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginLeft: 20,
    color: '#ccc',
    fontSize: 20,
    alignItems: 'center',
    justifyContent:'center',
  },
  footerContainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
});
