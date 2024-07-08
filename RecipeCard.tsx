import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card } from 'react-native-paper';

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
}

export default function RecipeCard(props : RecipeCardProps) {
  const [count, setCount] = useState(0)
  const [description, image] = [props.description, props.image]
  const [title, setTitle] = useState(props.title)

  const onPress = () => {
    setTitle('new title')
  }

  return (
    <View>
      <Card style={{ width: 300 }} onPress={onPress}>
        
        <Card.Content>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: image }} />
        </Card>
    </View>
  );
}

