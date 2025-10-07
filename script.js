document.addEventListener('DOMContentLoaded', function() {

    // Lista com o nome de todas as imagens que irão girar
    // Certifique-se de que os nomes correspondem exatamente aos arquivos na pasta 'img'
    const imagensDaGaleria = [
        "img/carro1.avif",
        "img/carro2.avif",
        "img/carro3.avif",
        "img/carro4.avif",
        "img/carro5.avif",
        "img/carro6.jpeg",
        "img/carro7.jpeg",
        "img/carro8.jpeg",
        "img/carro9.jpeg"
    ];

    // Pega o elemento da imagem no HTML pelo seu ID
    const imagemElemento = document.getElementById('imagem-rotativa');

    // Variável para controlar qual imagem está sendo exibida
    let indiceAtual = 0;

    // Função que troca a imagem
    function girarImagens() {
        // Incrementa o índice para pegar a próxima imagem da lista
        indiceAtual++;

        // Se o índice passar do número de imagens, ele volta para o início (0)
        if (indiceAtual >= imagensDaGaleria.length) {
            indiceAtual = 0;
        }

        // Atualiza o atributo 'src' do elemento da imagem para a próxima imagem
        imagemElemento.src = imagensDaGaleria[indiceAtual];
    }

    // Define um intervalo para chamar a função girarImagens() a cada 5 segundos
    // 5000 milissegundos = 5 segundos
    setInterval(girarImagens, 5000);
});