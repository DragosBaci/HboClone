import React from "react";
import { CarouselDotsContainer, Dot } from "./CarouselDots.css";
import { Colors } from "../../utils/Colors";

interface CarouselDotsProps {
    cards: Array<any>;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ cards, activeIndex, setActiveIndex }) => {
    return (
        <CarouselDotsContainer>
            {cards.map((_, index) => (
                <Dot
                    key={index}
                    onPress={() => setActiveIndex(index)}
                    style={index === activeIndex ? { backgroundColor: Colors.darkWhite } : null}
                />
            ))}
        </CarouselDotsContainer>
    );
};



export default CarouselDots;
