import React, { useEffect } from 'react';

const Slider = () => {

    useEffect(() => {
        const script = document.createElement('script');
        const $style = document.createElement("style");
        script.src = '/assets/js/slider.js';
        script.async = true;
        $style.innerHTML = `
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
        }`;

        document.body.appendChild(script);
        document.head.appendChild($style);
    }, []);

    return (
        <div className="block-info" id="js" style={{ textAlign: 'center' }}>
            <img src="/assets/icons/icon-js.png" />
            <p className="block-title">Уровень владения JavaScript</p>
            <div id="range">
                <div id="range_polygon"></div>
            </div>
        </div>
    );
};

export default Slider;