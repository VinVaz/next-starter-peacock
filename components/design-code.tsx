import React from 'react';
import Image from 'next/image';

import { Container } from './container';
import { StyledDesignPlus } from './styles/index.styles';
import techStackIcons from './stack/stack-list';
import SvgGrid from './grid/SvgGrid';

const DesignCode = () => {
  return (
    <StyledDesignPlus>
      <Container className="container">
        <div className="teck-stack">
          <div className="teck-stack-text">
            <h2>Tech Stack</h2>
            <p>
              No meu percurso como profissional de Data Analytics, desenvolvi
              uma sólida proficiência em diversas tecnologias e ferramentas que
              são essenciais para transformar dados em insights significativos.
              Minha experiência abrange:
            </p>

            <p>
              Gosto de usar Python sempre que possível, tanto para análise de
              dados, quanto para automação de pequenas tarefas e web scrapping.
              Aprendi limpeza e data wrangling com python no bootcamp do
              FreeCodeCamp do qual alguns projetos se encontram neste portfolio.
            </p>

            <p>
              Venho aprimorando minhas habilidades de visualização de dados
              usando o Power BI com foco em criar visualizações interativas e
              informativas que ajudam a comunicar insights de maneira clara e
              impactante.
            </p>

            <p>
              Tenho experiência em trabalhar com bancos de dados SQL com
              Postgresql, incluindo conceitos mais avançados como Views,
              Functions, Triggers, CTE, entre outras.
            </p>
          </div>
          <div className="teck-stack-grid">
            <SvgGrid svgData={techStackIcons} />
          </div>
        </div>
      </Container>
    </StyledDesignPlus>
  );
};

export default DesignCode;
