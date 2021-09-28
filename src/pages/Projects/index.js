import React from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import Header from "../../components/Header";
import ProjectsJS from "./JS";
import ProjectsPHP from "./PHP";
import ProjectsReact from "./React";

export default function Projects(props) {
    let match = useRouteMatch();

    return (
        <div className="project-page">
            <Header title={props.title} description="Выберите стек" />

            <div className="container">
                <div className="project-page__controls">
                    <NavLink activeClassName="selected" to={`${match.url}/php`}>PHP</NavLink>
                    <NavLink activeClassName="selected" to={`${match.url}/react`}>React</NavLink>
                    <NavLink activeClassName="selected" to={`${match.url}/js`}>JavaScript</NavLink>
                </div>

                <Switch>
                    <Route path={`${match.path}/php`}>
                        <ProjectsPHP />
                    </Route>
                    <Route path={`${match.path}/react`}>
                        <ProjectsReact />
                    </Route>
                    <Route path={`${match.path}/js`}>
                        <ProjectsJS />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};