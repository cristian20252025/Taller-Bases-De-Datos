 // Estado global de la aplicación
 let currentLevel = 0;
 const completedLevels = new Set();
 let quizStarted = false;
 let quizCompleted = false;
 let userAnswers = {};
 let quizScore = 0;

 // Preguntas del quiz
 const quizQuestions = [
     {
         question: "¿Qué es una base de datos?",
         options: [ "Una herramienta de diseño gráfico", "Un programa de edición de texto", "Un conjunto organizado de datos", "Un sistema operativo" ],
         correct: 2
     },
     {
         question: "¿Cuál es el propósito principal de un DBMS?",
         options: [ "Crear imágenes para redes sociales", "Administrar y gestionar bases de datos", "Navegar por internet", "Traducir lenguajes de programación" ],
         correct: 1
     },
     {
         question: "¿Cuál de los siguientes es un ejemplo de base de datos relacional?",
         options: [ "Firebase", "MySQL", "Google Drive", "Photoshop" ],
         correct: 1
     },
     {
         question: "¿Qué componente almacena varios registros similares?",
         options: [ "Campo", "Tabla", "Atributo", "Clave" ],
         correct: 1
     },
     {
         question: "¿Qué representa una clave primaria?",
         options: [ "Un campo que siempre está vacío", "Un identificador único para cada registro", "Una contraseña para la base de datos", "Una dirección IP" ],
         correct: 1
     },
     {
         question: "¿Cuál de los siguientes es un sistema de gestión de bases de datos (DBMS)?",
         options: [ "Excel", "PostgreSQL", "PowerPoint", "GitHub" ],
         correct: 1
     },
     {
         question: "¿Qué comando SQL se usa para consultar datos?",
         options: [ "SELECT", "PUSH", "IMPORT", "EXECUTE" ],
         correct: 0
     },
     {
         question: "¿Qué es una clave foránea?",
         options: [ "Una columna que guarda archivos", "Un tipo de contraseña", "Un campo que vincula una tabla con otra", "Una tabla de respaldo" ],
         correct: 2
     },
     {
         question: "¿Qué tipo de relación vincula un cliente con múltiples pedidos?",
         options: [ "Muchos a muchos", "Uno a muchos", "Uno a uno", "Circular" ],
         correct: 1
     },
     {
         question: "¿Para qué sirve la normalización?",
         options: [ "Crear contraseñas seguras", "Evitar datos duplicados y mejorar consistencia", "Aumentar el tamaño de las bases", "Hacer backups" ],
         correct: 1
     },
     {
         question: "¿Qué significa CRUD?",
         options: [ "Crear, Leer, Actualizar, Eliminar", "Copiar, Repetir, Usar, Descargar", "Clasificar, Reordenar, Unir, Dividir", "Cargar, Revisar, Usar, Depurar" ],
         correct: 0
     },
     {
         question: "¿Qué representa una entidad en un modelo E-R?",
         options: [ "Un objeto o concepto que se quiere modelar", "Una relación entre dos claves", "Una fila dentro de una tabla", "Un atributo duplicado" ],
         correct: 0
     },
     {
         question: "¿Cuál es la función de un atributo?",
         options: [ "Definir relaciones entre tablas", "Describir características de una entidad", "Controlar el tamaño de la base de datos", "Cifrar los registros" ],
         correct: 1
     },
     {
         question: "¿Qué simboliza una relación en un diagrama E-R?",
         options: [ "Una elipse", "Un rombo", "Un rectángulo", "Un triángulo" ],
         correct: 1
     },
     {
         question: "¿Qué indica la cardinalidad en un modelo E-R?",
         options: [ "El tipo de clave usada", "La cantidad de tablas", "Cuántas instancias de una entidad se relacionan con otra", "El tamaño del atributo" ],
         correct: 2
     },
     {
         question: "¿Qué herramienta gráfica representa el modelo E-R?",
         options: [ "Diagrama de flujo", "Diagrama Entidad-Relación", "Diagrama de Gantt", "Árbol de decisión" ],
         correct: 1
     },
     {
         question: "¿Qué tipo de base de datos es MongoDB?",
         options: [ "Relacional", "No relacional", "Tabular", "Encriptada" ],
         correct: 1
     },
     {
         question: "¿Cuál es la diferencia entre una tabla y un registro?",
         options: [ "Una tabla es una columna, un registro es un título", "Una tabla contiene muchos registros", "Una tabla tiene claves primarias, un registro no", "No hay diferencia" ],
         correct: 1
     },
     {
         question: "¿Qué significa que un dato esté duplicado?",
         options: [ "Que está cifrado", "Que aparece más de una vez sin necesidad", "Que se puede borrar automáticamente", "Que se relaciona con varias claves primarias" ],
         correct: 1
     },
     {
         question: "¿Qué beneficio trae usar claves foráneas correctamente?",
         options: [ "Reducen el tamaño de la base", "Aseguran relaciones correctas entre tablas", "Cifran los datos", "Aumentan la velocidad de conexión" ],
         correct: 1
     }
 ];

  // Función para mostrar un nivel específico
  function showLevel(level) {
    // Ocultar todos los contenedores de contenido
    document.querySelectorAll('.level-content').forEach(el => {
        el.classList.remove('active');
    });

    // Seleccionar y mostrar el contenedor correcto usando su ID
    let activeContentId;
    if (level === 0) {
        activeContentId = 'welcome';
    } else if (level === 'quiz') {
        activeContentId = 'quiz';
    } else if (level === 'results') {
        activeContentId = 'quizResults';
    } else {
        activeContentId = `level${level}`;
    }
    
    const elementToShow = document.getElementById(activeContentId);
    if (elementToShow) {
        elementToShow.classList.add('active');
    }

    currentLevel = level;
}

