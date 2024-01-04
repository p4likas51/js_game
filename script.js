const hangmanBox = document.querySelector('.hangman_box');
const children = hangmanBox.children;
let n = 0;
let mistakes = 0;
let plus = document.getElementById('plus');
children.item(n).style.display = 'block';
function nextPic(){
    mistakes++;
    children.item(n).style.display = 'none';
    n++;
    children.item(n).style.display = 'block';

}
plus.addEventListener('click', nextPic);