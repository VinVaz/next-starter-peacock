import React from 'react';
import { Layout, Container, Cards } from '../components';
import { getContentList } from '../lib/content';

/**
 * Article page `/articles`
 */

const Articles = ({ articles }) => {
  return (
    <Layout
      pathname={'/articles'}
      pageTitle="Artigos"
      pageDescription="Artigos sobre Análise de Dados e Boas Práticas de Engenharia."
    >
      <Container>
        <p className="page-intro">Interessantes objetos de discussão</p>
        <Cards data={articles} basePath="articles" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articles = getContentList('articles');
  return {
    props: { articles },
  };
};

export default Articles;
