import React, {useCallback, useMemo} from 'react';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import {QuestionItemMetrics} from '../components/QuoteItem/styles';
import QuoteItem, {QuoteProps} from '../components/QuoteItem';
import useQuotes from '../hooks/useQuotes';
import useSelects from '../hooks/useSelects';
import {Container} from './styles';

export default function RecyclerListExample() {
  const quotes = useQuotes();

  const [selects, toggleSelect] = useSelects();

  const dataProvider = useMemo(
    () =>
      new DataProvider(
        (r1: QuoteProps, r2: QuoteProps) => r1.id !== r2.id,
      ).cloneWithRows(quotes),
    [quotes],
  );

  const layoutProvider = useMemo(
    () =>
      new LayoutProvider(
        index => dataProvider.getDataForIndex(index),
        (item: any, dim) => {
          dim.width = QuestionItemMetrics.width;
          dim.height = item.height;
        },
      ),
    [dataProvider],
  );

  const rowRenderer = useCallback(
    (_type, item: QuoteProps, _index, {selectedIds}) => (
      <QuoteItem
        quote={item}
        onPress={() => toggleSelect(item.id)}
        active={selectedIds.includes(item.id)}
        calculatedHeight={item.height}
      />
    ),
    [toggleSelect],
  );

  return (
    <Container>
      {quotes.length > 0 && (
        <RecyclerListView
          layoutProvider={layoutProvider}
          dataProvider={dataProvider}
          rowRenderer={rowRenderer}
          extendedState={{selectedIds: selects}}
        />
      )}
    </Container>
  );
}
