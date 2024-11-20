function gerarLink() {
    const numeroTelefone = document.getElementById('telefone').value;
    const numeroFormatado = numeroTelefone.replace(/\D/g, '');  // Remove caracteres não numéricos

    if (numeroFormatado.length === 0) {
        alert("Por favor, insira um número de telefone válido.");
        return;
    }

    const linkWhatsApp = `https://wa.me/55${numeroFormatado}`;
    document.getElementById('resultado').innerHTML = 
        `<a href="${linkWhatsApp}" target="_blank">Clique aqui para abrir o WhatsApp</a>`;

    // Exibe o botão de copiar
    document.getElementById('copiar').style.display = 'inline-block';

    // Armazena o link gerado para ser copiado
    document.getElementById('copiar').dataset.link = linkWhatsApp;

    // Limpa o alerta, se houver
    document.getElementById('alerta').style.display = 'none';
}

function copiarLink() {
    const link = document.getElementById('copiar').dataset.link;
    navigator.clipboard.writeText(link).then(function() {
        document.getElementById('alerta').innerText = 'Link copiado para a área de transferência!';
        document.getElementById('alerta').style.display = 'block';
    }).catch(function(err) {
        alert('Erro ao copiar o link: ' + err);
    });
}

