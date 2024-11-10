$(document).ready(() => {

    $('header button').click(() => {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(() => {
        $('form').slideUp();
    })

    $('form').on('submit', (e) => {
        e.preventDefault();
        const enderecoNovaImgem = $('#endereco-nova-imagem').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImgem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoNovaImgem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).fadeIn(1000);
        $(novoItem).appendTo('ul')
        $('#endereco-nova-imagem').val('')
    })
})