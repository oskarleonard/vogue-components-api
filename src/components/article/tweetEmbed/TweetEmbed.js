import React from "react";
import PropTypes from "prop-types";
import { TwitterTweetEmbed } from "react-twitter-embed";

function TweetEmbed({ className, data }) {
  return <TwitterTweetEmbed tweetId={data} />;
}

TweetEmbed.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string.isRequired,
};

export default TweetEmbed;
