# Taller Base de Datos

## Integrantes del equipo
- Connie Tatiana Carrillo Bohorquez  
- Juan Camilo Rojas Arenas  
- Kevin Santiago Rivero Rueda  
- Cristian Miguel Pérez Hernández  
- Juan Sebastián Gualdrón Gallo   

**Docente involucrado:**  
Juan Carlos Mariño Morates  

**Campus:** Campuslands  
**Salón:** Artemis  
**Ruta:** NodeJS  
**Ubicación:** Floridablanca  
**Año:** 2025  

---

## Situación Problema
La cuestión que estamos enfrentando es la **escasez de educación sobre bases de datos** y la **complejidad que enfrentan los estudiantes** para asimilar esta teoría, dado que no existen materiales interactivos y pedagógicos adecuados para la instrucción de esta temática.

---

## Levantamiento de Requerimientos
El propósito consiste en:  
**Crear un entorno de aprendizaje educativo interactivo** que promueva la comprensión de bases de datos a través de herramientas visuales, dinámicas y accesibles para aquellos estudiantes que no poseen experiencia previa.

---

## Requerimientos Funcionales
| ID | Nombre | Descripción |
|----|--------|-------------|
| RF01 | Registro de usuario | Permite registro con nombre de usuario, correo y contraseña. |
| RF02 | Inicio de sesión | Autenticación de usuarios registrados. |
| RF03 | Selección de nivel | Selección de niveles de dificultad o progresión. |
| RF04 | Navegación en la plataforma | Controles básicos (izquierda, derecha, salto). |
| RF05 | Desbloqueo progresivo | Niveles bloqueados inicialmente que se desbloquean al avanzar. |
| RF06 | Mini retos educativos | Retos con preguntas o consultas SQL. |
| RF07 | Visualización de base de datos | Mostrar gráficamente estructura de la BD. |
| RF08 | Interacción con objetos | NPCs, cofres, plataformas con información o retos. |
| RF09 | Sistema de puntuación | Puntos o estrellas según el rendimiento. |
| RF10 | Guardado de progreso | Guarda automático o manual del avance. |
| RF11 | Retroalimentación inmediata | Respuesta instantánea correcta/incorrecta. |
| RF12 | Panel de progreso | Mostrar progreso, niveles y puntaje. |
| RF13 | Modo práctica | Sin límite de tiempo para practicar SQL. |
| RF14 | Modo historia | Narrativa de “reparar” una base de datos dañada. |

---

## Requerimientos No Funcionales
| ID | Nombre | Descripción |
|----|--------|-------------|
| RNF01 | Usabilidad | Interfaz intuitiva y amigable. |
| RNF02 | Accesibilidad | Ejecutable en navegadores modernos sin instalaciones. |
| RNF03 | Portabilidad | Compatible con Windows, Linux y MacOS. |
| RNF04 | Rendimiento | Carga en menos de 5 segundos. |
| RNF05 | Escalabilidad | Permite nuevos niveles y funcionalidades fácilmente. |
| RNF06 | Seguridad | Contraseñas cifradas y datos protegidos. |
| RNF07 | Mantenimiento | Código documentado para futuras actualizaciones. |
| RNF08 | Interactividad | Animaciones, sonidos y elementos dinámicos. |
| RNF09 | Retroalimentación visual | Reacciones visuales inmediatas. |
| RNF10 | Disponibilidad | 99% de disponibilidad, excepto mantenimientos. |
| RNF11 | Multiplataforma | Accesible desde desktop y dispositivos móviles. |
| RNF12 | Idioma | Contenido inicial en español, ampliable a otros idiomas. |

---

## Historias de Usuario (con criterios de aceptación)

**Ejemplo:**  

## Historias de Usuario

### RF01 – Registro de usuario
**Actor:** Usuario nuevo  
**Descripción:**  
Como usuario nuevo, quiero registrarme ingresando mi nombre de usuario, correo y contraseña, para poder acceder al entorno educativo personalizado y guardar mi progreso.

**Criterios de aceptación:**
- El nombre de usuario debe ser único.
- Validar formato de correo electrónico.
- Requerir contraseña segura y almacenarla cifrada.

**Restricciones:**
- No registrar dos usuarios con el mismo correo o nombre de usuario.
- La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y un número.

---

### RF02 – Inicio de sesión
**Actor:** Usuario registrado  
**Descripción:**  
Como usuario registrado, quiero iniciar sesión ingresando mi nombre de usuario y contraseña, para acceder a mi cuenta personal y continuar mi progreso educativo.

**Criterios de aceptación:**
- Validar nombre de usuario y contraseña.
- Mostrar mensaje de error si las credenciales son incorrectas.
- Permitir acceso solo a usuarios registrados.

