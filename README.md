



# POkemon Go IVs Name Gen

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

### Símbolos Disponibles
```
⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮
```

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
