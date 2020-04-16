import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Content from "../components/content";
import SocialShare from "../components/socialShare";
import SEO from "../components/seo";
import Nav from "../components/nav";

const Articolo = ({ data, pageContext }) => {
  const { prev, next } = pageContext;
  return (
    <Layout>
      <SEO
        title={data.contentfulArticolo.titolo}
        description={data.contentfulArticolo.description.description}
      />
      <div className="max-w-2xl my-0 mx-auto px-5">
        <Nav />
        <h1 className="text-4xl text-center font-semibold text-avis-blue">
          {data.contentfulArticolo.titolo}
        </h1>
        {data.contentfulArticolo.immagine ? (
          <img
            className="w-full h-72 rounded-lg my-5"
            src={data.contentfulArticolo.immagine.fluid.src}
            alt={data.contentfulArticolo.titolo}
          />
        ) : (
          <img
            className="w-full h-72 rounded-lg my-5 border-2"
            src={data.banner.childImageSharp.fixed.src}
            alt={data.contentfulArticolo.titolo}
          />
        )}
        <Content data={data} />
        <SocialShare
          socialConfig={{
            config: {
              url: `/blog/${data.contentfulArticolo.slug}`,
            },
          }}
        />
        <nav className="mt-5">
          <h3 className="font-semibold text-gray-500 mb-2">
            Potrebbero interessarti questi altri articoli:{" "}
          </h3>
          <ul className="flex justify-between">
            {next && (
              <Link
                className="text-avis-blue transition-all duration-500 hover:underline font-semibold"
                to={`/blog/${next.slug}`}
              >
                {next.slug}
              </Link>
            )}
            {prev && (
              <Link
                className="text-avis-blue transition-all duration-500 hover:underline font-semibold"
                to={`/blog/${prev.slug}`}
              >
                {prev.slug}
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default Articolo;

export const query = graphql`
  query($slug: String!) {
    contentfulArticolo(slug: { eq: $slug }) {
      id
      titolo
      slug
      dataDiPubblicazione
      immagine {
        fluid {
          src
        }
      }
      description {
        description
      }
      body {
        json
      }
    }
    banner: file(relativePath: { eq: "post-image.jpg" }) {
      childImageSharp {
        fixed(width: 750) {
          src
        }
      }
    }
  }
`;
