// ========================================
// PANEL DE ADMINISTRACIÓN - JAVASCRIPT
// ========================================

// Variables globales
let currentUser = null;
let currentEditingId = null;

// ==================== AUTENTICACIÓN ====================

// Login Form
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');

    const result = await firebaseService.signIn(email, password);

    if (result.success) {
        currentUser = result.user;
        showDashboard();
    } else {
        errorDiv.textContent = result.error;
        errorDiv.classList.add('show');
        setTimeout(() => errorDiv.classList.remove('show'), 5000);
    }
});

// Logout
document.getElementById('btnLogout').addEventListener('click', async () => {
    await firebaseService.signOut();
    location.reload();
});

// Check auth state
firebaseService.onAuthStateChanged((user) => {
    // Ocultar pantalla de carga
    document.getElementById('authLoadingScreen').style.display = 'none';

    if (user) {
        currentUser = user;
        showDashboard();
    } else {
        document.getElementById('loginScreen').style.display = 'flex';
        document.getElementById('adminDashboard').style.display = 'none';
    }
});

function showDashboard() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'flex';
    document.getElementById('adminEmail').textContent = currentUser.email;
    loadDashboardData();
}

// ==================== NAVEGACIÓN ENTRE SECCIONES ====================

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;

        // Update active nav
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Show section
        document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
        document.getElementById(`${section}-section`).style.display = 'block';

        // Load section data
        loadSectionData(section);
    });
});

function loadDashboardData() {
    loadSectionData('profile');
}

async function loadSectionData(section) {
    switch(section) {
        case 'profile':
            await loadProfile();
            break;
        case 'education':
            await loadEducation();
            break;
        case 'experience':
            await loadExperience();
            break;
        case 'projects':
            await loadProjects();
            break;
        case 'certifications':
            await loadCertifications();
            break;
        case 'courses':
            await loadCourses();
            break;
        case 'services':
            await loadServices();
            break;
    }
}

// ==================== PERFIL GENERAL ====================

async function loadProfile() {
    const profile = await firebaseService.getProfile();
    if (profile) {
        const form = document.getElementById('profileForm');
        Object.keys(profile).forEach(key => {
            const input = form.elements[key];
            if (input) input.value = profile[key] || '';
        });

        // Mostrar preview de la imagen de perfil si existe
        if (profile.profileImage) {
            const preview = document.getElementById('profileImagePreview');
            const noImage = document.getElementById('noProfileImage');
            if (preview && noImage) {
                preview.src = profile.profileImage;
                preview.style.display = 'block';
                noImage.style.display = 'none';
            }

            // Mostrar foto en el sidebar del admin
            const adminPhoto = document.getElementById('adminProfileImage');
            if (adminPhoto) {
                adminPhoto.src = profile.profileImage;
                adminPhoto.style.display = 'block';
            }
        }

        // Mostrar CV actual si existe
        const currentCVDiv = document.getElementById('currentCV');
        if (profile.cvUrl && currentCVDiv) {
            currentCVDiv.innerHTML = `
                <p style="color: green; margin-bottom: 5px;"><i class="fas fa-file-pdf"></i> CV cargado correctamente</p>
                <a href="${profile.cvUrl}" target="_blank" style="color: #2563eb; text-decoration: none;">
                    <i class="fas fa-external-link-alt"></i> Ver CV actual
                </a>
            `;
            const cvInput = form.querySelector('input[name="cvUrl"]');
            if (cvInput) {
                cvInput.value = profile.cvUrl;
                cvInput.style.display = 'block';
            }
        }
    }
}

document.getElementById('profileForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const btn = e.target.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<span class="loading"></span> Guardando...';

    const result = await firebaseService.updateProfile(data);

    if (result.success) {
        alert('✅ Perfil actualizado correctamente');
    } else {
        alert('❌ Error al actualizar perfil');
    }

    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-save"></i> Guardar Cambios';
});

// Upload profile image

// ==================== EDUCACIÓN ====================

