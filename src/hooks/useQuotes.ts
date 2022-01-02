import {useEffect, useState} from 'react';
import rnFontSize from 'react-native-text-size';
import {QuoteProps} from '../components/QuoteItem';
import {QuestionItemMetrics} from '../components/QuoteItem/styles';

export default function useQuotes(limit: number): QuoteProps[] {
  const [quotes, setQuotes] = useState<QuoteProps[]>([]);

  const URL = `https://quote-garden.herokuapp.com/api/v3/quotes?${limit}`;

  useEffect(() => {
    async function fetchQuotes() {
      const data = await fetch(URL).then(res => res.json());

      const quotesData: QuoteProps[] = data.data.map(
        (item: any, index: number): QuoteProps => ({
          id: item._id,
          title: index + 1 + '-' + item.quoteText,
        }),
      );

      const textHeights = await rnFontSize.flatHeights({
        text: quotesData.map(quoteItem => quoteItem.title),
        width: QuestionItemMetrics.virtualWidth,
        fontFamily: 'Roboto',
        fontSize: QuestionItemMetrics.fontSize,
        fontStyle: 'normal',
        fontWeight: 'normal',
      });

      const quotesDataWithHeights = quotesData.map(
        (item: any, index: number): QuoteProps => ({
          ...item,
          width: QuestionItemMetrics.width,
          height: textHeights[index] + QuestionItemMetrics.padding.vertical * 2,
        }),
      );

      setQuotes(quotesDataWithHeights);
    }

    fetchQuotes();
  }, [URL]);

  return quotes;
}
