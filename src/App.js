import React from 'react'
import Navbar from './components/Navbar'
import ListContextProvider from './components/ListContextProvider';
import StudentsList from './components/StudentsList'
import FavouritesList from './components/FavouritesList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <ListContextProvider>
            <Routes>
              <Route index element={<StudentsList />}></Route>
              <Route path={"/favouriteslist"} element={<FavouritesList />}></Route>
            </Routes>
          </ListContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App