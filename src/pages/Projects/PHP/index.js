import React from 'react';
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import PHPProject1 from './project_1';
import PHPProject2 from './project_2';

const ProjectsPHP = () => {
    let match = useRouteMatch();

    return (
        <>
            <div className="project-page__controls-drop">
                <NavLink activeClassName="selected" to={`${match.url}/1`}>Задание 1</NavLink>
                <NavLink activeClassName="selected" to={`${match.url}/2`}>Задание 2</NavLink>
            </div>

            <Switch>
                <Route path={`${match.path}/1`}>
                    <PHPProject1 />
                </Route>
                <Route path={`${match.path}/2`}>
                    <PHPProject2 />
                </Route>
            </Switch>
        </>
    );
};

export default ProjectsPHP;