async function loadEducation() {
    const education = await firebaseService.getEducation();
    const container = document.getElementById('educationList');

    container.innerHTML = education.map(item => `
        <div class="item-card">
            <div class="item-info">
                <h4>${item.degree}</h4>
                <p><i class="fas fa-university"></i> ${item.institution}</p>
                <p><i class="fas fa-calendar"></i> ${item.startDate} - ${item.endDate}</p>
                ${item.description ? `<p>${item.description}</p>` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-edit" onclick="editEducation('${item.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-delete" onclick="deleteEducation('${item.id}')">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

function showEducationForm(id = null) {
    document.getElementById('educationFormModal').style.display = 'flex';
    const form = document.getElementById('educationForm');
    if (!id) {
        form.reset();
        document.getElementById('educationFormTitle').textContent = 'Nueva Educación';
    } else {
        const idInput = form.querySelector('input[name="id"]');
        if (idInput) idInput.value = id;
    }
}

function hideEducationForm() {
    document.getElementById('educationFormModal').style.display = 'none';
}

async function editEducation(id) {
    const education = await firebaseService.getEducation();
    const item = education.find(e => e.id === id);

    if (item) {
        const form = document.getElementById('educationForm');
        Object.keys(item).forEach(key => {
            const input = form.elements[key];
            if (input) input.value = item[key] || '';
        });

        document.getElementById('educationFormTitle').textContent = 'Editar Educación';
        showEducationForm(id);
    }
}

async function deleteEducation(id) {
    if (!confirm('¿Estás seguro de eliminar este elemento?')) return;

    const result = await firebaseService.deleteEducation(id);
    if (result.success) {
        alert('✅ Eliminado correctamente');
        loadEducation();
    }
}

document.getElementById('educationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const id = data.id;
    delete data.id;

    const result = id
        ? await firebaseService.updateEducation(id, data)
        : await firebaseService.addEducation(data);

    if (result.success) {
        alert('✅ Guardado correctamente');
        hideEducationForm();
        loadEducation();
    }
});

// ==================== EXPERIENCIA ====================

async function loadExperience() {
    const experience = await firebaseService.getExperience();
    const container = document.getElementById('experienceList');

    container.innerHTML = experience.map(item => `
        <div class="item-card">
            <div class="item-info">
                <h4>${item.position}</h4>
                <p><i class="fas fa-building"></i> ${item.company}</p>
                <p><i class="fas fa-calendar"></i> ${item.startDate} - ${item.endDate || 'Actualidad'}</p>
                <p>${item.description}</p>
                ${item.technologies ? `
                    <div class="item-tags">
                        ${item.technologies.split(',').map(tech => `<span class="tag">${tech.trim()}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-edit" onclick="editExperience('${item.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-delete" onclick="deleteExperience('${item.id}')">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

function showExperienceForm(id = null) {
    document.getElementById('experienceFormModal').style.display = 'flex';
    const form = document.getElementById('experienceForm');
    if (!id) {
        form.reset();
        document.getElementById('experienceFormTitle').textContent = 'Nueva Experiencia';
    } else {
        const idInput = form.querySelector('input[name="id"]');
        if (idInput) idInput.value = id;
    }
}

function hideExperienceForm() {
    document.getElementById('experienceFormModal').style.display = 'none';
}

async function editExperience(id) {
    const experience = await firebaseService.getExperience();
    const item = experience.find(e => e.id === id);

    if (item) {
        const form = document.getElementById('experienceForm');
        Object.keys(item).forEach(key => {
            const input = form.elements[key];
            if (input) input.value = item[key] || '';
        });

        document.getElementById('experienceFormTitle').textContent = 'Editar Experiencia';
        showExperienceForm(id);
    }
}

async function deleteExperience(id) {
    if (!confirm('¿Estás seguro de eliminar este elemento?')) return;

    const result = await firebaseService.deleteExperience(id);
    if (result.success) {
        alert('✅ Eliminado correctamente');
        loadExperience();
    }
}

document.getElementById('experienceForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const id = data.id;
    delete data.id;

    const result = id
        ? await firebaseService.updateExperience(id, data)
        : await firebaseService.addExperience(data);

    if (result.success) {
        alert('✅ Guardado correctamente');
        hideExperienceForm();
        loadExperience();
    }
});

// ==================== PROYECTOS ====================

async function loadProjects() {
    const projects = await firebaseService.getProjects();
    const container = document.getElementById('projectsList');

    container.innerHTML = projects.map(item => `
        <div class="item-card">
            <div class="item-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                ${item.technologies ? `
                    <div class="item-tags">
                        ${item.technologies.split(',').map(tech => `<span class="tag">${tech.trim()}</span>`).join('')}
                    </div>
                ` : ''}
                ${item.url ? `<p><i class="fas fa-link"></i> <a href="${item.url}" target="_blank">${item.url}</a></p>` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-edit" onclick="editProject('${item.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-delete" onclick="deleteProject('${item.id}')">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

function showProjectForm(id = null) {
    document.getElementById('projectFormModal').style.display = 'flex';
    const form = document.getElementById('projectForm');
    if (!id) {
        form.reset();
        document.getElementById('projectFormTitle').textContent = 'Nuevo Proyecto';
        // Limpiar vista previa de imagen
        document.getElementById('projectImagePreview').style.display = 'none';
    } else {
        const idInput = form.querySelector('input[name="id"]');
        if (idInput) idInput.value = id;
    }
}

function hideProjectForm() {
    document.getElementById('projectFormModal').style.display = 'none';
}

async function editProject(id) {
    const projects = await firebaseService.getProjects();
    const item = projects.find(p => p.id === id);

    if (item) {
        const form = document.getElementById('projectForm');
        Object.keys(item).forEach(key => {
            const input = form.elements[key];
            if (input) input.value = item[key] || '';
        });

        // Mostrar imagen precargada si existe
        const imagePreview = document.getElementById('projectImagePreview');
        if (item.image) {
            imagePreview.querySelector('img').src = item.image;
            imagePreview.style.display = 'block';
        } else {
            imagePreview.style.display = 'none';
        }

        document.getElementById('projectFormTitle').textContent = 'Editar Proyecto';
        showProjectForm(id);
    }
}

async function deleteProject(id) {
    if (!confirm('¿Estás seguro de eliminar este elemento?')) return;

    const result = await firebaseService.deleteProject(id);
    if (result.success) {
        alert('✅ Eliminado correctamente');
        loadProjects();
    }
}

document.getElementById('projectForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const id = data.id;
    delete data.id;

    const result = id
        ? await firebaseService.updateProject(id, data)
        : await firebaseService.addProject(data);

    if (result.success) {
        alert('✅ Guardado correctamente');
        hideProjectForm();
        loadProjects();
    }
});

// Upload project image
document.getElementById('projectImageUpload').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
        const url = await firebaseService.uploadFile(file, 'projects');
        document.querySelector('#projectForm input[name="image"]').value = url;
        alert('✅ Imagen subida correctamente');
    } catch (error) {
        alert('❌ Error al subir imagen');
    }
});

// ==================== CERTIFICACIONES ====================

async function loadCertifications() {
    const certifications = await firebaseService.getCertifications();
    const container = document.getElementById('certificationsList');

    container.innerHTML = certifications.map(item => `
        <div class="item-card">
            <div class="item-info">
                <h4>${item.name}</h4>
                <p><i class="fas fa-university"></i> ${item.issuer}</p>
                <p><i class="fas fa-calendar"></i> ${item.date}</p>
                ${item.verificationUrl ? `<p><i class="fas fa-link"></i> <a href="${item.verificationUrl}" target="_blank">Verificar</a></p>` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-edit" onclick="editCertification('${item.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-delete" onclick="deleteCertification('${item.id}')">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

function showCertificationForm(id = null) {
    document.getElementById('certificationFormModal').style.display = 'flex';
    const form = document.getElementById('certificationForm');
    if (!id) {
        form.reset();
        document.getElementById('certificationFormTitle').textContent = 'Nueva Certificación';
        // Limpiar vistas previas
        document.getElementById('certificationImagePreview').style.display = 'none';
        document.getElementById('certificationFilePreview').style.display = 'none';
    } else {
        const idInput = form.querySelector('input[name="id"]');
        if (idInput) idInput.value = id;
    }
}

function hideCertificationForm() {
    document.getElementById('certificationFormModal').style.display = 'none';
}

async function editCertification(id) {
    const certifications = await firebaseService.getCertifications();
    const item = certifications.find(c => c.id === id);

    if (item) {
        const form = document.getElementById('certificationForm');
        Object.keys(item).forEach(key => {
            const input = form.elements[key];
            if (input) input.value = item[key] || '';
        });

        // Mostrar imagen de portada precargada si existe
        const imagePreview = document.getElementById('certificationImagePreview');
        if (item.imageUrl) {
            imagePreview.querySelector('img').src = item.imageUrl;
            imagePreview.style.display = 'block';
        } else {
            imagePreview.style.display = 'none';
        }

        // Mostrar archivo PDF precargado si existe
        const filePreview = document.getElementById('certificationFilePreview');
        if (item.fileUrl) {
            filePreview.querySelector('a').href = item.fileUrl;
            filePreview.style.display = 'block';
        } else {
            filePreview.style.display = 'none';
        }

        document.getElementById('certificationFormTitle').textContent = 'Editar Certificación';
        showCertificationForm(id);
    }
}

async function deleteCertification(id) {
    if (!confirm('¿Estás seguro de eliminar este elemento?')) return;

    const result = await firebaseService.deleteCertification(id);
    if (result.success) {
        alert('✅ Eliminado correctamente');
        loadCertifications();
    }
}

document.getElementById('certificationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const id = data.id;
    delete data.id;

    const result = id
        ? await firebaseService.updateCertification(id, data)
        : await firebaseService.addCertification(data);

    if (result.success) {
        alert('✅ Guardado correctamente');
        hideCertificationForm();
        loadCertifications();
    }
});

// Upload certification file
document.getElementById('certificationFileUpload').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
        const url = await firebaseService.uploadFile(file, 'certificates');
        document.querySelector('#certificationForm input[name="fileUrl"]').value = url;
        alert('✅ Archivo subido correctamente');
    } catch (error) {
        alert('❌ Error al subir archivo');
    }
});

// ==================== CURSOS ====================

async function loadCourses() {
    const courses = await firebaseService.getCourses();
    const container = document.getElementById('coursesList');

    container.innerHTML = courses.map(item => `
        <div class="item-card">
            <div class="item-info">
                <h4>${item.icon ? `<i class="${item.icon}"></i>` : '<i class="fas fa-graduation-cap"></i>'} ${item.name}</h4>
                <p><i class="fas fa-graduation-cap"></i> ${item.platform}</p>
                <p><i class="fas fa-calendar"></i> ${item.completedDate}</p>
                ${item.skills ? `
                    <div class="item-tags">
                        ${item.skills.split(',').map(skill => `<span class="tag">${skill.trim()}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="item-actions">
                <button class="btn-edit" onclick="editCourse('${item.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-delete" onclick="deleteCourse('${item.id}')">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

function showCourseForm(id = null) {
    document.getElementById('courseFormModal').style.display = 'flex';
    const form = document.getElementById('courseForm');
    if (!id) {
        form.reset();
        document.getElementById('courseFormTitle').textContent = 'Nuevo Curso';
        // Limpiar vista previa de archivo
        document.getElementById('courseFilePreview').style.display = 'none';
    } else {
        // Establecer el ID en el campo hidden para edición
        const idInput = form.querySelector('input[name="id"]');
        if (idInput) idInput.value = id;
    }
}

function hideCourseForm() {
    document.getElementById('courseFormModal').style.display = 'none';
}

async function editCourse(id) {
    const courses = await firebaseService.getCourses();
    const item = courses.find(c => c.id === id);

    if (item) {
        const form = document.getElementById('courseForm');
        Object.keys(item).forEach(key => {
            const input = form.elements[key];
            if (input) input.value = item[key] || '';
        });

        // Mostrar certificado precargado si existe
        const filePreview = document.getElementById('courseFilePreview');
        if (item.certificateUrl) {
            filePreview.querySelector('a').href = item.certificateUrl;
            filePreview.style.display = 'block';
        } else {
            filePreview.style.display = 'none';
        }

        document.getElementById('courseFormTitle').textContent = 'Editar Curso';
        showCourseForm(id);
    }
}

async function deleteCourse(id) {
    if (!confirm('¿Estás seguro de eliminar este elemento?')) return;

    const result = await firebaseService.deleteCourse(id);
    if (result.success) {
        alert('✅ Eliminado correctamente');
        loadCourses();
    }
}

document.getElementById('courseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const id = data.id;
    delete data.id;

    const result = id
        ? await firebaseService.updateCourse(id, data)
        : await firebaseService.addCourse(data);

    if (result.success) {
        alert('✅ Guardado correctamente');
        hideCourseForm();
        loadCourses();
    }
});

// Upload course certificate
document.getElementById('courseFileUpload').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
        const url = await firebaseService.uploadFile(file, 'courses');
        document.querySelector('#courseForm input[name="certificateUrl"]').value = url;
        alert('✅ Certificado subido correctamente');
    } catch (error) {
        alert('❌ Error al subir certificado');
    }
});

// ==================== SERVICIOS ====================

async function loadServices() {
    const services = await firebaseService.getServices();
    const container = document.getElementById('servicesList');

    if (!services || services.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No hay servicios agregados</p>';
        return;
    }

    container.innerHTML = services.map(item => `
        <div class="item-card">
            <div class="item-info">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                    <i class="${item.icon}" style="font-size: 2rem; color: #6366f1;"></i>
                    <h4 style="margin: 0;">${item.title}</h4>
                </div>
                <p style="margin-top: 0.5rem;">${item.description}</p>
            </div>
            <div class="item-actions">
                <button class="btn-edit" onclick="editService('${item.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-delete" onclick="deleteService('${item.id}')">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

function showServiceForm(id = null) {
    document.getElementById('serviceFormModal').style.display = 'flex';
    const form = document.getElementById('serviceForm');
    if (!id) {
        form.reset();
        document.getElementById('serviceFormTitle').textContent = 'Nuevo Servicio';
        document.getElementById('iconPreview').className = 'fas fa-question';
    } else {
        const idInput = form.querySelector('input[name="id"]');
        if (idInput) idInput.value = id;
    }
}

function hideServiceForm() {
    document.getElementById('serviceFormModal').style.display = 'none';
}

async function editService(id) {
    const services = await firebaseService.getServices();
    const item = services.find(s => s.id === id);

    if (item) {
        const form = document.getElementById('serviceForm');
        Object.keys(item).forEach(key => {
            const input = form.elements[key];
            if (input) input.value = item[key] || '';
        });

        // Actualizar preview del icono
        if (item.icon) {
            document.getElementById('iconPreview').className = item.icon;
        }

        document.getElementById('serviceFormTitle').textContent = 'Editar Servicio';
        showServiceForm(id);
    }
}

async function deleteService(id) {
    if (!confirm('¿Estás seguro de eliminar este servicio?')) return;

    const result = await firebaseService.deleteService(id);
    if (result.success) {
        alert('✅ Eliminado correctamente');
        loadServices();
    }
}

document.getElementById('serviceForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const id = data.id;
    delete data.id;

    const result = id
        ? await firebaseService.updateService(id, data)
        : await firebaseService.addService(data);

    if (result.success) {
        alert('✅ Guardado correctamente');
        hideServiceForm();
        loadServices();
    }
});

// Preview del icono cuando se selecciona
document.querySelector('#serviceForm select[name="icon"]').addEventListener('change', (e) => {
    const iconPreview = document.getElementById('iconPreview');
    if (e.target.value) {
        iconPreview.className = e.target.value;
    } else {
        iconPreview.className = 'fas fa-question';
    }
});

