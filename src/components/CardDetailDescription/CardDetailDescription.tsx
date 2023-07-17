import { FC } from "react";
import { CardDetailDescriptionContainer, CardDetailDescriptionText } from "./CardDetailDescription.css";

interface CardDetailDescriptionProps {
    children: string
}

const CardDetailDescription: FC<CardDetailDescriptionProps> = ({ children }) => {
    return (
        <CardDetailDescriptionContainer>
            <CardDetailDescriptionText>{children}</CardDetailDescriptionText>
        </CardDetailDescriptionContainer>
    );
};

export default CardDetailDescription;
