# 📸 Guía Completa: Cómo Agregar Imágenes

## 1. Estructura de Carpetas

```
portfolio/
└── assets/
    └── images/
        ├── profile.jpg              (Tu foto de perfil)
        ├── proyecto1.jpg            (Imágenes de proyectos)
        ├── proyecto2.jpg
        ├── cert1.jpg                (Certificados)
        ├── cert2.jpg
        ├── curso1.jpg               (Cursos)
        └── curso2.jpg
```

## 2. Tu Foto de Perfil

### Requisitos:
- **Tamaño:** 400x400 px (o superior, será redimensionada)
- **Formato:** JPG o PNG
- **Peso:** Máximo 500KB
- **Nombre:** `profile.jpg`

### Pasos:
1. Prepara tu foto (fondo profesional, buena iluminación)
2. Renómbrala a `profile.jpg`
3. Guárdala en `assets/images/profile.jpg`
4. ¡Listo! Se cargará automáticamente

### Herramientas para editar:
- **Online:** Photopea.com (gratis)
- **Desktop:** GIMP (gratis), Photoshop
- **Recortar:** iloveimg.com/crop-image

### Consejos:
- Usa fondo neutral o profesional
- Buena iluminación
- Sonríe naturalmente
- Ropa profesional
- Centrado en el rostro

---

## 3. Imágenes de Proyectos

### Requisitos:
- **Tamaño:** 800x600 px (proporción 4:3)
- **Formato:** JPG o PNG
- **Peso:** Máximo 300KB cada una
- **Nombres:** descriptivos (ej: `proyecto-ecommerce.jpg`)

### Opciones de Imágenes:

#### Opción A: Screenshots de tu Proyecto
1. Abre tu proyecto en el navegador
2. Toma screenshot (F11 para pantalla completa)
3. Recorta la imagen a 800x600px
4. Optimiza el peso

#### Opción B: Mockups Profesionales
Usa estos sitios para crear mockups:
- **Smartmockups.com** - Mockups de dispositivos
- **Mockuper.net** - Mockups de navegadores
- **Shots.so** - Screenshots bonitos
- **Screely.com** - Browser mockups

#### Opción C: Capturas con Extensiones
Extensiones de Chrome:
- **Awesome Screenshot**
- **Full Page Screen Capture**
- **Nimbus Screenshot**

### Pasos:
1. Crea/toma la imagen
2. Renombra descriptivamente: `proyecto-nombre.jpg`
3. Guarda en `assets/images/`
4. Actualiza la ruta en `js/app.js`:
   ```javascript
   image: "assets/images/proyecto-nombre.jpg"
   ```

---

## 4. Certificados

### Requisitos:
- **Formato:** JPG o PNG
- **Peso:** Máximo 500KB
- **Nombres:** descriptivos (ej: `cert-udemy-react.jpg`)

### Cómo Obtener:
1. Descarga el certificado desde la plataforma (Udemy, Coursera, etc.)
2. Si es PDF, conviértelo a JPG:
   - **Online:** ilovepdf.com/pdf_to_jpg
   - **Windows:** Abre PDF, captura pantalla
   - **Mac:** Abre en Preview, File > Export > JPEG

### Optimizar Calidad:
- Usa alta resolución al descargar
- Si es muy grande, usa tinypng.com
- Mantén el texto legible

### Pasos:
1. Descarga/convierte tu certificado
2. Renombra: `cert-nombre-descriptivo.jpg`
3. Guarda en `assets/images/`
4. Actualiza en `js/app.js`:
   ```javascript
   certificateImage: "assets/images/cert-nombre.jpg"
   ```

---

## 5. Logos de Instituciones

### Opciones:

#### Opción A: Usar Iconos de Font Awesome
```javascript
logo: "fas fa-certificate"    // Icono genérico
logo: "fab fa-google"         // Logo de Google
logo: "fab fa-microsoft"      // Logo de Microsoft
```

#### Opción B: Usar Imágenes de Logos
1. Descarga el logo oficial de la institución
2. Tamaño: 200x200px
3. Fondo transparente (PNG)
4. Guarda en `assets/images/logo-institucion.png`
5. Usa en el código:
   ```javascript
   logo: "assets/images/logo-udemy.png"
   ```

### Dónde Encontrar Logos:
- **Brandfetch.com** - Logos oficiales
- **Worldvectorlogo.com** - Logos en vectores
- **Sitio oficial** de la institución

---

## 6. Optimizar Imágenes

### ¿Por qué optimizar?
- Carga más rápida del sitio
- Mejor experiencia de usuario
- Menos uso de datos

