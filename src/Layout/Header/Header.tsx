import './Header.scss'
import {useNavigate,Link} from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className={'header-wrapper'}>
            <Link to={'/home'}>
                <div>Росатом-блог</div>
            </Link>
            <button className={'create-article'} onClick={() => navigate('/addArticle')}>Создать статью +</button>
        </div>
    )
}