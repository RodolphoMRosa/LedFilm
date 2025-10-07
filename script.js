document.addEventListener('DOMContentLoaded', function() {

    const imagensDaGaleria = [
        "img/carro1.avif",
        "img/carro2.jpeg",
        "img/carro3.jpeg",
        "img/carro4.jpeg",
        "img/carro5.jpeg",
        "img/carro6.avif",
        "img/carro7.avif"
    ];

    const imagemElemento = document.getElementById('imagem-rotativa');

    let indiceAtual = 0;
  
    function girarImagens() {
     
        indiceAtual++;

        if (indiceAtual >= imagensDaGaleria.length) {
            indiceAtual = 0;
        }

        imagemElemento.src = imagensDaGaleria[indiceAtual];
    }

    setInterval(girarImagens, 4000);
});