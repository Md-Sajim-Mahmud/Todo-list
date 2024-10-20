// =========================== java script part strat ======================

// ==============================variable part start===========
let todo                = document.querySelector('.todo')
let todo_input          = document.querySelector('.todo_input')
let todo_button        = document.querySelector('.todo_button')
let All_todo            = document.querySelector('.All_todo')
let error               = document.querySelector('.error')
let single_todo         = document.querySelector('.single_todo')
let i                   = 0
let maintrun            = i

// ================================ variable part end ===========

// ============================== todo part start ================

todo_button.addEventListener('click',()=>{
if(todo_input.value == ''){
error.innerHTML = 'please enter the todo list'
}
else{
    i++
    maintrun.innerHTML = i
    error.innerHTML = ''
    All_todo.style = 'display:block'
    
// ======================= create element ==============
let div = document.createElement('div')
let input = document.createElement('input')
let editbutton = document.createElement('button')
let deletebutton = document.createElement('button')
// =========================== make Apend child part start ===========================
All_todo.appendChild(div)
div.append(input) 
div.appendChild(editbutton)
div.appendChild(deletebutton)
// ========================== create class name =============================
div.classList.add('single_todo')
input.classList.add('todo_input_option')
editbutton.classList.add('todo_button_edit')
deletebutton.classList.add('todo_button_delete')
// ======================= Add content =========================
editbutton.innerHTML = 'Edit'
deletebutton.innerHTML = 'Delete'

input.value = todo_input.value
todo_input.value = ''

// ============================= set Attribut ===================
input.setAttribute('readonly','readonly')

// ====================== Edit button part start=================

editbutton.addEventListener('click',()=>{
    if(editbutton.innerHTML == 'Edit'){

        editbutton.innerHTML = 'Save'
        editbutton.style = 'background:green;color:white;'
        input.removeAttribute('readonly','readonly')
        
    }else{
         editbutton.innerHTML = 'Edit'
        editbutton.style = 'background:blue;color:white;'
        input.setAttribute('readonly','readonly')
    }
})

// =========================== Edit button part end ===================
deletebutton.addEventListener('click',()=>{
    div.remove()
})

}
})

// ================================== java script end =================================