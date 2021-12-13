import {Dimensions, Pressable} from 'react-native';
import styled from 'styled-components/native';

const deviceWidth = Dimensions.get('window').width;

const padding = {
  vertical: 10,
  horizontal: 30,
};

export const QuestionItemMetrics = {
  fontSize: 17,
  width: deviceWidth,
  padding,
  virtualWidth: deviceWidth - padding.horizontal * 2,
};

export interface ContainerProps {
  active?: boolean;
  calculatedHeight?: number;
}

export const Container = styled(Pressable)<ContainerProps>`
  width: ${deviceWidth}px;
  height: ${props => `${props.calculatedHeight}px` ?? 'auto'};
  justify-content: center;
  padding: 10px ${padding.horizontal}px;
  border-bottom-width: 1px;
  border-color: #f0f0f0;
  background-color: ${props => (props.active ? '#0d5' : '#333')};
`;

export const Quote = styled.Text`
  font-family: 'Roboto';
  color: #fff;
  font-size: ${QuestionItemMetrics.fontSize}px;
`;
