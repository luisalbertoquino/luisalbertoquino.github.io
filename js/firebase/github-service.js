// ========================================
// SERVICIO DE GITHUB API
// ========================================
// Servicio para subir archivos directamente a GitHub
// sin necesidad de usar Git manualmente

class GitHubService {
  constructor() {
    this.config = null;
    this.apiBase = 'https://api.github.com';
  }

  /**
   * Carga la configuración de GitHub desde Firebase
   */
  async loadConfig() {
    if (this.config) return this.config;

    try {
      const doc = await firebase.firestore().collection('config').doc('github').get();
      if (!doc.exists) {
        throw new Error('Configuración de GitHub no encontrada. Ejecuta CONFIGURAR-TOKEN-GITHUB.md');
      }

      this.config = doc.data();
      return this.config;
    } catch (error) {
      console.error('Error al cargar configuración de GitHub:', error);
      throw error;
    }
  }

  /**
   * Sube un archivo a GitHub
   * @param {File} file - Archivo a subir
   * @param {string} path - Ruta en el repositorio (ej: 'assets/files/images/profile.jpg')
   * @param {string} commitMessage - Mensaje del commit
   * @returns {Promise<string>} URL pública del archivo
   */
  async uploadFile(file, path, commitMessage = null) {
    try {
      await this.loadConfig();

      // Leer el archivo como base64
      const base64Content = await this.fileToBase64(file);

      // Verificar si el archivo ya existe para obtener su SHA
      let sha = null;
      try {
        const existingFile = await this.getFile(path);
        sha = existingFile.sha;
        console.log(`📝 Archivo existente encontrado, será actualizado`);
      } catch (error) {
        console.log(`✨ Nuevo archivo, será creado`);
      }

      // Preparar el mensaje del commit
      const message = commitMessage || `Upload ${file.name} via admin panel`;

      // Crear/actualizar archivo en GitHub
      const url = `${this.apiBase}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`;

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${this.config.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          content: base64Content,
          branch: this.config.branch,
          ...(sha && { sha }) // Incluir SHA solo si existe (actualización)
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`GitHub API Error: ${error.message}`);
      }

      const result = await response.json();

      // Construir URL pública del archivo
      const publicUrl = `https://${this.config.owner}.github.io/${path}`;

      console.log(`✅ Archivo subido correctamente: ${publicUrl}`);

      return publicUrl;

    } catch (error) {
      console.error('Error al subir archivo a GitHub:', error);
      throw error;
    }
  }

  /**
   * Obtiene información de un archivo en GitHub
   * @param {string} path - Ruta del archivo
   */
  async getFile(path) {
    await this.loadConfig();

    const url = `${this.apiBase}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${this.config.token}`,
      }
    });

    if (!response.ok) {
      throw new Error('File not found');
    }

    return await response.json();
  }

  /**
   * Elimina un archivo de GitHub
   * @param {string} path - Ruta del archivo
   * @param {string} commitMessage - Mensaje del commit
   */
  async deleteFile(path, commitMessage = null) {
    try {
      await this.loadConfig();

      // Obtener SHA del archivo
      const file = await this.getFile(path);

      const message = commitMessage || `Delete ${path} via admin panel`;

      const url = `${this.apiBase}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`;

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `token ${this.config.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          sha: file.sha,
          branch: this.config.branch
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`GitHub API Error: ${error.message}`);
      }

      console.log(`✅ Archivo eliminado correctamente: ${path}`);
      return true;

    } catch (error) {
      console.error('Error al eliminar archivo de GitHub:', error);
      throw error;
    }
  }

  /**
   * Convierte un File a base64
   * @param {File} file
   * @returns {Promise<string>} Contenido en base64 (sin el prefijo data:...)
   */
  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        // Eliminar el prefijo "data:image/png;base64," o similar
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };

      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(file);
    });
  }

  /**
   * Sube una imagen optimizada
   * @param {File} file - Imagen a subir
   * @param {string} folder - Carpeta destino ('images', 'cv', 'certificates', 'courses')
   * @param {function} progressCallback - Callback para progreso
   * @returns {Promise<string>} URL pública de la imagen
   */
  async uploadImage(file, folder = 'images', progressCallback = null) {
    try {
      // Validar que sea una imagen
      if (!file.type.startsWith('image/')) {
        throw new Error('El archivo debe ser una imagen');
      }

      // Validar tamaño (máx 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        throw new Error('La imagen es muy grande. Máximo 5MB. Optimízala en https://tinypng.com/');
      }

      if (progressCallback) progressCallback(10);

      // Generar nombre de archivo único
      const timestamp = Date.now();
      const extension = file.name.split('.').pop();
      const safeName = file.name
        .replace(/\.[^/.]+$/, '') // Remover extensión
        .replace(/[^a-z0-9]/gi, '-') // Reemplazar caracteres especiales
        .toLowerCase();

      const fileName = `${safeName}-${timestamp}.${extension}`;
      const path = `assets/files/${folder}/${fileName}`;

      if (progressCallback) progressCallback(30);

      // Subir a GitHub
      const url = await this.uploadFile(file, path, `Upload image: ${fileName}`);

      if (progressCallback) progressCallback(100);

      return url;

    } catch (error) {
      console.error('Error al subir imagen:', error);
      throw error;
    }
  }

  /**
   * Sube un PDF
   * @param {File} file - PDF a subir
   * @param {string} folder - Carpeta destino ('cv', 'certificates', 'courses')
   * @param {function} progressCallback - Callback para progreso
   * @returns {Promise<string>} URL pública del PDF
   */
  async uploadPDF(file, folder = 'cv', progressCallback = null) {
    try {
      // Validar que sea un PDF
      if (file.type !== 'application/pdf') {
        throw new Error('El archivo debe ser un PDF');
      }

      // Validar tamaño (máx 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        throw new Error('El PDF es muy grande. Máximo 10MB.');
      }

      if (progressCallback) progressCallback(10);

      // Generar nombre de archivo
      const timestamp = Date.now();
      const safeName = file.name
        .replace(/\.[^/.]+$/, '')
        .replace(/[^a-z0-9]/gi, '-')
        .toLowerCase();

      const fileName = `${safeName}-${timestamp}.pdf`;
      const path = `assets/files/${folder}/${fileName}`;

      if (progressCallback) progressCallback(30);

      // Subir a GitHub
      const url = await this.uploadFile(file, path, `Upload PDF: ${fileName}`);

      if (progressCallback) progressCallback(100);

      return url;

    } catch (error) {
      console.error('Error al subir PDF:', error);
      throw error;
    }
  }

  /**
   * Lista archivos en una carpeta
   * @param {string} path - Ruta de la carpeta (ej: 'assets/files/images')
   */
  async listFiles(path) {
    try {
      await this.loadConfig();

      const url = `${this.apiBase}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`;

      const response = await fetch(url, {
        headers: {
          'Authorization': `token ${this.config.token}`,
        }
      });

      if (!response.ok) {
        throw new Error('Folder not found');
      }

      const files = await response.json();
      return files.filter(file => file.type === 'file');

    } catch (error) {
      console.error('Error al listar archivos:', error);
      return [];
    }
  }
}

// Crear instancia global
const githubService = new GitHubService();
