

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import db from './db.json';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [result, setResult] = useState(null);

  const searchCrypto = () => {
    const crypto = db.data.find(
      (item) =>
        item.id.toLowerCase() === searchInput.toLowerCase() ||
        item.symbol.toLowerCase() === searchInput.toLowerCase()
    );
    if (crypto) {
      setResult(crypto);
    } else {
      setResult(null);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="insira a criptomoeda"
        onChangeText={(text) => setSearchInput(text)}
        value={searchInput}
      />
      <Button title="Pesquisar" onPress={searchCrypto} />
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Name: {result.name}</Text>
          <Text style={styles.resultText}>Symbol: {result.symbol}</Text>
          <Text style={styles.resultText}>Price (USD): ${result.priceUsd}</Text>
          <Text style={styles.resultText}>Market Cap (USD): ${result.marketCapUsd}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

