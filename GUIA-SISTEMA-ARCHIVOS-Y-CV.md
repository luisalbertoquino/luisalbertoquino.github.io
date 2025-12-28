# 📂 Guía: Sistema de Archivos y CV

## 🎯 ¿Para qué sirve cada sección?

Tu panel de administración tiene **DOS formas** de trabajar con archivos:

---

## 1️⃣ **Perfil General → Campo CV**

### 📍 Ubicación
`Admin Panel → Perfil General → Información de Contacto → CV URL (PDF)`

### ✅ Para qué sirve
Este es el campo que vincula tu CV al **botón "Descargar CV"** que aparece en:
- Sidebar del portafolio (botón principal)
- Hero section
- Cualquier link que diga "Descargar CV"

### 🔧 Cómo funciona

1. **Subir tu CV:**
   - Haz clic en el botón de selección de archivo
   - Selecciona tu CV en formato PDF (máximo 10MB)
   - Espera 3-5 minutos a que GitHub Pages se actualice
   - La URL se guarda automáticamente en Firebase

2. **Ver CV actual:**
   - El campo mostrará la URL actual de tu CV
   - Puedes hacer clic en la URL para verificar que funciona

3. **Actualizar CV:**
   - Simplemente sube un nuevo PDF
   - La URL anterior se reemplazará automáticamente

### 💡 Ejemplo de flujo
```
Subes CV → GitHub guarda archivo → URL se actualiza en Firebase
→ Botón "Descargar CV" funciona automáticamente
```

---

## 2️⃣ **Archivos & CV → Gestión de Archivos**

### 📍 Ubicación
`Admin Panel → Archivos & CV`

### ✅ Para qué sirve
Esta sección te permite:

#### **A. Hoja de Vida (CV)**
- Subir/actualizar tu CV en PDF
- Ver el CV actualmente cargado
- Misma funcionalidad que el campo en "Perfil General"
- **Es la misma cosa**, solo que con interfaz visual más amigable

#### **B. Gestión de Imágenes**
- Subir imágenes generales para tu portafolio
- Ver todas las imágenes que has subido
- Eliminar imágenes que ya no necesitas
- Copiar URLs de imágenes para usar en proyectos, certificaciones, etc.

### 🔧 Cómo funciona

#### **Subir CV:**
1. Ve a la sección "Archivos & CV"
2. En la zona "Hoja de Vida (CV)":
   - Arrastra tu PDF a la zona de carga
   - O haz clic para seleccionar archivo
3. Espera a que se suba
4. El CV quedará vinculado al botón "Descargar CV"

#### **Gestión de Imágenes:**
1. En la zona "Gestión de Imágenes":
   - Arrastra imágenes o haz clic para seleccionar
   - Se subirán a GitHub en la carpeta `assets/images/`
2. Verás miniatura de cada imagen subida
3. Puedes:
   - Ver la imagen completa
   - Copiar la URL para usarla en otros lugares
   - Eliminar imágenes que ya no necesitas

---

## 🔄 **¿Cuál usar?**

### Para CV:
- **Opción A:** Perfil General → más rápido, directo
- **Opción B:** Archivos & CV → más visual, ves el estado actual

**Ambas hacen lo mismo** - usa la que prefieras.

### Para Imágenes:
- **Única opción:** Archivos & CV → Gestión de Imágenes

---

## 📋 **Casos de uso comunes**

### 1. Actualizar mi CV
```
1. Ve a "Perfil General" o "Archivos & CV"
2. Sube tu nuevo PDF
3. Espera 3-5 minutos
4. Prueba el botón "Descargar CV" en tu portafolio
```

### 2. Subir imagen para un proyecto
```
1. Ve a "Archivos & CV" → Gestión de Imágenes
2. Sube la imagen del proyecto
3. Copia la URL que aparece
4. Ve a "Proyectos" → Editar proyecto
5. Pega la URL en el campo "Imagen"
```

### 3. Subir imagen de certificación
```
1. Ve a "Archivos & CV" → Gestión de Imágenes
2. Sube la imagen del certificado
3. Copia la URL
4. Ve a "Certificaciones" → Agregar/Editar
5. Pega la URL en "Imagen de Portada"
```

### 4. Ver mi CV actual
```
Opción 1: Panel Admin → Archivos & CV → Ver enlace "CV Actual"
Opción 2: Ir a tu portafolio → Clic en "Descargar CV"
```

---

## ⚠️ **Notas Importantes**

1. **Formato de CV:** Solo acepta archivos PDF
2. **Tamaño máximo:** 10MB por archivo
3. **Tiempo de actualización:** GitHub Pages puede tardar 3-5 minutos en actualizar
4. **Imágenes recomendadas:** JPG, PNG, WebP (optimizadas para web)
5. **URLs permanentes:** Una vez subido, el archivo tiene una URL fija

---

## 🐛 **Solución de Problemas**

### "El botón Descargar CV no funciona"
1. Verifica que subiste el CV correctamente
2. Espera 3-5 minutos para GitHub Pages
3. Refresca tu portafolio (Ctrl + F5)
4. Verifica en "Archivos & CV" que aparezca "CV Actual"

### "No puedo subir mi CV"
1. Verifica que sea un archivo PDF
2. Verifica que pese menos de 10MB
3. Si es muy grande, comprime el PDF primero
4. Intenta desde la otra sección (Perfil General o Archivos & CV)

### "Subí una imagen pero no aparece"
1. Espera 3-5 minutos
2. Refresca la página del admin
3. Verifica la URL copiando y pegando en el navegador

---

## 💡 **Tips Pro**

1. **Nombra tus archivos bien:**
   - ✅ `CV-Luis-Quino-2025.pdf`
   - ❌ `documento final version 3 (1).pdf`

2. **Optimiza imágenes antes de subir:**
   - Usa herramientas como TinyPNG, Squoosh
   - Tamaño recomendado: máximo 1920px de ancho
   - Peso recomendado: menos de 500KB

3. **Organiza tus imágenes:**
   - Usa nombres descriptivos
   - Elimina las que ya no uses
   - Mantén solo las necesarias

4. **Actualiza tu CV regularmente:**
   - Cada vez que tengas un nuevo logro
   - Nuevas certificaciones
   - Nuevos proyectos completados

---

## 📞 **¿Necesitas ayuda?**

Si algo no funciona o tienes dudas:
1. Revisa esta guía primero
2. Verifica la consola del navegador (F12) por errores
3. Asegúrate de estar autenticado en el panel admin
4. Verifica que tu token de GitHub esté configurado correctamente

---

**Última actualización:** 2025-12-28
