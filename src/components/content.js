import React from "react";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Content = ({ data }) => {
  const Bold = ({ children }) => (
    <span className="text-avis-blue font-semibold">{children}</span>
  );
  const Italic = ({ children }) => (
    <span className="text-avis-blue font-semibold italic">{children}</span>
  );
  const Underline = ({ children }) => (
    <span className="text-avis-blue font-semibold underline">{children}</span>
  );
  const Text = ({ children }) => (
    <p className="max-w-2xl mx-auto text-base leading-7 text-gray-500 my-4">
      {children}
    </p>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
      [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-2xl text-avis-blue font-medium">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h1 className="text-xl text-avis-blue font-medium">{children}</h1>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h1 className="text-xl text-avis-blue font-medium">{children}</h1>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h1 className="text-lg text-avis-blue font-medium">{children}</h1>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h1 className="text-lg text-avis-blue font-medium">{children}</h1>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h1 className="text-lg text-avis-blue font-medium">{children}</h1>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="my-7 list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ul className="my-7 list-decimal">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="text-avis-blue ml-4">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <div className="bg-blue-100 border-l-4 border-avis-blue text-gray-500 p-4 italic">
          {children}
        </div>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (
          <img
            className="my-5 object-contain"
            src={node.data.target.fields.file.it.url}
            alt={data.contentfulArticolo.titolo}
          />
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          className="text-avis-blue hover:underline"
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="my-10">
      {documentToReactComponents(data.contentfulArticolo.body.json, options)}
    </div>
  );
};

export default Content;
