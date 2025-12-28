// ========================================
// FIREBASE DATA LOADER - FRONTEND
// ========================================
// Este script carga dinámicamente los datos desde Firebase
// y los inyecta en el portafolio

class PortfolioFirebaseLoader {
  constructor() {
    this.db = firebase.firestore();
    // NO usamos Firebase Storage - archivos en GitHub
    // this.storage = firebase.storage();
  }

  /**
   * Inicia la carga de todos los datos
   */
  async loadAll() {
    try {
      await Promise.all([
        this.loadProfile(),
        this.loadEducation(),
        this.loadExperience(),
        this.loadProjects(),
        this.loadCertifications(),
        this.loadCourses(),
        this.loadServices()
      ]);

      console.log('✅ Todos los datos cargados desde Firebase');
    } catch (error) {
      console.error('❌ Error al cargar datos:', error);
      // Fallback: mostrar datos estáticos si Firebase falla
      console.warn('⚠️ Usando datos estáticos como respaldo');
    }
  }

  /**
   * Carga el perfil general
   */
  async loadProfile() {
    const profile = await firebaseService.getProfile();

    if (profile) {
      // ==================== INFORMACIÓN BÁSICA ====================

      // Actualizar foto de perfil
      if (profile.profileImage) {
        const profileImgs = document.querySelectorAll('#profileImage, .about-image img, .profile-avatar');
        profileImgs.forEach(img => img.src = profile.profileImage);
      }

      // Actualizar nombre en hero
      const signatureName = document.getElementById('signatureName');
      if (signatureName) {
        signatureName.textContent = profile.fullName || 'Luis Alberto Quino';
        // Reiniciar animación de firma después de actualizar el nombre
        if (typeof initSignatureAnimation === 'function') {
          initSignatureAnimation();
        }
      }

      // Actualizar título profesional
      const profileTitle = document.querySelector('.profile-title');
      if (profileTitle) profileTitle.innerHTML = profile.title || 'Ingeniero de Sistemas';

      // ==================== HERO SECTION ====================

      // Hero badge de disponibilidad
      const heroBadge = document.querySelector('.hero-badge');
      if (heroBadge) {
        if (profile.heroBadgeVisible !== false && profile.heroBadge) {
          heroBadge.textContent = profile.heroBadge;
          heroBadge.style.display = 'inline-flex';
        } else if (profile.heroBadgeVisible === false) {
          heroBadge.style.display = 'none';
        }
      }

      // Hero subtítulo
      const heroSubtitle = document.querySelector('.hero-subtitle');
      if (heroSubtitle) {
        heroSubtitle.textContent = profile.heroSubtitle || profile.title || 'Ingeniero de Sistemas';
      }

      // Hero descripción larga
      const heroDescription = document.querySelector('.hero-description');
      if (heroDescription) {
        heroDescription.textContent = profile.heroDescription || profile.description || '';
      }

      // ==================== ESTADÍSTICAS ====================

      const statNumbers = document.querySelectorAll('.stat-number');
      if (statNumbers.length >= 4) {
        if (profile.yearsExperience !== undefined) {
          statNumbers[0].textContent = profile.yearsExperience + '+';
        }
        if (profile.projectsCompleted !== undefined) {
          statNumbers[1].textContent = profile.projectsCompleted + '+';
        }
        if (profile.happyClients !== undefined) {
          statNumbers[2].textContent = profile.happyClients + '+';
        }
        if (profile.totalCertifications !== undefined) {
          statNumbers[3].textContent = profile.totalCertifications + '+';
        }
      }

      // ==================== CONTACTO ====================

      // Actualizar información de contacto
      const infoValues = document.querySelectorAll('.info-value');
      if (infoValues.length >= 4) {
        if (profile.email) infoValues[0].textContent = profile.email;
        if (profile.phone) infoValues[1].textContent = profile.phone;
        if (profile.location) infoValues[2].textContent = profile.location;
        if (profile.website) {
          const link = infoValues[3].querySelector('a');
          if (link) {
            link.href = profile.website;
            link.textContent = profile.website.replace('https://', '').replace('http://', '');
          }
        }
      }

      // Actualizar CV para descarga
      if (profile.cvUrl) {
        const cvButtons = document.querySelectorAll('.btn-download, a[href="#cv"]');
        cvButtons.forEach(btn => {
          btn.onclick = (e) => {
            e.preventDefault();
            window.open(profile.cvUrl, '_blank');
          };
        });
      }

      // ==================== REDES SOCIALES ====================

      this.updateSocialLinks(profile);
    }
  }

