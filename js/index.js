var number = 1;

const audio = document.querySelector('audio');

var img = document.querySelector('img.img');

let audioz = 1;

console.log(number)

img.onclick = function test() {
    audio.play();
    number = 2;
}
