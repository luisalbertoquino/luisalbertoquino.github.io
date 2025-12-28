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
        case 'files':
            await loadFiles();
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
    if (!id) {
        document.getElementById('educationForm').reset();
        document.getElementById('educationFormTitle').textContent = 'Nueva Educación';
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
    if (!id) {
        document.getElementById('experienceForm').reset();
        document.getElementById('experienceFormTitle').textContent = 'Nueva Experiencia';
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
    if (!id) {
        document.getElementById('projectForm').reset();
        document.getElementById('projectFormTitle').textContent = 'Nuevo Proyecto';
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
    if (!id) {
        document.getElementById('certificationForm').reset();
        document.getElementById('certificationFormTitle').textContent = 'Nueva Certificación';
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
                <h4>${item.name}</h4>
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
    if (!id) {
        document.getElementById('courseForm').reset();
        document.getElementById('courseFormTitle').textContent = 'Nuevo Curso';
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

// ==================== FILES & CV ====================

function loadFiles() {
    // Implement file management logic
    setupFileUploads();
}

function setupFileUploads() {
    // CV Upload
    const cvUploadArea = document.getElementById('cvUploadArea');
    const cvFileInput = document.getElementById('cvFileInput');

    cvUploadArea.addEventListener('click', () => cvFileInput.click());

    cvUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        cvUploadArea.style.borderColor = '#667eea';
    });

    cvUploadArea.addEventListener('drop', async (e) => {
        e.preventDefault();
        cvUploadArea.style.borderColor = '#cbd5e0';
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'application/pdf') {
            await uploadCV(file);
        }
    });

    cvFileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) await uploadCV(file);
    });

    // Images Upload
    const imagesUploadArea = document.getElementById('imagesUploadArea');
    const imagesFileInput = document.getElementById('imagesFileInput');

    imagesUploadArea.addEventListener('click', () => imagesFileInput.click());

    imagesFileInput.addEventListener('change', async (e) => {
        const files = Array.from(e.target.files);
        for (const file of files) {
            await uploadImage(file);
        }
    });
}

async function uploadCV(file) {
    try {
        const url = await firebaseService.uploadFile(file, 'cv', (progress) => {
            console.log('CV Upload progress:', progress);
        });

        // Update profile with CV URL
        await firebaseService.updateProfile({ cvUrl: url });

        document.getElementById('currentCV').innerHTML = `
            <p><i class="fas fa-file-pdf"></i> CV cargado correctamente</p>
            <a href="${url}" target="_blank">Ver CV</a>
        `;
        document.getElementById('currentCV').classList.add('show');

        alert('✅ CV subido correctamente');
    } catch (error) {
        alert('❌ Error al subir CV');
    }
}

async function uploadImage(file) {
    try {
        const url = await firebaseService.uploadFile(file, 'images');

        const imagesList = document.getElementById('imagesList');
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <img src="${url}" alt="Uploaded image">
            <button class="delete-img" onclick="deleteImage('${url}')">
                <i class="fas fa-times"></i>
            </button>
        `;
        imagesList.appendChild(imageItem);

    } catch (error) {
        alert('❌ Error al subir imagen');
    }
}

async function deleteImage(url) {
    if (!confirm('¿Eliminar esta imagen?')) return;

    await firebaseService.deleteFile(url);
    loadFiles();
}