  /**
   * Actualiza los enlaces de redes sociales
   */
  updateSocialLinks(profile) {
    const socialData = {
      github: { url: profile.socialGithub, icon: 'fa-github', title: 'GitHub' },
      linkedin: { url: profile.socialLinkedin, icon: 'fa-linkedin', title: 'LinkedIn' },
      whatsapp: {
        url: profile.socialWhatsapp ? `https://wa.me/${profile.socialWhatsapp}` : null,
        icon: 'fa-whatsapp',
        title: 'WhatsApp'
      },
      codepen: { url: profile.socialCodepen, icon: 'fa-codepen', title: 'CodePen' },
      twitter: { url: profile.socialTwitter, icon: 'fa-twitter', title: 'Twitter/X' },
      facebook: { url: profile.socialFacebook, icon: 'fa-facebook', title: 'Facebook' },
      instagram: { url: profile.socialInstagram, icon: 'fa-instagram', title: 'Instagram' },
      youtube: { url: profile.socialYoutube, icon: 'fa-youtube', title: 'YouTube' }
    };

    // Construir HTML para redes sociales
    let socialHTML = '';
    Object.values(socialData).forEach(social => {
      if (social.url) {
        socialHTML += `
          <a href="${social.url}" target="_blank" title="${social.title}" class="social-icon">
            <i class="fab ${social.icon}"></i>
          </a>
        `;
      }
    });

    // Actualizar redes sociales en header
    const headerSocial = document.querySelector('.social-icons');
    if (headerSocial && socialHTML) {
      headerSocial.innerHTML = socialHTML;
    }

    // Actualizar redes sociales en footer
    const footerSocial = document.querySelector('.footer-social');
    if (footerSocial && socialHTML) {
      footerSocial.innerHTML = socialHTML;
    }

    // Actualizar botón de WhatsApp en hero
    if (profile.socialWhatsapp) {
      const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
      whatsappButtons.forEach(btn => {
        btn.href = `https://wa.me/${profile.socialWhatsapp}`;
      });
    }
  }

  /**
   * Carga la educación
   */
  async loadEducation() {
    const education = await firebaseService.getEducation();
    const container = document.getElementById('educationContainer');

    if (container && education.length > 0) {
      container.innerHTML = education.map(item => `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3>${item.degree}</h3>
              <span class="timeline-date">
                <i class="fas fa-calendar"></i>
                ${this.formatDate(item.startDate)} - ${this.formatDate(item.endDate)}
              </span>
            </div>
            <p class="timeline-company">${item.institution}</p>
            ${item.description ? `<p class="timeline-description">${item.description}</p>` : ''}
          </div>
        </div>
      `).join('');
    }
  }

