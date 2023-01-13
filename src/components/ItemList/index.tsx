import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

export type ItemListProps = {
  children?: React.ReactNode;
  item: any;
  onPress: any;
};

export default function ItemList({children, item, onPress}: ItemListProps) {
  return (
    <View style={styles.containerThumb}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <FastImage
          style={styles.previewImage}
          resizeMode={FastImage.resizeMode.cover}
          source={{
            uri: `https://www.artic.edu/iiif/2/${item.item.image_id}/full/300,/0/default.jpg`,
          }}
        />
        <Text style={styles.titleImage}>{item.item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerThumb: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'gray',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  button: {
    width: '100%',
  },
  previewImage: {
    width: '100%',
    height: 200,
  },
  titleImage: {
    marginVertical: 15,
  },
});
