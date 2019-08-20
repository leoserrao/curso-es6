class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(data);
    }
}

class TodosList extends List{
    constructor(){
        super();

        this.usuario = 'Leo';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodosList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();