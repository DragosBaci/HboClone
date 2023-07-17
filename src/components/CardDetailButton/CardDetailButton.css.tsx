import { styled } from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../utils/Colors";

export const CardDetailButtonContainer = styled(TouchableOpacity)`
    border-radius:3px;
`;

export const CardDetailButtonGradient = styled(LinearGradient)`
    border-radius: 3px;
        justify-content: flex-start;
        padding-top: 15px;
        padding-bottom:15px;
        padding-left:55px;
        padding-right:55px;
        align-self: flex-start;
        margin-left: 20px;
`;

export const CardDetailButtonText = styled(Text)`
     color: ${Colors.darkWhite};
        font-size: 20px;
        font-weight: bold;
`;