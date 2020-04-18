
// https://www.youtube.com/watch?v=z_vvY7YX3so&list=WL&index=7&t=0s

function backgroundChanger() {
    // Execute the change if we reach a certain point in the vertical scroll.
    if (self.scrollY > this.innerHeight / 1.4) {
        document.body.classList.add('background-active');
    } else {
        document.body.classList.remove('background-active');
    }
}

function scrollAppear() {
    var content1 = document.querySelector('.timeline1');
    var content1Position = content1.getBoundingClientRect().top;
    var screen1Position = window.innerHeight / 1.2;

    if (content1Position < screen1Position) {
        content1.classList.add('timeline-content-appear');
    } else if (content1Position > screen1Position * 1.0) {
        content1.classList.remove('timeline-content-appear');
    }

    var content2 = document.querySelector('.timeline2');
    var content2Position = content2.getBoundingClientRect().top;
    var screen2Position = window.innerHeight / 1.2;

    if (content2Position < screen2Position) {
        content2.classList.add('timeline-content-appear');
    } else if (content2Position > screen2Position * 1.0) {
        content2.classList.remove('timeline-content-appear');
    }

    var content3 = document.querySelector('.timeline3');
    var content3Position = content3.getBoundingClientRect().top;
    var screen3Position = window.innerHeight / 1.2;

    if (content3Position < screen3Position) {
        content3.classList.add('timeline-content-appear');
    } else if (content3Position > screen3Position * 1.0) {
        content3.classList.remove('timeline-content-appear');
    }

    var content4 = document.querySelector('.timeline4');
    var content4Position = content4.getBoundingClientRect().top;
    var screen4Position = window.innerHeight / 1.2;

    if (content4Position < screen4Position) {
        content4.classList.add('timeline-content-appear');
    } else if (content4Position > screen4Position * 1.0) {
        content4.classList.remove('timeline-content-appear');
    }
}


// Every time we scroll, the function is activated
window.addEventListener('scroll', backgroundChanger);
window.addEventListener('scroll', scrollAppear);
