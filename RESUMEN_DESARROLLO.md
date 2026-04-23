# 📋 RESUMEN TÉCNICO COMPLETO - Lords Mobile Guide Hub v1.2

Este documento contiene la especificación técnica completa necesaria para replicar, clonar o mantener la plataforma unificada desde cero.

---

## 🏗️ 1. VISIÓN GENERAL Y ARQUITECTURA

**Plataforma:** PWA Estática (Single Source of Truth en el raíz).  
**Tecnologías:** HTML5, CSS3 (Glassmorphism, Flexbox, Grid), JavaScript Vanilla (ES6+).  
**Estructura Unificada:**
```text
/lords-mobile-guide/
├── index.html              # Hub Principal
├── index.css               # Sistema de Diseño Global
├── manifest.json           # Configuración PWA (Instalable)
├── README.md               # Documentación de Usuario
├── RESUMEN_DESARROLLO.md   # [ESTE ARCHIVO]
├── img/                    # Activos del Hub (Logo, Fondo, Botones)
│
├── /fortalezas/            # Proyecto: Analizador de Rally
│     ├── index.html
│     ├── app.js            # Lógica de combate y bases de datos
│     ├── styles.css
│     └── /img/             # Héroes, Líderes y Familiars
│
└── /caceria/               # Proyecto: Guía de Cacería
      ├── index.html        # Aplicación auto-contenida
      └── /img/             # Monstruos y Héroes de Cacería
```

---

## 🎨 2. SISTEMA DE DISEÑO (Design Tokens)

**Tipografía:** `Outfit` (vía Google Fonts) para el Hub; `Cinzel` y `Roboto` para Fortalezas.

**Paleta de Colores (Hub):**
- `--primary-gold`: `#ffcc33` (Highlights y bordes)
- `--accent-blue`: `#00d2ff` (Subtítulos y detalles)
- `--bg-dark`: `#0a0a12` (Fondo base)
- `--card-bg`: `rgba(20, 20, 35, 0.7)` (Efecto Glass)
- `--glass-border`: `rgba(255, 255, 255, 0.1)`

**Efectos:**
- **Glassmorphism:** `backdrop-filter: blur(12px);`
- **Zoom de Iconos:** 250% en Cacería para resaltar personajes.
- **Animaciones:** `fadeInDown` y `fadeInUp` con retardos secuenciales.

---

## 🛡️ 3. ANALIZADOR DE FORTALEZAS (Detalles Técnicos)

### 3.1 Lógica de Combate (`app.js`)
1. **Sistema de Counters:**
   - Infantería ← Caballería
   - Caballería ← Artillería
   - Artillería ← Infantería
2. **Algoritmo de Composición:**
   - **Unitropa:** Si la segunda tropa enemiga es < 20% del total. Envía 95% counter + 5% asedio (Nivel 5+).
   - **Bitropa (Mixto):** Si la segunda tropa es ≥ 20%. Proporción balanceada según pesos, restando el 5% de asedio del total disponible antes de repartir entre tropa principal y secundaria para evitar errores de redondeo.
   - **Cebo (Cushion) Dinámico:** 
       - F1-F4: Envío fijo de 4 tropas de cada tipo NO principal.
       - F5-F6: Escalado al **0.1% del rally** para absorber habilidades de familiares enemigos (ej. Pyris).
       - **Lógica de Batallones:** Todas las cantidades de cebo se redondean al **múltiplo de 4 superior** para asegurar eficiencia en los grupos de combate del juego.
3. **Influencia de Líderes:** Cada líder seleccionado añade un +25% de peso al tipo de tropa correspondiente en el cálculo de poder. El primer líder seleccionado se marca como **Capitán** (👑), determinando la falange enemiga probable.
4. **Formaciones:** Sugiere Falange y Cuña posicionando la tropa counter en la fila trasera (Detrás).
5. **Redondeo "k":** Las cantidades finales se redondean al millar más cercano (ej: 153.5k -> 154k) para facilitar el ingreso manual en el juego.
6. **Tips Estratégicos 💡:** Sistema de modal informativo con requisitos de estadísticas (ATQ/PS), consejos de gestión de gremio y el **Protocolo de Prueba y Error** (atacar, analizar reporte y ajustar formación).

### 3.2 Formateo de Inputs
- **K/M System:** Los campos de texto aceptan y muestran sufijos (ej: `2.5M`, `500k`). Se procesa mediante `parseFormatted` y se muestra en `blur`.

---

## 🐉 4. GUÍA DE CACERÍA (Detalles Técnicos)

### 4.1 Base de Datos (`MONSTERS_DATA`)
Estructura JSON embebida en `caceria/index.html`:
```javascript
{
  "name": "Nombre Monstruo",
  "image": "img/monstruos/archivo.webp",
  "teams": {
    "f2p": { "level1-3": [[...]], "level4": [[...]], "level5": [[...]] },
    "p2p": { ... }
  },
  "dropRates": [ { "item": "...", "percent": "3.00%", "rarity": "Común" } ]
}
```

### 4.2 Funcionalidades PWA
- **Persistencia:** `localStorage.setItem('lordsmobile_custom_teams', ...)`
- **Navegación:** Modificada para saltar la landing interna e ir directo a la cuadrícula de monstruos (`showMonstersList()` al cargar).
- **Import/Export:** Manejo de archivos JSON para respaldar equipos personalizados.

---

## 📦 5. DESPLIEGUE Y MANTENIMIENTO

### Pasos para Clonar:
1. Copiar la estructura de archivos completa.
2. Asegurar que las rutas de imágenes en `app.js` y `index.html` (Cacería) sean relativas (sin `/` inicial).
3. Configurar GitHub Pages o Netlify apuntando al **directorio raíz**.

### Mantenimiento:
- **Nuevos Héroes:** Añadir a `heroesDB` en `fortalezas/app.js` y a `HEROES_DATA` en `caceria/index.html`.
- **Actualización de Drops:** Los datos de cacería provienen de una extracción de Excel (lógica documentada en el resumen original de Cacería).

---

## 📈 6. SEO Y ANALÍTICA
- **Google Search Console:** Propiedad verificada mediante etiqueta HTML.
- **Google Analytics 4:** ID `G-022ZVESV18` integrado en el `head` de todas las páginas principales.
- **Indexación:** Sitemap XML dinámico y `robots.txt` configurados en el raíz.
- **Datos Estructurados:** Implementación de JSON-LD (`SoftwareApplication` y `WebSite`) para mejorar el ranking y la apariencia en Google.
- **Branding:** Favicon dinámico (PNG) y `og:site_name` configurados para visualización premium en buscadores y redes sociales.

---
© Lords Mobile Guide - by knayus  
**Versión Final Unificada:** 1.2 (Abril 2026)
