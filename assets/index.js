// Pega a modal
var modal = document.getElementById("myModal");

// Pega a imagem e o caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Adiciona o evento de clique nas imagens do portfólio
document.querySelectorAll('#id_portfolio img').forEach(img => {
    img.addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});
document.querySelectorAll('.img-bio img').forEach(img => {
    img.addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Pega o elemento de fechar
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar em (x), fecha a modal
span.onclick = function() { 
    modal.style.display = "none";
}

