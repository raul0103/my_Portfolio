import React from 'react';
import Header from '../../components/Header';

const Profile = (props) => {
    return (
        <div className="profile">
            <Header title={props.title} description="Информация обо мне" />

            <div className="container">
                <div className="profile__grid">
                    <img src="/assets/images/AykyWca_kGo.jpg" />
                    <ul>
                        <li><b>Имя</b>: Рауль</li>
                        <li><b>Год рождения</b>: 1995</li>
                        <li><b>Город проживания</b>: Костанай</li>
                        <li><b>Телефон</b>: 8 776 480 96 66</li>
                        <li><b>Email</b>: <a href="mailto:rshakurov95@mail.ru">rshakurov95@mail.ru</a></li>
                        <li><b>Опыт WEB-разработки</b>: 2 года</li>
                        <li><b>О техниках</b>: Изучаю React. В основном писал плагины и работал с PHP, JS, MySql</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;