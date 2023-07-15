import './Home.scss'
import {articlesStore} from "../../store/articles.store";
import {IArticle} from "../../interfaces/IArticle";
import {ArticleItem} from "../Article/ArticleItem/ArticleItem";

export const Home = () => {

    const articles:IArticle[] = articlesStore.allArticles

    return (
        <div className={'articles-wrapper'}>
            {
                articles.map((article) => {
                    return (
                        <ArticleItem key={article.id} id={article.id} title={article.title} content={article.content}
                        likes={article.likes}/>
                    )
                })
            }
        </div>
    )
}