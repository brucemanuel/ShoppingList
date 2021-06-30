// Selectors 

const inputField = document.querySelector('#inputField');
const addBtn = document.querySelector('#addBtn');
const listedItem = document.querySelector('#listedItem');
const form = document.querySelector('form');
const body = document.querySelector('body');

//Event Listener 
addBtn.addEventListener('click', () => {
  // todo div
  const newDiv = document.createElement('div');

  // todo li
  const newLi = document.createElement('li');
  listedItem.appendChild(newDiv);
  newDiv.appendChild(newLi);
  newLi.innerText = inputField.value;
  newLi.classList.add('todo');
  inputField.value = '';
 
  // Trash
  const trashBtn = document.createElement('button');
  trashBtn.innerHTML = '<i c    class="fas fa-trash"></i>';
  newLi.appendChild(trashBtn);
  trashBtn.classList.add('trashBtn');

  //Check 
  const completedBtn = document.createElement('button');
  completedBtn.innerHTML = '<i c    class="fas fa-check"></i>';
  newLi.appendChild(completedBtn);
  completedBtn.classList.add('completedBtn');
  // Remove Item 
  trashBtn.addEventListener('click', () => {
    newDiv.remove(newDiv);
    console.log(newDiv);
  });
  // Completed Button 
  completedBtn.addEventListener('click', () => {
    newLi.classList.add('completedItem');
  });

//   if (inputField.value == "") {
//     const newP = document.createElement('p');
//     newP.appendChild(body);
//     newP.innerText = 'You need to add text in input field!'
// }
  
});


// Prevent Form From Submitting
form.addEventListener('click', function (e) {
  e.preventDefault();
})