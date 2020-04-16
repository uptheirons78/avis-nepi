import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  const data = useStaticQuery(logoQuery);
  return (
    <ul id="top" className="flex py-5">
      <Link to="/" className="mr-12">
        <img
          className="h-8 w-auto sm:h-10"
          src={data.logo.childImageSharp.fixed.src}
          alt="Logo dell'Avis Nepi."
        />
      </Link>
      <li className="mr-6">
        <Link
          className="font-medium text-gray-500 hover:text-avis-blue focus:outline-none focus:text-avis-blue transition duration-150 ease-in-out"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="mr-6">
        <AnchorLink
          className="font-medium text-gray-500 hover:text-avis-blue focus:outline-none focus:text-avis-blue transition duration-150 ease-in-out"
          href="#contatti"
          role="button"
        >
          Contatti
        </AnchorLink>
      </li>
    </ul>
  );
};

export default Nav;

const logoQuery = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          src
        }
      }
    }
  }
`;
