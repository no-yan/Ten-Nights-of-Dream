import React from "react";

export type Article = {
  title: string;
  body: string;
};

const ArticleContext = React.createContext<Article[] | null>(null);
export default ArticleContext;
