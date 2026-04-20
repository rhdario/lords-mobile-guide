# Plan de Integración: Lords Mobile Guide Hub

Este plan detalla la migración de los proyectos individuales (Fortalezas y Cacería) a una estructura unificada y la creación de un tablero central (Hub) con diseño premium.

## Propuesta de Estructura

```text
/lords-mobile-guide/
  ├── index.html          [NUEVO] Página principal con botones de acceso
  ├── /fortalezas/        [MIGRADO] Proyecto original de Rally Optimizer
  │     ├── index.html
  │     ├── styles.css
  │     ├── app.js
  │     └── /img/
  └── /caceria/           [EXISTENTE] Proyecto de Claude (Guía de Cacería)
        ├── index.html
        └── /img/
```

## Tareas a realizar

### 1. Migración de Archivos
- Crear la carpeta `C:\Users\herna\Downloads\lords-mobile-guide\fortalezas`.
- Copiar todos los archivos relevantes del proyecto original (`lm fortalezas`) a la nueva subcarpeta.

### 2. Ajustes de Rutas
- Revisar si el `index.html` de Cacería o de Fortalezas tiene enlaces que necesiten ser actualizados para funcionar dentro de subcarpetas (generalmente no es necesario si los recursos son relativos).

### 3. Creación del Hub Premium (index.html raíz)
- Diseñar una página de aterrizaje con estética "Gamer/Lords Mobile".
- **Botón 1:** Rally Optimizer (Fortalezas) -> Apunta a `./fortalezas/index.html`.
- **Botón 2:** Guía de Cacería -> Apunta a `./caceria/index.html`.
- Añadir micro-animaciones, efectos hover y un diseño responsive.

## Verificación
- Abrir el nuevo `index.html` y comprobar que ambos botones llevan a sus respectivas aplicaciones.
- Asegurarse de que las imágenes y estilos carguen correctamente en ambas secciones.

---
> [!IMPORTANT]
> No borraré los archivos originales en `lm fortalezas`. Solo haré una copia para trabajar de forma segura en la nueva ubicación.
