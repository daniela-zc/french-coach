# French Coach — auditoría para publicación pública

Fecha: 2026-09-01

## Identidad confirmada

- Nombre público de desarrolladora: `danieazc`
- Correo público de soporte: `danieazc@gmail.com`
- Cuenta de GitHub: `daniela-zc`
- URL de perfil: `https://github.com/daniela-zc`
- Nombre del plugin: `French Coach`
- Identificador técnico: `french-coach`
- Tipo de presentación: `Skills only`
- Categoría principal: `Education`
- Disponibilidad prevista: todos los países y regiones admitidos por el portal

## Resultado de la auditoría inicial

El plugin tiene una arquitectura apropiada para una presentación skills-only. No contiene servidor MCP, autenticación, conectores, hooks ni código ejecutable. Su alcance es educativo: corrección, conversación, traducción, explicación y ejercicios de francés.

## Aspectos sólidos

- Propósito claramente delimitado.
- Activación descrita mediante casos de uso concretos.
- Prioriza conservar el significado del usuario.
- Distingue errores obligatorios de mejoras estilísticas opcionales.
- Evita corregir como erróneas frases que ya son naturales.
- Incluye modos de conversación, traducción, explicación, ejercicios y revisión.
- No recopila datos mediante infraestructura propia.
- No necesita credenciales ni permisos externos.

## Cambios necesarios antes de enviar

1. Revisar el nombre y la descripción para evitar promesas absolutas de dominio lingüístico.
2. Añadir límites claros: no certifica nivel, no sustituye docencia acreditada y puede cometer errores.
3. Preparar la ficha pública y los prompts iniciales.
4. Preparar cinco pruebas positivas y tres negativas.
5. Crear logo y recursos visuales.
6. Publicar sitio, soporte, política de privacidad y términos.
7. Cambiar la versión a `1.0.0` solamente cuando todos los materiales estén aprobados.
8. Ejecutar la validación final y generar el paquete de envío.

## Riesgos y mitigaciones

### Correcciones excesivas

Riesgo: presentar preferencias estilísticas como errores.

Mitigación: conservar la distinción entre incorrecto, comprensible, natural y nativo; exigir que las alternativas opcionales se identifiquen como estilo.

### Cambio de intención

Riesgo: naturalizar una frase alterando su significado, tono o registro.

Mitigación: mantener la prioridad explícita de preservar significado, tono y registro antes de reescribir.

### Inferencias sobre identidad

Riesgo: asumir género u otros datos personales para realizar concordancias.

Mitigación: evitar asumirlos y presentar variantes solamente cuando resulten relevantes.

### Dependencia educativa

Riesgo: que el usuario interprete la respuesta como certificación definitiva.

Mitigación: explicar en la ficha y los términos que es una herramienta de práctica y que sus respuestas pueden contener errores.

### Privacidad

Riesgo: que los usuarios compartan información personal dentro de ejemplos o conversaciones.

Mitigación: recomendar no incluir información sensible y aclarar que la desarrolladora no opera un servidor propio ni recibe directamente las conversaciones.

## Veredicto

Preparación técnica inicial: **apta con cambios menores**.

El trabajo principal restante corresponde a materiales de publicación, pruebas, presencia web, identidad visual y verificación en OpenAI Platform.
