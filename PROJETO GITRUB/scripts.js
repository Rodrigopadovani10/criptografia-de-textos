function criptografar() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = outputText;
}

function descriptografar() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = outputText;
}

function copiarTexto() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}

// Mensagem a ser descriptografada
document.addEventListener("DOMContentLoaded", function () {
    let mensagemSecreta = "pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!";
    document.getElementById("inputText").value = mensagemSecreta;
});
