document.addEventListener('DOMContentLoaded', function() {
    const termos = document.getElementById('termos');
    const enviar = document.getElementById('enviar');
    if (termos && enviar) {
        // Habilita/Desabilita o botão Enviar com base no checkbox de Termos
        termos.addEventListener('change', function() { enviar.disabled = !this.checked; });
        
        // Simula o envio do formulário
        enviar.form.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita o envio padrão (recarregamento)
            alert('Formulário enviado com sucesso!');
            enviar.form.reset();
            enviar.disabled = true; // Desabilita o botão após o reset
        });
    }
});

function darkModeToggle() {
    // Alterna a classe dark-mode no 'body' (pois as variáveis globais estão lá)
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Carrega o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});


const botoesCurtir = document.querySelectorAll('.btn-curtir');

botoesCurtir.forEach(botao => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('.contagem');
        let numeroAtual = parseInt(contador.innerText);
        
        if (botao.classList.contains('curtido')) {
            botao.classList.remove('curtido');
            numeroAtual--;
            // CORRIGIDO: Uso de Template Literal (` `)
            botao.innerHTML = `Curtir <span class="contagem">${numeroAtual}</span>`;
        } else {
            botao.classList.add('curtido');
            numeroAtual++;
            // CORRIGIDO: Uso de Template Literal (` `)
            botao.innerHTML = `Curtiu <span class="contagem">${numeroAtual}</span>`;
        }
    });
});
