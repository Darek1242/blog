import React from 'react';
import { Wrapper } from './AboutUs.styles';
import { Title } from 'components/atoms/Title/Title';
import { Content } from 'components/atoms/Content/Content';

const AboutUs = () => {
  return (
    <Wrapper as="section">
      <Title>There are many variation</Title>
      <Content>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are going to use a reasonable. The generated Lorem Ipsum is therefore
        always free from repetition, injected humour, or non-characteristic words etc.
      </Content>
      <Content>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are going to use a reasonable. The generated Lorem Ipsum is therefore
        always free from repetition, injected humour, or non-characteristic words etc.
      </Content>
    </Wrapper>
  );
};

export default AboutUs;
