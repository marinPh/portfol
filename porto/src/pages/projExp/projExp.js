import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectButton from "../../components/projectButton/projectButton";
import ProjectPage from "../projectPage/projectPage";
import Projects from "../Projects/Projects";
const ProjExp = () => {
    //for each project have a projectButton


    return (
        <div>
            <Routes>
                <Route path="/" element={<Projects />} />
                <Route path=":id" element={<ProjectPage />} />
            </Routes>
        </div>
    );
}
export default ProjExp;