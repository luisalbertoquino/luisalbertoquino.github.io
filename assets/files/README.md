# 📁 Gestión de Archivos Locales

## 🎯 Estrategia: Archivos en GitHub (SIN Firebase Storage)

En lugar de usar Firebase Storage (que aunque es gratis, prefieres evitar), los archivos se guardarán directamente en GitHub Pages.

---

## 📂 Estructura de Carpetas

```
assets/files/
├── cv/                    # Tu hoja de vida (PDF)
├── certificates/          # Certificaciones (PDF/Imágenes)
├── courses/              # Certificados de cursos (Platzi, etc.)
└── images/               # Imágenes de proyectos, portada
```

---

## 📤 Cómo Subir Archivos

### Opción 1: Manualmente (Recomendado)

1. **Guarda tus archivos** en las carpetas correspondientes:
   ```
   assets/files/cv/CV-Luis-Quino.pdf
   assets/files/certificates/COPNIA.pdf
   assets/files/courses/Platzi-Git.pdf
   assets/files/images/proyecto1.jpg
   ```

2. **Haz commit y push:**
   ```bash
   git add assets/files/
   git commit -m "Add CV, certificates and images"
   git push origin main
   ```

3. **Copia la URL de GitHub Pages:**
   ```
   https://tuusuario.github.io/assets/files/cv/CV-Luis-Quino.pdf
   ```

4. **Pega la URL en el panel admin** cuando agregues/edites elementos

---

## 🔗 URLs de tus archivos

Después de hacer push, tus archivos estarán disponibles en:

**Estructura de URL:**
```
https://tuusuario.github.io/assets/files/[carpeta]/[nombre-archivo]
```

**Ejemplos:**
```
CV:
https://luisalbertoquino.github.io/assets/files/cv/CV-Luis-Quino.pdf

Certificado:
https://luisalbertoquino.github.io/assets/files/certificates/COPNIA.pdf

Curso Platzi:
https://luisalbertoquino.github.io/assets/files/courses/Platzi-Git-GitHub.pdf

Imagen proyecto:
https://luisalbertoquino.github.io/assets/files/images/tienda-online.jpg
```

---

## 🖼️ Convenciones de Nombres

**Buenos nombres:**
- ✅ `CV-Luis-Quino-2025.pdf`
- ✅ `COPNIA-Tarjeta-Profesional.pdf`
- ✅ `Platzi-Git-GitHub.pdf`
- ✅ `proyecto-tienda-online.jpg`

**Evita:**
- ❌ Espacios: `Mi CV 2025.pdf`
- ❌ Caracteres especiales: `CV_ñ_2025.pdf`
- ❌ Mayúsculas inconsistentes: `cV_LuIs.pdf`

**Usa:**
- Guiones (`-`) en lugar de espacios
- Solo letras, números y guiones
- Todo en minúsculas (excepto siglas como COPNIA)

---

## 📝 Flujo de Trabajo Completo

### Para agregar tu CV:

1. **Guarda tu CV:**
   ```
   assets/files/cv/CV-Luis-Quino.pdf
   ```

2. **Git:**
   ```bash
   git add assets/files/cv/CV-Luis-Quino.pdf
   git commit -m "Add CV"
   git push origin main
   ```

3. **Espera 2-5 minutos** (GitHub Pages deploy)

4. **Abre el panel admin:** `https://tuusuario.github.io/admin`

5. **Perfil General > CV URL:**
   ```
   https://luisalbertoquino.github.io/assets/files/cv/CV-Luis-Quino.pdf
   ```

6. **Guardar**

¡Listo! Tu CV ya está disponible en el portafolio.

---

## 🎨 Para Imágenes de Proyectos:

1. **Optimiza la imagen primero:**
   - Herramienta: https://tinypng.com/
   - Tamaño recomendado: 1200x800px
   - Peso: Máx 500KB

2. **Guarda en:**
   ```
   assets/files/images/proyecto-tienda-online.jpg
   ```

3. **Git:**
   ```bash
   git add assets/files/images/
   git commit -m "Add project images"
   git push origin main
   ```

4. **En el panel admin > Proyectos > Editar > Imagen:**
   ```
   https://luisalbertoquino.github.io/assets/files/images/proyecto-tienda-online.jpg
   ```

---

## 🔄 Actualizar un Archivo

Para **reemplazar** un archivo (ej: actualizar CV):

1. **Sobrescribe el archivo** con el mismo nombre:
   ```
   assets/files/cv/CV-Luis-Quino.pdf  (nuevo archivo)
   ```

2. **Git:**
   ```bash
   git add assets/files/cv/CV-Luis-Quino.pdf
   git commit -m "Update CV"
   git push origin main
   ```

3. **Espera 2-5 minutos**

4. La URL sigue siendo la misma, pero el contenido se actualiza automáticamente

---

## 💡 Ventajas de esta Solución

✅ **Gratis al 100%:** Sin costos de almacenamiento
✅ **Control total:** Los archivos están en tu repo
✅ **Versionado:** Git guarda historial de cambios
✅ **Backup automático:** GitHub guarda todo
✅ **Simple:** Solo hacer git add/commit/push
✅ **URLs permanentes:** No caducan nunca

## ⚠️ Limitaciones

❌ **No hay drag & drop directo** en el panel admin
❌ **Requiere conocer Git** para subir archivos
❌ **Deploy delay** de 2-5 minutos
❌ **Límite de GitHub:** 1 GB por repositorio (más que suficiente)

---

## 📊 Estimación de Espacio

Con esta solución, tu repo usará aprox:

- CV (1 archivo PDF): ~500 KB
- Certificados (20 archivos): ~10 MB
- Cursos Platzi (30 archivos): ~15 MB
- Imágenes proyectos (10 imágenes): ~5 MB
- **Total:** ~30 MB de 1,000 MB disponibles

**¡Tienes espacio de sobra! ✅**

---

## 🚀 Próximo Paso

1. ✅ Carpetas creadas
2. ⏳ Termina configuración Firebase (Authentication)
3. ⏳ Prueba local del panel admin
4. ⏳ Agrega tus archivos a `assets/files/`
5. ⏳ Git push y deploy a GitHub Pages

**¡Sigamos con la configuración!**
