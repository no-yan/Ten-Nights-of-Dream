import React from "react";
import { ContentState } from "draft-js";

export type Article = {
  title: string;
  body: ContentState;
};

const ArticleContext = React.createContext<Article[] | null>(null);
export default ArticleContext;
