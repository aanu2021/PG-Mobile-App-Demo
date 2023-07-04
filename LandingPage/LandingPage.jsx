import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

import LandingHeader from './LadingHeader';
import LandingBody from './LandingBody';

const LandingPage = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* Header Component  */}
      <View style={{flex: 1}}>
        <LandingHeader navigation={navigation} />
      </View>
      {/* Body Component  */}
      <View style={{flex: 2}}>
        <LandingBody navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    fontSize: 50,
    color: 'red',
  },
});

export default LandingPage;
