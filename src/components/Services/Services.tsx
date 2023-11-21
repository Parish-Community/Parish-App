import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { useTheme } from '../../hooks';
import { Button } from '@/core';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { getUserById } from '../../services/api/index';
import ModalBottom from '@/components/Modal/ModalBottom';

interface ServicesScreenProps {
  navigation: NavigationProp<any>;
}

export default function Services(props: ServicesScreenProps) {
  const { Layout, Images, Fonts } = useTheme();
  const [userData, setUserData] = useState<any>();

  const userInfor = useSelector(
    (state: { login: { token: string; userInfor: any } }) =>
      state.login.userInfor,
  );

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUserById(userInfor.parishionerId);
      setUserData(user?.data?.data);
    };

    fetchData();
  }, []);
  console.log(userData);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#FAFAFC' }]}>
      <View
        style={[
          Layout.fullWidth,
          Layout.row,
          { height: 50, backgroundColor: '#174940' },
        ]}
      >
        <TouchableOpacity
          style={[Layout.colHCenter, { left: '28%', height: 46, width: '8%' }]}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image
            width={140}
            height={80}
            source={Images.icons.arrowRightBack}
            resizeMode={'contain'}
            tintColor={'#FFFFFF'}
          />
        </TouchableOpacity>
        <View style={[Layout.rowCenter, { left: '26%' }]}>
          <Text
            style={[
              Fonts.textBold,
              Fonts.textLight,
              { fontSize: 16, lineHeight: 18 },
            ]}
          >
            Request Services
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.servicesContent,
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
        ]}
      >
        <Image source={Images.logo} resizeMode={'contain'} />
        <LottieView
          style={{
            width: 640,
            height: 360,
          }}
          source={Images.animations.church}
          autoPlay
          loop={false}
        />
      </View>
      <View style={[Layout.fill]}>
        <View style={[styles.servicesBtn]}>
          <Button
            onPress={() => props.navigation.navigate('DonationScreen')}
            height={46}
            width={'100%'}
            bgColor={'#174940'}
            buttonTitle={'Rửa tội'}
            space={20}
          />
          <Button
            onPress={() => {
              userData.isReqMarriageCatechism
                ? props.navigation.navigate('CoupleDetailScreen')
                : props.navigation.navigate('MarriageScreen');
            }}
            height={46}
            width={'100%'}
            bgColor={'#174940'}
            buttonTitle={'Giáo lý hôn nhân'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesContent: {
    flex: 3,
  },
  servicesBtn: {
    top: '3%',
    paddingHorizontal: 16,
    flexDirection: 'column',
    bottom: 18,
    height: 46,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  btnLoginModal: {
    width: '100%',
    backgroundColor: '#174940',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textColorSecondary: {
    color: '#D7B300',
    fontSize: 16,
  },
});
