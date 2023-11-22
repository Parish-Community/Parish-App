import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../../hooks';
import { NavigationProp } from '@react-navigation/native';
import { Button, Spacer } from '@/core';
import styles from './styles';
import DonationItem from './DonationItem';
import LottieView from 'lottie-react-native';
import ModalBottom from '@/components/Modal/ModalBottom';
import TextInputComponent from '@/core/TextInput/TextInput';
import { useSelector } from 'react-redux';
// import { PaymentScreen } from './PaymentScreen';
// import { PaymentView } from '@/components/PaymentView';
import { getAllPayment, payment } from '../../services/api/index';

interface DonationScreenProps {
  navigation: NavigationProp<any>;
}

const DonationScreen = (props: DonationScreenProps) => {
  const { Layout, Images, Fonts } = useTheme();
  const [isFetching, setFetching] = useState(false);
  const [isDonated, setIsDonated] = useState<boolean>();
  const [donations, setDonations] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    cardNumber: '4242 4242 4242 4242',
    expMonthYear: '',
    cvc: '',
    amount: '',
    description: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const userInfor = useSelector(
    (state: { login: { token: string; userInfor: any } }) => state.login,
  );

  const getListDonation = async () => {
    const listDonation = await getAllPayment(userInfor.token);
    setDonations(listDonation.data.data);
  };

  useEffect(() => {
    getListDonation();
    if (isDonated) {
      getListDonation();
    }
  }, [isDonated]);
  console.log('Donation', donations);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleBackdropPress = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleChangeText = (field: any, text: any) => {
    setFormData({ ...formData, [field]: text });
  };

  const onPayment = async () => {
    setFetching(true);
    let expMonth = formData.expMonthYear.split('/')[0];
    let expYear = formData.expMonthYear.split('/')[1];
    const payload = {
      cardNumber: formData.cardNumber,
      exp_month: Number(expMonth),
      exp_year: Number(expYear),
      amount: Number(formData.amount),
      cvc: formData.cvc,
      description: formData.description,
    };
    setTimeout(async () => {
      const sendPaymentRequest = await payment(payload, userInfor.token);
      console.log('Send payment request', sendPaymentRequest.data.data);
      setFormData({
        cardNumber: '4242 4242 4242 4242',
        expMonthYear: '',
        cvc: '',
        amount: '',
        description: '',
      });
      setFetching(false);
      setIsDonated(true);
      setIsModalVisible(false);
    }, 2000);
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
        <View style={[Layout.rowCenter, { left: '31%' }]}>
          <Text style={[Fonts.textBold, Fonts.textLight]}>
            History donation
          </Text>
        </View>
      </View>
      <View style={[Layout.fullWidth, { flex: 8, paddingHorizontal: 14 }]}>
        <Spacer space="20" />
        <FlatList
          data={donations}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id}
          renderItem={({ item }) => (
            <DonationItem item={item} navigation={props.navigation} />
          )}
        />
        {/* <View style={[Layout.rowCenter, { top: '48%' }]}>
          <LottieView
            style={{
              width: 240,
              height: 180,
            }}
            source={Images.animations.donation}
            autoPlay
            loop
          />
        </View> */}
      </View>
      <View style={[Layout.fill, Layout.fullWidth, { paddingHorizontal: 16 }]}>
        <View style={[{ top: '14%' }]}>
          <Button
            onPress={() => toggleModal()}
            height={46}
            width={'100%'}
            bgColor={'#174940'}
            buttonTitle={'Donation'}
            loading={isFetching}
          />
        </View>
      </View>
      <ModalBottom
        isVisible={isModalVisible}
        onBackdropPress={handleBackdropPress}
      >
        <StatusBar backgroundColor={'#494949'} />
        <ModalBottom.Container>
          <ModalBottom.Header title="Donation" />
          <ModalBottom.Body>
            <View style={[Layout.fullWidth]}>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Card number"
                  value={formData.cardNumber}
                  onChangeText={text => handleChangeText('cardNumber', text)}
                  editable={false}
                />
              </View>
              <View
                style={[
                  Layout.row,
                  { width: '100%' },
                  Layout.justifyContentBetween,
                ]}
              >
                <View style={[{ marginBottom: 8, width: '40%' }]}>
                  <TextInputComponent
                    inputLabel="Exp month/year"
                    value={formData.expMonthYear}
                    onChangeText={text =>
                      handleChangeText('expMonthYear', text)
                    }
                    placeholder="MM/YY"
                  />
                </View>
                <View style={[{ marginBottom: 8, width: '40%' }]}>
                  <TextInputComponent
                    inputLabel="CVC"
                    value={formData.cvc}
                    onChangeText={text => handleChangeText('cvc', text)}
                    placeholder="CVC"
                  />
                </View>
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Số tiền"
                  value={formData.amount}
                  onChangeText={text => handleChangeText('amount', text)}
                  placeholder="Nhập số tiền"
                />
              </View>
              <View style={[{ marginBottom: 8 }]}>
                <TextInputComponent
                  inputLabel="Mô tả"
                  value={formData.description}
                  onChangeText={text => handleChangeText('description', text)}
                  placeholder="Nhập Mô tả"
                />
              </View>
            </View>
          </ModalBottom.Body>
          <ModalBottom.Footer>
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
                onPress={onPayment}
              >
                {isFetching ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <View>
                    <Text style={[Fonts.textBold, styles.textColorSecondary]}>
                      Submit
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </ModalBottom.Footer>
        </ModalBottom.Container>
      </ModalBottom>
    </SafeAreaView>
  );
};

export default DonationScreen;
