/**
 * Função que gera a sequência mágica (Fibonacci) com o tamanho especificado
 * @param {number} n - Tamanho da sequência (deve ser ≥ 2)
 * @returns {array} - Array contendo a sequência completa
 */
function preencherLacunas(n) {
    // Validação da entrada
    if (n < 2) {
        throw new Error("O tamanho da sequência deve ser pelo menos 2");
    }

    // Inicializa a sequência com os dois primeiros valores
    const sequencia = [0, 1];
    
    // Preenche as posições seguintes
    for (let i = 2; i < n; i++) {
        // Cada número é a soma dos dois anteriores
        sequencia.push(sequencia[i-1] + sequencia[i-2]);
    }
    
    return sequencia;
}

/**
 * Formata a sequência para exibição no HTML
 * @param {array} sequencia - Array com a sequência numérica
 * @returns {string} - String formatada para exibição
 */
function formatarSequencia(sequencia) {
    return `[${sequencia.join(', ')}]`;
}

// Configuração dos eventos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const solveBtn = document.getElementById('solve-btn');
    const sequenceLengthInput = document.getElementById('sequence-length');
    const resultElement = document.getElementById('result');
    
    // Inicializa o resultado vazio
    resultElement.textContent = "";
    
    // Evento de clique no botão
    solveBtn.addEventListener('click', () => {
        try {
            const n = parseInt(sequenceLengthInput.value);
            
            // Valida o valor de entrada
            if (isNaN(n) || n < 2) {
                resultElement.textContent = "Por favor, insira um número válido ≥ 2";
                resultElement.style.color = "#ff6b6b";
                return;
            }
            
            // Gera a sequência
            const sequencia = preencherLacunas(n);
            
            // Exibe o resultado
            resultElement.textContent = formatarSequencia(sequencia);
            resultElement.style.color = "#f3931b";
            
        } catch (error) {
            resultElement.textContent = error.message;
            resultElement.style.color = "#ff6b6b";
        }
    });
    
    // Evento de tecla Enter no input
    sequenceLengthInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            solveBtn.click();
        }
    });
});