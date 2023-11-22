import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { useTheme } from '../../hooks';
import styles from './styles';
import { Button, Spacer } from '@/core';
import { logout } from '../../services/api/index';
import { useDispatch, useSelector } from 'react-redux';
import { logoutApp } from '@/store/login';
import { getUserById } from '../../services/api/index';

interface ProfileScreenProps {
  navigation: NavigationProp<any>;
}

const ProfileScreen = (props: ProfileScreenProps) => {
  const { Layout, Images, Fonts } = useTheme();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: { login: { token: string; userInfor: any } }) => state.login,
  );
  const [data, setData] = useState<any>();

  const handleLogout = async () => {
    try {
      await logout(token.token);
      console.log('logged out');
      dispatch(logoutApp());
    } catch (error) {
      console.log('error', error);
    }
  };

  const fetchData = async () => {
    console.log('fetch data');
    const user = await getUserById(token.userInfor.parishionerId);
    setData(user.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log('data', data);

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
            Thông tin cá nhân
          </Text>
        </View>
      </View>
      <View style={[Layout.fill]}>
        <View
          style={[
            Layout.fullWidth,
            { height: 140, top: '2%' },
            Layout.alignItemsCenter,
          ]}
        >
          <View style={[Layout.alignItemsCenter]}>
            <Image
              style={[styles.imageAvatar]}
              source={
                data?.avatar === null
                  ? {
                      uri: 'https://img.myloview.com/posters/default-avatar-profile-ico n-vector-social-media-user-photo-700-205577532.jpg',
                    }
                  : { uri: data?.avatar }
              }
              resizeMode={'contain'}
            />
          </View>
          <Spacer space="10" />
          <Text style={[Fonts.textBold, { fontSize: 18, lineHeight: 26 }]}>
            {`${data?.christianName} ${data?.fullname}`}
          </Text>
        </View>
        <Spacer space="50" />
        <View
          style={[Layout.fullWidth, Layout.fill, { paddingHorizontal: 20 }]}
        >
          <View style={[{ marginBottom: 12 }]}>
            <Text
              style={[
                Fonts.textBold,
                Fonts.textPrimary,
                { fontSize: 18, lineHeight: 26 },
              ]}
            >
              Thông tin cá nhân
            </Text>
            <View>
              <Spacer space="10" />
              <Text style={[Fonts.textBold, { fontSize: 16, lineHeight: 18 }]}>
                Ngày sinh: {data?.dateOfBirth}
              </Text>
              <Spacer space="10" />
              <Text style={[Fonts.textBold, { fontSize: 16, lineHeight: 18 }]}>
                Số điện thoại: {data?.phonenumber}
              </Text>
              <Spacer space="10" />
              <Text style={[Fonts.textBold, { fontSize: 16, lineHeight: 18 }]}>
                Tên bố: {data?.name_father}
              </Text>
              <Spacer space="10" />
              <Text style={[Fonts.textBold, { fontSize: 16, lineHeight: 18 }]}>
                Tên mẹ: {data?.name_mother}
              </Text>
              <Spacer space="10" />
              <Text style={[Fonts.textBold, { fontSize: 16, lineHeight: 18 }]}>
                Người đỡ đầu: {data?.god_parent}
              </Text>
              <Spacer space="10" />
              <Text style={[Fonts.textBold, { fontSize: 16, lineHeight: 18 }]}>
                Giáo họ: {data?.parish_cluster?.name}
              </Text>
              <Spacer space="10" />
              <Text style={[Fonts.textBold, { fontSize: 16, lineHeight: 18 }]}>
                Giáo xứ: {data?.parish}
              </Text>
              <Spacer space="10" />
              <Text style={[Fonts.textBold, { fontSize: 16, lineHeight: 18 }]}>
                Giáo phận: {data?.diocese}
              </Text>
              <Spacer space="10" />
              <Text style={[Fonts.textBold, { fontSize: 16, lineHeight: 18 }]}>
                Address: {data?.address}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={[
                Fonts.textBold,
                Fonts.textPrimary,
                { fontSize: 18, lineHeight: 26 },
              ]}
            >
              Thông tin rửa tội
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          {
            paddingHorizontal: 16,
            flexDirection: 'row',
            bottom: 18,
            height: 46,
            backgroundColor: '#FFFFFF',
          },
        ]}
      >
        <Button
          onPress={() => handleLogout()}
          height={46}
          width={'100%'}
          bgColor={'#174940'}
          buttonTitle={'Đăng xuất'}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
