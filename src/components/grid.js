import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Grid = () => {
  const data = useStaticQuery(picturesQuery);
  return (
    <div className="flex flex-col lg:flex-row py-10 px-5 lg:px-15 mt-10 lg:mt-24 bg-gray-100">
      <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
        <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Fare parte dell'AVIS significa dare il proprio contributo per il
          <span className="text-avis-blue"> prossimo</span>
        </h3>
      </div>
      <div className="w-full lg:w-2/3 grid grid-cols-3 gap-3 lg:gap-7 px-5">
        <img
          className="border rounded-lg overflow-hidden shadow-lg duration-300 transform hover:scale-110 hover:rotate-5"
          src={data.firstPicture.childImageSharp.fixed.src}
          alt=""
        />
        <img
          className="border rounded-lg overflow-hidden shadow-lg duration-300 transform hover:scale-110 hover:rotate-5"
          src={data.secondPicture.childImageSharp.fixed.src}
          alt=""
        />
        <img
          className="border rounded-lg overflow-hidden shadow-lg duration-300 transform hover:scale-110 hover:rotate-5"
          src={data.thirdPicture.childImageSharp.fixed.src}
          alt=""
        />
        <img
          className="border rounded-lg overflow-hidden shadow-lg duration-300 transform hover:scale-110 hover:rotate-5"
          src={data.fourthPicture.childImageSharp.fixed.src}
          alt=""
        />
        <img
          className="border rounded-lg overflow-hidden shadow-lg duration-300 transform hover:scale-110 hover:rotate-5"
          src={data.fifthPicture.childImageSharp.fixed.src}
          alt=""
        />
        <img
          className="border rounded-lg overflow-hidden shadow-lg duration-300 transform hover:scale-110 hover:rotate-5"
          src={data.sixthPicture.childImageSharp.fixed.src}
          alt=""
        />
      </div>
    </div>
  );
};

export default Grid;

const picturesQuery = graphql`
  query {
    firstPicture: file(relativePath: { eq: "avis-01.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 280) {
          src
        }
      }
    }
    secondPicture: file(relativePath: { eq: "avis-02.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 280) {
          src
        }
      }
    }
    thirdPicture: file(relativePath: { eq: "avis-03.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 280) {
          src
        }
      }
    }
    fourthPicture: file(relativePath: { eq: "avis-04.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 280) {
          src
        }
      }
    }
    fifthPicture: file(relativePath: { eq: "avis-05.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 280) {
          src
        }
      }
    }
    sixthPicture: file(relativePath: { eq: "avis-06.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 280) {
          src
        }
      }
    }
  }
`;
