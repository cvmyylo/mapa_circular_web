# Mapa Circular (`mapacircular.cl`)

Repositorio oficial de **Mapa Circular** y sus herramientas asociadas bajo la familia de normas ISO 59000, operado por **Social Renovable Latam SpA**.

## Estructura del proyecto

```text
mapa_circular_web/
├── index.html                  # Landing principal (https://mapacircular.cl)
├── partida/
│   └── index.html              # Herramienta 1: Punto de partida circular (https://partida.mapacircular.cl)
└── functions/
    └── _middleware.js          # Enrutamiento automático de subdominios en Cloudflare Pages
```

## Subdominios proyectados

| Herramienta | Subdominio | Ruta en repositorio | Estado |
| :--- | :--- | :--- | :--- |
| **Landing Mapa Circular** | `mapacircular.cl` | `/index.html` | Activa |
| **1. Punto de partida circular** | `partida.mapacircular.cl` | `/partida/index.html` | Activa |
| **2. Partes interesadas** | `partes.mapacircular.cl` | `/partes/index.html` | Próximamente |
| **3. Objetivo de circularidad** | `objetivo.mapacircular.cl` | `/objetivo/index.html` | Próximamente |
| **4. De la acción al número** | `medicion.mapacircular.cl` | `/medicion/index.html` | Próximamente |
| **5. Plan de acción** | `plan.mapacircular.cl` | `/plan/index.html` | Próximamente |
| **6. Verificación de nivel** | `verifica.mapacircular.cl` | `/verifica/index.html` | Próximamente |

## Despliegue en Cloudflare Pages

Esta estructura soporta **dos modalidades** en Cloudflare Pages sin cambios adicionales:

1. **Un único proyecto en Cloudflare Pages (Recomendado):**
   - Conecta este repositorio a un proyecto en Cloudflare Pages (directorio raíz `/`).
   - En **Custom Domains**, agrega `mapacircular.cl`, `www.mapacircular.cl` y `partida.mapacircular.cl`.
   - El archivo `functions/_middleware.js` detecta automáticamente el subdominio `partida.mapacircular.cl` y sirve `/partida/index.html`.
2. **Proyectos separados por subdominio:**
   - Proyecto 1 (`mapacircular.cl`): directorio raíz `/`.
   - Proyecto 2 (`partida.mapacircular.cl`): directorio raíz `/partida`.
