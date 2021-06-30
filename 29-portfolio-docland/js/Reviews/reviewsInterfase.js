
class InterfaceReviews {
    constructor(data) {
        this.data = data;
    }

    learnHTML() {
        const imgPath = this.data.imgPath + this.data.img
        return `<div class="item">
                    <div class="start">
                        <img class="img" src="${imgPath}" alt="Person">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-half-o checked"></span>
                            <h5>${this.data.name}</h5>
                         </div>
                </div>
                <p class="smParagraph">${this.data.coment}</p>
            </div>`
    }

}

export { InterfaceReviews }