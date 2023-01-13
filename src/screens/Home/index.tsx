// ↓ beloved react ↓
import React from 'react';

// ↓ 3rd party utils ↓

// ↓ 3rd party components ↓
import {
  // ↓ components ↓
  View,
  StyleSheet,
  FlatList,
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
import ItemList from '@components/ItemList';

// ↓ fragments ↓

// ↓ utils ↓
import useArtworks from '@hooks/use-artworks';
import {MainRoutes} from '@navigation/routes';

// ↓ constants ↓

// ↓ assets ↓

// ---
export default function HomeScreen({navigation}: any) {
  const [value, loading] = useArtworks();
  const goToDetail = (id: string) => {
    navigation.navigate(MainRoutes.Detail, {
      id: id,
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Artworks" />
      <View style={styles.containerGrid}>
        {loading ? (
          <FlatList
            data={value}
            numColumns={2}
            renderItem={item => (
              <ItemList item={item} onPress={() => goToDetail(item.item.id)} />
            )}
          />
        ) : null}
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
    marginHorizontal: 10,
  },
});
