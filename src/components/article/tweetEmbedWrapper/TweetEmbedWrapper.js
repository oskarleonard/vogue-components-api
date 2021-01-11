import React from "react";
import PropTypes from "prop-types";
import { TwitterTweetEmbed } from "react-twitter-embed";

function TweetEmbedWrapper({ className, data }) {
  return <TwitterTweetEmbed tweetId={data} />;
}

TweetEmbedWrapper.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string.isRequired,
};

export default TweetEmbedWrapper;
