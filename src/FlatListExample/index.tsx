import React from 'react';
import {FlatList} from 'react-native';
import QuoteItem from '../components/QuoteItem';
import useQuotes from '../hooks/useQuotes';
import useSelects from '../hooks/useSelects';
import {Container} from './styles';

export default function FlatListExample() {
  const quotes = useQuotes();

  const [selects, toggle] = useSelects();

  return (
    <Container>
      <FlatList
        data={quotes}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <QuoteItem
            quote={item}
            onPress={() => toggle(item.id)}
            active={selects.includes(item.id)}
          />
        )}
      />
    </Container>
  );
}
