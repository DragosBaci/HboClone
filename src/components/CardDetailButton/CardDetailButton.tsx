import { FC } from 'react';
import {
    CardDetailButtonContainer,
    CardDetailButtonGradient,
    CardDetailButtonText
} from './CardDetailButton.css';

interface CardDetailButtonProps {
    title: string;
    onPress: () => void;
}

const CardDetailButton: FC<CardDetailButtonProps> = ({ title, onPress }) => {
    return (
        <CardDetailButtonContainer onPress={onPress}>
            <CardDetailButtonGradient
                colors={['#743eef', '#b60af6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <CardDetailButtonText>{title}</CardDetailButtonText>
            </CardDetailButtonGradient>
        </CardDetailButtonContainer>
    );
};

export default CardDetailButton;
