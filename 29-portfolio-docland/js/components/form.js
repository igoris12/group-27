function progressBar() {
    const span = document.getElementById('progressBar')
    const input = document.getElementById('input')

    input.addEventListener('focus', e => {
        span.style.animationName = 'run'
    })

    input.addEventListener('blur', e => {
        span.style.animationName = 'runBack'
    })
}

export { progressBar }