import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../hooks';
import { NavigationProp } from '@react-navigation/native';
import { Spacer } from '@/core';
import styles from './styles';

interface DonationScreenProps {
  navigation: NavigationProp<any>;
  item: any;
}

const DonationItem = (props: DonationScreenProps) => {
  const { Images, Fonts } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={[styles.itemDonation]}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            width={140}
            height={80}
            source={Images.icons.date}
            resizeMode={'contain'}
          />
          <Text style={[styles.itemTitleDate]}>{props.item.dateTime}</Text>
        </View>
        <View>
          <Text
            style={[
              Fonts.textBold,
              { fontSize: 18, lineHeight: 24, color: '#174940' },
            ]}
          >
            120.000$
          </Text>
        </View>
      </View>
      <Spacer space="10" />
    </TouchableOpacity>
  );
};

export default DonationItem;
