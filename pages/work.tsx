import React from "react";
import { Layout, Container, Cards } from "../components";
import { getContentList } from "../lib/content";

/**
 * Work page `/work`
 */
const Work = ({ work }) => {
  return (
    <Layout
      pathname={"/work"}
      pageTitle="Works &amp; Projects"
      pageDescription="Personal projects spanning Data Analysis, Data Engineering, Frontend and Software Engineering with Pandas, Numpy, Node.js and React.js"
    >
      <Container>
        <p className="page-intro">
          Selected Personal Projects Ranging from Software Engineering and
          Data Science.
        </p>
        <Cards data={work} basePath="work" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const work = getContentList("work");
  return {
    props: { work },
  };
};

export default Work;
