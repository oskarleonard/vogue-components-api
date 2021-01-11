import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

//https://www.npmjs.com/package/remark-react

function RichText({ className, data }) {
  return <div className={classNames("rt")}>{data}</div>;
}

RichText.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string.isRequired
};

export default RichText;
