import './AddArticle.scss'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {articlesStore} from "../../../store/articles.store";

export const AddArticle = observer (() => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate()

    function createArticle(title:string,content:string) {
        if (title && content) {
            articlesStore.createArticle(title,content)
            navigate('/home')
        }
        else {
            alert('Заполните все поля')
        }
    }

    return (
        <div className={'add-articles-wrapper'}>
            <div className={'add-articles-form-wrapper'}>
                <div className={'add-articles-form-title'}>Создание статьи</div>
                <input className={'add-articles-input-field'}
                       type="text"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                       placeholder="Введите заголовок"
                />
                <textarea className={'textarea-field'}
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="Содержание"
                />
                <button className={'create-article-button'} onClick={() => createArticle(title,content)}>Создать статью</button>
            </div>
        </div>
    )
})