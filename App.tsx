import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card } from 'react-native-paper';
import RecipeCard from './RecipeCard';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
        <RecipeCard image='https://picsum.photos/700' description='recette du gateau' title='gateau au chocolat'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
