import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Blog from "../components/blog";
import Features from "../components/features";
import Hero from "../components/hero";
import Donations from "../components/donations";
import Grid from "../components/grid";

const IndexPage = ({ data }) => {
  const articoli = data.articoli.edges.slice(0, 3);
  const donations = data.donazioni.edges;
  const today = new Date();
  const nextDonation = donations.filter(donation => {
    return new Date(donation.node.data) >= today;
  })[0];

  return (
    <Layout>
      <SEO title="Home" />
      <Hero nextDonation={nextDonation.node.data} />
      <Features />
      <Donations donations={donations} />
      <Grid />
      <Blog
        articoli={articoli}
        defaultImage={data.banner.childImageSharp.fixed.src}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    donazioni: allContentfulDonazione(sort: { fields: data, order: ASC }) {
      edges {
        node {
          id
          data
          tipo
        }
      }
    }
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
    banner: file(relativePath: { eq: "post-image.jpg" }) {
      childImageSharp {
        fixed(width: 750) {
          src
        }
      }
    }
  }
`;
