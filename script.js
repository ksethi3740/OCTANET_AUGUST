const imgs1 = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs1.length; i++) {
        imgs1[i].style.display = 'none';
    }
    imgs1[n].style.display = 'block';
}

// Call changeSlide function to display the first slide initially
changeSlide();

prev_btn.addEventListener('click', (e) => { // Corrected 'click' event
    if (n > 0) {
        n--;
    } else {
        n = imgs1.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', (e) => { // Corrected 'click' event
    if (n < imgs1.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});


const scrollContainer=document.querySelectorAll('.products');
    for(const item of scrollContainer){
        item.addEventListener('wheel',(evt)=>{
            evt.preventDefault();
            item.scrollLeft +=evt.deltaY;

            if (evt.deltaY !== 0) {
                console.log('Scrolling via mouse wheel');
            }
    });
}
// const scrollContainer = document.querySelectorAll('.products');

// for (const item of scrollContainer) {
//     item.addEventListener('keydown', (evt) => {
//         // Check if the left arrow key was pressed
//         if (evt.keyCode === 37) {
//             evt.preventDefault();
//             item.scrollLeft -= 100; // Adjust the scrolling distance as needed
//         }
//         // Check if the right arrow key was pressed
//         else if (evt.keyCode === 39) {
//             evt.preventDefault();
//             item.scrollLeft += 100; // Adjust the scrolling distance as needed
//         }
//     });
// }


