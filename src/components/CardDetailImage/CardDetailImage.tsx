import { FC } from "react";
import { CardDetailImageBackground, CardDetailImageGradient } from "./CardDetailImage.css";
interface CardDetailImageProps {
    source: any;
    cardWidth: number;
    cardHeight: number;
    cardStyle: any;
}

const CardDetailImage: FC<CardDetailImageProps> = (props) => {
    const { source, cardWidth, cardHeight } = props;

    return (
        <CardDetailImageBackground cardHeight={cardHeight} source={source} cardWidth={cardWidth}

        >
            <CardDetailImageGradient colors={['transparent', 'rgba(0, 0, 0, 1)']} />

        </CardDetailImageBackground>
    );
};

export default CardDetailImage;


