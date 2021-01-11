import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Hashtags from "../hashtags/Hashtags";
import TweetEmbed from '../tweetEmbed/TweetEmbed';
import HeaderHigh from '../headerHigh/HeaderHigh';
import RichText from '../richText/RichText';

function ComponentChooser({ className, component }) {
  console.log("ComponentChooser component", component);
  function renderComponent() {
    switch (component.componentId) {
      case "HeaderHigh": {
        return <HeaderHigh data={component.data} />;
      }
      case "Hashtags": {
        return <Hashtags data={component.data} />;
      }
      case "RichText": {
        return <RichText data={component.data} />;
      }
      case "TweetEmbed": {
        return <TweetEmbed data={component.data} />;
      }
      default:
        return null;
    }
  }

  return <div className={classNames("test")}>{renderComponent()}</div>;
}

ComponentChooser.propTypes = {
  className: PropTypes.string,
  component: PropTypes.object
};

export default ComponentChooser;

/*
  return (
    <div className={classNames("test")}>
      <component.componentId data={component} />
    </div>
  );
*/
