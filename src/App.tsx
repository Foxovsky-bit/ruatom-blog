import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import { Layout } from './Layout/Layout'
import { SignIn} from "./components/SignIn/SignIn";
import {Home} from "./components/Home/Home";
import {AddArticle} from "./components/Article/AddArticle/AddArticle";
import {Article} from "./components/Article/Article/Article";

function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<SignIn/>}></Route>
          <Route path={'/home'} element={<Home/>}></Route>
          <Route path={'/addArticle'} element={<AddArticle/>}></Route>
          <Route path={'/article/:id'} element={<Article/>}></Route>
        </Route>
      </Routes>
  );
}

export default App;
