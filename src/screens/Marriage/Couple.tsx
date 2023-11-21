import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../hooks';
import { NavigationProp } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Spacer } from '@/core';
import styles from './styles';
import { getCoupleDetail, getUserById } from '../../services/api/index';
import { useSelector } from 'react-redux';

interface CoupleDetailScreenProps {
  navigation: NavigationProp<any>;
}

const CoupleDetailScreen = (props: CoupleDetailScreenProps) => {
  const { Layout, Images, Fonts } = useTheme();
  const [currentPartner, setCurrentPartner] = useState(true);
  const [isMainGender, setIsMainGender] = useState<boolean>();
  const [partner1, setPartner1] = useState<any>();
  const [partner2, setPartner2] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [dateRegis, setDateRegis] = useState<any>();

  const onChangePartner = () => {
    setIsMainGender(!isMainGender);
    setCurrentPartner(!currentPartner);
  };

  const userInfor = useSelector(
    (state: { login: { token: string; userInfor: any } }) =>
      state.login.userInfor,
  );

  const fetchData = async () => {
    const user = await getCoupleDetail(userInfor.parishionerId);
    // if (user?.data?.data?.parishioner1?.gender === 'male') {
    //   setIsMainGender(true);
    // } else if (user?.data?.data?.parishioner1?.gender === 'female') {
    //   setIsMainGender(false);
    // }
    setIsMainGender(true);
    setPartner1(user?.data?.data?.parishioner1);
    setPartner2(user?.data?.data?.parishioner2);
    setStatus(user?.data?.data?.status);
    setDateRegis(user?.data?.data?.createdAt);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(partner1);
  console.log(partner2);

  return (
    <SafeAreaView
      style={[Layout.fill, Layout.fullWidth, { backgroundColor: '#FFFFFF' }]}
    >
      <View
        style={[
          Layout.fullWidth,
          Layout.row,
          { height: 50, backgroundColor: '#174940' },
        ]}
      >
        <TouchableOpacity
          style={[Layout.colHCenter, { left: '18%', height: 46 }]}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image
            width={60}
            height={60}
            source={Images.icons.arrowRightBack}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={[Layout.rowCenter, { left: '26%' }]}>
          <Text style={[Fonts.textBold, Fonts.textLight]}>
            Thông tin cặp đôi đăng ký
          </Text>
        </View>
      </View>
      <View style={[Layout.fill]}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={[Layout.fill, { paddingHorizontal: 16 }]}
        >
          <View style={[{ marginTop: 6 }]}>
            <Spacer space="10" />
            <View style={[{ marginTop: 12 }]}>
              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                  {
                    backgroundColor: '#CDD7D6',
                    height: 66,
                    marginBottom: 4,
                    borderRadius: 15,
                  },
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onChangePartner()}
                  style={[
                    {
                      height: 56,
                      width: '45%',
                      marginLeft: 8,
                      paddingHorizontal: 24,
                      backgroundColor: currentPartner ? '#D7B300' : '#CDD7D6',
                      borderRadius: 15,
                      alignItems: 'center',
                    },
                  ]}
                >
                  <Text
                    style={[
                      {
                        color: '#FFFFFF',
                        fontSize: 16,
                        lineHeight: 18,
                        marginTop: 18,
                        fontWeight: 'bold',
                      },
                    ]}
                  >
                    Bên nam
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => onChangePartner()}
                  style={[
                    {
                      height: 56,
                      width: '45%',
                      paddingHorizontal: 10,
                      alignItems: 'center',
                      backgroundColor: currentPartner ? '#CDD7D6' : '#D7B300',
                      marginRight: 8,
                      borderRadius: 15,
                    },
                  ]}
                >
                  <Text
                    style={[
                      {
                        color: '#FFFFFF',
                        fontSize: 16,
                        lineHeight: 18,
                        marginTop: 18,
                        fontWeight: 'bold',
                      },
                    ]}
                  >
                    Bên nữ
                  </Text>
                </TouchableOpacity>
              </View>
              <Spacer space="20" />
              <View>
                <View style={[Layout.alignItemsCenter]}>
                  {isMainGender ? (
                    <Image
                      style={[styles.imageAvatar]}
                      source={
                        partner1?.avatar === null
                          ? {
                              uri: 'https://img.myloview.com/posters/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg',
                            }
                          : {
                              uri: partner1?.avatar,
                            }
                      }
                      resizeMode={'contain'}
                    />
                  ) : (
                    <Image
                      style={[styles.imageAvatar]}
                      source={
                        partner2?.avatar === null
                          ? {
                              uri: 'https://img.myloview.com/posters/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg',
                            }
                          : {
                              uri: partner2?.avatar,
                            }
                      }
                      resizeMode={'contain'}
                    />
                  )}
                  {/* <Image
                    style={[styles.imageAvatar]}
                    source={{
                      uri: 'https://img.myloview.com/posters/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg',
                    }}
                    resizeMode={'contain'}
                  /> */}
                  <Spacer space="10" />
                  <Text
                    style={[Fonts.textBold, { fontSize: 18, lineHeight: 26 }]}
                  >
                    {isMainGender
                      ? `${partner1?.christianName} ${partner1?.fullname}`
                      : `${partner2?.christianName} ${partner2?.fullname}`}
                  </Text>
                </View>
                <Spacer space="10" />
                <Spacer space="20" />
                <View>
                  <View style={[Layout.row]}>
                    <Text
                      style={[
                        Fonts.textBold,
                        { fontSize: 16, lineHeight: 18, marginHorizontal: 6 },
                      ]}
                    >
                      Số điện thoại:
                    </Text>
                    <Text style={[{ fontSize: 16, lineHeight: 18 }]}>
                      {isMainGender
                        ? `${partner1?.phonenumber}`
                        : `${partner2?.phonenumber}`}
                    </Text>
                  </View>
                  <Spacer space="10" />
                  <View style={[Layout.row]}>
                    <Text
                      style={[
                        Fonts.textBold,
                        { fontSize: 16, lineHeight: 18, marginHorizontal: 6 },
                      ]}
                    >
                      Giáo họ:
                    </Text>
                    <Text style={[{ fontSize: 16, lineHeight: 18 }]}>
                      {/* {isMainGender
                        ? `${partner1.parish_cluster.name}`
                        : `${partner2.parish_cluster.name}`} */}
                    </Text>
                  </View>
                  <Spacer space="10" />
                  <View style={[Layout.row]}>
                    <Text
                      style={[
                        Fonts.textBold,
                        { fontSize: 16, lineHeight: 18, marginHorizontal: 6 },
                      ]}
                    >
                      Ngày sinh:
                    </Text>
                    <Text style={[{ fontSize: 16, lineHeight: 18 }]}>
                      {isMainGender
                        ? `${partner1?.dateOfBirth}`
                        : `${partner2?.dateOfBirth}`}
                    </Text>
                  </View>
                  <Spacer space="10" />
                  <View style={[Layout.row]}>
                    <Text
                      style={[
                        Fonts.textBold,
                        { fontSize: 16, lineHeight: 18, marginHorizontal: 6 },
                      ]}
                    >
                      Tên bố:
                    </Text>
                    <Text style={[{ fontSize: 16, lineHeight: 18 }]}>
                      {isMainGender
                        ? `${partner1?.name_father}`
                        : `${partner2?.name_father}`}
                    </Text>
                  </View>
                  <Spacer space="10" />
                  <View style={[Layout.row]}>
                    <Text
                      style={[
                        Fonts.textBold,
                        { fontSize: 16, lineHeight: 18, marginHorizontal: 6 },
                      ]}
                    >
                      Tên mẹ:
                    </Text>
                    <Text style={[{ fontSize: 16, lineHeight: 18 }]}>
                      {isMainGender
                        ? `${partner1?.name_mother}`
                        : `${partner2?.name_mother}`}
                    </Text>
                  </View>
                  <Spacer space="10" />
                  <View style={[Layout.row]}>
                    <Text
                      style={[
                        Fonts.textBold,
                        { fontSize: 16, lineHeight: 18, marginHorizontal: 6 },
                      ]}
                    >
                      Địa chỉ:
                    </Text>
                    <Text style={[{ fontSize: 16, lineHeight: 18 }]}>
                      {isMainGender
                        ? `${partner1?.address}`
                        : `${partner2?.address}`}
                    </Text>
                  </View>
                  <Spacer space="10" />
                  <View style={[Layout.row]}>
                    <Text
                      style={[
                        Fonts.textBold,
                        { fontSize: 16, lineHeight: 18, marginHorizontal: 6 },
                      ]}
                    >
                      Trạng thái:
                    </Text>
                    <Text style={[{ fontSize: 16, lineHeight: 18 }]}>
                      {status}
                    </Text>
                  </View>
                  <Spacer space="10" />
                  <View style={[Layout.row]}>
                    <Text
                      style={[
                        Fonts.textBold,
                        { fontSize: 16, lineHeight: 18, marginHorizontal: 6 },
                      ]}
                    >
                      Ngày đăng ký:
                    </Text>
                    <Text style={[{ fontSize: 16, lineHeight: 18 }]}>
                      {dateRegis}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Spacer space="10" />
        </KeyboardAwareScrollView>
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            {
              paddingHorizontal: 16,
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              bottom: 10,
              height: 46,
            },
          ]}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default CoupleDetailScreen;
