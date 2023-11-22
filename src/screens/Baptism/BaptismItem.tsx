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

const BaptismItem = (props: DonationScreenProps) => {
  const { Images, Fonts } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={[styles.itemDonation]}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.itemTitleDate]}>
            {`${props.item.parishioner.christianName} ${props.item.parishioner.fullname}`}
          </Text>
        </View>
        <View>
          <Text
            style={[
              Fonts.textBold,
              { fontSize: 16, lineHeight: 24, color: '#174940' },
            ]}
          >
            {props.item.isAccepted ? 'Accepted' : 'Pending'}
          </Text>
        </View>
      </View>
      <Spacer space="10" />
    </TouchableOpacity>
  );
};

export default BaptismItem;
