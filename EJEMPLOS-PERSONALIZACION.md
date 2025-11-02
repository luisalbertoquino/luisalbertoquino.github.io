# 🎨 Ejemplos de Personalización

## 1. Cambiar Colores del Tema

### Tema Morado/Púrpura:
```css
/* En css/styles.css, reemplaza las variables: */
:root {
    --accent-primary: #8b5cf6;
    --accent-secondary: #a78bfa;
}
```

### Tema Azul Cyan:
```css
:root {
    --accent-primary: #06b6d4;
    --accent-secondary: #0891b2;
}
```

### Tema Verde:
```css
:root {
    --accent-primary: #10b981;
    --accent-secondary: #059669;
}
```

### Tema Naranja:
```css
:root {
    --accent-primary: #f97316;
    --accent-secondary: #ea580c;
}
```

### Tema Rojo:
```css
:root {
    --accent-primary: #ef4444;
    --accent-secondary: #dc2626;
}
```

---

## 2. Ejemplos de Proyectos

### Proyecto E-commerce:
```javascript
{
    title: "Tienda Online Fashion Store",
    description: "E-commerce completo con carrito de compras, pasarela de pagos y panel de administración.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    demoLink: "https://demo-tienda.com",
    codeLink: "https://github.com/luisalbertoquino/ecommerce",
    icon: "fas fa-shopping-cart",
    image: "assets/images/proyecto-ecommerce.jpg"
}
```

### Proyecto SaaS:
```javascript
{
    title: "Sistema de Gestión Empresarial",
    description: "Plataforma SaaS para gestión de inventarios, ventas y reportes en tiempo real.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoLink: "https://demo-saas.com",
    codeLink: "https://github.com/luisalbertoquino/saas",
    icon: "fas fa-chart-line",
    image: "assets/images/proyecto-saas.jpg"
}
```

### Proyecto WordPress:
```javascript
{
    title: "Plugin de Automatización WP",
    description: "Plugin personalizado para automatizar publicaciones en redes sociales desde WordPress.",
    technologies: ["PHP", "WordPress", "JavaScript", "API REST"],
    demoLink: null,
    codeLink: "https://github.com/luisalbertoquino/wp-plugin",
    icon: "fab fa-wordpress",
    image: "assets/images/proyecto-wp.jpg"
}
```

### Proyecto App Móvil:
```javascript
{
    title: "App de Delivery",
    description: "Aplicación móvil para pedidos de comida con tracking en tiempo real y pagos integrados.",
    technologies: ["React Native", "Firebase", "Node.js"],
    demoLink: "https://demo-app.com",
    codeLink: "https://github.com/luisalbertoquino/delivery-app",
    icon: "fas fa-mobile-alt",
    image: "assets/images/proyecto-app.jpg"
}
```

---

## 3. Ejemplos de Certificaciones

### Certificación de Udemy:
```javascript
{
    name: "Desarrollo Web Completo con HTML, CSS y JavaScript",
    issuer: "Udemy",
    logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
    certificateImage: "assets/images/cert-udemy-webdev.jpg"
}
```

### Certificación de freeCodeCamp:
```javascript
{
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    logo: "fas fa-certificate",
    certificateImage: "assets/images/cert-freecodecamp.jpg"
}
```

### Certificación de Google:
```javascript
{
    name: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    logo: "fab fa-google",
    certificateImage: "assets/images/cert-google.jpg"
}
```

### Certificación de Microsoft:
```javascript
{
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    logo: "fab fa-microsoft",
    certificateImage: "assets/images/cert-microsoft.jpg"
}
```

---

## 4. Ejemplos de Capacitaciones/Cursos

### Curso de Laravel:
```javascript
{
    name: "Laravel Avanzado: APIs RESTful",
    issuer: "Platzi",
    logo: "fab fa-laravel",
    certificateImage: "assets/images/curso-laravel.jpg"
}
```

### Curso de React:
```javascript
{
    name: "React: De Cero a Experto (Hooks y MERN)",
    issuer: "Udemy",
    logo: "fab fa-react",
    certificateImage: "assets/images/curso-react.jpg"
}
```

