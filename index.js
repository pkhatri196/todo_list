const addButton= document.querySelector('.addButton');
var input=   document.querySelector('.input');
const container= document.querySelector('.container');

class item{
    constructor(itemName){
        //create the item Div
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input=document.createElement('input');
        input.value=itemName;
        input.disabled=true;
        input.classList.add('item_input');
        input.type="text";

        let itemBox=  document.createElement('div');
        itemBox.classList.add('item');

        let doneButton=  document.createElement('span');
        doneButton.innerHTML='<i class="fa-solid fa-check"></i>';
        doneButton.classList.add('doneButton');

        let editButton=  document.createElement('span');
        editButton.innerHTML='<i class="fa-regular fa-pen-to-square"></i>';
        editButton.classList.add('editButton');

        let removeButton=  document.createElement('span');
        removeButton.innerHTML='<i class="fa-solid fa-trash"></i>';
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(doneButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',() => this.edit(input));

        doneButton.addEventListener('click',() => this.done(input));
        
        removeButton.addEventListener('click',() => this.remove(itemBox));
    }

    edit(input){
       input.disabled=!input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
    done(input){
           if(input.style.textDecoration=='line-through')
          input.style.textDecoration='none';
          else
          input.style.textDecoration='line-through';
    }
}

function check(){
    if(input.value!=""){
        new item(input.value);
        input.value="";
    }
}

addButton.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
    if(e.which==13){
        check();
    }
})