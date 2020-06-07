import React from 'react';
import ArticlesList from '../components/ArticlesList';
import getArticles from './article-content';

//console.log(articleContent);
class ArticlesListPage extends React.Component{
    constructor(props) {
        super(props);

        this.state={};
    }

    componentDidMount() {
        getArticles().then(articles => this.setState({articles}))
    }

    render() {
        const {articles}=this.state;

        if(!articles) return <h1>Loading</h1>;

        return (
            <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} />
            </>
        );
    }
}
export default ArticlesListPage;
