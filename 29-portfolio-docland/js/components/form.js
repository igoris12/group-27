function progressBar() {
    const span = document.getElementById('progressBar')
    const input = document.getElementById('input')

    input.addEventListener('focus', e => {

        if (focus) {
            span.style.animationName = 'run'
        }
    })


}

export { progressBar }