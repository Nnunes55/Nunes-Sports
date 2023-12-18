function validateForm(){
    var Nome = document.getElementById("Nome").value;
    var Codigo = document.getElementById("Codigo").value;
    var Descricao = document.getElementById("Descricao").value;
    var Preco = document.getElementById("Preco").value;

    if(Nome == ""){
        alert("Nome é obrigatório!");
        return false;
    }
    if(Codigo == ""){
        alert("Código é obrigatório!");
        return false;
    }
    else if(Codigo < 0){
        alert("O Código deve ser maior que zero!")
    }
    if(Descricao == ""){
        alert("Descrição é obrigatório!");
        return false;
    }
    if(Preco == ""){
        alert("Preço é obrigatório!");
        return false;
    }
    else if(Preco < 0){
        alert("O valor do preço deve ser maior que zero!")
    }
    return true;
}

function showData(){
    var listaPessoas;
    if(localStorage.getItem("listaPessoas") == null){
        listaPessoas = [];
    }else{
        listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));
    }

    var html = "";

    listaPessoas.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.Nome + "</td>";
        html += "<td>" + element.Codigo + "</td>";
        html += "<td>" + element.Descricao + "</td>";
        html += "<td>" + element.Preco + "</td>";
        html += '<td><button onclick="deleteData('+ 
        index +
        ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + 
        index + 
        ')" class="btn btn-warning m-2">Edit</button></td>';
        html +="</tr>"
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData(){
    if(validateForm() == true){
        var Nome = document.getElementById("Nome").value;
        var Codigo = document.getElementById("Codigo").value;
        var Descricao = document.getElementById("Descricao").value;
        var Preco = document.getElementById("Preco").value;

        var listaPessoas;
    if(localStorage.getItem("listaPessoas") == null){
        listaPessoas = [];
    }else{
        listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));
    }

    listaPessoas.push({
        Nome: Nome,
        Codigo: Codigo,
        Descricao: Descricao,
        Preco: Preco,});

        localStorage.setItem
    }
}