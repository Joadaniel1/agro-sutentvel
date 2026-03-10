document.addEventListener('DOMContentLoaded', function() {
    const umidadeSlider = document.getElementById('umidade');
    const valorSpan = document.getElementById('valor');
    const statusDiv = document.getElementById('status');
    const aguaDiv = document.getElementById('agua');
    const tempoDiv = document.getElementById('tempo');
    const resetBtn = document.getElementById('reset');

    let aguaUsada = 0;
    let dias = 0;
    let intervalo;

    function atualizarSimulacao() {
        const umidade = parseInt(umidadeSlider.value);
        valorSpan.textContent = umidade + '%';

        if (umidade < 30) {
            statusDiv.textContent = '🚿 IRRIGANDO! 💧';
            statusDiv.className = 'vermelho';
            aguaUsada += Math.random() * 2 + 1; // Simula gasto variável
            aguaDiv.textContent = 'Água gasta: ' + Math.round(aguaUsada * 10) / 10 + ' L';
        } else {
            statusDiv.textContent = '✅ Umidade OK - Sem irrigação';
            statusDiv.className = 'verde';
        }
    }

    umidadeSlider.addEventListener('input', atualizarSimulacao);

    // Simulação automática de tempo
    intervalo = setInterval(() => {
        dias++;
        tempoDiv.textContent = 'Tempo simulado: ' + dias + ' dias';
        if (dias % 5 === 0) { // Rega periódica simulada
            aguaUsada += 5;
            aguaDiv.textContent = 'Água gasta: ' + Math.round(aguaUsada * 10) / 10 + ' L';
        }
    }, 5000); // 5s = 1 dia simulado

    resetBtn.addEventListener('click', () => {
        clearInterval(intervalo);
        aguaUsada = 0;
        dias = 0;
        umidadeSlider.value = 50;
        valorSpan.textContent = '50%';
        statusDiv.textContent = 'Status: Resetado';
        statusDiv.className = '';
        aguaDiv.textContent = 'Água gasta: 0 L';
        tempoDiv.textContent = 'Tempo: 0 dias';
        intervalo = setInterval(arguments.callee, 5000); // Reinicia
    });

    atualizarSimulacao();
});
