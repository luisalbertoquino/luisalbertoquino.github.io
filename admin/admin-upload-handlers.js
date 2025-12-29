// ========================================
// MANEJADORES DE UPLOAD CON GITHUB API
// ========================================
// Este archivo sobrescribe los manejadores de upload
// para usar GitHub API en lugar de Firebase Storage

// ==================== BLOQUEO DE INTERFAZ ====================
function showLoadingOverlay(message = 'Subiendo archivo...') {
  let overlay = document.getElementById('uploadLoadingOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'uploadLoadingOverlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      color: white;
      font-size: 18px;
    `;
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div style="text-align: center;">
      <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3b82f6; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
      <p style="margin: 0; font-weight: 500;">${message}</p>
      <p style="margin: 10px 0 0; font-size: 14px; opacity: 0.8;">Por favor espera...</p>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
  overlay.style.display = 'flex';
}

function hideLoadingOverlay() {
  const overlay = document.getElementById('uploadLoadingOverlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔧 Inicializando manejadores de upload con GitHub API...');

  // ==================== FOTO DE PERFIL ====================

  const profileImageUpload = document.getElementById('profileImageUpload');
  if (profileImageUpload) {
    // Remover listeners anteriores clonando el elemento
    const newProfileUpload = profileImageUpload.cloneNode(true);
    profileImageUpload.parentNode.replaceChild(newProfileUpload, profileImageUpload);

    newProfileUpload.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      try {
        showLoadingOverlay('Subiendo foto de perfil...');

        const url = await githubService.uploadImage(file, 'images', (progress) => {
          showLoadingOverlay(`Subiendo foto de perfil... ${Math.round(progress)}%`);
        });

        document.querySelector('#profileForm input[name="profileImage"]').value = url;

        // Mostrar preview de la imagen
        const preview = document.getElementById('profileImagePreview');
        const noImage = document.getElementById('noProfileImage');
        if (preview && noImage) {
          preview.src = url + '?t=' + Date.now(); // Cache buster
          preview.style.display = 'block';
          noImage.style.display = 'none';
        }

        // Actualizar foto en el sidebar del admin
        const adminPhoto = document.getElementById('adminProfileImage');
        if (adminPhoto) {
          adminPhoto.src = url + '?t=' + Date.now(); // Cache buster
          adminPhoto.style.display = 'block';
        }

        hideLoadingOverlay();
        alert(`✅ Foto de perfil subida correctamente\n\nURL: ${url}\n\n⏳ Espera 3-5 minutos para que GitHub Pages se actualice.`);

      } catch (error) {
        hideLoadingOverlay();
        alert(`❌ Error al subir imagen: ${error.message}`);
        console.error(error);
      }
    });
  }

  // ==================== IMÁGENES DE PROYECTOS ====================

  const projectImageUpload = document.getElementById('projectImageUpload');
  if (projectImageUpload) {
    const newProjectUpload = projectImageUpload.cloneNode(true);
    projectImageUpload.parentNode.replaceChild(newProjectUpload, projectImageUpload);

    newProjectUpload.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      try {
        showLoadingOverlay('Subiendo imagen de proyecto...');

        const url = await githubService.uploadImage(file, 'images', (progress) => {
          showLoadingOverlay(`Subiendo imagen de proyecto... ${Math.round(progress)}%`);
        });

        document.querySelector('#projectForm input[name="image"]').value = url;

        hideLoadingOverlay();
        alert(`✅ Imagen subida correctamente\n\nURL: ${url}\n\n⏳ Espera 3-5 minutos para que se actualice.`);

      } catch (error) {
        hideLoadingOverlay();
        alert(`❌ Error: ${error.message}`);
        console.error(error);
      }
    });
  }

  // ==================== CERTIFICACIONES ====================

  const certificationFileUpload = document.getElementById('certificationFileUpload');
  if (certificationFileUpload) {
    const newCertUpload = certificationFileUpload.cloneNode(true);
    certificationFileUpload.parentNode.replaceChild(newCertUpload, certificationFileUpload);

    newCertUpload.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      try {
        showLoadingOverlay('Subiendo certificado...');

        let url;
        if (file.type === 'application/pdf') {
          url = await githubService.uploadPDF(file, 'certificates', (progress) => {
            showLoadingOverlay(`Subiendo PDF... ${Math.round(progress)}%`);
          });
        } else if (file.type.startsWith('image/')) {
          url = await githubService.uploadImage(file, 'certificates', (progress) => {
            showLoadingOverlay(`Subiendo imagen... ${Math.round(progress)}%`);
          });
        } else {
          throw new Error('Solo se permiten archivos PDF o imágenes');
        }

        const fileUrlInput = document.querySelector('#certificationForm input[name="fileUrl"]');
        fileUrlInput.value = url;
        fileUrlInput.style.display = 'block';

        hideLoadingOverlay();
        alert(`✅ Certificado subido correctamente\n\nURL: ${url}\n\n⏳ Espera 3-5 minutos.`);

      } catch (error) {
        hideLoadingOverlay();
        alert(`❌ Error: ${error.message}`);
        console.error(error);
      }
    });
  }

  // ==================== CURSOS ====================

  const courseFileUpload = document.getElementById('courseFileUpload');
  if (courseFileUpload) {
    const newCourseUpload = courseFileUpload.cloneNode(true);
    courseFileUpload.parentNode.replaceChild(newCourseUpload, courseFileUpload);

    newCourseUpload.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      try {
        showLoadingOverlay('Subiendo certificado de curso...');

        let url;
        if (file.type === 'application/pdf') {
          url = await githubService.uploadPDF(file, 'courses', (progress) => {
            showLoadingOverlay(`Subiendo certificado de curso... ${Math.round(progress)}%`);
          });
        } else if (file.type.startsWith('image/')) {
          url = await githubService.uploadImage(file, 'courses', (progress) => {
            showLoadingOverlay(`Subiendo certificado de curso... ${Math.round(progress)}%`);
          });
        } else {
          throw new Error('Solo PDF o imágenes');
        }

        const certificateUrlInput = document.querySelector('#courseForm input[name="certificateUrl"]');
        certificateUrlInput.value = url;
        certificateUrlInput.style.display = 'block';

        hideLoadingOverlay();
        alert(`✅ Certificado subido\n\nURL: ${url}\n\n⏳ Espera 3-5 minutos.`);

      } catch (error) {
        hideLoadingOverlay();
        alert(`❌ Error: ${error.message}`);
        console.error(error);
      }
    });
  }

  // ==================== CV ====================

  const cvUploadInput = document.getElementById('cvUpload');
  if (cvUploadInput) {
    const newCvUpload = cvUploadInput.cloneNode(true);
    cvUploadInput.parentNode.replaceChild(newCvUpload, cvUploadInput);

    newCvUpload.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (file.type !== 'application/pdf') {
        alert('❌ El CV debe ser un archivo PDF');
        return;
      }

      try {
        showLoadingOverlay('Subiendo CV...');

        const url = await githubService.uploadPDF(file, 'cv', (progress) => {
          showLoadingOverlay(`Subiendo CV... ${Math.round(progress)}%`);
        });

        // Actualizar perfil con la URL del CV
        await firebaseService.updateProfile({ cvUrl: url });

        document.getElementById('currentCV').innerHTML = `
          <p style="color: green;"><i class="fas fa-file-pdf"></i> CV cargado correctamente</p>
          <a href="${url}" target="_blank" style="color: #2563eb;">Ver CV</a>
        `;

        hideLoadingOverlay();
        alert(`✅ CV subido correctamente\n\nURL: ${url}\n\n⏳ Espera 3-5 minutos para que GitHub Pages se actualice.`);

      } catch (error) {
        hideLoadingOverlay();
        alert(`❌ Error al subir CV: ${error.message}`);
        console.error(error);
      }
    });
  }

  // ==================== FUNCIONES AUXILIARES ====================

  function showUploadProgress(message) {
    // Buscar o crear elemento de progreso
    let progressEl = document.getElementById('uploadProgress');
    if (!progressEl) {
      progressEl = document.createElement('div');
      progressEl.id = 'uploadProgress';
      progressEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2563eb;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        font-weight: 500;
      `;
      document.body.appendChild(progressEl);
    }

    if (message) {
      progressEl.textContent = message;
      progressEl.style.display = 'block';
    } else {
      progressEl.style.display = 'none';
    }
  }


  // ==================== IMAGEN DE PORTADA DE CERTIFICACIONES ====================

  const certificationImageUpload = document.getElementById('certificationImageUpload');
  if (certificationImageUpload) {
    const newCertImageUpload = certificationImageUpload.cloneNode(true);
    certificationImageUpload.parentNode.replaceChild(newCertImageUpload, certificationImageUpload);

    newCertImageUpload.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      try {
        showLoadingOverlay('Subiendo imagen de portada...');

        const url = await githubService.uploadImage(file, 'certificates', (progress) => {
          showLoadingOverlay(`Subiendo imagen de portada... ${Math.round(progress)}%`);
        });

        document.querySelector('#certificationForm input[name="imageUrl"]').value = url;

        hideLoadingOverlay();
        alert(`✅ Imagen de portada subida correctamente\n\nURL: ${url}\n\n⏳ Espera 3-5 minutos.`);

      } catch (error) {
        hideLoadingOverlay();
        alert(`❌ Error: ${error.message}`);
        console.error(error);
      }
    });
  }

  console.log('✅ Manejadores de upload con GitHub API listos');
});