### Curso de Python:
```javascript
{
    name: "Python para Ciencia de Datos",
    issuer: "DataCamp",
    logo: "fab fa-python",
    certificateImage: "assets/images/curso-python.jpg"
}
```

### Curso de Git:
```javascript
{
    name: "Git y GitHub: Dominio Completo",
    issuer: "Udemy",
    logo: "fab fa-git-alt",
    certificateImage: "assets/images/curso-git.jpg"
}
```

---

## 5. Iconos Útiles de Font Awesome

### Lenguajes y Frameworks:
```
fab fa-html5       - HTML5
fab fa-css3-alt    - CSS3
fab fa-js          - JavaScript
fab fa-react       - React
fab fa-vue         - Vue.js
fab fa-angular     - Angular
fab fa-node        - Node.js
fab fa-php         - PHP
fab fa-python      - Python
fab fa-java        - Java
fab fa-laravel     - Laravel
fab fa-wordpress   - WordPress
fab fa-bootstrap   - Bootstrap
```

### Herramientas:
```
fab fa-github      - GitHub
fab fa-git-alt     - Git
fab fa-docker      - Docker
fab fa-aws         - AWS
fab fa-npm         - NPM
fab fa-figma       - Figma
fab fa-slack       - Slack
```

### General:
```
fas fa-laptop-code     - Desarrollo
fas fa-mobile-alt      - Móvil
fas fa-database        - Base de datos
fas fa-server          - Servidor
fas fa-chart-line      - Analytics
fas fa-shopping-cart   - E-commerce
fas fa-globe           - Web
fas fa-shield-alt      - Seguridad
fas fa-rocket          - Startup/Launch
fas fa-code            - Código
fas fa-terminal        - Terminal
fas fa-cogs            - Configuración
```

---

## 6. Cambiar Fuente del Texto

### Usar Roboto:
```html
<!-- En index.html, reemplaza el link de Google Fonts: -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
/* En css/styles.css: */
body {
    font-family: 'Roboto', sans-serif;
}
```

### Usar Poppins:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Usar Montserrat:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
body {
    font-family: 'Montserrat', sans-serif;
}
```

---

## 7. Cambiar Velocidad del Preloader

En `js/app.js`:
```javascript
// Línea 4 - Para que cargue más rápido (1.5 segundos):
animationDuration: 1500,

// Para que cargue más lento (4 segundos):
animationDuration: 4000,
```

---

## 8. Texto del Hero (Página Principal)

En `index.html`, busca la sección `.hero-section` y edita:

```html
<h1 class="hero-title">
    Hola, soy <span class="gradient-text">Tu Nombre</span>
</h1>
<p class="hero-subtitle">
    Tu título profesional aquí
</p>
<p class="hero-description">
    Tu descripción personalizada...
</p>
```

---

## 9. Agregar Sección Nueva

Si quieres agregar una sección completamente nueva (ej: "Testimonios"):

1. En `index.html`, agrega:
```html
<section id="testimonios" class="section">
    <div class="container">
        <h2 class="section-title">
            <i class="fas fa-quote-left"></i>
            Testimonios
        </h2>
        <div id="testimoniosContainer">
            <!-- Contenido aquí -->
        </div>
    </div>
</section>
```

2. En el sidebar, agrega el link:
```html
<a href="#testimonios" class="nav-item">
    <i class="fas fa-quote-left"></i>
    <span>Testimonios</span>
</a>
```

3. En `js/app.js`, crea la función de datos y renderizado.

---

## 10. WhatsApp - Cambiar Mensaje

En `index.html`, busca los enlaces de WhatsApp y cambia el texto:

```html
<!-- Mensaje actual: -->
?text=Hola%20Luis,%20estoy%20interesado%20en%20tu%20perfil%20profesional

<!-- Personaliza cambiando después de ?text= -->
<!-- Nota: Los espacios se reemplazan con %20 -->
```

Ejemplos:
- `?text=Hola!%20Vi%20tu%20portfolio%20y%20me%20encantó`
- `?text=Hola%20Luis!%20Quiero%20contratar%20tus%20servicios`
- `?text=Vi%20tu%20perfil%20en%20LinkedIn%20y%20me%20interesa%20charlar`

---

**💡 Tip:** Guarda una copia de estos ejemplos para referencia futura cuando hagas cambios!
