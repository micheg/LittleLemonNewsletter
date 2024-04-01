// core
import React from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, View} from 'react-native';
// custom
import Button from '../comps/Button';
// utils
import {validateEmail} from '../helpers/validators';
import _ from 'lodash';
// style
import {BaseStyle} from '../style/base';

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');

  const isEmailValid = validateEmail(email);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../imgs/little-lemon-logo-grey.png')}
      />
      <Text style={styles.title}>Subscribe to our newsletter...</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={'your email'}
      />
      <Button
        onPress={() => {
          Alert.alert('Thanks for subscribing.');
        }}
        disabled={!isEmailValid}>
        Subscribe
      </Button>
    </View>
  );
};

const PageStyle = {
  container: {
    justifyContent: 'flex-start',
  },
  logo: {
    marginBottom: 32,
    height: 100,
    width: 200,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    width: '100%',
  },
};

const styles = StyleSheet.create(_.merge({}, BaseStyle, PageStyle));

export default SubscribeScreen;
