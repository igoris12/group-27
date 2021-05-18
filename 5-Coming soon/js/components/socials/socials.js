function socials(selector, data) {
    
    // logika
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const socials of data) {
        if (socials.active) {
        HTML += `<a href=${socials.href} target="_blank" class="socials fa fa-${socials.icon}" ></a>`
        }
        
    }

    //result return
    DOM.innerHTML= HTML;
}

export { socials }