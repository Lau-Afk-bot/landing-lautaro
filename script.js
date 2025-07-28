function responder(pregunta) {
    const respuestas = {
        '¿Cómo estás?': '¡Estoy genial! ¿Y tú?',
        '¿Qué puedes hacer?': 'Puedo ayudarte con cálculos y responder preguntas.',
        '¿Cuál es tu nombre?': 'Soy tu asistente virtual, creado por Lautaro.'
    };

    document.getElementById("mensaje-bot").textContent = respuestas[pregunta] || "Lo siento, no entiendo esa pregunta.";
}

function calcular(operacion) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    let resultado = 0;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, ingresa dos números válidos.");
        return;
    }

    switch (operacion) {
        case "sumar":
            resultado = n1 + n2;
            break;
        case "restar":
            resultado = n1 - n2;
            break;
        case "multiplicar":
            resultado = n1 * n2;
            break;
        case "dividir":
            if (n2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            resultado = n1 / n2;
            break;
    }

    document.getElementById("resultado").textContent = resultado;
}
