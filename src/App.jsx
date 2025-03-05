import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { countries } from "./constants/countries";

import { About } from "./components/About/About";
import { Layout } from "./components/Layouts/Layout";
import { Team } from "./components/Team/Team";
import { Media } from "./components/Media/Media";
import { Program } from "./components/Program/Program";
import { Home } from "./components/Home/Home";
import { Policy } from "./components/Policy/Policy";

import './App.css'

function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    let lang = localStorage.getItem('lang');

    if (lang) {
      let language = countries.find(i => i.lang === lang);

      void i18n.changeLanguage(language.lang);

      dispatch({
        type: "SET_CHOOSEN_LANGUAGE",
        payload: language
      });
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="policy"
          element={<Policy />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="team"
          element={<Team />}
        />
        <Route
          path="media"
          element={<Media />}
        />
        <Route
          path="program"
          element={<Program />}
        />
      </Route>
    </Routes>
  )
}

export default App;
