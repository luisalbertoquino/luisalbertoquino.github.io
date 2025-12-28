// ========================================
// SCRIPT DE MIGRACIÓN A FIREBASE
// ========================================
// Este script contiene toda tu información estructurada
// para copiar fácilmente a Firebase desde el panel admin

/**
 * INSTRUCCIONES:
 * 1. Configura Firebase siguiendo GUIA-CONFIGURACION-FIREBASE.md
 * 2. Accede al panel admin: https://tuusuario.github.io/admin
 * 3. Copia y pega la información de cada sección
 *
 * ALTERNATIVA AUTOMÁTICA:
 * Ejecuta este script desde la consola del navegador en el panel admin
 * para migrar automáticamente todos los datos.
 */

// ==================== DATOS PARA MIGRACIÓN ====================

const migrationData = {
  // PERFIL GENERAL
  profile: {
    fullName: "Luis Alberto Quino Manrique",
    title: "Ingeniero de Sistemas<br>Especialista en Desarrollo de Software",
    description: "Ingeniero de Sistemas, Especialista en Desarrollo de Software, con formación técnica sólida en infraestructura, redes y seguridad, y experiencia profesional continua en desarrollo web y administración de plataformas institucionales.",
    email: "alberto.1203@hotmail.com",
    phone: "+57 304 248 3977",
    location: "Neiva, Colombia",
    website: "https://luisalbertoquino.github.io",
    profileImage: "", // Subir desde el panel admin
    cvUrl: "" // Subir desde el panel admin
  },

  // EDUCACIÓN
  education: [
    {
      degree: "Tecnólogo - SENA",
      institution: "SENA - Servicio Nacional de Aprendizaje",
      startDate: "2014-04-01",
      endDate: "2016-09-15",
      description: "Mantenimiento de Equipos de Cómputo, Diseño e Instalación de Cableado Estructurado. Bases en hardware, redes y servidores. Participación en WorldSkills 2015 – Hardening en Redes"
    },
    {
      degree: "Ingeniería de Sistemas",
      institution: "Corporación Universitaria del Huila (CORHUILA)",
      startDate: "2017-02-01",
      endDate: "2021-12-10",
      description: "Lenguaje destacado: Java (aplicaciones de escritorio). Fundamentos de programación, bases de datos y desarrollo web. Proyecto de grado: Migración de sistema legacy en PHP a Laravel"
    },
    {
      degree: "Especialización Tecnológica - Seguridad en Redes",
      institution: "SENA - Servicio Nacional de Aprendizaje",
      startDate: "2019-02-01",
      endDate: "2019-08-06",
      description: "Seguridad de redes, Hardening y monitoreo, Gestión básica de incidentes, Enfoque preventivo y correctivo"
    },
    {
      degree: "Especialización en Desarrollo de Software",
      institution: "UNIMINUTO - Corporación Universitaria Minuto de Dios",
      startDate: "2024-10-30",
      endDate: "2025-10-10",
      description: "Desarrollo de software moderno y buenas prácticas. Opción de grado: Certificación internacional IBM – AI Developer"
    }
  ],

  // EXPERIENCIA LABORAL
  experience: [
    {
      position: "Webmaster / Desarrollador Web",
      company: "Fundación Universitaria Navarra - UNINAVARRA",
      startDate: "2022-05-09",
      endDate: "", // Actualidad
      description: "Administración y mantenimiento de sitios web institucionales. Desarrollo de soluciones web a medida. Atención y análisis de requerimientos internos. Integración de datos mediante APIs. Optimización básica de SEO técnico. Administración básica de servidores Linux.",
      technologies: "WordPress, PHP, Laravel, MySQL, APIs REST, Git, Linux, Ubuntu, DigitalOcean, Docker, OJS 3"
    },
    {
      position: "Práctica Profesional - Ingeniero de Sistemas",
      company: "Fundación Universitaria Navarra - UNINAVARRA",
      startDate: "2020-08-01",
      endDate: "2021-09-30",
      description: "Apoyo al desarrollo de software. Desarrollo web. Manejo de bases de datos. Proyecto de migración PHP → Laravel",
      technologies: "PHP, Laravel, MySQL, JavaScript"
    },
    {
      position: "Práctica Profesional - Tecnólogo",
      company: "SYSMDE S.A.S – Hospital Universitario Hernando Moncaleano",
      startDate: "2016-03-01",
      endDate: "2016-09-30",
      description: "Instalación de cableado estructurado. Soporte físico y lógico de red. Administración de antivirus corporativo. Supervisión de red. Mantenimiento preventivo de UPS. Administración básica de servidores",
      technologies: "Redes, Cableado Estructurado, Windows Server, Active Directory"
    }
  ],

  // PROYECTOS
  projects: [
    {
      name: "Tienda en línea tipo catálogo",
      description: "Tienda en línea con catálogo de productos, envío automático de pedidos por WhatsApp y blog integrado",
      technologies: "Angular, TypeScript, Tailwind, Laravel, MySQL",
      url: "",
      github: "",
      image: "",
      order: 1
    },
    {
      name: "Sistema de gestión universitario",
      description: "Aplicación Full Laravel en producción. Migración desde sistema legacy a arquitectura moderna con panel administrativo completo",
      technologies: "Laravel, PHP, MySQL, Bootstrap",
      url: "",
      github: "",
      image: "",
      order: 2
    },
    {
      name: "Plugin WordPress - Geolocalización",
      description: "Plugin personalizado de geolocalización basado en base de datos para sitios WordPress",
      technologies: "WordPress, PHP, JavaScript, MySQL",
      url: "",
      github: "",
      image: "",
      order: 3
    },
    {
      name: "Plugin WordPress - Generador de Certificados",
      description: "Plugin que genera certificados automáticamente desde archivos Excel en línea",
      technologies: "WordPress, PHP, JavaScript, Excel",
      url: "",
      github: "",
      image: "",
      order: 4
    },
    {
      name: "Aplicación móvil Flutter",
      description: "Aplicación móvil con diseño funcional, Firebase como base de datos y UI diseñada en Figma. Desarrollo de 4 meses",
      technologies: "Flutter, Dart, Firebase, Figma",
      url: "",
      github: "https://github.com/luisalbertoquino/Apps",
      image: "",
      order: 5
    },
    {
      name: "Automatizaciones Python",
      description: "Scripts de automatización para análisis de datos, web scraping, generación de PDFs y Excel, limpieza de datos",
      technologies: "Python, Pandas, BeautifulSoup, Selenium",
      url: "",
      github: "",
      image: "",
      order: 6
    }
  ],

  // CERTIFICACIONES
  certifications: [
    {
      name: "Tarjeta Profesional COPNIA",
      issuer: "Consejo Profesional Nacional de Ingeniería - COPNIA",
      date: "2022-01-01",
      verificationUrl: "",
      fileUrl: ""
    },
    {
      name: "IBM AI Developer",
      issuer: "IBM",
      date: "2025-01-01",
      verificationUrl: "",
      fileUrl: ""
    },
    {
      name: "Desarrollo Web con PHP",
      issuer: "Certificación",
      date: "2021-01-01",
      verificationUrl: "",
      fileUrl: ""
    },
    {
      name: "Java – Manejo de datos en memoria",
      issuer: "Certificación",
      date: "2021-01-01",
      verificationUrl: "",
      fileUrl: ""
    },
    {
      name: "Programación Nivel Explorador",
      issuer: "Certificación",
      date: "2020-01-01",
      verificationUrl: "",
      fileUrl: ""
    },
    {
      name: "WorldSkills 2015 – Hardening en Redes",
      issuer: "WorldSkills Colombia",
      date: "2015-01-01",
      verificationUrl: "",
      fileUrl: ""
    }
  ],

  // CURSOS (Platzi y otros)
  courses: [
    // Aquí agregarás tus cursos de Platzi manualmente desde el panel admin
    // Ejemplo:
    // {
    //   name: "Curso Profesional de Git y GitHub",
    //   platform: "Platzi",
    //   completedDate: "2024-01-15",
    //   skills: "Git, GitHub, Control de versiones",
    //   certificateUrl: ""
    // }
  ]
};

