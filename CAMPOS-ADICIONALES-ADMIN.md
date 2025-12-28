# 📝 Campos Adicionales para el Panel Admin

## Campos que se deben agregar al formulario de perfil

Estos son los campos nuevos que necesitas agregar al `admin/index.html` en la sección de "Perfil General":

### 1. HERO SECTION (Sección de inicio)

```html
<!-- Agregar después de la Descripción Breve -->
<h3><i class="fas fa-home"></i> Sección Hero (Inicio)</h3>
<div class="form-grid">
    <div class="form-group">
        <label>Badge de Disponibilidad</label>
        <input type="text" name="heroBadge" placeholder="Disponible para proyectos">
    </div>
    <div class="form-group">
        <label>Mostrar Badge</label>
        <select name="heroBadgeVisible">
            <option value="true">Sí</option>
            <option value="false">No</option>
        </select>
    </div>
    <div class="form-group full-width">
        <label>Subtítulo Hero</label>
        <input type="text" name="heroSubtitle" placeholder="Ingeniero de Sistemas Especialista en Desarrollo Web">
    </div>
    <div class="form-group full-width">
        <label>Descripción Hero (Larga)</label>
        <textarea name="heroDescription" rows="3" placeholder="Desarrollo soluciones web innovadoras..."></textarea>
    </div>
</div>
```

### 2. ESTADÍSTICAS

```html
<h3><i class="fas fa-chart-bar"></i> Estadísticas</h3>
<div class="form-grid">
    <div class="form-group">
        <label>Años de Experiencia</label>
        <input type="number" name="yearsExperience" placeholder="3">
    </div>
    <div class="form-group">
        <label>Proyectos Completados</label>
        <input type="number" name="projectsCompleted" placeholder="50">
    </div>
    <div class="form-group">
        <label>Clientes Satisfechos</label>
        <input type="number" name="happyClients" placeholder="30">
    </div>
    <div class="form-group">
        <label>Certificaciones</label>
        <input type="number" name="certifications" placeholder="10">
    </div>
</div>
```

### 3. CV URL

```html
<!-- Agregar en la sección de contacto -->
<div class="form-group full-width">
    <label>CV URL (PDF)</label>
    <input type="text" name="cvUrl" placeholder="https://luisalbertoquino.github.io/assets/files/cv/CV-Luis-Quino.pdf">
    <small>💡 Sube tu CV a <code>assets/files/cv/</code> y copia la URL aquí</small>
</div>
```

### 4. REDES SOCIALES

```html
<h3><i class="fas fa-share-alt"></i> Redes Sociales</h3>
<div class="form-grid">
    <div class="form-group">
        <label><i class="fab fa-github"></i> GitHub</label>
        <input type="url" name="socialGithub" placeholder="https://github.com/luisalbertoquino">
    </div>
    <div class="form-group">
        <label><i class="fab fa-linkedin"></i> LinkedIn</label>
        <input type="url" name="socialLinkedin" placeholder="https://www.linkedin.com/in/tu-perfil">
    </div>
    <div class="form-group">
        <label><i class="fab fa-whatsapp"></i> WhatsApp</label>
        <input type="tel" name="socialWhatsapp" placeholder="573042483977">
        <small>Solo números (sin +)</small>
    </div>
    <div class="form-group">
        <label><i class="fab fa-codepen"></i> CodePen</label>
        <input type="url" name="socialCodepen" placeholder="https://codepen.io/tu-usuario">
    </div>
    <div class="form-group">
        <label><i class="fab fa-twitter"></i> Twitter/X</label>
        <input type="url" name="socialTwitter" placeholder="https://twitter.com/tu-usuario">
    </div>
    <div class="form-group">
        <label><i class="fab fa-facebook"></i> Facebook</label>
        <input type="url" name="socialFacebook" placeholder="https://facebook.com/tu-usuario">
    </div>
    <div class="form-group">
        <label><i class="fab fa-instagram"></i> Instagram</label>
        <input type="url" name="socialInstagram" placeholder="https://instagram.com/tu-usuario">
    </div>
    <div class="form-group">
        <label><i class="fab fa-youtube"></i> YouTube</label>
        <input type="url" name="socialYoutube" placeholder="https://youtube.com/@tu-canal">
    </div>
</div>
```

## Estructura en Firebase (Profile Document)

Estos campos se deben almacenar en el documento `profile/main` en Firestore:

```javascript
{
  // Campos existentes
  fullName: "Luis Alberto Quino Manrique",
  title: "Ingeniero de Sistemas",
  description: "Descripción breve...",
  email: "alberto.1203@hotmail.com",
  phone: "+57 304 248 3977",
  location: "Neiva, Huila, Colombia",
  website: "https://luisalbertoquino.github.io",
  profileImage: "https://luisalbertoquino.github.io/assets/files/images/profile.jpg",

  // NUEVOS CAMPOS - Hero Section
  heroBadge: "Disponible para proyectos",
  heroBadgeVisible: true,
  heroSubtitle: "Ingeniero de Sistemas Especialista en Desarrollo Web",
  heroDescription: "Desarrollo soluciones web innovadoras combinando desarrollo full-stack con inteligencia artificial. Con más de 3 años de experiencia transformando ideas en productos digitales.",

  // NUEVOS CAMPOS - Estadísticas
  yearsExperience: 3,
  projectsCompleted: 50,
  happyClients: 30,
  certifications: 10,

  // NUEVOS CAMPOS - CV
  cvUrl: "https://luisalbertoquino.github.io/assets/files/cv/CV-Luis-Quino.pdf",

  // NUEVOS CAMPOS - Redes Sociales
  socialGithub: "https://github.com/luisalbertoquino",
  socialLinkedin: "https://www.linkedin.com/in/tu-perfil",
  socialWhatsapp: "573042483977",
  socialCodepen: "https://codepen.io/tu-usuario",
  socialTwitter: "",
  socialFacebook: "",
  socialInstagram: "",
  socialYoutube: ""
}
```

