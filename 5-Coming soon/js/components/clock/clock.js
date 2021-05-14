import {formatNumber} from './formatNumber.js'

function renderClock(selector) {
   const DOM = document.querySelector(selector);

   const time = [432, 9, 37, 39];
   const titles = ['days', 'hours', 'minutes', 'seconds'];
   let HTML = '';
   for (let i = 0; i<time.length; i++) {
       const formatedNumber = formatNumber(time[i])
       HTML +=`<div class="time">
                    <div class="value">${formatedNumber}</div>
                    <div class="title">${titles[i]}</div>
                </div>`
   }

   DOM.innerHTML = HTML;
}

export{renderClock}; 

