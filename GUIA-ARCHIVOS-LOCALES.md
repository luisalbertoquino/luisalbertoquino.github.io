# 📁 Guía de Gestión de Archivos Locales

## 🎯 Estrategia: Archivos en el Repositorio (NO Firebase Storage)

Todos los archivos (imágenes, CV, certificados) se almacenan directamente en el repositorio de GitHub.

---

## 📂 Estructura de Carpetas

```
assets/files/
├── cv/                    # Tu hoja de vida (PDF)
│   └── CV-Luis-Quino.pdf
├── certificates/          # Certificaciones (PDF/Imágenes)
│   ├── COPNIA.pdf
│   ├── IBM-AI-Developer.pdf
│   └── ...
├── courses/              # Certificados de cursos (Platzi, etc.)
│   ├── Platzi-Git-GitHub.pdf
│   ├── Platzi-JavaScript.pdf
│   └── ...
└── images/               # Imágenes de proyectos, perfil, etc.
    ├── profile.jpg       # Foto de perfil
    ├── proyecto-1.jpg    # Imágenes de proyectos
    ├── proyecto-2.jpg
    └── ...
```

---

## 📤 Cómo Subir Archivos

### Paso 1: Guardar el archivo localmente

Coloca tu archivo en la carpeta correspondiente:

```bash
# Ejemplo: CV
assets/files/cv/CV-Luis-Quino-2025.pdf

# Ejemplo: Foto de perfil
assets/files/images/profile.jpg

# Ejemplo: Certificado Platzi
assets/files/courses/Platzi-Git-GitHub.pdf

# Ejemplo: Imagen de proyecto
assets/files/images/proyecto-tienda-online.jpg
```

### Paso 2: Hacer commit y push

```bash
# Agregar los archivos nuevos
git add assets/files/

# Crear commit
git commit -m "Add new files: CV, certificates, images"

# Subir a GitHub
git push origin main
```

### Paso 3: Esperar el deployment

- GitHub Pages se actualiza automáticamente (2-5 minutos)
- No necesitas hacer nada más

### Paso 4: Obtener la URL del archivo

Una vez desplegado, tu archivo estará disponible en:

```
https://luisalbertoquino.github.io/assets/files/[carpeta]/[nombre-archivo]
```

**Ejemplos de URLs:**

```
# CV
https://luisalbertoquino.github.io/assets/files/cv/CV-Luis-Quino-2025.pdf

# Foto de perfil
https://luisalbertoquino.github.io/assets/files/images/profile.jpg

# Certificado Platzi
https://luisalbertoquino.github.io/assets/files/courses/Platzi-Git-GitHub.pdf

# Imagen de proyecto
https://luisalbertoquino.github.io/assets/files/images/proyecto-tienda-online.jpg
```

### Paso 5: Usar la URL en el panel admin

1. Abre el panel admin: `https://luisalbertoquino.github.io/admin`
2. Inicia sesión
3. Ve a la sección correspondiente (Perfil, Proyectos, Certificaciones, etc.)
4. Pega la URL del archivo en el campo correspondiente
5. Guarda los cambios

---

## 🖼️ Recomendaciones para Imágenes

### Optimización de Imágenes

**Antes de subir cualquier imagen:**

1. **Optimiza el peso:**
   - Herramienta: https://tinypng.com/
   - Peso objetivo: < 500 KB por imagen

2. **Dimensiones recomendadas:**
   - Foto de perfil: 500x500px (cuadrada)
   - Imagen de proyecto: 1200x800px (horizontal)
   - Banners: 1920x600px

3. **Formato:**
   - Fotografías: JPG (mejor compresión)
   - Logos/iconos: PNG (transparencia)
   - Ilustraciones: SVG (si es posible)

### Nombres de Archivo

**✅ Buenos nombres:**
```
profile.jpg
CV-Luis-Quino-2025.pdf
COPNIA-Tarjeta-Profesional.pdf
Platzi-Git-GitHub.pdf
proyecto-tienda-online.jpg
```

**❌ Malos nombres (evitar):**
```
Mi CV 2025.pdf          ❌ Espacios
CV_ñ_2025.pdf          ❌ Caracteres especiales
cV_LuIs.pdf            ❌ Mayúsculas inconsistentes
foto perfil.jpg        ❌ Espacios
```

**Reglas:**
- Solo letras, números y guiones (`-`)
- No espacios (usa guiones)
- Todo en minúsculas (excepto siglas como COPNIA)
- Nombres descriptivos y claros

---

## 📝 Flujo de Trabajo Completo

### Ejemplo: Agregar tu foto de perfil

1. **Optimiza la imagen:**
   - Ve a https://tinypng.com/
   - Sube tu foto
   - Descarga la versión optimizada

2. **Renombra el archivo:**
   ```
   profile.jpg
   ```

3. **Guarda en la carpeta correcta:**
   ```
   assets/files/images/profile.jpg
   ```

4. **Git add/commit/push:**
   ```bash
   git add assets/files/images/profile.jpg
   git commit -m "Add profile photo"
   git push origin main
   ```

5. **Espera 2-5 minutos** para que GitHub Pages se actualice

6. **Abre el panel admin:**
   ```
   https://luisalbertoquino.github.io/admin
   ```

7. **Edita tu perfil:**
   - Sección: "Perfil General"
   - Campo: "Foto de Perfil (URL)"
   - Valor: `https://luisalbertoquino.github.io/assets/files/images/profile.jpg`
   - Guardar

¡Listo! Tu foto de perfil se verá en el portafolio.

---

### Ejemplo: Agregar imagen de un proyecto

