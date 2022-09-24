import React from 'react';
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  Dimensions,
  FlatList,
  Text,
  TextStyle,
} from 'react-native';
import dataFake from '../../data-fake';
export default function HotProducts() {
  const Item = data => {
    const {item} = data;
    const {image, nameProduct, price, lastPrice} = item;
    return (
      <View style={CONTAINER}>
        <View style={CONTAINER_HOTPRODUCT}>
          <Image source={image} style={IMAGE} />
          <View style={CONTAINER_SHOES_NAME}>
            <Text style={SHOES_NAME}>{nameProduct}</Text>
            <View style={CONTAINER_PRICE}>
              <Text style={TEXT_PRICE1}>{lastPrice}</Text>
              <Text style={TEXT_PRICE}>{price}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={SHOES_TITLE}>
        <Text style={TEXT_SHOES}>SẢN PHẨM HOT</Text>
      </View>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        data={dataFake.filter(x => x.tag.includes('Hot'))}
        renderItem={Item}
        horizontal={true}
      />
    </>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CONTAINER: ViewStyle = {
  flex: 1,
};

const CONTAINER_HOTPRODUCT: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  width: windowWidth,
  alignItems: 'center',
};

const IMAGE: ImageStyle = {
  flex: 1,
  borderRadius: 120,
};

const SHOES_TITLE: ViewStyle = {
  width: windowWidth,
  height: windowHeight * 0.1,
  justifyContent: 'center',
  alignItems: 'center',
};

const TEXT_SHOES: TextStyle = {
  fontSize: 20,
  fontWeight: 'bold',
};

const CONTAINER_SHOES_NAME: ViewStyle = {
  width: windowWidth * 0.7,
  height: windowHeight * 0.15,
};

const SHOES_NAME: TextStyle = {
  color: '#333333',
  justifyContent: 'center',
  alignSelf: 'center',
  marginVertical: 12,
  fontSize: 15,
  fontWeight: '600',
};

const CONTAINER_PRICE: ViewStyle = {
  justifyContent: 'center',
};

const TEXT_PRICE: TextStyle = {
  justifyContent: 'center',
  alignSelf: 'center',
  fontSize: 20,
  fontWeight: '600',
  color: 'red',
};

const TEXT_PRICE1: TextStyle = {
  justifyContent: 'center',
  alignSelf: 'center',
  fontSize: 20,
  fontWeight: '600',
  color: 'grey',
  textDecorationLine: 'line-through',
};
