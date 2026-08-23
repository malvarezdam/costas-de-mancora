# Costas de Máncora

Landing page para **Costas de Máncora**, local chileno especializado en gastronomía peruana (ceviches, tiraditos, causas, anticuchos y coctelería de autor).

## Contenido

- `index.html` — Estructura de la página (hero, historia, menú, galería, testimonios, ubicación y reservas).
- `css/styles.css` — Estilos y diseño responsive.
- `js/script.js` — Interactividad: menú móvil, tabs de la carta, scroll reveal y formulario de reservas por WhatsApp.
- `images/` — Fotografías reales de uso libre (ver créditos abajo). El logo (`brandmark`) es un ícono original dibujado en SVG dentro del propio `index.html`, no un archivo aparte.

## Créditos de fotografías

Todas las fotos son reales y de licencia libre, obtenidas de Wikimedia Commons:

| Archivo | Foto | Autor | Licencia |
|---|---|---|---|
| `images/hero-mancora.jpg` | Playa Máncora, atardecer | El Surquillano | CC0 |
| `images/story-boats.jpg` | Mantención de botes de pesca en Máncora | Alfredobi | Dominio público |
| `images/gallery-restaurant.jpg` | Il ristorante (interior de restaurante) | Roberto Brucellaria | CC BY-SA 4.0 |
| `images/gallery-ceviche.jpg` | Ceviche peruano | MiguelAlanCS | CC BY-SA 4.0 |
| `images/gallery-pisco.jpg` | Pisco sour | Dtarazona | CC BY-SA 4.0 |
| `images/gallery-sunset.jpg` | Atardecer en Máncora | Melissamarzo | CC BY-SA 4.0 |
| `images/gallery-kitchen.jpg` | Chefs en la cocina | Alex Proimos | CC BY 2.0 |
| `images/gallery-arroz.jpg` | Arroz marinero con patacones y limón | Caldobasico | CC BY-SA 4.0 |

## Pendiente por completar

Antes de publicar como sitio definitivo del local, reemplazar los datos de ejemplo por los reales:

- Dirección y comuna en la sección **Ubicación** (`index.html`) y el mapa (actualmente un recuadro placeholder).
- Teléfono / WhatsApp (aparece en varios lugares, incluido `js/script.js` → `WHATSAPP_NUMBER`).
- Correo de contacto.
- Redes sociales (Instagram, Facebook, TikTok).
- Fotografías propias del local, si se prefieren por sobre las genéricas actuales.
- Precios y platos del menú, si difieren de los propuestos.
- El logo es un ícono genérico ola+sol; si el local ya tiene un logo real, reemplazar el `<svg class="brandmark">` por ese logo (imagen o SVG).

## Publicar con GitHub Pages

Este repositorio está preparado para servirse directamente con GitHub Pages desde la rama `main` (carpeta raíz).
