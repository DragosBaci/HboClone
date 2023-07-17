import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { CarouselContainer, CarouselScroll } from './Carousel.css';

interface CarouselProps {
    itemWidth: number;
    cardWidth: number;
    cardHeight: number;
    activeIndex?: number;
    onScroll?: (index: number) => void;
    cardStyle?: any;
    cards: any[];
}

const Carousel: React.FC<CarouselProps> = ({
    itemWidth,
    cardWidth,
    cardHeight,
    onScroll,
    cardStyle,
    cards,
}) => {
    const handleScroll = (event: any) => {
        const { contentOffset } = event.nativeEvent;
        const index = Math.floor(contentOffset.x / itemWidth);
        onScroll?.(index);
    };

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
                {cards.map((item, index) => (
                    <Card
                        key={index}
                        source={item.posterUrl}
                        cardHeight={cardHeight}
                        cardWidth={cardWidth}
                        cardStyle={cardStyle}
                    />
                ))}
            </CarouselScroll>
        </CarouselContainer>
    );
};

export default Carousel;
