import React from 'react';
import {Container, ContainerProps, Quote} from './styles';

export type QuoteProps = {
  id: string;
  title: string;
  height?: number;
};

export interface QuoteItemProps extends ContainerProps {
  quote: QuoteProps;
  onPress: (quote: QuoteProps) => void;
}

function QuoteItem({quote, onPress, active}: QuoteItemProps) {
  return (
    <Container
      onPress={() => onPress(quote)}
      active={active}
      calculatedHeight={quote.height}>
      <Quote>{quote.title}</Quote>
    </Container>
  );
}

export default React.memo(QuoteItem);
