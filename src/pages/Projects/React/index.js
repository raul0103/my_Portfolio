import React from 'react';
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import ReactProject1 from './project_1';

const ProjectsReact = () => {
    let match = useRouteMatch();

    return (
        <>
            <div className="project-page__controls-drop">
                <NavLink activeClassName="selected" to={`${match.url}/1`}>Задание 1</NavLink>
            </div>

            <Switch>
                <Route path={`${match.path}/1`}>
                    <ReactProject1 />
                </Route>
            </Switch>
        </>
    );
};

export default ProjectsReact;