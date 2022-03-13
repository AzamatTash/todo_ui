import {PRIORITY_BLOCKS, ADD} from './view.js';

for (let i= 0; i < ADD.btnAdds.length; i++) {
    ADD.btnAdds[i].addEventListener('click', function() {
        let isContentExist = ADD.INPUTS[i].value.trim();

        if(!isContentExist) {
            alert('Вы не добавели дел!');
            return;
        }

        const DIV = document.createElement('div');
        DIV.className = 'todo__task';
        DIV.innerHTML = `            
            <button class="todo__task__btn__check"></button>    
            <div class="todo__task__text">${ADD.INPUTS[i].value}</div>
            <button class="todo__task__btn__del"><img src="/icon_del.svg" alt="del-task"></button> `
        PRIORITY_BLOCKS[i].append(DIV);
        

        ADD.INPUTS[i].value = null;

        DIV.querySelector('.todo__task__btn__check').addEventListener('click', changeStatusTask);
        DIV.querySelector('.todo__task__btn__del').addEventListener('click', deleteTask);
    })
}

function changeStatusTask() {
    const task = this;
    task.classList.toggle('task__done');
}

function deleteTask() {
    const task = this.parentElement;
    task.remove();
}