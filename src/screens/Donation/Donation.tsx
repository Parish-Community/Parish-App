import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  Linking,
} from 'react-native';
import { useTheme } from '../../hooks';
import { NavigationProp } from '@react-navigation/native';
import { Button, Spacer } from '@/core';
import styles from './styles';
// import DonationItem from './DonationItem';
import LottieView from 'lottie-react-native';
import ModalBottom from '@/components/Modal/ModalBottom';
// import { PaymentScreen } from './PaymentScreen';
// import { PaymentView } from '@/components/PaymentView';

interface DonationScreenProps {
  navigation: NavigationProp<any>;
}

const mockData = [
  { id: '1', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '2', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '3', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '4', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '5', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '6', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '7', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '8', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '9', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '10', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '11', dateTime: '20/02/2023', amount: '120.000$' },
  { id: '12', dateTime: '20/02/2023', amount: '120.000$' },
];

const DonationScreen = (props: DonationScreenProps) => {
  const { Layout, Images, Fonts } = useTheme();
  const [isFetching, setFetching] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
        {/* <FlatList
          data={mockData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DonationItem item={item} navigation={props.navigation} />
          )}
        /> */}
        <View style={[Layout.rowCenter, { top: '48%' }]}>
          <LottieView
            style={{
              width: 240,
              height: 180,
            }}
            source={Images.animations.donation}
            autoPlay
            loop
          />
        </View>
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
      <ModalBottom isVisible={isModalVisible}>
        <StatusBar backgroundColor={'#494949'} />
        <ModalBottom.Container>
          <ModalBottom.Header title="Donation" />
          <ModalBottom.Body>
            <View>
              <Text>Hello</Text>
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
                onPress={toggleModal}
                // onPress={() => {
                //   Linking.openURL(
                //     'https://checkout.stripe.com/c/pay/cs_test_a1XKisxs9TOnBJ9Ns8BQPdnWaBsxLyvMWzZ3uMtsOAhys7oZJjkMpfkS4l#fidkdWxOYHwnPyd1blpxYHZxWjA0Sj1uQEREMENzU1xvTU48QDFTdE5SPGlTSWl1NDVoTnE3UVFyTlBCUE5Hf0tQUmxvVzxqNEt1b3JzYn9kX1EyMmw3QXJVPHZIM0lfXEgwN2RsfTxdMW1kNTVJVTRUY25TPCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl',
                //   );
                // }}
              >
                <Text style={[Fonts.textBold, styles.textColorSecondary]}>
                  Donation
                </Text>
              </TouchableOpacity>
            </View>
          </ModalBottom.Footer>
        </ModalBottom.Container>
      </ModalBottom>
    </SafeAreaView>
  );
};

export default DonationScreen;
