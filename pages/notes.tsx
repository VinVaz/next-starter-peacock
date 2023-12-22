import React from 'react';
import { Layout, Container } from '../components';
import { getContentList } from '../lib/content';
import NotesComponent from '../components/notes/notes';

/**
 * Blog page `/blog`
 */

const Notes = ({ notes }) => {
  return (
    <Layout
      pageTitle="Anotações"
      pathname={'/notes'}
      pageDescription="Anotações Curtas sobre Coisas que Vou Aprendendo em Meu Trajeto sobre Visualização de Dados, Python, Batch, Excel entre outras Tecnologias e Habilidades"
    >
      <Container width="narrow">
        <p className="page-intro">
          Anotações Curtas sobre Coisas que Vou Aprendendo em Meu Trajeto sobre
          Visualização de Dados, Python, Batch, Excel entre outras Tecnologias e
          Habilidades
        </p>

        <NotesComponent notes={notes} basePath="notes" />
        {/* <Cards data={notes} basePath="notes" /> */}
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const notes = getContentList('notes');
  return {
    props: { notes },
  };
};

export default Notes;
