import React from 'react';
import { Wrapper, MainTitle, SubTitle, MainContent } from './Main.styles';
import { Button } from 'components/atoms/Button/Button';

const Main = () => {
  return (
    <Wrapper as="section">
      <MainTitle>BLOG O KAWIE</MainTitle>
      <SubTitle>Dowiedz sie wiecej o kawie i pokochaj, a więc ? Napijmy się kawy ! </SubTitle>
      <MainContent>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are going to use a reasonable. The generated Lorem Ipsum is therefore
        always free from repetition, injected humour, or non-characteristic words etc.
      </MainContent>
      <Button>Czytaj wiecej</Button>
    </Wrapper>
  );
};

export default Main;
