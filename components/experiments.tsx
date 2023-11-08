import React from 'react';
import { experiments } from '../content/experiments';
import { Container } from './container';
import { StyledExperimentsSection } from './styles/experiments.styles';
import ExperimentItem from './experiment';

const ExperimentsSection = () => (
  <StyledExperimentsSection>
    <Container>
      <h2>Certificações</h2>
      <p className="section-intro max-width">
        Certificados e cursos que fiz ao longo dos anos para ampliar minhas
        habilidades.
      </p>

      <section className="experiments">
        {experiments.map((experiment, index) => (
          <ExperimentItem key={index} experiment={experiment} />
        ))}
      </section>
    </Container>
  </StyledExperimentsSection>
);

export default ExperimentsSection;
