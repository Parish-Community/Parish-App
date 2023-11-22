import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import { useTheme } from '../../hooks';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import { DonationComponent, ScheduleComponent } from '@/components';
import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getTotalDonation, getUserById } from '../../services/api/index';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen = (props: HomeScreenProps) => {
  const { Layout, Images, Fonts } = useTheme();
  const [userInfor, setUserInfor] = React.useState<any>({});
  const token = useSelector(
    (state: { login: { token: string; userInfor: any } }) => state.login,
  );
  const [amountDonation, setAmountDonation] = React.useState<any>();
  const [data, setData] = useState<any>();

  const getTotalDonations = async () => {
    const amount = await getTotalDonation(token.token);
    console.log('amount', amount.data.data);
    setAmountDonation(amount.data.data.total);
  };

  const fetchData = async () => {
    console.log('fetch data');
    const user = await getUserById(token.userInfor.parishionerId);
    setData(user.data.data);
  };

  useEffect(() => {
    setUserInfor(token.userInfor);
    getTotalDonations();
    fetchData();
  }, [token]);
  console.log('user infor', userInfor);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: '#FAFAFC' }]}>
      <View
        style={[Layout.fullWidth, { height: 70, backgroundColor: '#174940' }]}
      >
        <View
          style={[
            Layout.justifyContentBetween,
            Layout.rowHCenter,
            { marginHorizontal: '4%', top: '3%' },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={[Layout.rowHCenter]}
            onPress={() => props.navigation.navigate('ProfileScreen')}
          >
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
            <Text
              style={[Fonts.textBold, Fonts.textLight, { marginLeft: '4%' }]}
            >
              {userInfor?.fullname}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={Images.icons.notification} resizeMode={'contain'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[Layout.fill]}>
        <View
          style={[
            Layout.fill,
            Layout.fullWidth,
            Layout.row,
            Layout.justifyContentBetween,
            { paddingHorizontal: '4%', top: '6%' },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('Services')}
            style={[styles.homeOption, { left: '-4%' }]}
          >
            <Image
              source={Images.icons.homeLeft}
              resizeMode={'contain'}
              style={{ marginBottom: 8 }}
            />
            <Text>Đăng Ký Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.homeOption, { marginLeft: 2 }]}
            onPress={() => props.navigation.navigate('DonationScreen')}
          >
            <Image
              source={Images.icons.homeRight}
              resizeMode={'contain'}
              style={{ marginBottom: 8 }}
            />
            <Text>Quyên góp</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            {
              flex: 3,
              paddingHorizontal: '3%',
              top: '1%',
              height: 560,
            },
          ]}
        >
          <View style={[{ marginBottom: 22 }]}>
            <DonationComponent
              navigation={props.navigation}
              amount={amountDonation}
            />
          </View>
          <View>
            <ScheduleComponent navigation={props.navigation} />
          </View>
        </View>
        <View style={[Layout.alignItemsCenter, { flex: 1 }]}>
          <Image
            style={[Layout.rowCenter]}
            source={Images.banner}
            resizeMode={'contain'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
