import React from "react";
import { headerHigh } from "./api/mock/article/components/headerHigh";
import HeaderHigh from "./components/article/headerHigh/HeaderHigh";
import Article from "./components/article/Article";
import articleRes from "./api/GET_article";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="appHeader">APP HEADER</div>
      <Article article={articleRes.data.article} />
    </div>
  );
}
