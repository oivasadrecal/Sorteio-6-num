function sortearNumeros() {
    const numeros = [];
    while (numeros.length < 6) {
        const numero = Math.floor(Math.random() * 60) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    document.getElementById('resultado').textContent = `Números sorteados: ${numeros.join(', ')}`;
}
