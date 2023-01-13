import React from 'react';
import {StyleSheet, View} from 'react-native';

export type ImgDetailProps = {
  children?: React.ReactNode;
};

export default function ImgDetail({children}: ImgDetailProps) {
  return <View style={styles.wrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
