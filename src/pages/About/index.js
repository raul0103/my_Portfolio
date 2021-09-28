import React from 'react';
import Header from '../../components/Header';

const About = (props) => {
    return (
        <div>
            <Header title={props.title} description="Приложение разработано с ипользованием фреймворка React.js." />
            <div className="container">
                <p>Не задумывался о создании портфолио, пока не уволился с работы. Теперь приходится выполняя задания на собеседованиях собирать решения к ним на данном сайте.</p>
                <p>Пакеты используемые в данном приложении:</p>
                <ul>
                    <li>node-sass: ^4.14.1</li>
                    <li>react: ^17.0.2</li>
                    <li>react-dom: ^17.0.2</li>
                    <li>react-router: ^5.2.1</li>
                    <li>react-router-dom: ^5.3.0</li>
                </ul>
            </div>
        </div>
    );
};

export default About;