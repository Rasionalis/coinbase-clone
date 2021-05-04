import React, { FC, useEffect, useState } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
} from 'react-native';
import vars from '../env';
import Coin from '../models/Coin';
import CBWatchListItem from './CBWatchlistItem';

const CBWatchList: FC = () => {
  //const [coinData, setCoinData] = useState<Coin[]>([]);
  const coinData: Coin[] = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const coins = ['BTC', 'ETH', 'EOS', 'BCH', 'ADA'];
  };
  const numItems = 5;

  return (
    <View
      style={{
        width: '100%',
        alignSelf: 'flex-start',
        marginLeft: '7.5%',
      }}
    >
      <Text style={styles.watchlistText}>Watchlist</Text>
      <View style={[{ height: numItems * 70 }, styles.watchlistContainer]}>
        <FlatList
          data={coinData}
          keyExtractor={(item) => item.symbol}
          renderItem={(itemData) => {
            <CBWatchListItem
              name={itemData.item.name}
              symbol={itemData.item.symbol}
              price={itemData.item.price}
              percentChange={itemData.item.percentChange}
            />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  watchlistText: {
    fontWeight: 'bold',
    fontSize: 21,
    marginTop: 48,
    marginBottom: 8,
  },
  watchlistContainer: {
    width: '85%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
});

export default CBWatchList;
