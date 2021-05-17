function progressBar (selector, data) {

    const DOM = document.querySelector(selector)
    let HTML = ''
    for (const progress of data) {
        HTML +=  `<div class="progress-bar">aaaaaaaaaaaa</div>`
        console.log(data);
    }
    console.log(HTML);
    
   DOM.insertAdjacentHTML('afterend', HTML)
};

export { progressBar };