// ==================== FUNCIÓN DE MIGRACIÓN AUTOMÁTICA ====================

/**
 * Ejecuta la migración automática de datos a Firebase
 * SOLO ejecutar desde la consola del navegador en el panel admin
 */
async function runMigration() {
  if (typeof firebaseService === 'undefined') {
    console.error('❌ firebaseService no está disponible. Asegúrate de estar en el panel admin.');
    return;
  }

  console.log('🚀 Iniciando migración de datos a Firebase...');

  try {
    // Migrar perfil
    console.log('📝 Migrando perfil general...');
    await firebaseService.updateProfile(migrationData.profile);
    console.log('✅ Perfil migrado');

    // Migrar educación
    console.log('📝 Migrando educación...');
    for (const item of migrationData.education) {
      await firebaseService.addEducation(item);
    }
    console.log(`✅ ${migrationData.education.length} registros de educación migrados`);

    // Migrar experiencia
    console.log('📝 Migrando experiencia laboral...');
    for (const item of migrationData.experience) {
      await firebaseService.addExperience(item);
    }
    console.log(`✅ ${migrationData.experience.length} registros de experiencia migrados`);

    // Migrar proyectos
    console.log('📝 Migrando proyectos...');
    for (const item of migrationData.projects) {
      await firebaseService.addProject(item);
    }
    console.log(`✅ ${migrationData.projects.length} proyectos migrados`);

    // Migrar certificaciones
    console.log('📝 Migrando certificaciones...');
    for (const item of migrationData.certifications) {
      await firebaseService.addCertification(item);
    }
    console.log(`✅ ${migrationData.certifications.length} certificaciones migradas`);

    console.log('');
    console.log('🎉 ¡Migración completada exitosamente!');
    console.log('');
    console.log('📝 Próximos pasos:');
    console.log('1. Sube tu foto de perfil desde el panel admin');
    console.log('2. Sube tu CV (PDF) desde la sección "Archivos & CV"');
    console.log('3. Sube las imágenes de tus proyectos');
    console.log('4. Sube los archivos de tus certificaciones');
    console.log('5. Agrega tus cursos de Platzi desde el panel admin');
    console.log('');
    console.log('✨ Tu portafolio ahora es 100% dinámico!');

  } catch (error) {
    console.error('❌ Error durante la migración:', error);
    console.error('Detalle:', error.message);
  }
}

// ==================== INSTRUCCIONES DE USO ====================

console.log('');
console.log('═══════════════════════════════════════════════');
console.log('  SCRIPT DE MIGRACIÓN DE DATOS A FIREBASE');
console.log('═══════════════════════════════════════════════');
console.log('');
console.log('📋 Para ejecutar la migración automática:');
console.log('');
console.log('1. Asegúrate de estar autenticado en el panel admin');
console.log('2. Abre la consola del navegador (F12)');
console.log('3. Ejecuta: runMigration()');
console.log('');
console.log('⚠️  IMPORTANTE:');
console.log('- Solo ejecuta este script UNA VEZ');
console.log('- Después edita los datos desde el panel admin');
console.log('- No olvides subir archivos e imágenes');
console.log('');
console.log('═══════════════════════════════════════════════');
console.log('');
