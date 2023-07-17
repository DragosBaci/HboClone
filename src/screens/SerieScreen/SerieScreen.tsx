import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Carousel from '../../components/Carousel/Carousel';
import { cards, emmyCards, justAddedCards } from '../../data/data';
import CarouselDots from '../../components/CarouselDots/CarouselDots';
import Title from '../../components/Title/Title';

const SerieScreen = () => {
    const ITEM_WIDTH = Dimensions.get('window').width;
    const ITEM_HEIGHT = Dimensions.get('window').height - 150;
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleCarouselScroll = (index: number) => {
        setActiveIndex(index);
    };
    const handleCarouselScroll2 = (index: number) => {

    };

    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <Carousel
                itemWidth={ITEM_WIDTH}
                cardHeight={ITEM_HEIGHT}
                cardWidth={ITEM_WIDTH}
                activeIndex={activeIndex}
                onScroll={handleCarouselScroll}
                cards={justAddedCards}
            />
            <CarouselDots cards={cards} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <SafeAreaView>
                <Title>Fan Favorites</Title>
                <Carousel
                    itemWidth={ITEM_WIDTH}
                    cardHeight={ITEM_HEIGHT - 320}
                    cardWidth={ITEM_WIDTH - 120}
                    onScroll={handleCarouselScroll2}
                    cardStyle={styles.cardStyle}
                    cards={cards}
                />
                <Title>Most Popular Series</Title>
                <Carousel
                    itemWidth={ITEM_WIDTH - 300}
                    cardHeight={ITEM_HEIGHT - 400}
                    cardWidth={ITEM_WIDTH - 200}
                    onScroll={handleCarouselScroll2}
                    cardStyle={styles.cardStyle}
                    cards={emmyCards}
                />
            </SafeAreaView>

        </ScrollView>
    );
};

export default SerieScreen;

const styles = StyleSheet.create({
    cardStyle: {
        paddingLeft: 12,
        paddingRight: 7,
    }
})