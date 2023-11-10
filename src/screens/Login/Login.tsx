import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../../hooks';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import { useLoginLogic } from './useLogic';
import { loginAccount, verifyToken } from '../api';
import { useDispatch } from 'react-redux';
import { saveToken } from '@/store/login';

interface LoginProps {
  navigation: NavigationProp<any>;
}

const Login = (props: LoginProps) => {
  const { Layout, Images, Fonts, Gutters } = useTheme();
  const {
    phonenumber,
    setPhoneNumber,
    password,
    setPassword,
    isPasswordVisible,
    togglePasswordVisibility,
    emailError,
    passwordError,
    validateInputs,
    setPasswordError,
  } = useLoginLogic();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    const isValid = validateInputs();

    setIsLoading(true);
    setTimeout(async () => {
      if (isValid) {
        const payload = {
          phonenumber,
          password,
        };
        try {
          const response = await loginAccount(payload);
          if (response.status === 200) {
            console.log('Login success');
            const token = response.data.data.accessToken;
            const decodeToken = await verifyToken(token);
            dispatch(saveToken({ token, userInfor: decodeToken.data.payload }));
            setIsLoading(false);
            props.navigation.navigate('HomeScreen');
          }
          setIsLoading(false);
        } catch (error) {
          console.log('Login failed', error);
          setIsLoading(false);
          setPasswordError('Login failed. Please check your account!!');
        }
      }
    }, 2000);
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
      {isLoading ? (
        <View style={[Layout.fill, Layout.rowCenter]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View
          style={[Layout.fullWidth, Layout.fill, Layout.col, { top: '10%' }]}
        >
          <Text style={[{ marginLeft: 32, marginBottom: 4, fontSize: 16 }]}>
            Phone number
          </Text>
          <View style={{ marginBottom: 20 }}>
            <View style={[Layout.fullWidth, { alignItems: 'center' }]}>
              <TextInput
                style={[styles.inputView]}
                placeholder="Enter phone number"
                onChangeText={value => setPhoneNumber(value)}
                value={phonenumber}
              />
            </View>
            {emailError && <Text style={[styles.textError]}>{emailError}</Text>}
          </View>
          <Text style={[{ marginLeft: 32, marginBottom: 4, fontSize: 16 }]}>
            Password
          </Text>
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
            <Text style={{ fontSize: 16 }}>Do not have an account ? </Text>
            <TouchableWithoutFeedback
              style={[styles.btnLogin]}
              onPress={() => props.navigation.navigate('RegisterScreen')}
            >
              <Text style={[styles.textForgotPassword]}>Register</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;
