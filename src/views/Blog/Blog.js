import React, { useEffect, useState } from 'react';
import { Wrapper, ArticleWrapper } from './Blog.styles';
import { Title } from 'components/atoms/Title/Title';
import { Content } from 'components/atoms/Content/Content';
import axios from 'axios';

const API_TOKEN = '2731744d67684938c33089e2addb5f';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allArticles{
            title
            subtitle
            content
            image{
              alt
              url
            }
          }
        }
        `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Wrapper as="section">
      {articles.map(({ title, subtitle, content, image }) => (
        <ArticleWrapper key={title}>
          <img src={image.url} alt={image.alt} />
          <Title>{title}</Title>
          <h3>{subtitle}</h3>
          <Content>{content}</Content>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default Blog;
