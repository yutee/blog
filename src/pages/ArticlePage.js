import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFound from './NotFound';

const ArticlePage = () => {
    // destructuring...
    // const articleID = useParams();

    const params = useParams();
    const articleID = params.articleID;

    const article = articles.find(article => article.name === articleID);

    if (!article) {
        return <NotFound />
    }

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </>
    )
}

export default ArticlePage;