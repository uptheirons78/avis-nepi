import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Nav from "../components/nav";

const CookiePolicyPage = ({ data }) => (
  <Layout>
    <SEO
      title="Cookie Policy"
      description={data.markdownRemark.frontmatter.description}
    />
    <div className="max-w-2xl my-0 mx-auto px-5">
      <Nav />
      <h1 className="mt-10 text-3xl leading-9 font-extrabold tracking-tight text-avis-blue sm:text-4xl sm:leading-10 text-center">
        {data.markdownRemark.frontmatter.title}
      </h1>
      <p className="my-5 text-gray-500 leading-6 text-justify">
        {data.markdownRemark.frontmatter.description}
      </p>
      <div
        className="site-content"
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></div>
    </div>
  </Layout>
);

export default CookiePolicyPage;

export const cookieQuery = graphql`
  query cookiePage {
    markdownRemark(frontmatter: { templateKey: { eq: "cookies-policy" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
  }
`;
