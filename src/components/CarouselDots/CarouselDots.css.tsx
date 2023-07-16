import styled from "styled-components"
import { View, TouchableOpacity } from "react-native";
import { Colors } from "../../utils/Colors";

export const CarouselDotsContainer = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 8px;
`;

export const Dot = styled(TouchableOpacity)`
    width: 9px;
    height: 9px;
    border-radius: 4.5px;
    margin-left: 4.5px;
    margin-right: 4.5px;
    background-color: ${Colors.darkGrey};
`;

