
// https://www.youtube.com/watch?v=z_vvY7YX3so&list=WL&index=7&t=0s

function backgroundChanger() {
    // Execute the change if we reach a certain point in the vertical scroll.
    if (self.scrollY > this.innerHeight / 1.5) {
        document.body.classList.add('background-active');
    } else {
        document.body.classList.remove('background-active');
    }
}

// Every time we scroll, the function is activated
window.addEventListener('scroll', backgroundChanger);