### Herramientas Online:
1. **TinyPNG.com** ⭐ Recomendado
   - Sube hasta 20 imágenes
   - Reduce 50-70% sin pérdida de calidad
   
2. **Compressor.io**
   - Compresión más agresiva
   
3. **Squoosh.app** (de Google)
   - Control total de calidad

### Guía Rápida TinyPNG:
1. Ve a tinypng.com
2. Arrastra tus imágenes
3. Espera que comprima
4. Descarga las optimizadas
5. Reemplaza las originales

---

## 7. Formatos de Imagen

### JPG/JPEG
✅ Usar para:
- Fotos
- Imágenes con muchos colores
- Screenshots de proyectos

### PNG
✅ Usar para:
- Logos con fondo transparente
- Gráficos con texto
- Imágenes con transparencia

### WebP (Avanzado)
✅ Mejor calidad y peso
✅ No todos los navegadores lo soportan
✅ Usa como mejora progresiva

---

## 8. Nombres de Archivos

### ❌ Malo:
- `IMG_1234.jpg`
- `Screenshot 2024-01-15.png`
- `foto perfil.jpg` (con espacios)
- `CERTIFICADO.JPG` (mayúsculas)

### ✅ Bueno:
- `profile.jpg`
- `proyecto-ecommerce.jpg`
- `cert-react-udemy.jpg`
- `curso-laravel-platzi.jpg`

### Reglas:
- Todo en minúsculas
- Usa guiones (-) en lugar de espacios
- Nombres descriptivos
- Sin caracteres especiales (ñ, tildes, etc.)

---

## 9. Troubleshooting (Solución de Problemas)

### Problema: La imagen no se ve
**Solución:**
1. Verifica la ruta en `js/app.js`
2. Asegúrate que el nombre coincida exactamente
3. Verifica que esté en `assets/images/`
4. Limpia caché del navegador (Ctrl + F5)

### Problema: La imagen es muy grande
**Solución:**
1. Usa TinyPNG.com para comprimir
2. Redimensiona a tamaños recomendados
3. Cambia formato de PNG a JPG

### Problema: La imagen se ve pixelada
**Solución:**
1. Usa imagen de mayor resolución
2. No agrandes imágenes pequeñas
3. Usa el tamaño original del certificado

### Problema: El modal no abre la imagen
**Solución:**
1. Verifica la ruta en `certificateImage:`
2. Asegúrate que la imagen existe
3. Revisa la consola del navegador (F12)

---

## 10. Workflow Recomendado

### Para Cada Nuevo Elemento:

**Proyecto:**
1. Screenshot del proyecto
2. Optimiza con TinyPNG
3. Renombra: `proyecto-nombre.jpg`
4. Guarda en `assets/images/`
5. Actualiza `getProjectsData()` en `js/app.js`
6. Refresca navegador

**Certificado:**
1. Descarga certificado
2. Convierte a JPG si es necesario
3. Optimiza peso
4. Renombra: `cert-nombre.jpg`
5. Guarda en `assets/images/`
6. Actualiza `getCertificationsData()` en `js/app.js`
7. Prueba el modal

**Curso:**
1. Igual que certificado
2. Usa `getCapacitacionesData()` en su lugar

---

## 11. Checklist de Imágenes

Antes de publicar, verifica:

- [ ] Foto de perfil agregada
- [ ] Al menos 2-3 imágenes de proyectos
- [ ] Todas las imágenes de certificados
- [ ] Todas las imágenes de cursos
- [ ] Todas las imágenes optimizadas (< 500KB)
- [ ] Nombres de archivos correctos
- [ ] Todas las rutas actualizadas en `js/app.js`
- [ ] Modal funciona con todas las imágenes
- [ ] Imágenes se ven bien en móvil
- [ ] No hay imágenes rotas (404)

---

## 12. Recursos Adicionales

### Bancos de Imágenes Gratis:
- Unsplash.com
- Pexels.com
- Pixabay.com

### Para Crear Mockups:
- Figma.com (gratis)
- Canva.com
- Mockuphone.com

### Editores Online:
- Photopea.com (como Photoshop, gratis)
- Pixlr.com
- Remove.bg (remover fondos)

---

## 💡 Tip Pro

Crea una carpeta en tu computadora llamada "Portfolio Assets" donde guardes:
- Versiones originales de imágenes
- Certificados en PDF
- Screenshots sin editar
- Logos de instituciones

Así siempre tendrás respaldo de tus archivos originales.

---

**¿Necesitas ayuda con imágenes específicas?**
Revisa los ejemplos visuales en la documentación o contacta para soporte.
