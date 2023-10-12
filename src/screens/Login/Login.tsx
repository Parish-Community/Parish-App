import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from '../../hooks';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';

interface LoginProps {
  navigation: NavigationProp<any>;
}

const Login = (props: LoginProps) => {
  const { Layout, Images, Fonts, Gutters } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [emailError, setEmailError] = useState(null || '');
  const [passwordError, setPasswordError] = useState(null || '');

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Please enter your email');
    }

    if (!password) {
      setPasswordError('Please enter your password');
    }
    if (email && password) {
      props.navigation.navigate('HomeScreen');
    }
  };

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#FFFFFF' }]}>
      <View style={{ top: '6%', left: 20 }}>
        <Image
          style={[Layout.rowCenter]}
          source={Images.banner}
          resizeMode={'contain'}
        />
        <View style={{ top: '2%' }}>
          <Text
            style={[
              Fonts.textBold,
              Gutters.regularBMargin,
              styles.textColorPrimary,
            ]}
          >
            Login to Church Community
          </Text>
        </View>
      </View>
      <View style={[Layout.fullWidth, Layout.fill, Layout.col, { top: '10%' }]}>
        <Text style={[{ marginLeft: 32, marginBottom: 4 }]}>Email</Text>
        <View style={{ marginBottom: 20 }}>
          <View style={[Layout.fullWidth, { alignItems: 'center' }]}>
            <TextInput
              style={[styles.inputView]}
              placeholder="Enter email"
              onChangeText={value => setEmail(value)}
              value={email}
            />
          </View>
          {emailError && <Text style={[styles.textError]}>{emailError}</Text>}
        </View>
        <Text style={[{ marginLeft: 32, marginBottom: 4 }]}>Password</Text>
        <View style={{ marginBottom: 20 }}>
          <View style={[Layout.fullWidth, { alignItems: 'center' }]}>
            <TextInput
              style={[styles.inputView]}
              secureTextEntry={!isPasswordVisible}
              placeholder="Enter password"
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
              <Image
                style={[styles.iconsPassword]}
                source={
                  isPasswordVisible
                    ? Images.icons.eyeShow
                    : Images.icons.eyeHide
                }
                resizeMode={'contain'}
              />
            </TouchableWithoutFeedback>
          </View>
          {passwordError && (
            <Text style={[styles.textError]}>{passwordError}</Text>
          )}
        </View>
        <View style={[{ alignItems: 'flex-end', marginRight: '8%' }]}>
          <TouchableWithoutFeedback style={[styles.btnLogin]}>
            <Text style={[styles.textForgotPassword]}>Forgot password?</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={[{ alignItems: 'center' }]}>
          <TouchableOpacity
            style={[styles.btnLogin]}
            activeOpacity={0.7}
            onPress={handleLogin}
          >
            <Text style={[Fonts.textBold, styles.textColorSecondary]}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[{ alignItems: 'center', top: '8%' }, Layout.rowCenter]}>
          <Text>Do not have an account? </Text>
          <TouchableWithoutFeedback style={[styles.btnLogin]}>
            <Text style={[styles.textForgotPassword]}>Register</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
