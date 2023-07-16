import React from 'react'
import { TitleContainer, TitleText } from './Title.css'

interface TitleProps {
  children: string
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <TitleContainer >
      <TitleText>{children}</TitleText>
    </TitleContainer>
  )
}

export default Title;
