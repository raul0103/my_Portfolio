import React from 'react';
import TaskCondition from '../../../../components/TaskCondition';
import Slider from './Slider';

const JSProject1 = () => {
    return (
        <div className="project-task">

            <TaskCondition>
                <p>Написать кастомный слайдер на чистом JS, с возможностью выбора. Так же должен работать в моб версии</p>
            </TaskCondition>

            <Slider />

            <p><em>index.js</em></p>
            <code>{`
            let arr = ['Не владею', 'Использую готовые решения', 'Использую готовые решения и умею их переделывать', 'Пишу сложный JS код'] //Маркеры`} <br />{`
            let step = parseInt(range.offsetWidth) / (arr.length - 1) // Шаг между маркерами относительно ширины слайдера`} <br />{`
            `} <br />{`
            let step_half = step / 2 // Половина шага (вычисление положения бегунка)`} <br />{`
            let marker_pos_arr = [] //Массив с кооринатами каждого маркера (вычисление положения бегунка)`} <br />{`
            let marker_pos = 0`} <br />{`
            `} <br />{`
            //Добавляем маркеры на слайдер`} <br />{`
            for (i = 0; i < arr.length; i++) {`} <br />{`
                let marker = createElem('div', 'range-step')`} <br />{`
                marker.innerHTML = '<a data-pos="' + i + '" onclick="setSliderPosition(' + i + ')">' + arr[i] + '</a>'`} <br />{`
                css(marker, { left: marker_pos + 'px' })`} <br />{`
            `} <br />{`
                range.appendChild(marker)`} <br />{`
            `} <br />{`
                marker_pos_arr.push(marker_pos) //Положение каждого маркера`} <br />{`
                marker_pos += step`} <br />{`
            }`} <br />{`
            `} <br />{`
            //Титл для мобилки`} <br />{`
            let mobile_title = createElem('div', 'mobile-title')`} <br />{`
            range.before(mobile_title)`} <br />{`
            `} <br />{`
            //Добавили бегунок`} <br />{`
            let slider = createElem('div', 'range-slider')`} <br />{`
            range.appendChild(slider)`} <br />{`
            `} <br />{`
            let slider_half = slider.offsetWidth / 2`} <br />{`
            css(slider, { left: 0 - slider_half + 'px' })`} <br />{`
            `} <br />{`
            //Позиция по умолчанию на 'Использую готовые решения и умею их переделывать'`} <br />{`
            setSliderPosition(2)`} <br />{`
            `} <br />{`
            //Позиция бегунка`} <br />{`
            range.onmousedown = onmousedown`} <br />{`
            range.addEventListener("touchstart", touchstart, false);`} <br />{`
            `} <br />{`
            function onmousedown() {`} <br />{`
                document.onmousemove = function (e) {`} <br />{`
                    let position = e.pageX - range.getBoundingClientRect().x //Позиция мышки с учетом положения слайдера на странице`} <br />{`
            `} <br />{`
                    if (position < marker_pos_arr[0] + step_half) {`} <br />{`
                        setSliderPosition(0)`} <br />{`
                    }`} <br />{`
                    for (i = 0; i <= marker_pos_arr.length; i++) {`} <br />{`
                        if (position > marker_pos_arr[i] + step_half) {`} <br />{`
                            setSliderPosition(i + 1)`} <br />{`
                        }`} <br />{`
                    }`} <br />{`
            `} <br />{`
                };`} <br />{`
            `} <br />{`
                document.onmouseup = () => {`} <br />{`
                    document.onmousemove = null`} <br />{`
                    document.onmouseup = null`} <br />{`
                };`} <br />{`
            }`} <br />{`
            `} <br />{`
            function touchstart() {`} <br />{`
                console.log(1)`} <br />{`
                range.addEventListener("touchmove", function (e) {`} <br />{`
                    let position = e.changedTouches[0].pageX - range.getBoundingClientRect().x //Позиция мышки с учетом положения слайдера на странице`} <br />{`
            `} <br />{`
                    if (position < marker_pos_arr[0] + step_half) {`} <br />{`
                        setSliderPosition(0)`} <br />{`
                    }`} <br />{`
                    for (i = 0; i <= marker_pos_arr.length; i++) {`} <br />{`
                        if (position > marker_pos_arr[i] + step_half) {`} <br />{`
                            setSliderPosition(i + 1)`} <br />{`
                        }`} <br />{`
                    }`} <br />{`
            `} <br />{`
                });`} <br />{`
            `} <br />{`
                document.touchend = () => {`} <br />{`
                    document.touchmove = null`} <br />{`
                    document.touchend = null`} <br />{`
                };`} <br />{`
            }`} <br />{`
            `} <br />{`
            function setActiveClass(pos) {`} <br />{`
                document.querySelector('a.active')?.classList.remove('active')`} <br />{`
                document.querySelector('[data-pos="' + pos + '"]')?.classList.add('active')`} <br />{`
                mobile_title.innerText = arr[pos]`} <br />{`
            }`} <br />{`
            function setSliderPosition(pos) {`} <br />{`
                setActiveClass(pos)`} <br />{`
                pos === 0 ? gradient_percent = '0' : gradient_percent = '20%'`} <br />{`
                css(slider, { left: marker_pos_arr[pos] - slider_half + 'px' })`} <br />{`
                css(range_polygon, { background: 'linear-gradient( 90deg ,#d0ceff ' + gradient_percent + ', #8986c3 ' + marker_pos_arr[pos] + 'px, #d9d9d9 ' + marker_pos_arr[pos] + 'px)' })`} <br />{`
            }`} <br />{`
            function createElem($elem, $class) {`} <br />{`
                let elem = document.createElement($elem)`} <br />{`
                elem.classList.add($class)`} <br />{`
                return elem`} <br />{`
            }`} <br />{`
            function css(element, style) {`} <br />{`
                for (const property in style) element.style[property] = style[property];`} <br />{`
            }`} <br />{`
            
            `}</code>

            <p><em>style.css</em></p>
            <code>{`
                  #range{position: relative;  width: 100%;   margin: 80px 0}
                  .range-slider{ -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;position: absolute; top: 30px; height: 27px; width: 24px; background: url(/assets/icons/slider.png); background-repeat: no-repeat;}
                  .range-step{position: absolute; top: -10px; height: 25px; border-left: 1px dotted #d9d9d9;}
                  .range-step a{cursor:pointer;position: absolute; top: -21px; left: 10px; width: 170px; font-size: 12px;}
                  .range-step a.active{ color: var(--main-color);}
                  
                  #range_polygon{ height: 16px; width: 100%; clip-path: polygon(100% 0, 100% 100%, 0 100%);background: linear-gradient( 90deg ,#d0ceff 0, #8986c3 0px, #d9d9d9 0px);}
                  
                  .mobile-title{display: none;text-align: center; color: var(--main-color);}
                  
                  @media(max-width:768px){
                  .range-step a{display: none;}
                  .mobile-title{display: block;}
                  }
            `}</code>
        </div>
    );
};

export default JSProject1;