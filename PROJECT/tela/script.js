// Obter os elementos do DOM
const abrirPopupBtn = document.getElementById('abrirPopupBtn');
const fecharPopupBtn = document.getElementById('fecharPopupBtn');
const meuPopup = document.getElementById('meuPopup');

// Evento para abrir o popup
abrirPopupBtn.addEventListener('click', () => {
    meuPopup.style.display = 'block'; // Muda para 'block' para mostrar
});

// Evento para fechar o popup
fecharPopupBtn.addEventListener('click', () => {
    meuPopup.style.display = 'none'; // Volta para 'none' para ocultar
});

// Fechar o popup clicando fora do conteúdo (no overlay)
window.addEventListener('click', (event) => {
    if (event.target === meuPopup) {
        meuPopup.style.display = 'none';
    }
});