 document.getElementById('formAdocao').addEventListener('submit', function(event) {
    // Evita o recarregamento padrão da página ao enviar o formulário
    event.preventDefault();

    // Captura os valores digitados
    const nome = document.getElementById('nome').value;
    const animal = document.getElementById('animal').value;

    // Seleciona a div da mensagem de sucesso
    const mensagemSucesso = document.getElementById('mensagemSucesso');

    // Exibe a mensagem personalizada
    mensagemSucesso.style.display = 'block';
    mensagemSucesso.innerHTML = `✓ Obrigado, <strong>${nome}</strong>! Seu formulário para adoção de <strong>${animal}</strong> foi enviado com sucesso. Entraremos em contato via WhatsApp!`;

    // Limpa os campos do formulário
    this.reset();
});
 
 // Seção PIX //
 // Função para copiar a chave PIX para a área de transferência
function copiarPix() {
    // 1. Pega o texto de dentro da tag <span id="chave-pix">
    const textoChave = document.getElementById("chave-pix").innerText;

    // 2. Utiliza a API do navegador para copiar
    navigator.clipboard.writeText(textoChave)
        .then(() => {
            // Seleciona a tag de aviso
            const aviso = document.getElementById("aviso");
            
            // Exibe a mensagem de sucesso
            aviso.style.display = "block";
            
            // Esconde a mensagem após 2.5 segundos (2500ms)
            setTimeout(() => {
                aviso.style.display = "none";
            }, 2500);
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
        });
}