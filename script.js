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
// ... (mantenha anterior e adicione gráfico:)
const ctx = document.getElementById('chartAgua').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Dia 1', 'Dia 7', 'Dia 14', 'Dia 21', 'Dia 30'],
        datasets: [{
            label: 'Água Manual (L)',
            data: [150, 148, 152, 149, 151],
            borderColor: '#DC143C',
            tension: 0.1
        }, {
            label: 'Nosso Sistema (L)',
            data: [90, 88, 92, 89, 91],
            borderColor: '#228B22',
            tension: 0.1
        }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
});

// No reset, atualize chart se quiser dinamico
