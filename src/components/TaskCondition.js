import React from 'react';

const TaskCondition = (props) => {
    return (
        <>
            <p><b>Условие</b>:</p>
            <div className="project-task__condition">
                {props.children}
            </div>

            {props.repo ? <p><b>Ссылка на репозиторий с полным решением:</b> <a href={props.repo}>{props.repo}</a></p> : ''}
            <p><b>Решение:</b></p>
        </>
    );
};

export default TaskCondition;