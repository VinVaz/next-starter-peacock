import React from 'react';
import Image from 'next/image';

import { Layout, Container } from '../components';
import { StyledAbout } from '../components/styles/about.styles';

/**
 * About page `/about`
 */
const About = () => {
  return (
    <Layout
      pathname={'/about'}
      pageTitle="Sobre Mim"
      pageDescription="Pagina Sobre Mim Que Descreve mais Sobre a Trajetoria Profissional de Vinicius"
    >
      <StyledAbout>
        <Container width="narrow">
          <div className="postContent">
            <div className="postText">
              <p>
                Olá! Sou Vinícius Vaz{' ('}
                <a href="https://github.com/vinVaz" target="_blank">
                  @vinVaz
                </a>
                {')'}, um profissional entusiasta de tecnologia, análise de
                dados e inovação, com uma formação sólida em Engenharia Civil
                pela UnB, com foco especial em transportes. Minha jornada
                acadêmica me ensinou a resolver problemas complexos e
                desenvolver habilidades analíticas, características que trago
                para minha carreira como Analista de Dados.
              </p>

              <p>
                Embora minha formação seja em Engenharia Civil, meu interesse
                por dados me levou a explorar diversas áreas, incluindo o
                desenvolvimento de projetos como fundador e desenvolvedor
                full-stack da GetBetterPics. Nessa jornada empreendedora, fui
                responsável pelo design de banco de dados, integrações de
                pagamento e estratégias de marketing internacional. Além disso,
                automatizei tarefas usando Python, demonstrando minha habilidade
                em transformar problemas em soluções eficientes.
              </p>

              <p>
                Através de projetos pessoais e experiências práticas bem como da
                minha formação acadêmica, adquiri habilidades sólidas em análise
                de dados, incluindo conhecimentos avançados em SQL com
                PostgreSQL; Python (com foco em Pandas e Numpy) para manipulação
                e transformação de dados, data cleaning e data scraping; bem
                como experiência em ferramentas de visualização como Power-BI.
                Possui tambem conhecimentos avançados em Tecnologias Web: HTML,
                CSS, JavaScript, TypeScript, React.js (com alguma experiencia em
                D3.js) e Git, GitHub para colaboração eficaz e controle de
                versão.
              </p>

              <p>
                Tenho interesse nas áreas de mobilidade urbana e otimizar
                sistemas de transporte utilizando dados, bem como a aplicação da
                análise de dados nas áreas de logística e esportes. Acredito que
                a diversidade de conhecimentos traz uma perspectiva única para a
                análise de dados. Minha formação em Engenharia Civil me deu
                habilidades de resolução de problemas e pensamento crítico, que
                tento aplicar na área de dados.
              </p>

              <p>
                Estou entusiasmado para aplicar minha experiência
                interdisciplinar como Analista de Dados Júnior. Seja resolvendo
                problemas de negócios, desenvolvendo insights ou contribuindo
                para novos produtos, estou pronto para enfrentar desafios e
                crescer profissionalmente em um ambiente dinâmico. Tenho como
                foco dos meus estudos o foco no resultado e no entendimento do
                negócio.
              </p>

              <p>
                Estou animado para explorar oportunidades e contribuir
                significativamente para o mundo dos dados. Se você está em busca
                de um profissional analítico e inovador, estou ansioso para ser
                parte de sua equipe e colaborar para o sucesso da sua empresa.
                Você pode me encontrar no{' '}
                <a
                  href="https://www.linkedin.com/in/vin%C3%ADcius-vaz-046343191/"
                  target="_blank"
                >
                  Linkedin.
                </a>{' '}
              </p>
            </div>

            <div className="avatarImage">
              <Image
                src="/images/avatar.jpg"
                width={210}
                height={210}
                alt="Vinicius Vaz"
              />
            </div>
          </div>
        </Container>
      </StyledAbout>
    </Layout>
  );
};

export default About;