1. **Optimiza la imagen** (1200x800px, < 500 KB)

2. **Renombra:**
   ```
   proyecto-tienda-online.jpg
   ```

3. **Guarda en:**
   ```
   assets/files/images/proyecto-tienda-online.jpg
   ```

4. **Git:**
   ```bash
   git add assets/files/images/proyecto-tienda-online.jpg
   git commit -m "Add project image: tienda online"
   git push origin main
   ```

5. **Espera deploy** (2-5 min)

6. **Panel admin > Proyectos > Editar proyecto:**
   - Campo: "Imagen URL"
   - Valor: `https://luisalbertoquino.github.io/assets/files/images/proyecto-tienda-online.jpg`
   - Guardar

---

### Ejemplo: Subir certificado de Platzi

1. **Descarga tu certificado de Platzi** (PDF)

2. **Renombra:**
   ```
   Platzi-Git-GitHub.pdf
   ```

3. **Guarda en:**
   ```
   assets/files/courses/Platzi-Git-GitHub.pdf
   ```

4. **Git:**
   ```bash
   git add assets/files/courses/Platzi-Git-GitHub.pdf
   git commit -m "Add Platzi course certificate: Git GitHub"
   git push origin main
   ```

5. **Espera deploy**

6. **Panel admin > Cursos > + Agregar:**
   - Nombre: "Curso Profesional de Git y GitHub"
   - Plataforma: "Platzi"
   - Fecha: (fecha de finalización)
   - Certificado URL: `https://luisalbertoquino.github.io/assets/files/courses/Platzi-Git-GitHub.pdf`
   - Guardar

---

## 🔄 Actualizar un Archivo Existente

Si necesitas **reemplazar** un archivo (ej: actualizar CV):

1. **Sobrescribe el archivo local** con el mismo nombre:
   ```
   assets/files/cv/CV-Luis-Quino.pdf  (archivo nuevo)
   ```

2. **Git:**
   ```bash
   git add assets/files/cv/CV-Luis-Quino.pdf
   git commit -m "Update CV"
   git push origin main
   ```

3. **Espera 2-5 minutos**

4. **La URL sigue siendo la misma**, pero el contenido se actualiza automáticamente:
   ```
   https://luisalbertoquino.github.io/assets/files/cv/CV-Luis-Quino.pdf
   ```

5. **No necesitas cambiar nada en el panel admin** porque la URL es la misma

---

## 💡 Ventajas de esta Solución

✅ **Gratis al 100%:** Sin costos de almacenamiento
✅ **Control total:** Los archivos están en tu repo
✅ **Versionado:** Git guarda historial de cambios
✅ **Backup automático:** GitHub guarda todo
✅ **Simple:** Solo git add/commit/push
✅ **URLs permanentes:** No caducan nunca

---

## ⚠️ Limitaciones

❌ **No hay drag & drop** directo desde el panel admin
❌ **Requiere Git** para subir archivos
❌ **Deploy delay** de 2-5 minutos
❌ **Límite de GitHub:** 1 GB por repositorio (más que suficiente)

---

## 📊 Estimación de Espacio

Tu repositorio usará aproximadamente:

- CV (1 archivo PDF): ~500 KB
- Certificados profesionales (5 archivos): ~5 MB
- Cursos Platzi (30 archivos PDF): ~15 MB
- Imágenes de proyectos (10 imágenes optimizadas): ~5 MB
- Foto de perfil: ~100 KB

**Total: ~25 MB de 1,000 MB disponibles**

**¡Tienes espacio de sobra! ✅**

---

## 🚀 Atajos Rápidos

### Subir varios archivos a la vez

```bash
# Agregar todos los archivos nuevos de una carpeta
git add assets/files/courses/

# O todos los archivos de todas las carpetas
git add assets/files/

# Commit y push
git commit -m "Add multiple files: courses and certificates"
git push origin main
```

### Ver qué archivos tienes en cada carpeta

```bash
# Ver archivos en carpeta CV
ls assets/files/cv/

# Ver archivos en carpeta de imágenes
ls assets/files/images/

# Ver TODOS los archivos
ls -R assets/files/
```

---

## 🎯 Checklist para Subir un Archivo

- [ ] Optimizar imagen (si es imagen) en https://tinypng.com/
- [ ] Renombrar con nombre descriptivo (sin espacios, minúsculas)
- [ ] Guardar en carpeta correcta (`assets/files/[tipo]/`)
- [ ] `git add assets/files/[archivo]`
- [ ] `git commit -m "Add [descripción]"`
- [ ] `git push origin main`
- [ ] Esperar 2-5 minutos para deploy
- [ ] Copiar URL: `https://luisalbertoquino.github.io/assets/files/[carpeta]/[archivo]`
- [ ] Pegar URL en panel admin
- [ ] Guardar cambios en panel admin

---

## 📞 URLs de Ejemplo Listas para Usar

Copia estas URLs y reemplaza `[nombre-archivo]` con el nombre real:

```
# Perfil
https://luisalbertoquino.github.io/assets/files/images/profile.jpg

# CV
https://luisalbertoquino.github.io/assets/files/cv/CV-Luis-Quino.pdf

# Certificación
https://luisalbertoquino.github.io/assets/files/certificates/[nombre-certificado].pdf

# Curso Platzi
https://luisalbertoquino.github.io/assets/files/courses/Platzi-[nombre-curso].pdf

# Imagen proyecto
https://luisalbertoquino.github.io/assets/files/images/proyecto-[nombre].jpg
```

---

**¡Eso es todo! Ahora puedes gestionar todos tus archivos de forma local sin costo adicional.**