  /**
   * Carga la experiencia laboral
   */
  async loadExperience() {
    const experience = await firebaseService.getExperience();
    const container = document.getElementById('experienceContainer');

    if (container && experience.length > 0) {
      container.innerHTML = experience.map(item => `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3>${item.position}</h3>
              <span class="timeline-date">
                <i class="fas fa-calendar"></i>
                ${this.formatDate(item.startDate)} - ${item.endDate ? this.formatDate(item.endDate) : 'Actualidad'}
              </span>
            </div>
            <p class="timeline-company">
              <i class="fas fa-building"></i> ${item.company}
            </p>
            <p class="timeline-description">${item.description}</p>
            ${item.technologies ? `
              <div class="timeline-skills">
                ${item.technologies.split(',').map(tech =>
                  `<span class="skill-tag">${tech.trim()}</span>`
                ).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      `).join('');
    }
  }

  /**
   * Carga los proyectos
   */
  async loadProjects() {
    const projects = await firebaseService.getProjects();
    const container = document.getElementById('projectsContainer');

    if (container && projects.length > 0) {
      // Actualizar contador de proyectos
      const projectsCount = document.getElementById('projectsCount');
      if (projectsCount) {
        this.animateCounter(projectsCount, projects.length);
      }

      container.innerHTML = projects.map(item => `
        <div class="project-card">
          ${item.image ? `
            <div class="project-image">
              <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
          ` : `
            <div class="project-image project-placeholder">
              <i class="fas fa-folder-open"></i>
            </div>
          `}
          <div class="project-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            ${item.technologies ? `
              <div class="project-tech">
                ${item.technologies.split(',').map(tech =>
                  `<span class="tech-badge">${tech.trim()}</span>`
                ).join('')}
              </div>
            ` : ''}
            <div class="project-links">
              ${item.url ? `
                <a href="${item.url}" target="_blank" class="project-link">
                  <i class="fas fa-external-link-alt"></i> Ver proyecto
                </a>
              ` : ''}
              ${item.github ? `
                <a href="${item.github}" target="_blank" class="project-link">
                  <i class="fab fa-github"></i> Código
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  /**
   * Carga las certificaciones
   */
  async loadCertifications() {
    const certifications = await firebaseService.getCertifications();
    const container = document.getElementById('certificationsContainer');

    if (container && certifications.length > 0) {
      // Actualizar contador
      const certsCount = document.getElementById('certificationsCount');
      if (certsCount) {
        this.animateCounter(certsCount, certifications.length);
      }

      container.innerHTML = certifications.map(item => `
        <div class="certification-card">
          ${item.imageUrl ? `
            <div class="cert-image">
              <img src="${item.imageUrl}" alt="${item.name}" loading="lazy">
            </div>
          ` : `
            <div class="cert-image cert-placeholder">
              <i class="fas fa-certificate"></i>
            </div>
          `}
          <div class="cert-info">
            <h3>${item.name}</h3>
            <p class="cert-issuer">
              <i class="fas fa-university"></i> ${item.issuer}
            </p>
            <p class="cert-date">
              <i class="fas fa-calendar"></i> ${this.formatDate(item.date)}
            </p>
            <div class="cert-actions">
              ${item.fileUrl ? `
                <a href="${item.fileUrl}" download class="cert-link cert-download">
                  <i class="fas fa-download"></i> Descargar
                </a>
              ` : ''}
              ${item.verificationUrl ? `
                <a href="${item.verificationUrl}" target="_blank" class="cert-link cert-verify">
                  <i class="fas fa-check-circle"></i> Verificar
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  /**
   * Carga los cursos (Platzi, etc.)
   */
  async loadCourses() {
    const courses = await firebaseService.getCourses();
    const container = document.getElementById('capacitacionesContainer');

    if (container && courses.length > 0) {
      container.innerHTML = courses.map(item => `
        <div class="certification-card course-card">
          ${item.imageUrl ? `
            <div class="cert-image">
              <img src="${item.imageUrl}" alt="${item.name}" loading="lazy">
            </div>
          ` : `
            <div class="cert-image cert-placeholder">
              <i class="fas fa-book-reader"></i>
            </div>
          `}
          <div class="cert-info">
            <h3>${item.name}</h3>
            <p class="cert-issuer">
              <i class="fas fa-graduation-cap"></i> ${item.platform}
            </p>
            <p class="cert-date">
              <i class="fas fa-calendar"></i> Completado: ${this.formatDate(item.completedDate)}
            </p>
            ${item.skills ? `
              <div class="course-skills">
                ${item.skills.split(',').map(skill =>
                  `<span class="skill-tag">${skill.trim()}</span>`
                ).join('')}
              </div>
            ` : ''}
            ${item.certificateUrl ? `
              <div class="cert-actions">
                <a href="${item.certificateUrl}" download class="cert-link cert-download">
                  <i class="fas fa-download"></i> Descargar
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      `).join('');
    }
  }

  /**
   * Carga los servicios desde Firebase
   */
  async loadServices() {
    const services = await firebaseService.getServices();
    const container = document.getElementById('servicesContainer');

    if (container && services && services.length > 0) {
      container.innerHTML = services.map(service => `
        <div class="service-card">
          <div class="service-icon">
            <i class="${service.icon}"></i>
          </div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-description">${service.description}</p>
        </div>
      `).join('');
    }
  }

  /**
   * Formatea una fecha de YYYY-MM-DD a formato legible
   */
  formatDate(dateString) {
    if (!dateString) return '';

    const date = new Date(dateString + 'T00:00:00');
    const months = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  /**
   * Anima un contador de 0 al número objetivo
   */
  animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 20);
  }
}

// Inicializar el loader cuando Firebase esté listo
let portfolioLoader;

// Esperar a que Firebase se inicialice
window.addEventListener('DOMContentLoaded', () => {
  // Esperar un momento para asegurar que Firebase esté inicializado
  setTimeout(async () => {
    if (typeof firebase !== 'undefined' && typeof firebaseService !== 'undefined') {
      portfolioLoader = new PortfolioFirebaseLoader();
      await portfolioLoader.loadAll();
    } else {
      console.warn('⚠️ Firebase no está configurado. Usando datos estáticos.');
    }
  }, 500);
});
