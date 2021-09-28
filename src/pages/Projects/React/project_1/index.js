import React from 'react';
import TaskCondition from '../../../../components/TaskCondition';
import Form from './components/Form'

const ReactProject1 = () => {
    return (
        <div className="project-task">

            <TaskCondition repo="url.com">
                <p> Сверстать форму регистрации, с валидируемыми полями.</p>
                <ul>
                    <li>- В поле "Имя" недопустимы цифры и смиволы, кроме перечисленных " № - &</li>
                    <li>- Email должен содержать только адрес электронной почты</li>
                    <li>- Номер телефона должен состоят из 11 чисел, допустимы скобки 3-х значного кода</li>
                </ul>
            </TaskCondition>

            <Form />

        </div>
    );
};

export default ReactProject1;