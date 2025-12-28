# Portfolio Personal - Luis Alberto Quino Manrique

Portafolio web profesional con tema oscuro, diseño moderno y sidebar colapsable.

## 🚀 Características

- ✅ Diseño moderno con tema oscuro
- ✅ Sidebar colapsable (estilo leftbar)
- ✅ Preloader animado con código
- ✅ Navegación suave entre secciones
- ✅ Secciones: Inicio, Sobre mí, Servicios, Experiencia, Proyectos, Educación, Certificaciones, Capacitaciones
- ✅ Modal para ver imágenes de proyectos y certificados
- ✅ Botón flotante de WhatsApp
- ✅ Responsive design (móviles, tablets, desktop)
- ✅ Fácil de mantener y actualizar
- ✅ Font Awesome para iconos
- ✅ Google Fonts (Inter)

## 📁 Estructura del Proyecto

```
portfolio/
│
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   └── app.js              # Lógica y datos
├── assets/
│   └── images/
│       ├── profile.jpg     # Tu foto de perfil
│       ├── cert1.jpg       # Certificados
│       ├── cert2.jpg
│       ├── curso1.jpg      # Cursos/Capacitaciones
│       └── proyecto1.jpg   # Imágenes de proyectos
└── README.md              # Este archivo
```

## 🎨 Personalización

### 1. Agregar tu foto de perfil

Coloca tu foto en `assets/images/profile.jpg`

La foto aparecerá automáticamente en el sidebar.

### 2. Editar Servicios

Abre `js/app.js` y busca la función `getServicesData()`:

```javascript
function getServicesData() {
    return [
        {
            icon: "fab fa-laravel",  // Icono de Font Awesome
            title: "Nombre del Servicio",
            description: "Descripción del servicio..."
        },
        // Agrega más servicios aquí
    ];
}
```

### 3. Agregar/Editar Experiencia Laboral

Busca la función `getExperienceData()`:

```javascript
function getExperienceData() {
    return [
        {
            position: "Cargo",
            company: "Nombre de la Empresa",
            period: "Enero 2020 - Actual",
            responsibilities: [
                "Responsabilidad 1",
                "Responsabilidad 2",
                // Agrega más...
            ]
        },
        // Agrega más experiencias aquí
    ];
}
```

### 4. Agregar Proyectos

Busca la función `getProjectsData()`:

```javascript
function getProjectsData() {
    return [
        {
            title: "Nombre del Proyecto",
            description: "Descripción breve...",
            technologies: ["HTML", "CSS", "JavaScript"],
            demoLink: "https://demo.com",  // opcional
            codeLink: "https://github.com/usuario/repo",  // opcional
            icon: "fas fa-laptop-code",
            image: "assets/images/proyecto1.jpg"  // opcional
        },
        // Agrega más proyectos aquí
    ];
}
```

### 5. Agregar Certificaciones

Busca la función `getCertificationsData()`:

```javascript
function getCertificationsData() {
    return [
        {
            name: "Nombre del Certificado",
            issuer: "Institución",
            logo: "fas fa-certificate",  // o ruta a imagen
            certificateImage: "assets/images/cert1.jpg"
        },
        // Agrega más certificaciones aquí
    ];
}
```

### 6. Agregar Capacitaciones/Cursos

Busca la función `getCapacitacionesData()`:

```javascript
function getCapacitacionesData() {
    return [
        {
            name: "Nombre del Curso",
            issuer: "Plataforma",
            logo: "fab fa-js",  // o ruta a imagen
            certificateImage: "assets/images/curso1.jpg"
        },
        // Agrega más cursos aquí
    ];
}
```

### 7. Actualizar Educación

Busca la función `getEducationData()`:

```javascript
function getEducationData() {
    return [
        {
            degree: "Título obtenido",
            institution: "Nombre de la institución",
            period: "2017 - 2021"
        },
        // Agrega más títulos aquí
    ];
}
```

## 🔗 Enlaces de Redes Sociales

Edita los enlaces en `index.html`:

```html
<!-- En el sidebar -->
<a href="https://github.com/tu-usuario" target="_blank">
<a href="https://codepen.io/tu-usuario" target="_blank">
<a href="https://www.linkedin.com/in/tu-perfil" target="_blank">
```

## 🎨 Personalizar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --accent-primary: #6366f1;    /* Color principal */
    --accent-secondary: #8b5cf6;  /* Color secundario */
    --bg-primary: #0a0e27;        /* Fondo principal */
    --bg-secondary: #1a1f3a;      /* Fondo secundario */
}
```

## 📦 Iconos Font Awesome

Busca iconos en: https://fontawesome.com/icons

Ejemplos de uso:
- `fab fa-github` - GitHub
- `fab fa-linkedin` - LinkedIn
- `fab fa-codepen` - CodePen
- `fas fa-code` - Código
- `fas fa-laptop-code` - Laptop con código
- `fab fa-laravel` - Laravel
- `fab fa-wordpress` - WordPress
- `fab fa-js` - JavaScript

## 🚀 Subir a GitHub Pages

1. **Crear repositorio en GitHub:**
   - Crea un repositorio llamado: `tu-usuario.github.io`

2. **Subir archivos:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git
   git push -u origin main
   ```

3. **Configurar GitHub Pages:**
   - Ve a Settings > Pages
   - Selecciona la rama `main` y carpeta `/root`
   - Guarda los cambios

4. **Visita tu sitio:**
   - `https://tu-usuario.github.io`

## 📱 Responsive Design

El sitio es completamente responsive:
- **Desktop:** Sidebar fijo a la izquierda
- **Tablet/Mobile:** Sidebar colapsable con botón hamburguesa

## 🔧 Mantenimiento

### Agregar nuevo contenido:

1. Abre `js/app.js`
2. Busca la función correspondiente (ej: `getProjectsData()`)
3. Agrega un nuevo objeto al array
4. Guarda y recarga la página

### Subir imágenes:

1. Coloca las imágenes en `assets/images/`
2. Usa rutas relativas: `assets/images/nombre.jpg`
3. Formatos recomendados: JPG, PNG, WebP
4. Tamaño recomendado:
   - Foto perfil: 400x400px
   - Proyectos: 800x600px
   - Certificados: Tamaño original

## 🐛 Solución de Problemas

**Las imágenes no se ven:**
- Verifica las rutas en `js/app.js`
- Asegúrate de que las imágenes estén en `assets/images/`

**El sidebar no se colapsa en móvil:**
- Limpia el caché del navegador
- Verifica que `js/app.js` esté cargando correctamente

**Los colores no cambian:**
- Edita las variables CSS en `css/styles.css`
- Limpia el caché del navegador

## 📄 Licencia

© 2025 Luis Alberto Quino Manrique. Todos los derechos reservados.

## 📞 Contacto

- **Email:** alberto.1203@hotmail.com
- **Teléfono:** +57 304 248 3977
- **GitHub:** https://github.com/luisalbertoquino
- **Ubicación:** Neiva, Colombia

---

**¡Disfruta tu nuevo portafolio profesional! 🚀**

