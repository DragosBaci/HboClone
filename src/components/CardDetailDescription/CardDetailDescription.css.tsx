import { styled } from "styled-components";
import { View,Text } from "react-native";
import { Colors } from "../../utils/Colors";


export const CardDetailDescriptionContainer = styled(View)`
    background-color: ${Colors.black};
        align-items: center;
        justify-content: center;
        padding: 20px 0 20px 10px;
        margin: 0 30px 0 10px;
`;

export const CardDetailDescriptionText = styled(Text)`
    color: ${Colors.lightGrey};
    font-size: 18px;
`;