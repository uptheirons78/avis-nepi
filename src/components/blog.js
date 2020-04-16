import React from "react";
import { Link } from "gatsby";
import moment from "moment";
import "moment/locale/it";

const Blog = ({ articoli, defaultImage }) => {
  return (
    <>
      <div
        id="blog"
        className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
      >
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Ultime notizie dal{" "}
              <span className="text-avis-blue">nostro blog</span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              In questa sezione puoi trovare utili informazioni, news ad avvisi
              relativi al calendario delle donazioni o altre nostre iniziative.
              Leggi tutti gli{" "}
              <Link to="/blog" className="text-avis-blue">
                articoli
              </Link>
            </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {articoli.map(articolo => (
              <div
                key={articolo.node.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={
                      articolo.node.immagine
                        ? articolo.node.immagine.fluid.src
                        : defaultImage
                    }
                    alt={articolo.node.titolo}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link to={`/blog/${articolo.node.slug}`} className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {articolo.node.titolo}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {`${articolo.node.description.description.slice(
                          0,
                          150
                        )} ...`}
                      </p>
                    </Link>
                  </div>
                  <p className="my-3 text-sm leading-5 font-medium text-avis-blue">
                    <Link
                      to={`/blog/${articolo.node.slug}`}
                      className="hover:underline"
                    >
                      Leggi l'articolo
                    </Link>
                  </p>
                  <div className="mt-5 text-sm leading-5 text-gray-500">
                    <span>Pubblicato il </span>
                    <time
                      className="text-gray-700"
                      dateTime={articolo.node.dataDiPubblicazione}
                    >
                      {moment(articolo.node.dataDiPubblicazione).format(
                        "DD MMM YYYY"
                      )}
                    </time>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
