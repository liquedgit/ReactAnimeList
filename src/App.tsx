import React, { useState } from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './component/page/Home';
import { THEME, ThemeP } from './component/lib/context/Theme';
import FetchAnime from './component/lib/Fetching';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Detail from './component/page/DetailAnime';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});


function App() {
  let [currTheme, setCurrTheme] = useState(THEME.light);
  let changeTheme = ()=>{
    
    if(currTheme === THEME.light){
      setCurrTheme(THEME.dark);
    }else{
      setCurrTheme(THEME.light);
    }
  }
  return (
    <ApolloProvider client={client}>
      <ThemeP.Provider value={currTheme}>
        {currTheme === THEME.light ? <button onClick={changeTheme}>Light</button> : <button onClick={changeTheme}>Dark</button>}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/:animeID' element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>        
        </ThemeP.Provider>
    </ApolloProvider>

  );
}

export default App;
