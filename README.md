# ericsitodes.github.io

Página de ventas de **Eleva Dev**, el estudio de Eric Jesús Leyva López en Coatzacoalcos, Veracruz. Presenta dashboards de ventas para restaurantes, tiendas y farmacias, junto con precios, otros servicios y contacto por WhatsApp.

Es un sitio estático hecho con HTML, CSS y JavaScript, sin frameworks ni paso de compilación.

Sitio publicado: https://ericsitodes.github.io/

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Contenido de la página |
| `css/styles.css` | Colores, tipografía y diseño |
| `js/main.js` | Datos de contacto (`CONFIG`), menú y animaciones |
| `assets/` | Foto e imagen para la vista previa al compartir |

## Editar tus datos

Tus datos están en el objeto `CONFIG`, al inicio de `js/main.js`:

```js
const CONFIG = {
  estudio: 'Eleva Dev',
  responsable: 'Eric Jesús Leyva López',
  ubicacion: 'Coatzacoalcos, Veracruz, México',
  whatsapp: '529212223293',
  correo: 'eric.dev.soluciones@gmail.com',
  mensajeWhatsApp: 'Hola, vi tu página y me interesa un tablero para mi negocio.'
};
```

| Campo | Qué cambia |
| --- | --- |
| `estudio` | Nombre del estudio en la página |
| `responsable` | Tu nombre en la página |
| `ubicacion` | Tu ubicación en la página |
| `whatsapp` | Número de todos los botones de WhatsApp; va con `52` y sin espacios ni signos |
| `correo` | Dirección del enlace de correo |
| `mensajeWhatsApp` | Mensaje prellenado de los botones que no tienen uno propio |

Si cambias el nombre del estudio o el tuyo, cámbialos también en el `<head>` de `index.html`: el título y las etiquetas `og:*` no se leen desde `CONFIG` porque WhatsApp y Facebook no ejecutan JavaScript.

Los mensajes de cada plan y servicio están en el atributo `data-mensaje` de su botón en `index.html`.

## Correrlo en tu computadora

No necesita instalar nada, solo Python para servir los archivos:

```powershell
python -m http.server 8000
```

Abre http://localhost:8000. Para detenerlo, presiona `Ctrl + C` en la terminal.

## Demos enlazados

| Giro | Demo | Repositorio |
| --- | --- | --- |
| Restaurante | https://palapa-demo.streamlit.app/ | `ericsitodes/demo-restaurante` |
| Tienda | https://demo-tienda.streamlit.app/ | `ericsitodes/demo-tienda` |
| Farmacia | https://demo-farmacia.streamlit.app/ | `ericsitodes/demo-farmacia` |

Los links están en los botones "Ver ejemplo" de `index.html`. El precio de lanzamiento no va en el sitio: solo se ofrece en conversación directa.

## Publicar en GitHub Pages

GitHub Pages sirve este repositorio directamente, sin compilar nada. El repositorio debe llamarse `<usuario>.github.io` para publicarse en la raíz de ese dominio.

1. En GitHub, entra a **Settings > Pages**.
2. En **Source**, elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.

Después de eso, cada cambio que llegue a `main` se publica solo:

```powershell
git add .
git commit -m "Describe tu cambio"
git push origin main
```

La actualización suele tardar unos minutos. Puedes seguirla en la pestaña **Actions** del repositorio.
