import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Hashtags({ className, data }) {
  console.log("Hashtags data", data);

  return (
    <div className={classNames("test")}>
      {data &&
        data.map((hashtag) => {
          return <Hashtag hashtag={hashtag} />;
        })}
    </div>
  );
}

Hashtags.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string
    })
  )
};

export default Hashtags;

function Hashtag({ hashtag }) {
  return <div className={classNames("Hashtag")}>{hashtag.text}</div>;
}
