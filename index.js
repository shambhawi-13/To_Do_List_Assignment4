var todo=document.getElementById("todo");
var add=document.getElementById("add");
var inp=document.getElementById("inp");
add.onclick= items;

window.onload = function x(){
    if(localStorage.getItem('list')){
        todo.innerHTML = localStorage.getItem('list')
    }
}

function items(){
    if(inp.value.length >0){
        var a=document.createElement('li');
        a.classList.add("li_items");
        todo.appendChild(a);
        a.innerHTML='<span class="spn">'+inp.value +'</span>'+ 
            '<button class="td" id="tick"><i class="fa fa-check"></i></button>' + 
            '<button class="td" id="dlt"><i class="fa fa-trash-o"></i></button>';

        localStorage.setItem('list', todo.innerHTML)
        console.log(todo.innerHTML);
        inp.value='';
        inp.focus();
    }
    else{   alert("INPUT FIELD CAN NOT BE EMPTY")}
}

document.addEventListener('click',function(e){
    if(e.target && e.target.id === 'tick'){
        e.target.parentNode.classList.toggle('line');
        localStorage.setItem('list', todo.innerHTML)
    }

    if(e.target.id === 'dlt'){
        e.target.parentNode.remove();
        localStorage.setItem('list', todo.innerHTML)
    }
});