import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ComponentChooser from "./componentChooser/ComponentChooser";

function Article({ className, article }) {
  console.log("article:", article);
  return (
    <div className={classNames("Article")}>
      <h2>Article</h2>
      {article.components.map((component) => {
        return (
          component && (
            <ComponentChooser
              key={component.componentId}
              component={component}
            />
          )
        );
      })}
    </div>
  );
}

Article.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object
};

export default Article;
