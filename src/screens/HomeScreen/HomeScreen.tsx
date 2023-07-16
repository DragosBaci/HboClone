import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Carousel from '../../components/Carousel/Carousel';
import { cards } from '../../data/data';
import CarouselDots from '../../components/CarouselDots/CarouselDots';
import Title from '../../components/Title/Title';
const HomeScreen = () => {
    const ITEM_WIDTH = Dimensions.get('window').width;
    const ITEM_HEIGHT = Dimensions.get('window').height - 150;
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleCarouselScroll = (index: number) => {
        setActiveIndex(index);
    };
    const handleCarouselScroll2 = (index: number) => {

    };

    return (
        <ScrollView>
            <Carousel
                itemWidth={ITEM_WIDTH}
                cardHeight={ITEM_HEIGHT}
                cardWidth={ITEM_WIDTH}
                activeIndex={activeIndex}
                onScroll={handleCarouselScroll}
            />
            <CarouselDots cards={cards} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <SafeAreaView>
                <Title>Just Added</Title>
                <Carousel
                    itemWidth={ITEM_WIDTH}
                    cardHeight={ITEM_HEIGHT - 320}
                    cardWidth={ITEM_WIDTH - 120}
                    onScroll={handleCarouselScroll2}
                    cardStyle={styles.carouselContainer}
                />
                <Title>Emmy Nominees 2023</Title>
                <Carousel
                    itemWidth={ITEM_WIDTH - 300}
                    cardHeight={ITEM_HEIGHT - 400}
                    cardWidth={ITEM_WIDTH - 200}
                    onScroll={handleCarouselScroll2}
                    cardStyle={styles.carouselContainer}
                />
            </SafeAreaView>

        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    carouselContainer: {
        paddingLeft: 12,
        paddingRight: 7,
    }
})