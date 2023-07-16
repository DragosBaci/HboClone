import { styled } from "styled-components";
import { View, Text } from "react-native";
import { Colors } from "../../utils/Colors";

export const TitleContainer = styled(View)`
    flex: 1;
    margin-top: 25px;
    margin-bottom: 10px;
`;

export const TitleText = styled(Text) <{ children: string }>`
    text-align: left;
    padding-left: 12px;
        font-size: 20px;    
    color: ${Colors.white};
`;

export const CardContainer = styled(View) <{ cardWidth: number; cardHeight: number }>`
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardHeight}px;
`;