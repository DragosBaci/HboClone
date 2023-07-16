import React from 'react';
import Card from '../Card/Card';
import { cards } from '../../data/data';
import { CarouselContainer, CarouselScroll } from './Carousel.css';

interface CarouselProps {
    itemWidth: number;
    cardWidth: number;
    cardHeight: number;
    activeIndex?: number;
    onScroll: (index: number) => void;
    cardStyle?: any;
}

const Carousel: React.FC<CarouselProps> = ({ itemWidth, cardWidth, cardHeight, onScroll, cardStyle }) => {
    const handleScroll = (event: any) => {
        const { contentOffset } = event.nativeEvent;
        const index = Math.floor(contentOffset.x / itemWidth);
        onScroll(index);
    };
    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    return (
        <CarouselContainer>
            <CarouselScroll
                horizontal
                decelerationRate="normal"
                snapToInterval={itemWidth}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={12}
                onScroll={handleScroll}
            >
                {shuffledCards.map((item, index) => (
                    <Card key={index} source={item.posterUrl} cardHeight={cardHeight} cardWidth={cardWidth} cardStyle={cardStyle} />
                ))}
            </CarouselScroll>
        </CarouselContainer>
    );
};

export default Carousel;
