import React from 'react';
import {FlatList} from 'react-native';
import QuoteItem from '../components/QuoteItem';
import useQuotes from '../hooks/useQuotes';
import useSelects from '../hooks/useSelects';
import {Container} from './styles';

export default function FlatListExample() {
  const quotes = useQuotes(2000);

  const [selects, toggleSelect] = useSelects();

  return (
    <Container>
      <FlatList
        data={quotes}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <QuoteItem
            quote={item}
            onPress={() => toggleSelect(item.id)}
            active={selects.includes(item.id)}
          />
        )}
      />
    </Container>
  );
}
