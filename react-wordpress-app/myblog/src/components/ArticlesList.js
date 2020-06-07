import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            <h3>{article.name}</h3>
            {/*<div>{article.content}</div>*/}
            <div
            dangerouslySetInnerHTML={{
            	__html: article.content
            }}></div>
        </Link>
    ))}
    </>
);

export default ArticlesList;