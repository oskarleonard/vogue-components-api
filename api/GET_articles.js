import article from "./mock/article/article";

/*
  Would be nice to be able to specify what fields in the articles i want (like in graphql)
    example: GET: https://base_api/articles?components=headerHigh,slug&size=3
      Because in home page i only want the headerHigh and slug and other data would just make the client heavier
*/
const response = {
  data: {
    totalNumberOfarticles: 1234,
    articles: [article, article, article]
  }
};

export default response;