**Restricciones:**
- No se permite inicio de sesión si el usuario no está registrado.
- Contraseña transmitida y almacenada de forma segura y cifrada.

---

### RF03 – Selección de nivel
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero poder seleccionar entre diferentes niveles de dificultad o temática, para avanzar según mi ritmo y conocimiento previo sobre bases de datos.

**Criterios de aceptación:**
- Mostrar claramente los niveles disponibles.
- Permitir seleccionar solo los niveles desbloqueados.
- Cargar el contenido correcto al seleccionar un nivel.

**Restricciones:**
- No acceder a niveles superiores si los anteriores no están completados.
- Los niveles deben estar organizados de forma lógica.

---

### RF04 – Navegación en la plataforma
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero desplazarme por los escenarios utilizando controles básicos (izquierda, derecha y salto), para explorar el entorno educativo de manera intuitiva y dinámica.

**Criterios de aceptación:**
- Movimiento suave a izquierda y derecha.
- Salto al presionar tecla asignada.
- Respuesta sin retraso perceptible.

**Restricciones:**
- Controles compatibles con teclado y dispositivos táctiles.
- No atravesar obstáculos o límites del escenario.

---

### RF05 – Desbloqueo progresivo
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero que los niveles estén inicialmente bloqueados y se desbloqueen al completar los anteriores, para tener una progresión guiada.

**Criterios de aceptación:**
- Marcar visualmente los niveles bloqueados.
- Desbloquear automáticamente el siguiente al completar uno.
- Solo acceder a niveles desbloqueados.

**Restricciones:**
- No alterar el orden de desbloqueo manualmente.
- Guardar los datos de desbloqueo en el perfil del usuario.

---

### RF06 – Mini retos educativos
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero enfrentar mini retos o pruebas dentro del juego, para aplicar mis conocimientos sobre bases de datos y poder continuar avanzando.

**Criterios de aceptación:**
- Presentar retos en momentos clave.
- Validar respuestas y mostrar resultados inmediatos.
- Permitir repetir el reto si no se supera.

**Restricciones:**
- Retos alineados con el nivel actual.
- No avanzar sin completar correctamente el reto.

---

### RF07 – Visualización de base de datos
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero visualizar gráficamente la estructura de una base de datos (tablas, relaciones, etc.), para comprender cómo se organizan y conectan los datos.

**Criterios de aceptación:**
- Desplegar tablas y relaciones de forma clara.
- Permitir interacciones básicas como zoom o selección.
- Actualizar visualización ante cambios de datos.

**Restricciones:**
- Visualización responsiva.
- No permitir edición, solo visualización.

---

### RF08 – Interacción con objetos
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero interactuar con objetos del juego como NPCs, cofres o plataformas, para recibir explicaciones o retos relacionados con teoría de bases de datos.

**Criterios de aceptación:**
- Mostrar información o retos al interactuar.
- Interacción sencilla e intuitiva.
- Información relevante al nivel.

**Restricciones:**
- No interactuar con objetos no programados.
- Textos y retos breves y comprensibles.

---

### RF09 – Sistema de puntuación
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero obtener puntos o estrellas según mi rendimiento, para motivarme a mejorar y avanzar.

**Criterios de aceptación:**
- Registrar puntos por cada reto completado.
- Mostrar puntaje acumulado al finalizar un nivel.
- Guardar puntaje para futuras sesiones.

**Restricciones:**
- No asignar puntos si no se completa el reto.
- Evitar duplicar puntos por un mismo reto.

---

### RF10 – Guardado de progreso
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero que mi progreso se guarde automáticamente o manualmente, para continuar desde el mismo punto después.

**Criterios de aceptación:**
- Guardar automáticamente al finalizar un nivel.
- Opción de guardar manualmente.
- Cargar progreso correctamente al iniciar sesión.

**Restricciones:**
- No guardar sin conexión a la base de datos.
- Guardado rápido sin interrumpir la experiencia.

---

## Historias de Usuario – Requerimientos No Funcionales

### RNF01 – Usabilidad
**Actor:** Estudiante  
**Descripción:**  
Como estudiante sin conocimientos previos en bases de datos, quiero que la interfaz sea intuitiva y amigable, para comprender rápidamente cómo usar la plataforma.

**Criterios de aceptación:**
- Instrucciones claras para cada funcionalidad.
- Botones y opciones comprensibles.
- Navegación sin manuales extensos.

**Restricciones:**
- No usar términos técnicos complejos.
- Diseño consistente.

---

### RNF02 – Accesibilidad
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero usar la plataforma desde mi navegador web sin instalar programas adicionales, para acceder fácilmente desde cualquier lugar.

**Criterios de aceptación:**
- Cargar en los principales navegadores.
- No solicitar instalación de software.
- Acceso mediante dirección web.

