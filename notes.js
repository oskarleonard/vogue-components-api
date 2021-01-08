const responseArticle2 = {
  data: {
    article_id_2: { name: "Second" }
  }
};

const responseArticle3 = {
  data: {
    article_id_3: { name: "Third" }
  }
};

const responseTwo = {
  data: {
    totalNumberOfarticles: 1234,
    articles: {
      article_id_1: { name: "First" }
    }
  }
};

const merged = Object.assign(
  {},
  responseTwo.data.articles,
  responseArticle2.data
);

console.log(merged);
