import {useNavigation} from '@react-navigation/native';
import React from 'react';
import HeaderHome from '../header-home';

export default function useHookBasicProducts() {
  const navigation = useNavigation<any>();
  const handleOnpressItem = () => {
    navigation.navigate('Screen2');
  };
  return {handleOnpressItem};
}
