document.addEventListener('DOMContentLoaded', function() {

    const modalContainer = document.getElementById('modal-container');
    const modalCorpo = document.getElementById('modal-corpo');
    const btnFecharModal = document.querySelector('.modal-fechar');
    const menuLinks = document.querySelectorAll('.menu-principal a');

    const imagensDaGaleria = [
        "img/carro1.avif",
        "img/carro2.jpeg",
        "img/carro3.jpeg",
        "img/carro4.jpeg",
        "img/carro5.jpeg",
        "img/carro6.avif",
        "img/carro7.avif"
    ];

    let indiceAtual = 0;

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const secaoId = this.getAttribute('href'); 

            if (secaoId === '#trabalhos_recentes') {
                indiceAtual = 0;
            }

            const secaoConteudo = document.querySelector(secaoId).innerHTML;
            modalCorpo.innerHTML = secaoConteudo; 
            modalContainer.classList.remove('modal-escondido');
            modalContainer.classList.add('modal-visivel');
        });
    });

    function fecharModal() {
        modalContainer.classList.add('modal-escondido');
        modalContainer.classList.remove('modal-visivel');
        modalCorpo.innerHTML = ''; 
    }

    btnFecharModal.addEventListener('click', fecharModal);

    window.addEventListener('click', function(event) {
        if (event.target == modalContainer) {
            fecharModal();
        }
    });

    document.addEventListener('click', function(event) {
        
        const targetId = event.target.id;
        const isInsideModal = event.target.closest('#modal-container');

        if ((targetId === 'btn-proximo' || targetId === 'btn-anterior') && isInsideModal) {
            
            const galeriaContainer = event.target.closest('#galeria-container');
            const imagemElemento = galeriaContainer.querySelector('#imagem-galeria');

            if (targetId === 'btn-proximo') {
                indiceAtual++;
                if (indiceAtual >= imagensDaGaleria.length) {
                    indiceAtual = 0;
                }
            } else {
                indiceAtual--;
                if (indiceAtual < 0) {
                    indiceAtual = imagensDaGaleria.length - 1;
                }
            }
            imagemElemento.src = imagensDaGaleria[indiceAtual];
        }
    });
});