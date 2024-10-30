const container = document.querySelector('.container')
let submit = document.querySelector('.submit')
let form = document.getElementById('form')
let inputfield = document.getElementById('task')
function createTask(task){
  isEdithable = false
  let taskCard = document.createElement('div')
  taskCard.setAttribute('class','task-card')
  container.appendChild(taskCard)
  
  let textarea = document.createElement('p')
  textarea.setAttribute('class','textarea')
  textarea.setAttribute('readonly',`${isEdithable}`)
  textarea.textContent = `${task}`
  taskCard.appendChild(textarea)
  
  let buttonContainer = document.createElement('div')
  buttonContainer.setAttribute('class','button-container')
  taskCard.appendChild(buttonContainer)
  
  let edithBtn = document.createElement('button')
  edithBtn.setAttribute('class','edith-btn')
  edithBtn.textContent = 'Edith'
  buttonContainer.appendChild(edithBtn)
  edithBtn.addEventListener('click', () => {
    isEdithable = !isEdithable
    if(isEdithable){
      textarea.setAttribute('contenteditable',`${isEdithable}`)
      edithBtn.setAttribute('class','save-btn')
      edithBtn.textContent = 'save'
      textarea.focus()
    }else{
      textarea.setAttribute('contenteditable',`${isEdithable}`)
      edithBtn.setAttribute('class','edith-btn')
      edithBtn.textContent = 'Edith'
    }
  })
  
  let deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('class','delete-btn')
  deleteBtn.textContent = 'Delete'
  buttonContainer.appendChild(deleteBtn)
  deleteBtn.addEventListener('click', (e) => {
   container.removeChild(taskCard) 
  })
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  let formdata = new FormData(form)
  let task = formdata.get('task')
  createTask(task)
  form.reset()
})
