import './Article.scss'
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import React, { useEffect, useState} from "react";
import {articlesStore} from "../../../store/articles.store";

export const Article = observer(()  => {

    const {id} = useParams();
    const [articleTitle,setArticleTitle] = useState<string>();
    const [articleContent,setArticleContent] = useState<string>();
    const [editedTitle,setEditedTitle] = useState<string>();
    const [editedContent,setEditedContent] = useState<string>();
    const [editMode,setEditMode] = useState<boolean>(false)

    useEffect(() => {
        const article = articlesStore.articles.find(article => article.id === id);
        if (article) {
            setArticleTitle(article.title);
            setArticleContent(article.content);
        }
    },[id]);

    useEffect(() => {
        setEditedTitle(articleTitle);
        setEditedContent(articleContent)
    },[articleTitle,articleContent,editMode])


    return (
        <div className={'article-page-wrapper'}>
            {
                articleTitle && articleContent &&
                <>
                    <div className={'article-card'}>
                        <button className={'button-edit'} onClick={() => setEditMode(!editMode)}>Просмотр/редактирование</button>
                        {
                            !editMode &&
                            <>
                                <h2 className={'article-title'}>{articleTitle}</h2>
                                <p className={'article-content'}>{articleContent}</p>
                            </>
                        }
                        {
                            editMode &&
                            <>
                                <input className={'add-articles-input-field'}
                                       type="text"
                                       value={editedTitle}
                                       onChange={(e) => setEditedTitle(e.target.value)}
                                       placeholder="Введите заголовок"
                                />
                                <textarea className={'textarea-field'}
                                          value={editedContent}
                                          onChange={(e) => setEditedContent(e.target.value)}
                                          placeholder="Содержание"
                                />
                                <button className={'edit-submit'} onClick={() => {
                                    articlesStore.editArticle(id!,editedTitle!,editedContent!);
                                    setEditMode(false);
                                    setArticleTitle(editedTitle);
                                    setArticleContent(editedContent);
                                }}>
                                    Редактировать статью
                                </button>
                            </>
                        }
                    </div>
                </>
            }
        </div>
    )
})