const manipulaBotao = () => {
    const texto = document.getElementById('senha').value;
    if (hex_md5(texto) === '480c95d6e05c7f1c8b0fd2561d50da17') {
        sessionStorage.setItem('logado', 'sim');
        window.location.href = "home.html"; // Redireciona para home.html após login bem-sucedido
    } else {
        alert('Você errou a senha');
    }
};

document.getElementById('botao').onclick = manipulaBotao;



// Verifica se o usuário já está logado
if (sessionStorage.getItem('logado')) {
    window.location.href = "home.html"; // Redireciona para home.html se já estiver logado
}
