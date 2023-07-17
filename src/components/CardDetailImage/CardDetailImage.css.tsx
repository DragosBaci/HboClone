import { styled } from "styled-components";
import { ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const CardDetailImageBackground = styled(ImageBackground) <{ cardWidth: number; cardHeight: number }>`
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardHeight}px;
`;

export const CardDetailImageGradient = styled(LinearGradient) <{ colors: string[] }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30%;
`;