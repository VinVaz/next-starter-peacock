import React from 'react';
import { Layout, Container, Cards } from '../components';
import { getContentList } from '../lib/content';

/**
 * Work page `/work`
 */
const Work = ({ work }) => {
  return (
    <Layout
      pathname={'/work'}
      pageTitle="Projetos"
      pageDescription="Projetos pessoais abrangendo análise de dados e engenharia de dados e de software usando as tecnologias Pandas, Numpy, Node.js and React.js"
    >
      <Container>
        <p className="page-intro">
          Projetos Pessoais Selecionados para Demonstrar meu Desenvolvimento em
          Análise de Dados e Engenharia de Dados
        </p>
        <Cards data={work} basePath="work" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const work = getContentList('work');
  return {
    props: { work },
  };
};

export default Work;
