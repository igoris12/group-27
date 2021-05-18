function progressBar (selector, data) {

    const DOM = document.querySelector(selector)
    let HTML = ''
    for (const progress of data) {
        HTML +=  `<div class="progress-bar">
                    <div class="top">
                         <div class="label">${progress.label}</div>
                        <div class="value">${progress.value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="progress" style="width: ${progress.value}%;">
                        
                    </div>
                </div>
                 </div>`
        console.log(data);
    }
    console.log(HTML);
    
   DOM.insertAdjacentHTML('afterend', HTML)
};

export { progressBar };

