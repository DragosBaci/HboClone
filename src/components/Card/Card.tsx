import { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { CardContainer, CardImage, Gradient } from "./Card.css";

interface CardProps {
    source: ImageSourcePropType;
    cardWidth: number;
    cardHeight: number;
    cardStyle: any;
}

const Card: FC <CardProps> = ({ source, cardWidth, cardHeight, cardStyle }) => {
    return (
        <CardContainer cardWidth={cardWidth} cardHeight={cardHeight} style={cardStyle}>
            <CardImage source={source}>
                <Gradient colors={['transparent', 'rgba(0, 0, 0, 1)']} />
            </CardImage>
        </CardContainer>
    );
};

export default Card;
