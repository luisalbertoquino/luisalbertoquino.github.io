# 🚀 Guía Rápida de Inicio

## Pasos para comenzar AHORA:

### 1. Descargar el Proyecto
- Descarga todo el contenido de la carpeta `portfolio/`

### 2. Agregar Tu Foto
- Coloca tu foto en: `assets/images/profile.jpg`
- Tamaño recomendado: 400x400px

### 3. Personalizar Datos
- Abre `js/app.js` con cualquier editor de texto
- Busca estas funciones y edita:
  - `getServicesData()` - Tus servicios
  - `getExperienceData()` - Tu experiencia laboral
  - `getProjectsData()` - Tus proyectos
  - `getEducationData()` - Tu educación
  - `getCertificationsData()` - Tus certificaciones
  - `getCapacitacionesData()` - Tus cursos

### 4. Actualizar Enlaces Sociales
- Abre `index.html`
- Busca los enlaces de GitHub, LinkedIn, CodePen
- Reemplaza con tus perfiles

### 5. Probar Localmente
- Abre `index.html` con tu navegador
- Verifica que todo se vea bien

### 6. Subir a GitHub Pages

#### Opción A: Usando GitHub Desktop (Fácil)
1. Descarga GitHub Desktop: https://desktop.github.com
2. Instala y accede con tu cuenta de GitHub
3. Crea nuevo repositorio: `luisalbertoquino.github.io`
4. Arrastra los archivos del portfolio
5. Haz commit y push
6. Ve a Settings > Pages y activa GitHub Pages

#### Opción B: Usando la terminal
```bash
# Navega a la carpeta del proyecto
cd portfolio

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Haz tu primer commit
git commit -m "Mi portfolio inicial"

# Conecta con GitHub
git remote add origin https://github.com/luisalbertoquino/luisalbertoquino.github.io.git

# Sube los archivos
git branch -M main
git push -u origin main
```

### 7. Ver tu Sitio Online
- Espera 2-3 minutos
- Visita: https://luisalbertoquino.github.io

## 📝 Para Agregar Contenido Nuevo:

### Agregar un Proyecto:
1. Abre `js/app.js`
2. Busca `function getProjectsData()`
3. Copia este bloque y pégalo dentro del array:
```javascript
{
    title: "Nombre del Proyecto",
    description: "Descripción",
    technologies: ["Laravel", "Vue.js"],
    demoLink: "https://demo.com",
    codeLink: "https://github.com/...",
    icon: "fas fa-laptop-code",
    image: "assets/images/proyecto.jpg"
},
```

### Agregar una Certificación:
1. Guarda la imagen en `assets/images/cert-nombre.jpg`
2. En `js/app.js`, busca `function getCertificationsData()`
3. Agrega:
```javascript
{
    name: "Nombre del Certificado",
    issuer: "Institución",
    logo: "fas fa-certificate",
    certificateImage: "assets/images/cert-nombre.jpg"
},
```

### Agregar un Curso:
1. Guarda la imagen en `assets/images/curso-nombre.jpg`
2. En `js/app.js`, busca `function getCapacitacionesData()`
3. Agrega:
```javascript
{
    name: "Nombre del Curso",
    issuer: "Plataforma",
    logo: "fab fa-js",
    certificateImage: "assets/images/curso-nombre.jpg"
},
```

## 🎨 Cambiar Colores:

Abre `css/styles.css` y edita:
```css
:root {
    --accent-primary: #6366f1;   /* Tu color favorito aquí */
    --accent-secondary: #8b5cf6;
}
```

## ✅ Checklist Antes de Publicar:

- [ ] Agregar foto de perfil
- [ ] Actualizar información personal
- [ ] Agregar al menos 2-3 proyectos
- [ ] Subir imágenes de certificados
- [ ] Actualizar enlaces de redes sociales
- [ ] Probar en móvil y desktop
- [ ] Verificar que todos los enlaces funcionen
- [ ] Revisar ortografía

## 💡 Tips:

1. **Optimiza las imágenes** antes de subirlas (usa tinypng.com)
2. **Actualiza regularmente** tu portfolio con nuevos proyectos
3. **Comparte tu link** en LinkedIn, GitHub, y CV
4. **Haz backup** de tus cambios regularmente

## 🆘 ¿Necesitas Ayuda?

Si algo no funciona:
1. Verifica que todas las rutas sean correctas
2. Abre la consola del navegador (F12) para ver errores
3. Limpia el caché del navegador (Ctrl + F5)

---

**¡Listo! Tu portfolio profesional está a solo unos pasos de estar online! 🎉**
