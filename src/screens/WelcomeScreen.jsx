// core
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// custom
import Button from '../comps/Button';

import _ from 'lodash';
// style
import {BaseStyle} from '../style/base';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require('../imgs/little-lemon-logo.png')}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('Subscribe');
        }}>
        Newsletter
      </Button>
    </View>
  );
};

const PageStyle = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create(_.merge(BaseStyle, PageStyle));

export default WelcomeScreen;
