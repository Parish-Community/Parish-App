import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useTheme } from '../../hooks';
import { NavigationProp } from '@react-navigation/native';
import TextInputComponent from '@/core/TextInput/TextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Spacer } from '@/core';
import styles from './styles';
import { useSelector } from 'react-redux';
import {
  coupleRegistration,
  getPartnerByPhonenumber,
  getUserById,
} from '../../services/api/index';
import { Modal } from '@/components';

interface MarriageScreenProps {
  navigation: NavigationProp<any>;
}

const MarriageScreen = (props: MarriageScreenProps) => {
  const { Layout, Images, Fonts } = useTheme();
  const [currentStep, setCurrentStep] = useState(true);
  const [currentPartner, setCurrentPartner] = useState<boolean>(true);
  const [isFetching, setFetching] = useState(false);
  const [formDataFirst, setFormDataFirst] = useState({
    fullname: '',
    phonenumber: '',
    parishCluster: '',
    nameFather: '',
    nameMother: '',
    christianName: '',
  });
  const [partner1, setPartner1] = useState<any>();
  const [partner2, setPartner2] = useState<any>();
  const [isMainGender, setIsMainGender] = useState<boolean>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const userInfor = useSelector(
    (state: { login: { token: string; userInfor: any } }) => state.login,
  );

  const handleChangeText = (field: any, text: any) => {
    setFormDataFirst({ ...formDataFirst, [field]: text });
  };
  const isAnyFieldEmpty = Object.values(formDataFirst).some(
    value => value === '',
  );

  const handleNextStep = async () => {
    const phonenumber = formDataFirst.phonenumber;
    setFetching(true);
    setTimeout(async () => {
      if (userInfor.userInfor) {
        const getUser = await getUserById(
          Number(userInfor.userInfor.parishionerId),
        );
        if (getUser.data.data.gender === 'male') {
          setIsMainGender(true);
          setPartner1(getUser.data.data);
        } else if (getUser.data.data.gender === 'female') {
          setIsMainGender(false);
          setPartner1(getUser.data.data);
        }
        const getPartner = await getPartnerByPhonenumber(phonenumber);
        setPartner2(getPartner.data.data);
        setFetching(false);
        setCurrentStep(false);
      }
      setFetching(false);
      setCurrentStep(false);
    }, 300);
  };
  console.log('state', partner1);

  const handlePrevStep = () => {
    setCurrentStep(true);
  };

  const onChangePartner = () => {
    setIsMainGender(!isMainGender);
    setCurrentPartner(!currentPartner);
  };

  const onSubmitRegister = async () => {
    const payload = {
      partner2_christianName: formDataFirst.christianName,
      partner2_fullname: formDataFirst.fullname,
      partner2_phonenumber: formDataFirst.phonenumber,
      parishCluster: formDataFirst.parishCluster,
      partner2_name_father: formDataFirst.nameFather,
      partner2_name_mother: formDataFirst.nameMother,
    };
    console.log('payload', payload);
    console.log('payload', userInfor.token);
    const couple = await coupleRegistration(payload, userInfor.token);
    if (couple.status === 400) {
      console.log('Register failed', couple.data.data);
      // setIsModalVisible(prev => !prev);
    } else if (couple.status === 200) {
      console.log('Register success');
      setIsModalVisible(prev => !prev);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(prev => !prev);
    props.navigation.navigate('HomeScreen');
  };

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
            Đăng ký giáo lý hôn nhân
          </Text>
        </View>
      </View>
      <Spacer space="10" />
      <Spacer space="20" />
      <View
        style={[
          Layout.fullWidth,
          Layout.row,
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
        ]}
      >
        <View
          style={[
            {
              width: 48,
              height: 48,
              backgroundColor: currentStep ? '#D7B300' : '#174940',
              borderRadius: 50,
              alignItems: 'center',
            },
          ]}
        >
          <Text
            style={[
              Fonts.textBold,
              {
                fontSize: 16,
                lineHeight: 18,
                textAlign: 'center',
                marginTop: 12,
                color: currentStep ? '#174940' : '#D7B300',
              },
            ]}
          >
            1
          </Text>
          <Text style={[{ marginTop: 18, fontSize: 16, width: 60 }]}>
            Bạn học
          </Text>
        </View>
        <View style={[{ width: '55%', height: 3, backgroundColor: '#636366' }]}>
          <Text></Text>
        </View>
        <View
          style={[
            {
              width: 48,
              height: 48,
              backgroundColor: currentStep ? '#174940' : '#D7B300',
              borderRadius: 50,
              alignItems: 'center',
            },
          ]}
        >
          <Text
            style={[
              Fonts.textBold,
              {
                fontSize: 16,
                lineHeight: 18,
                textAlign: 'center',
                marginTop: 12,
                color: currentStep ? '#D7B300' : '#174940',
              },
            ]}
          >
            2
          </Text>
          <Text style={[{ marginTop: 18, fontSize: 16, width: 68 }]}>
            Xác nhận
          </Text>
        </View>
      </View>
      {currentStep ? (
        <View style={[Layout.fill]}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            style={[Layout.fill, { paddingHorizontal: 16, height: 168 }]}
          >
            <View style={[{ marginTop: '12%' }]}>
              <Spacer space="10" />
              <View>
                <View style={[{ marginBottom: 8 }]}>
                  <TextInputComponent
                    inputLabel="Tên thánh"
                    value={formDataFirst.christianName}
                    onChangeText={text =>
                      handleChangeText('christianName', text)
                    }
                  />
                </View>
                <View style={[{ marginBottom: 8 }]}>
                  <TextInputComponent
                    inputLabel="Họ tên"
                    value={formDataFirst.fullname}
                    onChangeText={text => handleChangeText('fullname', text)}
                  />
                </View>
                <View style={[{ marginBottom: 8 }]}>
                  <TextInputComponent
                    inputLabel="Giáo họ"
                    value={formDataFirst.parishCluster}
                    onChangeText={text =>
                      handleChangeText('parishCluster', text)
                    }
                  />
                </View>
                <View style={[{ marginBottom: 8 }]}>
                  <TextInputComponent
                    inputLabel="Số điện thoại"
                    value={formDataFirst.phonenumber}
                    onChangeText={text => handleChangeText('phonenumber', text)}
                  />
                </View>
                <View style={[{ marginBottom: 8 }]}>
                  <TextInputComponent
                    inputLabel="Họ tên bố"
                    value={formDataFirst.nameFather}
                    onChangeText={text => handleChangeText('nameFather', text)}
                  />
                </View>
                <View style={[{ marginBottom: 8 }]}>
                  <TextInputComponent
                    inputLabel="Họ tên mẹ"
                    value={formDataFirst.nameMother}
                    onChangeText={text => handleChangeText('nameMother', text)}
                  />
                </View>
              </View>
            </View>
            <Spacer space="10" />
          </KeyboardAwareScrollView>
          <View
            style={[
              {
                paddingHorizontal: 16,
                flexDirection: 'row',
                bottom: 12,
                height: 46,
                backgroundColor: '#FFFFFF',
              },
            ]}
          >
            <Button
              onPress={() => handleNextStep()}
              height={46}
              width={'100%'}
              bgColor={'#174940'}
              buttonTitle={'Next step'}
              loading={isFetching}
              disabled={isAnyFieldEmpty}
            />
          </View>
        </View>
      ) : (
        <View style={[Layout.fill]}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            style={[Layout.fill, { paddingHorizontal: 16 }]}
          >
            <View style={[{ marginTop: 16 }]}>
              <Spacer space="10" />
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
                          partner1.avatar === null
                            ? {
                                uri: 'https://img.myloview.com/posters/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg',
                              }
                            : {
                                uri: partner1.avatar,
                              }
                        }
                        resizeMode={'contain'}
                      />
                    ) : (
                      <Image
                        style={[styles.imageAvatar]}
                        source={
                          partner2.avatar === null
                            ? {
                                uri: 'https://img.myloview.com/posters/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg',
                              }
                            : {
                                uri: partner2.avatar,
                              }
                        }
                        resizeMode={'contain'}
                      />
                    )}
                    <Spacer space="10" />
                    <Text
                      style={[Fonts.textBold, { fontSize: 18, lineHeight: 26 }]}
                    >
                      {isMainGender
                        ? `${partner1.christianName} ${partner1.fullname}`
                        : `${partner2.christianName} ${partner2.fullname}`}
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
                          ? `${partner1.phonenumber}`
                          : `${partner2.phonenumber}`}
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
                        {isMainGender
                          ? `${partner1.parish_cluster.name}`
                          : `${partner2.parish_cluster.name}`}
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
                          ? `${partner1.dateOfBirth}`
                          : `${partner2.dateOfBirth}`}
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
                          ? `${partner1.name_father}`
                          : `${partner2.name_father}`}
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
                          ? `${partner1.name_mother}`
                          : `${partner2.name_mother}`}
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
                          ? `${partner1.address}`
                          : `${partner2.address}`}
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
                bottom: 18,
                height: 46,
              },
            ]}
          >
            <Button
              onPress={() => handlePrevStep()}
              height={46}
              width={'48%'}
              bgColor={'#174940'}
              buttonTitle={'Prev step'}
            />
            <Spacer space="10" />
            <Button
              onPress={() => onSubmitRegister()}
              height={46}
              width={'46%'}
              bgColor={'#174940'}
              buttonTitle={'Submit'}
            />
          </View>
        </View>
      )}
      <Modal isVisible={isModalVisible}>
        <StatusBar backgroundColor={'#494949'} />
        <Modal.Container>
          <Modal.Header title="Thành công" />
          <Modal.Body title="Đăng ký học giáo lý hôn nhân thành công" />
          <Modal.Footer>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 8,
              }}
            >
              <TouchableOpacity
                style={[styles.btnLoginModal]}
                activeOpacity={0.7}
                onPress={toggleModal}
              >
                <Text style={[Fonts.textBold, styles.textColorSecondary]}>
                  BACK TO HOME
                </Text>
              </TouchableOpacity>
            </View>
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </SafeAreaView>
  );
};

export default MarriageScreen;