**Restricciones:**
- Cumplir estándares web actuales.
- No depender de tecnologías obsoletas.

---

### RNF03 – Portabilidad
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero acceder a la plataforma desde diferentes sistemas operativos, para no estar limitado por el dispositivo.

**Criterios de aceptación:**
- Funcionar en navegadores de distintos sistemas.
- Mismas funcionalidades en todos.
- Sin errores específicos por SO.

**Restricciones:**
- Evitar componentes exclusivos.
- Pruebas en Windows, Linux y MacOS.

---

### RNF04 – Rendimiento
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero que el juego cargue rápidamente, para no perder tiempo y mantenerme motivado.

**Criterios de aceptación:**
- Carga inicial < 5 segundos.
- Imágenes y recursos optimizados.
- Sin pausas o retrasos notorios.

**Restricciones:**
- Evitar archivos pesados innecesarios.
- Mantener rendimiento estable.

---

### RNF05 – Escalabilidad
**Actor:** Administrador de la plataforma  
**Descripción:**  
Como administrador, quiero que la arquitectura permita agregar nuevos niveles, temas o funcionalidades, para ampliar el contenido sin rehacer el sistema.

**Criterios de aceptación:**
- Agregar niveles sin afectar existentes.
- Nuevos temas sin cambios drásticos.
- Mantener rendimiento estable.

**Restricciones:**
- Diseño modular y buenas prácticas.
- Evitar conflictos entre módulos.

---

### RNF06 – Seguridad
**Actor:** Administrador del sistema  
**Descripción:**  
Como administrador, quiero que las contraseñas estén cifradas y los datos personales protegidos, para garantizar seguridad y privacidad.

**Criterios de aceptación:**
- Contraseñas almacenadas cifradas.
- Datos personales inaccesibles a no autorizados.
- Buenas prácticas de seguridad (HTTPS, cifrado en tránsito).

**Restricciones:**
- No exponer datos sensibles en errores o logs.
- Cumplir normativas de protección de datos.

---

### RNF07 – Mantenimiento
**Actor:** Desarrollador  
**Descripción:**  
Como desarrollador, quiero que el código esté documentado, para facilitar mantenimiento y actualizaciones.

**Criterios de aceptación:**
- Comentarios claros en el código.
- Guía técnica o README actualizado.
- Nombres de variables y funciones coherentes.

**Restricciones:**
- No usar comentarios confusos o desactualizados.
- Mantener documentación al día.

---

### RNF08 – Interactividad
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero animaciones suaves, sonidos y elementos dinámicos, para mantenerme interesado mientras aprendo.

**Criterios de aceptación:**
- Animaciones fluidas.
- Sonidos activables/desactivables.
- Elementos dinámicos resaltando información relevante.

**Restricciones:**
- No usar animaciones excesivas.
- Sonidos no intrusivos.

---

### RNF09 – Retroalimentación visual
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero reacciones visuales inmediatas al completar tareas o cometer errores, para sentir motivación y aprender mejor.

**Criterios de aceptación:**
- Efecto visual positivo al completar una tarea.
- Señal visual no frustrante al cometer un error.
- Reacciones visuales claras y consistentes.

**Restricciones:**
- No dificultar lectura con efectos.
- Reacciones breves y no intrusivas.

---

### RNF10 – Disponibilidad
**Actor:** Estudiante  
**Descripción:**  
Como estudiante, quiero que el sistema esté disponible casi todo el tiempo, para acceder a mis actividades cuando lo necesite.

**Criterios de aceptación:**
- Sistema operativo ≥99% del tiempo.
- Notificar mantenimiento programado.
- Resolver interrupciones rápido.

**Restricciones:**
- Mantenimiento en horarios de menor uso.
- Registrar y monitorear actividad y caídas.

---

## Metodología
Se debe especificar la metodología de desarrollo utilizada (por ejemplo, **Scrum** u otra).  
- Roles de equipo definidos.  
- Planificación de sprints y reuniones (planning, daily stand up, retrospectivas).  
- Definición de tareas y entregables.

---

## Evidencia de planteamiento de plataforma de trabajo
- **Repositorio:** (agregar link del repositorio con ramas, roles y commits convencionales).  
- **Videos de reuniones:** (agregar links de sprint planning, daily stand up, retrospectiva).  
- **Tablero Scrum:** Capturas de todas las etapas, con tareas, responsables y tiempos.  
- **Documentación:** Tecnologías usadas y cumplimiento de tareas planteadas.

---

## Conclusiones
- Conclusiones generales del documento.  
- Conclusiones de la reunión de retrospectiva del sprint.

---

> **Nota:**  
> Este README resume el contenido del documento original en un formato estándar para proyectos de software, permitiendo integrarlo directamente en tu repositorio GitHub o similar.

