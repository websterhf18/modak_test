import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export type HeaderProps = {
  children?: React.ReactNode;
  title?: string;
};

export default function Header({children, title}: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.containerText}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#17a2b8',
    height: 85,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  containerText: {
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 50,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
});