// Función para completar un nivel
function completeLevel(level) {
    completedLevels.add(level);
    
    const progressPercentage = Math.min((completedLevels.size / 4) * 100, 100);
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
    
    // Habilitar el siguiente botón
    if (level < 4) {
        document.querySelector(`.level-btn.level-${level + 1}`).disabled = false;
        showLevel(level + 1);
    } else {
        document.querySelector('.level-btn.quiz').disabled = false;
        showQuiz();
    }
}

// Función para mostrar el quiz
function showQuiz() {
    showLevel('quiz');
}

 // Función para iniciar el quiz
 function startQuiz() {
    quizStarted = true;
    userAnswers = {}; // Reiniciar respuestas para un nuevo intento
    
    document.getElementById('quizNavigation').style.display = 'none';
    document.getElementById('quizScore').style.display = 'block';
    document.getElementById('scoreValue').textContent = '0';

    const quizContainer = document.getElementById('quizQuestions');
    quizContainer.innerHTML = '';
    
    quizQuestions.forEach((question, index) => {
        const questionHTML = `
            <div class="question-card" id="question-${index}">
                <div class="question-number">Pregunta ${index + 1} de ${quizQuestions.length}</div>
                <div class="question-text">${question.question}</div>
                <div class="options">
                    ${question.options.map((option, optionIndex) => `
                        <div class="option" onclick="selectOption(this, ${index}, ${optionIndex})">
                            ${option}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        quizContainer.innerHTML += questionHTML;
    });
    
    quizContainer.innerHTML += `
        <div class="navigation">
            <button class="nav-btn primary" onclick="submitQuiz()">Enviar Quiz ✅</button>
        </div>
    `;
}

  // Función para seleccionar una opción en el quiz
  function selectOption(selectedElement, questionIndex, optionIndex) {
    const questionCard = document.getElementById(`question-${questionIndex}`);
    questionCard.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    selectedElement.classList.add('selected');
    userAnswers[questionIndex] = optionIndex;
}

 // Función para enviar el quiz y mostrar resultados
 function submitQuiz() {
    if (Object.keys(userAnswers).length !== quizQuestions.length) {
        alert("Por favor, responde todas las preguntas antes de enviar el quiz.");
        return;
    }

    quizCompleted = true;
    let score = 0;
    
    quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    quizScore = score;
    
    const detailedResults = document.getElementById('detailedResults');
    detailedResults.innerHTML = '';
    
    quizQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        const userAnswerText = userAnswers[index] !== undefined ? question.options[userAnswers[index]] : 'No respondida';
        
        const resultHTML = `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="result-question">${index + 1}. ${question.question}</div>
                <p><strong>Tu respuesta:</strong> ${userAnswerText}</p>
                ${!isCorrect ? `<p><strong>Respuesta correcta:</strong> ${question.options[question.correct]}</p>` : ''}
            </div>
        `;
        detailedResults.innerHTML += resultHTML;
    });

    document.getElementById('finalScore').textContent = `Tu puntuación: ${score}/${quizQuestions.length}`;
    
    const performanceComment = document.getElementById('performanceComment');
    if (score === quizQuestions.length) {
        performanceComment.textContent = "¡Excelente! Dominas los conceptos fundamentales de bases de datos.";
    } else if (score >= quizQuestions.length * 0.7) {
        performanceComment.textContent = "¡Buen trabajo! Tienes un buen entendimiento de las bases de datos.";
    } else if (score >= quizQuestions.length * 0.5) {
        performanceComment.textContent = "¡Sigue practicando! Tienes una base pero necesitas reforzar algunos conceptos.";
    } else {
        performanceComment.textContent = "¡Sigue aprendiendo! Repasa los niveles para fortalecer tus conocimientos.";
    }
    
    showLevel('results');
}

// Inicializar la vista cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    showLevel(0);
});