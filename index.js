// Your code goes here

const text = document.querySelector('#text')
function updateInner() {
    text.innerHTML = "This is really cool!"
}

function alertClick() {
    text.innerHTML = 'Hey, you find the Default Text: "JavaScript is so cool it lets me add text to my page programmaticaly."'

}

document.addEventListener('DOMContentLoaded', updateInner);

text.addEventListener('click', alertClick);