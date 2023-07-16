import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { CarouselDotsContainer, Dot } from "./CarouselDots.css";

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
                    style={index === activeIndex ? { backgroundColor: "rgba(216, 216, 216, 0.92)" } : null}
                />
            ))}
        </CarouselDotsContainer>
    );
};



export default CarouselDots;
