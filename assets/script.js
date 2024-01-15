let bnt = document.querySelector("#enviar")

bnt.onclick = function click(enviar ){
    let enviar = document.getElementById("#enviar").value;

    localStorage.setItem("enviar", enviar);

    window.document.href="tela.html";
    window.onload = function(){
        let = enviar = document.querySelector("#enviar")
    }
}