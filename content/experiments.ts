interface IExperiments {
  title: string;
  description: string;
  link: string;
  tags: string[];
  date: string;
  location: string;
}

export const experiments: IExperiments[] = [
  {
    title: "XPE - Analista de Dados",
    description:
      "Curso de formação profissional de Analista de Dados",
    link: "https://vinicius-vaz-portfolio.vercel.app/certificados/certificato-analista-de-dados.jpg",
    tags: ["Fundamentos", "Estatística", "Dashboards"],
    date: "Agosto, 2022",
    location: "medium",
  },
  {
    title: "XPE - Gestor de Dados",
    description:
      "Figuring out what UX Engineering is by learning the basics of UX & Frontend Engineering",
    link: "https://vinicius-vaz-portfolio.vercel.app/certificados/certificato-gestor-de-dados.jpg",
    tags: ["Cultura de Dados", "Privacidade", "Gestão", "Indicadores"],
    date: "Maio, 2022",
    location: "medium",
  },
  {
    title: "XPE - Desenvolvedor de Dados",
    description:
      "30 days of learning & experimenting with basics of Typography",
    link: "https://vinicius-vaz-portfolio.vercel.app/certificados/certificato-desenvolvedor-react.jpg",
    tags: ["JavaScript", "React", "Next.js", "Renderização"],
    date: "Agosto, 2022",
    location: "medium",
  },
 
];
