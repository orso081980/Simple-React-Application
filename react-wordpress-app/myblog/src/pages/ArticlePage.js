import React from 'react';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);
    console.log(article.content);
    return (
        <>
        <h1>{article.title}</h1>
       <div
            dangerouslySetInnerHTML={{
                __html: article.content
            }}></div>
        
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;