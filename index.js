//grab elemets
const validForm = document.querySelector('#form');
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');
const todoItem = document.querySelector('.list');
const items = JSON.parse(localStorage.getItem('itema')) || [];
//submit data
validForm.addEventListener('submit', (e)=>{
    event.preventDefault();
    let input = document.querySelector('#add-item').value;
    const addItem = document.createElement('p');
    addItem.innerHTML = 
    `<span>${input}</span>
    <button class="delete">X</button>`;
    todoItem.appendChild(addItem);
 
    localStorage.setItem('items', JSON.stringify(items))
});
 
function deleBook(el) {
    if(el.classList.contains('delete')){
        el.parentElement.remove();
    }
}
//clear and delet button
todoItem.addEventListener('click', (e) =>{
    deleBook(e.target)
})

//internal storage
//localStorage.setItem('item', JSON.stringify(item))
