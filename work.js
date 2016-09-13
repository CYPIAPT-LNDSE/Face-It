
const buttons = document.getElementsByClassName('next_button');
console.log(buttons.length);
// Array.from(buttons).forEach(button => button.addEventListener('click', changeBackgroundColor));

for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', nextPanel);
}

let number = 1;

function nextPanel() {
  document.getElementById('question_' + number).style.left='-1200px';
  if(number === 6){number = 0;}

  document.getElementById('question_' + (number + 1)).style.left=((parseInt(window.innerWidth) - 600) / 2) + 'px';
  number++;
  console.log(number);
}
