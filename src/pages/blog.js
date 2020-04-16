import React from "react";
import { graphql, Link } from "gatsby";
import moment from "moment";
import "moment/locale/it";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/nav";

const BlogPage = ({ data }) => {
  const seoDescription =
    "Il Blog dell'Avis Comunale di Nepi odv. Una raccolta di tutti gli articoli, gli annunci, gli eventi e le informazioni relative al mondo dell'Avis locale";
  const posts = data.articoli.edges;
  return (
    <Layout>
      <SEO title="Blog" description={seoDescription} />
      <div className="max-w-2xl my-0 mx-auto px-5">
        <Nav />
        <h1 className="mt-10 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">
          Il Nostro <span className="text-avis-blue">Blog</span>
        </h1>
        <p className="my-5 text-gray-500 leading-6 text-justify">
          In questa sezione del sito è possibile trovare tutti gli articoli, gli
          annunci e le informazioni pubblicate dall'Avis Comunale di Nepi odv.
          Un modo semplice e veloce per tenersi informati su quanto avviene nel
          mondo Avis locale.
        </p>
        <div className="">
          {posts.map(post => (
            <article className="my-10" key="post.node.id">
              <h3 className="mt-2 text-2xl leading-7 font-semibold text-avis-blue">
                {post.node.titolo}
              </h3>
              <div className="mt-2 text-sm leading-5 text-gray-500">
                <span>Pubblicato il </span>
                <time
                  className="text-gray-700"
                  dateTime={post.node.dataDiPubblicazione}
                >
                  {moment(post.node.dataDiPubblicazione).format("DD MMM YYYY")}
                </time>
              </div>
              <p className="my-2 text-base leading-6 text-gray-500">
                {post.node.description.description.slice(0, 200)}
                {"..."}
              </p>
              <p className="text-sm leading-5 font-medium text-avis-blue">
                <Link
                  to={`/blog/${post.node.slug}`}
                  className="hover:underline"
                >
                  Leggi l'articolo
                </Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    articoli: allContentfulArticolo(
      sort: { fields: dataDiPubblicazione, order: DESC }
    ) {
      edges {
        node {
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
        }
      }
    }
  }
`;
