import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import DetailView from "./DetailView";
import ProfileView from "./ProfileView";
import TopNav from "./TopNav"

const App = () => {
    return <div>
        <TopNav />
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/profileview/:profileName" element={ <ProfileView /> } />
            <Route path="/detailview/:id" element={ <DetailView /> } />
        </Routes>
    </div>
}

export default App;