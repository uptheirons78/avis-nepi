const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articoloTemplate = path.resolve("./src/templates/articolo.js");

  const result = await graphql(`
    query {
      allContentfulArticolo {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const articoli = result.data.allContentfulArticolo.edges;

  articoli.forEach((articolo, index) => {
    createPage({
      component: articoloTemplate,
      path: `/blog/${articolo.node.slug}`,
      context: {
        slug: articolo.node.slug,
        prev: index === 0 ? null : articoli[index - 1].node,
        next: index === articoli.length - 1 ? null : articoli[index + 1].node,
      },
    });
  });
};
