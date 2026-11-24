# JES FIT Suplementos — catálogo web

## Contenido
- Catálogo de creatinas, proteínas, pre-entrenos, aminoácidos, vitaminas y accesorios.
- Carrusel horizontal de productos con flechas, filtros y buscador.
- Formulario validado y pedido/consulta preparado para WhatsApp `+591 72505969`.
- Sucursales y teléfonos según la captura enviada: La Paz 77762589, El Alto 69183069, C. Villa Adela 77528954 y Senkata 77645221.
- Tema claro/oscuro, menú móvil, indicador online/offline, Fetch API e hidratación del catálogo.
- PWA con manifest y Service Worker para recursos base offline.

## Precios
Los precios en `assets/products.json` son **referenciales de demostración**, no fueron verificados en tiempo real ni confirmados por JES FIT. Actualizarlos con la tienda antes de publicar o vender. Las marcas y existencias también deben confirmarse.

## Imágenes
El logotipo fue recortado de la imagen proporcionada. Las fotos de productos/entrenamiento se cargan desde Unsplash y requieren conexión; el logo y el catálogo base sí están locales.

## Ejecutar
1. Descomprime el ZIP.
2. Abre la carpeta en Visual Studio Code.
3. Ejecuta `index.html` con Live Server.
4. Para probar PWA/offline, utiliza localhost o un hosting HTTPS (no `file://`).

## Personalizar
- Edita `assets/products.json` para nombres, categorías, tamaños y precios.
- El WhatsApp central está configurado en `app.js` y en el enlace del pie de página.
- Los números de sucursal están en `index.html`.
