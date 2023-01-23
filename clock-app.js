let segment_0 = document.querySelector('.segment-0');
let segment_1 = document.querySelector('.segment-1');
let segment_3 = document.querySelector('.segment-3');
let segment_4 = document.querySelector('.segment-4');

function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    let s1 = hour % 10 ;
    let s0 = (hour - s1) / 10 ;
    let s4 = minutes % 10 ;
    let s3 = (minutes - s4) / 10 ;

    document.title = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`

    segment_0.style = `box-shadow: var(--digit-${s0});`;
    segment_1.style = `box-shadow: var(--digit-${s1});`;
    segment_3.style = `box-shadow: var(--digit-${s3});`;
    segment_4.style = `box-shadow: var(--digit-${s4});`;
}
setInterval(clock, 1000);