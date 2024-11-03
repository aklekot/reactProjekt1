import Hero from '../../components/Hero/Hero'
import SearchForm from '../../components/SearchForm/SearchForm'
import List from '../../components/List/List'

import { Routes, Route } from 'react-router-dom';
function Home() {
    return (
        <>
            <Hero />
            <SearchForm />
            <List />
        </>
    );

};

export default Home;