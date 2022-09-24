import React from 'react';
import {SafeAreaView, ScrollView, ViewStyle} from 'react-native';
import {
  BasicProduct,
  BottomHome,
  HeaderHome,
  HotProducts,
  ImageBanner,
} from '../../component';

export default function HomeScreen() {
  return (
    <SafeAreaView style={CONTAINER_HEADER}>
      <HeaderHome />
      <ScrollView>
        <ImageBanner />
        <HotProducts />
        <BasicProduct />
        <BottomHome />
      </ScrollView>
    </SafeAreaView>
  );
}
const CONTAINER_HEADER: ViewStyle = {
  flex: 1,
  backgroundColor: '#f3f3f3',
};
