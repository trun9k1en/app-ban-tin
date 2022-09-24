import React from 'react';
import {Image, ImageStyle, View, ViewStyle, Dimensions} from 'react-native';

export default function ImageBanner() {
  return (
    <View style={CONTAINER_BANNER}>
      <Image
        source={require('../../assets/image/background.png')}
        style={BANNER}
      />
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const CONTAINER_BANNER: ViewStyle = {};

const BANNER: ImageStyle = {
  resizeMode: 'center',
  //   flex: 1,
  width: windowWidth,
  height: windowWidth,
};
