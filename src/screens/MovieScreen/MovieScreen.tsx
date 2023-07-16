import React, { useState, useEffect } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, ActivityIndicator, View } from 'react-native';
import Carousel from '../../components/Carousel/Carousel';
import { cards, emmyCards, justAddedCards } from '../../data/data';
import CarouselDots from '../../components/CarouselDots/CarouselDots';
import Title from '../../components/Title/Title';

const MovieScreen = () => {
    const ITEM_WIDTH = Dimensions.get('window').width;
    const ITEM_HEIGHT = Dimensions.get('window').height - 150;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleCarouselScroll = (index: number) => {
        setActiveIndex(index);
    };

    const handleCarouselScroll2 = (index: number) => {

    };

    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator style={styles.loadingIndicator} size="large" color="white" />
                </View>
            ) : (
                <>
                    <Carousel
                        itemWidth={ITEM_WIDTH}
                        cardHeight={ITEM_HEIGHT}
                        cardWidth={ITEM_WIDTH}
                        activeIndex={activeIndex}
                        onScroll={handleCarouselScroll}
                        cards={emmyCards}
                    />
                    <CarouselDots cards={cards} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                    <SafeAreaView>
                        <Title>Critically Acclaimed Movies</Title>
                        <Carousel
                            itemWidth={ITEM_WIDTH}
                            cardHeight={ITEM_HEIGHT - 320}
                            cardWidth={ITEM_WIDTH - 120}
                            onScroll={handleCarouselScroll2}
                            cardStyle={styles.cardStyle}
                            cards={justAddedCards}
                        />
                        <Title>Just Added Movies</Title>
                        <Carousel
                            itemWidth={ITEM_WIDTH - 300}
                            cardHeight={ITEM_HEIGHT - 400}
                            cardWidth={ITEM_WIDTH - 200}
                            onScroll={handleCarouselScroll2}
                            cardStyle={styles.cardStyle}
                            cards={cards}
                        />
                    </SafeAreaView>
                </>
            )}
        </ScrollView>
    );
};

export default MovieScreen;

const styles = StyleSheet.create({
    cardStyle: {
        paddingLeft: 12,
        paddingRight: 7,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingIndicator: {
        marginVertical: 400,
    },
});
