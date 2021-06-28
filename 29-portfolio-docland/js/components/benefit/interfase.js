class InterfaceBenfits {
    constructor(data) {
        this.data = data;
    }

    learnHTML() {
        const imgPath = this.data.imgPath + this.data.src
        return `<div class="item">
                <div class="img" style= "background: ${this.data.color}">
                    <img src="${imgPath}" alt="${this.data.alt}">
                </div>
                <div class="content">
                    <a href="#">
                        <h3>${this.data.title}</h3>
                    </a>
                    <p>Aenean non accumsan ante. Duis et risus accumsan.</p>
                </div>
            </div>`
    }

}

export { InterfaceBenfits }