// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓
import {
  // ↓ components ↓
  View,
  Text,
  StyleSheet,
  // ↓ types ↓
  // ↓ hooks ↓
  // ↓ apis ↓
} from 'react-native';

// ↓ models & types ↓

// ↓ navigation ↓

// ↓ screens ↓

// ↓ modals ↓

// ↓ forms ↓

// ↓ components ↓
import Header from '@components/Header';

// ↓ fragments ↓

// ↓ utils ↓
import useArtdetail from '@hooks/use-artdetail';

// ↓ constants ↓

// ↓ assets ↓

// ---
export default function DetailScreen({route, navigation}: any) {
  const {id} = route.params;
  const [value, loading] = useArtdetail(id);
  //console.log('>>>>>>', value);
  return (
    <View style={styles.container}>
      <Header title="Detail" />
      <View style={styles.containerGrid}>
        {loading ? <Text>{value?.title}</Text> : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerGrid: {
    flex: 4,
    height: '100%',
    marginHorizontal: 'auto',
  },
});
