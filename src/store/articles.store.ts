import { autorun, makeAutoObservable } from 'mobx';
import { loadFromLocalStorage, saveToLocalStorage } from './helpers';
import {IArticle} from "../interfaces/IArticle";

class ArticlesStore {
    constructor() {
        makeAutoObservable(this);
    }

    articles: IArticle[] = loadFromLocalStorage('articles') || []

    get allArticles() {
        return this.articles;
    }

    createArticle = (title:string,content: string) => {
        const id = `${Date.now()}`
        this.articles.push({id,title,content,likes:0});
    }

    editArticle = (id:string,title:string,content: string) => {
        const editedArticle = this.articles.find((task) => task.id === id);
        if (editedArticle) {
            editedArticle.title = title;
            editedArticle.content = content
        }
    };
}

export const articlesStore = new ArticlesStore();

autorun(() => {
    saveToLocalStorage('articles', articlesStore.articles);
});