## Actualizar firebase-loader.js

Necesitas actualizar el método `loadProfile()` en `js/firebase/firebase-loader.js` para usar estos nuevos campos:

```javascript
async loadProfile() {
  try {
    const profile = await firebaseService.getProfile();
    if (!profile) return;

    // Nombre y título
    const nameEl = document.getElementById('signatureName');
    if (nameEl) nameEl.textContent = profile.fullName || 'Luis Alberto Quino';

    // Hero section
    const heroSubtitleEl = document.querySelector('.hero-subtitle');
    if (heroSubtitleEl) heroSubtitleEl.textContent = profile.heroSubtitle || profile.title;

    const heroDescriptionEl = document.querySelector('.hero-description');
    if (heroDescriptionEl) heroDescriptionEl.textContent = profile.heroDescription || profile.description;

    // Hero badge
    const heroBadgeEl = document.querySelector('.hero-badge');
    if (heroBadgeEl && profile.heroBadgeVisible !== false) {
      heroBadgeEl.textContent = profile.heroBadge || 'Disponible para proyectos';
    } else if (heroBadgeEl) {
      heroBadgeEl.style.display = 'none';
    }

    // Estadísticas
    const stats = document.querySelectorAll('.stat-number');
    if (stats[0]) stats[0].textContent = (profile.yearsExperience || 3) + '+';
    if (stats[1]) stats[1].textContent = (profile.projectsCompleted || 50) + '+';
    if (stats[2]) stats[2].textContent = (profile.happyClients || 30) + '+';
    if (stats[3]) stats[3].textContent = (profile.certifications || 10) + '+';

    // Redes sociales
    this.updateSocialLinks(profile);

    // CV URL
    const cvButtons = document.querySelectorAll('a[href="#cv"]');
    cvButtons.forEach(btn => {
      if (profile.cvUrl) {
        btn.href = profile.cvUrl;
        btn.target = '_blank';
      }
    });

    // Foto de perfil
    const profileImages = document.querySelectorAll('.profile-avatar, .about-image img');
    profileImages.forEach(img => {
      if (profile.profileImage) {
        img.src = profile.profileImage;
      }
    });

  } catch (error) {
    console.error('Error loading profile:', error);
  }
}

updateSocialLinks(profile) {
  const socialLinks = {
    github: profile.socialGithub,
    linkedin: profile.socialLinkedin,
    whatsapp: profile.socialWhatsapp ? `https://wa.me/${profile.socialWhatsapp}` : null,
    codepen: profile.socialCodepen,
    twitter: profile.socialTwitter,
    facebook: profile.socialFacebook,
    instagram: profile.socialInstagram,
    youtube: profile.socialYoutube
  };

  // Actualizar links en header
  const headerSocial = document.querySelector('.social-icons');
  if (headerSocial && Object.values(socialLinks).some(link => link)) {
    let html = '';
    if (socialLinks.github) html += `<a href="${socialLinks.github}" target="_blank" title="GitHub" class="social-icon"><i class="fab fa-github"></i></a>`;
    if (socialLinks.codepen) html += `<a href="${socialLinks.codepen}" target="_blank" title="CodePen" class="social-icon"><i class="fab fa-codepen"></i></a>`;
    if (socialLinks.linkedin) html += `<a href="${socialLinks.linkedin}" target="_blank" title="LinkedIn" class="social-icon"><i class="fab fa-linkedin"></i></a>`;
    if (socialLinks.whatsapp) html += `<a href="${socialLinks.whatsapp}" target="_blank" title="WhatsApp" class="social-icon"><i class="fab fa-whatsapp"></i></a>`;
    if (socialLinks.twitter) html += `<a href="${socialLinks.twitter}" target="_blank" title="Twitter" class="social-icon"><i class="fab fa-twitter"></i></a>`;
    if (socialLinks.facebook) html += `<a href="${socialLinks.facebook}" target="_blank" title="Facebook" class="social-icon"><i class="fab fa-facebook"></i></a>`;
    if (socialLinks.instagram) html += `<a href="${socialLinks.instagram}" target="_blank" title="Instagram" class="social-icon"><i class="fab fa-instagram"></i></a>`;
    if (socialLinks.youtube) html += `<a href="${socialLinks.youtube}" target="_blank" title="YouTube" class="social-icon"><i class="fab fa-youtube"></i></a>`;

    headerSocial.innerHTML = html;
  }

  // Actualizar links en footer
  const footerSocial = document.querySelector('.footer-social');
  if (footerSocial && Object.values(socialLinks).some(link => link)) {
    footerSocial.innerHTML = headerSocial.innerHTML;
  }
}
```

## Pasos para Implementar

1. ✅ Ya creé la guía de archivos locales
2. ⏳ Actualizar `admin/index.html` con los nuevos campos del formulario
3. ⏳ Actualizar `admin/admin-app.js` para guardar los nuevos campos
4. ⏳ Actualizar `js/firebase/firebase-loader.js` para cargar los nuevos campos
5. ⏳ Actualizar datos en Firebase con los nuevos campos

**¿Quieres que haga estos cambios automáticamente o prefieres revisarlos antes?**
