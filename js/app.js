// ==================== CONFIGURATION ====================
const CONFIG = {
    animationDuration: 2500,
    countUpDuration: 2000,
    dataPath: 'data/'
};

// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, CONFIG.animationDuration);
});

// ==================== SIDEBAR FUNCTIONALITY ====================
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mainContent = document.getElementById('mainContent');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('expanded');
});

// Close sidebar on nav click (mobile)
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    });
});

// ==================== SMOOTH SCROLL & ACTIVE NAV ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ==================== DATA LOADING ====================
let allData = {
    services: [],
    experience: [],
    projects: [],
    education: [],
    certifications: [],
    capacitaciones: []
};

// Load all data
async function loadData() {
    try {
        // In production, load from JSON files
        // For now, using embedded data
        allData = {
            services: getServicesData(),
            experience: getExperienceData(),
            projects: getProjectsData(),
            education: getEducationData(),
            certifications: getCertificationsData(),
            capacitaciones: getCapacitacionesData()
        };
        
        renderAllSections();
        updateStats();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// ==================== RENDER FUNCTIONS ====================
function renderAllSections() {
    renderServices();
    renderExperience();
    renderProjects();
    renderEducation();
    renderCertifications();
    renderCapacitaciones();
}

function renderServices() {
    const container = document.getElementById('servicesContainer');
    container.innerHTML = allData.services.map(service => `
        <div class="service-card">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experienceContainer');
    container.innerHTML = allData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-card">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-title">${exp.position}</h3>
                        <p class="timeline-company">${exp.company}</p>
                    </div>
                    <div class="timeline-date">
                        <i class="far fa-calendar-alt"></i>
                        ${exp.period}
                    </div>
                </div>
                <div class="timeline-content">
                    <ul>
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = allData.projects.map(project => `
        <div class="project-card" onclick='openModal("${project.image || ''}", "${project.title}")'>
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : `<i class="${project.icon}"></i>`}
                <div class="project-overlay">
                    <button class="view-btn">
                        <i class="fas fa-eye"></i>
                        Ver más
                    </button>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demoLink ? `
                        <a href="${project.demoLink}" class="project-link" target="_blank" onclick="event.stopPropagation()">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                    ` : ''}
                    ${project.codeLink ? `
                        <a href="${project.codeLink}" class="project-link" target="_blank" onclick="event.stopPropagation()">
                            <i class="fab fa-github"></i> Código
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('educationContainer');
    container.innerHTML = allData.education.map(edu => `
        <div class="timeline-item">
            <div class="timeline-card">
                <div class="timeline-header">
                    <div>
                        <h3 class="timeline-title">${edu.degree}</h3>
                        <p class="timeline-company">${edu.institution}</p>
                    </div>
                    <div class="timeline-date">
                        <i class="far fa-calendar-alt"></i>
                        ${edu.period}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCertifications() {
    const container = document.getElementById('certificationsContainer');
    container.innerHTML = allData.certifications.map(cert => `
        <div class="cert-card" onclick='openModal("${cert.certificateImage}", "${cert.name}")'>
            <div class="cert-logo">
                ${cert.logo.startsWith('http') || cert.logo.startsWith('assets') ? 
                    `<img src="${cert.logo}" alt="${cert.issuer}">` : 
                    `<i class="${cert.logo}"></i>`}
            </div>
            <div class="cert-name">${cert.name}</div>
            <div class="cert-issuer">${cert.issuer}</div>
        </div>
    `).join('');
}

function renderCapacitaciones() {
    const container = document.getElementById('capacitacionesContainer');
    container.innerHTML = allData.capacitaciones.map(cap => `
        <div class="cert-card" onclick='openModal("${cap.certificateImage}", "${cap.name}")'>
            <div class="cert-logo">
                ${cap.logo.startsWith('http') || cap.logo.startsWith('assets') ? 
                    `<img src="${cap.logo}" alt="${cap.issuer}">` : 
                    `<i class="${cap.logo}"></i>`}
            </div>
            <div class="cert-name">${cap.name}</div>
            <div class="cert-issuer">${cap.issuer}</div>
        </div>
    `).join('');
}

// ==================== MODAL ====================
let currentModalImage = '';

function openModal(imageUrl, title) {
    if (!imageUrl) {
        alert('No hay imagen disponible para este elemento');
        return;
    }
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    currentModalImage = imageUrl;
    modalImage.src = imageUrl;
    modalImage.alt = title;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function downloadCurrentItem() {
    if (currentModalImage) {
        const link = document.createElement('a');
        link.href = currentModalImage;
        link.download = currentModalImage.split('/').pop() || 'documento.jpg';
        link.click();
    }
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ==================== PDF DOWNLOAD ====================
function downloadPDF() {
    // Enlace directo a tu archivo PDF
    // Coloca tu CV en: assets/cv-luis-quino.pdf
    const pdfUrl = 'assets/cv-luis-quino.pdf';
    
    // Intenta abrir el PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV-Luis-Alberto-Quino-Manrique.pdf';
    link.target = '_blank';
    
    // Verificar si el archivo existe
    fetch(pdfUrl, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                link.click();
            } else {
                // Si no existe el PDF, usar impresión del navegador como alternativa
                alert('Coloca tu CV en PDF en la carpeta: assets/cv-luis-quino.pdf\n\nMientras tanto, se abrirá la vista de impresión.');
                window.print();
            }
        })
        .catch(() => {
            // Si hay error, usar impresión del navegador
            alert('Coloca tu CV en PDF en la carpeta: assets/cv-luis-quino.pdf\n\nMientras tanto, se abrirá la vista de impresión.');
            window.print();
        });
}

// ==================== STATS COUNTER ====================
function updateStats() {
    const projectsCount = allData.projects.length;
    const certificationsCount = allData.certifications.length + allData.capacitaciones.length;
    
    animateCounter('projectsCount', projectsCount);
    animateCounter('certificationsCount', certificationsCount);
}

function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let current = 0;
    const increment = target / (CONFIG.countUpDuration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== DATA DEFINITIONS ====================
function getServicesData() {
    return [
        {
            icon: "fab fa-laravel",
            title: "Desarrollo de Módulos en Laravel",
            description: "Desarrollo módulos personalizados en Laravel para optimizar la funcionalidad y escalabilidad de tu sistema. Me especializo en crear soluciones eficientes y seguras adaptadas a tus necesidades específicas."
        },
        {
            icon: "fas fa-shopping-cart",
            title: "Diseño y Desarrollo de E-commerce",
            description: "Creo tiendas en línea personalizadas, ofreciendo una experiencia de compra segura y fácil. Realizo integraciones con sistemas de pago y plataformas de envío para que tu tienda esté lista para operar al más alto nivel."
        },
        {
            icon: "fab fa-wordpress",
            title: "Optimización y Mantenimiento de WordPress",
            description: "Realizo mantenimiento regular de sitios en WordPress, incluyendo la actualización de plugins, optimización de bases de datos y mejoras en el rendimiento, garantizando una experiencia web fluida y rápida."
        },
        {
            icon: "fas fa-laptop-code",
            title: "Desarrollo de Sistemas a Medida y Páginas Web Corporativas",
            description: "Desarrollo aplicaciones y sistemas personalizados, además de crear páginas web corporativas para fortalecer tu marca en línea. Cada proyecto está diseñado para ser funcional, estéticamente atractivo y alineado con la visión de tu empresa."
        },
        {
            icon: "fas fa-search-dollar",
            title: "Optimización SEO y Marketing Digital",
            description: "Me encargo de mejorar la visibilidad de tu sitio web en los motores de búsqueda mediante estrategias SEO avanzadas. Además, implemento campañas de marketing digital para aumentar el tráfico web y convertir visitantes en clientes."
        },
        {
            icon: "fas fa-digital-tachograph",
            title: "Consultoría en Transformación Digital",
            description: "Te ofrezco asesoría estratégica para la transformación digital de tu empresa, implementando soluciones tecnológicas que optimicen la eficiencia y productividad de tus procesos de negocio. Juntos mejoraremos la competitividad de tu organización."
        }
    ];
}

function getExperienceData() {
    return [
        {
            position: "Webmaster",
            company: "Fundación Universitaria Navarra UNINAVARRA",
            period: "Mayo 2022 - Actual",
            responsibilities: [
                "Administración y mantenimiento del servidor en la nube donde se alojan las páginas web, dominios y configuraciones.",
                "Desarrollo de un plugin de WordPress para geolocalización con gestión en base de datos MySQL y librerías JavaScript.",
                "Administración y mantenimiento de la página web institucional en WordPress, incluyendo actualizaciones, publicación de contenido, noticias y eventos.",
                "Administración y gestión del sistema OJS3 para la parte editorial.",
                "Administración y mantenimiento de otras páginas web simples desarrolladas en WordPress para la publicidad de eventos."
            ]
        },
        {
            position: "Apoyo a desarrollador web Full Stack",
            company: "Software FJ",
            period: "Agosto 2020 - Septiembre 2021",
            responsibilities: [
                "Desarrollo de módulo para aplicativo web para la gestión de inventario",
                "Desarrollo de módulo para aplicativo web para la venta de productos",
                "Despliegue web de proyecto en entorno de prueba y de producción",
                "Apoyo a proyectos en cuanto al diseño y elementos gráficos",
                "Creación e implementación de bases de datos MySQL siguiendo los modelos relacionales diseñados",
                "Adaptar el diseño de una web a diversos dispositivos y navegadores"
            ]
        },
        {
            position: "Soporte Técnico",
            company: "Symde S.A.S.",
            period: "Marzo 2016 - Septiembre 2016",
            responsibilities: [
                "Elaborar informe técnico de mantenimiento y/o reparación según procedimientos y protocolo de servicio.",
                "Atender requerimientos de los usuarios de acuerdo con procedimientos técnicos.",
                "Manejar herramientas informáticas para la gestión de red y antimalware.",
                "Apoyo en instalación de cableado",
                "Apoyo en la administración de servidores, gestión de actualizaciones y soporte general",
                "Mantenimiento preventivo a equipos UPS en la infraestructura de red"
            ]
        }
    ];
}

function getProjectsData() {
    return [
        {
            title: "Sistema de Gestión Institucional",
            description: "Plataforma web completa para la gestión de contenidos con panel administrativo y múltiples módulos.",
            technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
            demoLink: "#",
            codeLink: "#",
            icon: "fas fa-laptop-code",
            image: "" // Agrega la ruta de tu imagen aquí
        },
        {
            title: "Plugin WordPress Geolocalización",
            description: "Plugin personalizado para WordPress con funcionalidades de geolocalización y gestión de datos.",
            technologies: ["PHP", "WordPress", "JavaScript", "MySQL"],
            demoLink: "#",
            codeLink: "#",
            icon: "fab fa-wordpress",
            image: ""
        }
        // Agrega más proyectos editando este array
    ];
}

function getEducationData() {
    return [
        {
            degree: "Ingeniería de Sistemas",
            institution: "Corporación Universitaria del Huila - CORHUILA",
            period: "2017 - 2021"
        },
        {
            degree: "Especialización en Desarrollo de Software",
            institution: "UNIMINUTO",
            period: "2017 - 2021"
        },
        {
            degree: "Tecnología en Seguridad en Redes de Computadoras",
            institution: "Corporación Universitaria del Huila CORHUILA",
            period: "2017 - 2021"
        },
        {
            degree: "Técnico en Redes",
            institution: "SENA - Neiva, Colombia",
            period: "2020 - 2021"
        }
    ];
}

function getCertificationsData() {
    return [
        {
            name: "OJS 3 Open Journal Systems - Nivel administrador",
            issuer: "Institución Certificadora",
            logo: "fas fa-certificate",
            certificateImage: "assets/images/cert1.jpg" // Reemplaza con la ruta real
        },
        {
            name: "Diseño web responsivo",
            issuer: "Institución Certificadora",
            logo: "fas fa-certificate",
            certificateImage: "assets/images/cert2.jpg"
        },
        {
            name: "Desarrollo de Aplicaciones con Manejo de Datos en La Memoria - Java",
            issuer: "Institución Certificadora",
            logo: "fas fa-certificate",
            certificateImage: "assets/images/cert3.jpg"
        }
        // Agrega más certificaciones editando este array
    ];
}

function getCapacitacionesData() {
    return [
        {
            name: "Curso de Laravel Avanzado",
            issuer: "Plataforma de Cursos",
            logo: "fab fa-laravel",
            certificateImage: "assets/images/curso1.jpg" // Reemplaza con la ruta real
        },
        {
            name: "JavaScript Moderno",
            issuer: "Plataforma de Cursos",
            logo: "fab fa-js",
            certificateImage: "assets/images/curso2.jpg"
        }
        // Agrega más capacitaciones editando este array
    ];
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initSignatureAnimation();
    initGhostEyes();
});

// ==================== GHOST EYES MOVEMENT ====================
function initGhostEyes() {
    document.addEventListener("mousemove", (e) => {
        const eyes = document.querySelectorAll(".eye");
        eyes.forEach((eye) => {
            const rect = eye.getBoundingClientRect();
            const eyeX = rect.left + rect.width / 2;
            const eyeY = rect.top + rect.height / 2;
            const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
            const x = Math.cos(angle) * 8;
            const y = Math.sin(angle) * 8;
            eye.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ==================== SIGNATURE ANIMATION ====================
function initSignatureAnimation() {
    const signatureName = document.getElementById('signatureName');
    if (!signatureName || typeof anime === 'undefined') return;

    // Wrap each letter in a span
    const text = signatureName.textContent;
    signatureName.innerHTML = text.split('').map(char => 
        `<span class="letter" style="opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    // Animate the signature
    function animateSignature() {
        anime.timeline({ loop: false })
            .add({
                targets: '.signature-text .letter',
                opacity: [0, 1],
                translateY: [20, 0],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 50 * i
            })
            .add({
                targets: '.signature-text .letter',
                opacity: [1, 0],
                translateY: [0, -20],
                easing: "easeInExpo",
                duration: 800,
                delay: (el, i) => 30 * i,
                complete: function() {
                    setTimeout(animateSignature, 500);
                }
            }, '+=5000');
    }

    setTimeout(animateSignature, 500);
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animations
setTimeout(() => {
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}, CONFIG.animationDuration);
