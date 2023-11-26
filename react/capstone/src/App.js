import React from 'react';
import './App.css';
import {useState} from "react";
import Header from "./components/header/header"
import Subheader from "./components/subheader/Subheader";
import Catalogo from './components/catalogo/Catalogo';
import Searchbar from "./components/searchBar/searchbar";
import './pages/home/home.css';
import catalogo from "./components/catalogo/Catalogo";
import Selection from "./components/checklist/Selection"

import cursos from "./cursos.json";

import Home from './pages/home/home';
import Search from './pages/search/search';
function App() {

    return (
        <div className="container-fluid overflow-hidden">
            <Header/>
            <Subheader/>
            <Search />

        </div>
    );
}

export default App;
