function socials(selector, data) {
    
    // logika
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const socials of data) {
        HTML += `<a href=${socials.href} target="_blank" class="fa fa-${socials.icon}" ></a>`
    }

    //result return
    DOM.innerHTML= HTML;
}

export { socials }