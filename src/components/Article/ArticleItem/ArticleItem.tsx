import './ArticleItem.scss'
import {IArticle} from "../../../interfaces/IArticle";
import {useNavigate} from "react-router-dom";

export const ArticleItem = ({id,title,content}:IArticle) => {

    const navigate = useNavigate()

    return (
        <div className={'article'} onClick={() => navigate(`../article/${id}`)}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}