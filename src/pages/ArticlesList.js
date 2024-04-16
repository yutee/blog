import articles from './article-content';
import ArticlesListComponent from '../components/ArticlesListComponent';

const ArticlesList = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesListComponent articles={articles} />
        </>
    )
}

export default ArticlesList;