function copiarTexto() {
    var textoDiv = document.getElementById("texto");
    var textoCopiado = textoDiv.innerText;

    var inputTemporario = document.createElement("input");
    inputTemporario.setAttribute("value", textoCopiado);
    document.body.appendChild(inputTemporario);

    inputTemporario.select();
    document.execCommand("copy");

    document.body.removeChild(inputTemporario);

    let msg = document.getElementById("msg");
    msg.innerHTML = 'Texto copiado!';

    msg.classList.add('texto-copiado');
}

function downloadFile() {
    var filePath = './Currículo.pdf';
    var fileName = 'Currículo.pdf';

    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    
    criaIframe();
    irParaTela('curriculo');
}

function irParaTela(classe) {
    let div = document.getElementById(classe);
    div.scrollIntoView({ behavior: 'smooth' });
}

function criaIframe() {
    let iframe = document.getElementById('iframe');
    if (iframe) {
        iframe.remove()
    } 

    let a = document.createElement('iframe');
    let div = document.getElementById('div-iframe');

    a.src = './Currículo.pdf';
    a.id = 'iframe';
    a.width = '90%';
    a.height = '500px';

    div.appendChild(a);
}

function enviarEmail() {
    var destinatario = document.getElementById("destino").value;
    var assunto = 'Currículo'
    var mensagem = 'Olá, segue em anexo meu currículo.';
    var linkEmail = "mailto:" + destinatario + "?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(mensagem);
    window.location.href = linkEmail;
    alert(`Email enviado para ${destinatario} com sucesso!`)
}  