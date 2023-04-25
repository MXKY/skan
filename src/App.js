import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import { connect } from "react-redux";
import mapStateToProps from "./storage/mapStateToProps";
import mapDispatchToProps from "./storage/mapDispatchToProps";
import InvalidPage from "./pages/InvalidPage/InvalidPage";
import CheckTokenWithoutNavigate from "./components/CheckTokenWithoutNavigate";

function App({ isAuth }) {
    return (
        <>
            <CheckTokenWithoutNavigate />

            <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
                <Routes>
                    <Route path="/*" element={<InvalidPage /> } />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/auth" exact element={<AuthPage />} />
                    <Route path="/results" exact element={isAuth ? <ResultsPage /> : <MainPage />} />
                    <Route path="/search" exact element={<SearchPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default connect(mapStateToProps("App"), mapDispatchToProps("App"))(App);