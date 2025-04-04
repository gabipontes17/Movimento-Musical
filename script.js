document.addEventListener("DOMContentLoaded", function () {
    const btnAumentar = document.getElementById("aumentar-fonte");
    const btnDiminuir = document.getElementById("diminuir-fonte");

    let tamanhoFonteAtual = 100; // 100% = 1rem

    btnAumentar.addEventListener("click", function () {
        if (tamanhoFonteAtual < 150) {
            tamanhoFonteAtual += 10;
            document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
        }
    });

    btnDiminuir.addEventListener("click", function () {
        if (tamanhoFonteAtual > 70) {
            tamanhoFonteAtual -= 10;
            document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
        }
    });
});