import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { View, ImageBackground } from 'react-native';

export const CardContainer = styled(View) <{ cardWidth: number; cardHeight: number }>`
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardHeight}px;
`;

export const CardImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`;

export const Gradient = styled(LinearGradient) <{ colors: string[] }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30%;
`;