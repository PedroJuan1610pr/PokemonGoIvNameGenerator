



# Números Circulares

🔗 **Página en vivo**: [https://pedrojuan1610pr.github.io/PokemonGoIvNameGenerator/](https://pedrojuan1610pr.github.io/PokemonGoIvNameGenerator/)

Una aplicación web minimalista e intuitiva para convertir números del 0 al 15 en sus símbolos circulados correspondientes (⓪①②③...⑮). Perfecta para compartir estadísticas de Pokémon GO, valores de juego o cualquier combinación numérica de forma visual y atractiva.

## 🎯 Características Principales

- **Conversión Instantánea**: Convierte números (0-15) a símbolos circulares en tiempo real
- **Tres Campos Independientes**: Ingresa hasta tres números diferentes simultáneamente
- **Interfaz Dual**:
  - **Entrada Manual**: Campos de texto con validación y navegación inteligente
  - **Sliders Interactivos**: Menú modal con 3 sliders para ajuste visual preciso
- **Cálculo de Porcentaje**: Calcula automáticamente el porcentaje basado en la suma (máximo 45)
- **Barra de Progreso Visual**: Representación gráfica del porcentaje acumulado
- **Copiar al Portapapeles**: Múltiples opciones de copiado con un solo clic
- **Validación Inteligente**: Verifica que los números estén en el rango válido (0-15)
- **Diseño Dark Mode**: Interfaz oscura moderna y elegante
- **100% Responsivo**: Optimizado para móviles, tablets y escritorio
- **Arquitectura Modular**: HTML, CSS y JavaScript separados para fácil mantenimiento

## 📁 Estructura del Proyecto

```
├── PokemonGoIv.html    # Estructura HTML principal
├── styles.css          # Todos los estilos de la aplicación
├── script.js           # Lógica JavaScript
└── README.md           # Esta documentación
```

## 🚀 Cómo Usar

### Método 1: Entrada Manual

1. **Ingresa los Números**: 
   - Escribe números del 0 al 15 en cualquiera de los tres campos de entrada
   - Los campos aceptan hasta 2 dígitos cada uno
   - La navegación automática te lleva al siguiente campo al completar uno

2. **Visualiza los Resultados**:
   - Los símbolos circulares se actualizan instantáneamente
   - El porcentaje se calcula automáticamente (suma/45 × 100)
   - La barra de progreso refleja visualmente el porcentaje

### Método 2: Sliders Interactivos

1. **Abre el Menú de Sliders**:
   - Haz clic en el botón **☰ Sliders**
   - Se abrirá un modal con 3 sliders interactivos

2. **Ajusta los Valores**:
   - Mueve cada slider de 0 a 15
   - La barra se llena progresivamente con colores dinámicos:
     - 🟡 **Amarillo/Naranja** (valores 0-14)
     - 🔴 **Rojo** (valor máximo 15)
   - El título del modal muestra en tiempo real los símbolos y porcentaje (ej: "⑮⑭⑬ 93%")
   - Líneas divisorias marcan las secciones baja/media/alta (0-5, 6-10, 11-15)

3. **Aplica o Cancela**:
   - **Aplicar**: Transfiere los valores de los sliders a los campos principales
   - **Cancelar**: Cierra el modal sin cambios
   - **Click fuera**: También cierra el modal

### Copiar Resultados

- **Copiar números**: Copia solo los símbolos circulares (ej: ⑮⑭⑬)
- **Copiar números + %**: Copia símbolos y porcentaje (ej: ⑮⑭⑬ 93%)
- Aparecerá una notificación **"Copiado ✔"** confirmando la acción

### Borrar

- Usa el botón **Borrar** para limpiar todos los campos y reiniciar

## 💡 Casos de Uso

- **Pokémon GO**: Representar IVs (valores individuales) de Pokémon de forma visual
  - 15/15/15 = 100% (Perfect IV) ⑮⑮⑮ 🔴
  - 0/15/15 = 67% ⓪⑮⑮
- **Videojuegos**: Mostrar estadísticas, niveles o atributos
- **Redes Sociales**: Compartir puntuaciones o rankings de forma atractiva
- **Documentación**: Enumerar pasos o secciones con estilo
- **Educación**: Crear material didáctico visual

## 🎨 Diseño

### Paleta de Colores
- **Fondo**: Gradiente oscuro (#020617 → #0f172a)
- **Tarjeta**: Negro profundo (#020617)
- **Bordes**: Gris slate (#1e293b)
- **Acento**: Azul cielo (#38bdf8)
- **Texto**: Gris claro (#e5e7eb)
- **Error**: Rojo suave (#ef4444 / #f87171)
- **Sliders**:
  - Amarillo/Naranja (#fbbf24 → #f59e0b) para valores 1-14
  - Rojo (#ef4444 → #dc2626) para valor máximo 15

### Efectos Interactivos
- **Animación al enfocar**: Los inputs se escalan ligeramente (1.08x) con borde azul
- **Efecto "bump"**: Los símbolos se agrandan momentáneamente al cambiar
- **Animación de error**: Sacudida horizontal cuando se ingresa un valor inválido
- **Sliders suaves**: Transiciones fluidas en el llenado de barras (0.15s)
- **Cambio de color**: Transición suave amarillo → rojo al alcanzar 15 (0.3s)
- **Toast animado**: Notificación deslizante desde abajo al copiar

## 🎚️ Características de los Sliders

### Diseño Minimalista
- **Sin thumb visible**: Diseño limpio sin selector circular tradicional
- **Barra de progreso**: Se llena conforme mueves el slider
- **Bordes redondeados**: Estética moderna y pulida
- **Marcas divisorias**: 2 líneas verticales dividen en 3 secciones (0-5, 6-10, 11-15)

### Interactividad
- **Actualización en tiempo real**: Valor numérico y barra se sincronizan al instante
- **Vista previa dinámica**: El título muestra símbolos y porcentaje mientras ajustas
- **Sincronización bidireccional**: Los sliders cargan los valores actuales de los campos
- **Touch-friendly**: Optimizado para pantallas táctiles móviles

### Indicadores Visuales
- **Valor numérico**: Esquina superior derecha de cada slider
- **Código de colores**:
  - Valores 1-14: Gradiente cálido amarillo-naranja
  - Valor 15: Gradiente rojo intenso (indica perfección)
  - Valor 0: Barra vacía (gris oscuro)

## 📱 Características Técnicas

### Validación
- **Rango**: Solo acepta números entre 0 y 15
- **Solo números**: Los caracteres no numéricos se filtran automáticamente
- **Feedback visual**: Borde rojo y mensaje de error para valores inválidos
- **Deshabilitar botones**: Los botones de copiar se deshabilitan si hay errores

### Navegación
- **Auto-focus**: Avanza automáticamente al siguiente campo al completar
- **Backspace inteligente**: Retrocede al campo anterior si está vacío
- **Modal overlay**: Click fuera del modal para cerrar
- **Accesibilidad**: Labels semánticas y navegación por teclado

### Símbolos Disponibles
```
⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮
```

## 💻 Tecnologías

- **HTML5**: Estructura semántica moderna
- **CSS3**: 
  - Variables CSS personalizadas
  - Flexbox y Grid Layout
  - Animaciones y transiciones suaves
  - Gradientes lineales
  - Input range personalizado (webkit/moz)
- **JavaScript Vanilla**: 
  - Sin dependencias externas
  - Código modular y mantenible
  - Event listeners eficientes
  - Manipulación DOM nativa
- **API Clipboard**: Para funcionalidad de copiado nativa del navegador
- **Responsive Design**: Media queries y unidades relativas

## 🔧 Instalación y Uso

### Opción 1: Descarga Local
1. Descarga los 3 archivos:
   - `PokemonGoIv.html`
   - `styles.css`
   - `script.js`
2. Asegúrate de que estén en el mismo directorio
3. Abre `PokemonGoIv.html` en cualquier navegador moderno
4. ¡Listo para usar! No requiere instalación ni servidor

### Opción 2: Hospedaje Web
1. Sube los 3 archivos a tu servidor web manteniendo la estructura
2. Accede desde la URL correspondiente
3. Compatible con GitHub Pages, Netlify, Vercel, etc.

### Requisitos
- Navegador moderno con soporte para ES6+
- JavaScript habilitado
- (Opcional) HTTPS para funcionalidad de portapapeles en producción

## 📊 Cálculo del Porcentaje

```javascript
porcentaje = Math.round((suma de valores / 45) × 100)
```

**Ejemplo**:
- Números ingresados: 15, 14, 13
- Suma: 15 + 14 + 13 = 42
- Porcentaje: (42 / 45) × 100 = 93.33% ≈ **93%**
- Resultado: **⑮⑭⑬ 93%**

**Casos especiales**:
- Perfecto: 15 + 15 + 15 = **⑮⑮⑮ 100%** 🔴
- Mínimo: 0 + 0 + 0 = **⓪⓪⓪ 0%**
- Medio: 7 + 8 + 7 = **⑦⑧⑦ 49%**

## 🌐 Compatibilidad

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Opera** 76+
- ✅ **Navegadores móviles** (iOS Safari, Chrome Android)

### Características específicas del navegador
- Input range personalizado (Chrome/Firefox)
- Clipboard API (requiere contexto seguro en producción)
- CSS Grid y Flexbox (ampliamente soportado)

## ⌨️ Atajos de Teclado

- **Tab**: Navegar entre campos
- **Shift + Tab**: Navegar hacia atrás
- **Enter**: (En el último campo) completar entrada
- **Backspace**: (En campo vacío) retroceder al anterior
- **Números 0-9**: Entrada directa
- **Escape**: Cerrar modal de sliders (si está abierto)

## 🎯 Características de UX

- **Sin configuración**: Funciona inmediatamente sin ajustes
- **Feedback instantáneo**: Respuesta visual inmediata a cada acción
- **Prevención de errores**: Validación en tiempo real
- **Notificaciones claras**: Toast con confirmación de copiado
- **Mobile-first**: Optimizado para pantallas táctiles
- **Dual input**: Elige entre tipeo manual o sliders visuales
- **Vista previa en vivo**: Ve los cambios antes de aplicarlos

## 📄 Especificaciones Técnicas

- **HTML**: ~100 líneas
- **CSS**: ~350 líneas
- **JavaScript**: ~120 líneas
- **Tamaño total**: ~15KB (sin comprimir)
- **Dependencias**: Ninguna
- **Compatibilidad offline**: Funciona sin conexión a internet
- **Performance**: Renderizado < 16ms (60fps)
- **Accesibilidad**: Navegación por teclado completa

## 🚀 Ejemplo de Uso (Pokémon GO)

**Ejemplo 1: IV Perfecto**
```
Entrada:    15  |  15  |  15
↓
Salida:     ⑮⑮⑮
Porcentaje: 100%
Progreso:   [████████████████████] 100%
Color:      🔴 Rojo (máximo)
```

**Ejemplo 2: IV Alto**
```
Entrada:    14  |  15  |  13
↓
Salida:     ⑭⑮⑬
Porcentaje: 93%
Progreso:   [██████████████████░░] 93%
Color:      🟡 Amarillo/Naranja
```

**Ejemplo 3: IV Bajo**
```
Entrada:    2   |  5   |  3
↓
Salida:     ②⑤③
Porcentaje: 22%
Progreso:   [████░░░░░░░░░░░░░░░░] 22%
Color:      🟡 Amarillo/Naranja
```

## 📝 Notas Importantes

- Los valores inválidos (>15) muestran error y deshabilitan el copiado
- El porcentaje se calcula asumiendo que 45 es el 100% (15+15+15)
- Los campos vacíos se interpretan como 0 (⓪)
- El portapapeles requiere HTTPS o localhost en navegadores modernos
- Los sliders van de 0 a 15 con pasos de 1 (16 valores posibles)
- El color rojo en sliders solo aparece exactamente en el valor 15

## 🛠️ Desarrollo y Personalización

### Modificar Colores
Edita las variables en `styles.css`:
```css
/* Slider colors */
.slider-fill { background: linear-gradient(90deg, #fbbf24, #f59e0b); }
.slider-fill.max-value { background: linear-gradient(90deg, #ef4444, #dc2626); }
```

### Cambiar Rango
Edita el máximo en `script.js`:
```javascript
// Cambiar de 15 a otro valor
const percentage = (value / 15) * 100; // Modificar el denominador
```

### Añadir Más Campos
1. Agrega inputs en `PokemonGoIv.html`
2. Actualiza el array `inputs` en `script.js`
3. Añade sliders correspondientes en el modal

## 🤝 Contribuciones

Si encuentras algún error o deseas agregar mejoras:
1. Reporta issues con detalles específicos
2. Sugiere nuevas características
3. Comparte feedback sobre la experiencia de usuario
4. Mantén el código limpio y documentado

## 📜 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

---

**¿Dudas o sugerencias?** Esta herramienta está diseñada para hacer tu vida más fácil al compartir valores de IVs de Pokémon GO o cualquier otra estadística. Simple, rápida y efectiva. ✨🎮
