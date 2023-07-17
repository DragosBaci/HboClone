import { Dimensions, StyleSheet,} from "react-native";
import CardDetailImage from "../../components/CardDetailImage/CardDetailImage";
import CardDetailButton from "../../components/CardDetailButton/CardDetailButton";
import CardDetailDescription from "../../components/CardDetailDescription/CardDetailDescription";
import { cards } from "../../data/data";
import Title from "../../components/Title/Title";
import Carousel from "../../components/Carousel/Carousel";
import { CardDetailScreenContainer } from "./CardDetailScreen.css";

const ITEM_WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = Dimensions.get('window').height - 150;

const onPressHandler = () =>{

}

const CardDetailScreen = () => {
  return (
    <CardDetailScreenContainer>
      <CardDetailImage
        source={cards[1].posterUrl}
        cardWidth={ITEM_WIDTH}
        cardHeight={ITEM_HEIGHT}
        cardStyle={styles.cardStyle}
      />
      <CardDetailButton title="PLAY" onPress={onPressHandler}/>
      <CardDetailDescription>
        Moonlight is a critically acclaimed coming-of-age drama film that follows the journey of a young African-American man named Chiron as he navigates his identity, sexuality, and the challenges of growing up in a rough neighborhood in Miami. </CardDetailDescription>
      <Title>More Like this</Title>
      <Carousel
        itemWidth={ITEM_WIDTH - 300}
        cardHeight={ITEM_HEIGHT - 400}
        cardWidth={ITEM_WIDTH - 200}
        onScroll={onPressHandler}
        cards={cards}
        cardStyle={styles.cardStyle}
      />
    </CardDetailScreenContainer>
  );
};

export default CardDetailScreen;

const styles = StyleSheet.create({
  cardStyle: {
    paddingLeft: 12,
    paddingRight: 7,
  }
});
