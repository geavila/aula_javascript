function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por cliclar</b>";
}

function redirecionar(){
    //window.open("https://web.digitalinnovation.one");
    window.location.href = "https://web.digitalinnovation.one";
}

function trocar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar (elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
    alert ("PAGINA CARREGADA!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}