import React from 'react';
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import JSProject1 from './project_1';

const ProjectsJS = () => {
    let match = useRouteMatch();

    return (
        <>
            <div className="project-page__controls-drop">
                <NavLink activeClassName="selected" to={`${match.url}/1`}>Задание 1</NavLink>
            </div>

            <Switch>
                <Route path={`${match.path}/1`}>
                    <JSProject1 />
                </Route>
            </Switch>
        </>
    );
};

export default ProjectsJS;