// ========================================
// SERVICIO DE FIREBASE - OPERACIONES CRUD
// ========================================

class FirebaseService {
  constructor() {
    this.db = firebase.firestore();
    // NO usamos Firebase Storage - archivos en GitHub
    // this.storage = firebase.storage();
    this.auth = firebase.auth();
  }

  // ==================== PERFIL GENERAL ====================
  async getProfile() {
    try {
      const doc = await this.db.collection('profile').doc('main').get();
      return doc.exists ? doc.data() : null;
    } catch (error) {
      console.error('Error al obtener perfil:', error);
      return null;
    }
  }

  async updateProfile(data) {
    try {
      await this.db.collection('profile').doc('main').set(data, { merge: true });
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      return { success: false, error };
    }
  }

  // ==================== EDUCACIÓN ====================
  async getEducation() {
    try {
      const snapshot = await this.db.collection('education')
        .orderBy('endDate', 'desc')
        .get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error al obtener educación:', error);
      return [];
    }
  }

  async addEducation(data) {
    try {
      const docRef = await this.db.collection('education').add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error al agregar educación:', error);
      return { success: false, error };
    }
  }

  async updateEducation(id, data) {
    try {
      await this.db.collection('education').doc(id).update(data);
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar educación:', error);
      return { success: false, error };
    }
  }

  async deleteEducation(id) {
    try {
      await this.db.collection('education').doc(id).delete();
      return { success: true };
    } catch (error) {
      console.error('Error al eliminar educación:', error);
      return { success: false, error };
    }
  }

  // ==================== EXPERIENCIA ====================
  async getExperience() {
    try {
      const snapshot = await this.db.collection('experience')
        .orderBy('startDate', 'desc')
        .get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error al obtener experiencia:', error);
      return [];
    }
  }

  async addExperience(data) {
    try {
      const docRef = await this.db.collection('experience').add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error al agregar experiencia:', error);
      return { success: false, error };
    }
  }

  async updateExperience(id, data) {
    try {
      await this.db.collection('experience').doc(id).update(data);
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar experiencia:', error);
      return { success: false, error };
    }
  }

  async deleteExperience(id) {
    try {
      await this.db.collection('experience').doc(id).delete();
      return { success: true };
    } catch (error) {
      console.error('Error al eliminar experiencia:', error);
      return { success: false, error };
    }
  }

  // ==================== PROYECTOS ====================
  async getProjects() {
    try {
      const snapshot = await this.db.collection('projects')
        .orderBy('order', 'asc')
        .get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error al obtener proyectos:', error);
      return [];
    }
  }

  async addProject(data) {
    try {
      const docRef = await this.db.collection('projects').add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error al agregar proyecto:', error);
      return { success: false, error };
    }
  }

  async updateProject(id, data) {
    try {
      await this.db.collection('projects').doc(id).update(data);
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar proyecto:', error);
      return { success: false, error };
    }
  }

  async deleteProject(id) {
    try {
      await this.db.collection('projects').doc(id).delete();
      return { success: true };
    } catch (error) {
      console.error('Error al eliminar proyecto:', error);
      return { success: false, error };
    }
  }

  // ==================== CERTIFICACIONES ====================
  async getCertifications() {
    try {
      const snapshot = await this.db.collection('certifications')
        .orderBy('date', 'desc')
        .get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error al obtener certificaciones:', error);
      return [];
    }
  }

  async addCertification(data) {
    try {
      const docRef = await this.db.collection('certifications').add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error al agregar certificación:', error);
      return { success: false, error };
    }
  }

  async updateCertification(id, data) {
    try {
      await this.db.collection('certifications').doc(id).update(data);
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar certificación:', error);
      return { success: false, error };
    }
  }

  async deleteCertification(id) {
    try {
      await this.db.collection('certifications').doc(id).delete();
      return { success: true };
    } catch (error) {
      console.error('Error al eliminar certificación:', error);
      return { success: false, error };
    }
  }

  // ==================== CURSOS (PLATZI, ETC.) ====================
  async getCourses() {
    try {
      const snapshot = await this.db.collection('courses')
        .orderBy('completedDate', 'desc')
        .get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error al obtener cursos:', error);
      return [];
    }
  }

  async addCourse(data) {
    try {
      const docRef = await this.db.collection('courses').add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error al agregar curso:', error);
      return { success: false, error };
    }
  }

  async updateCourse(id, data) {
    try {
      await this.db.collection('courses').doc(id).update(data);
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar curso:', error);
      return { success: false, error };
    }
  }

  async deleteCourse(id) {
    try {
      await this.db.collection('courses').doc(id).delete();
      return { success: true };
    } catch (error) {
      console.error('Error al eliminar curso:', error);
      return { success: false, error };
    }
  }

  // ==================== SERVICIOS ====================

  async getServices() {
    try {
      const snapshot = await this.db.collection('services').get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error al obtener servicios:', error);
      return [];
    }
  }

  async addService(data) {
    try {
      const docRef = await this.db.collection('services').add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error al agregar servicio:', error);
      return { success: false, error };
    }
  }

  async updateService(id, data) {
    try {
      await this.db.collection('services').doc(id).update(data);
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar servicio:', error);
      return { success: false, error };
    }
  }

  async deleteService(id) {
    try {
      await this.db.collection('services').doc(id).delete();
      return { success: true };
    } catch (error) {
      console.error('Error al eliminar servicio:', error);
      return { success: false, error };
    }
  }

  // ==================== STORAGE - SUBIDA DE ARCHIVOS ====================

  // ==================== ARCHIVOS (NO USADO - Archivos en GitHub) ====================

  /**
   * NOTA: NO usamos Firebase Storage
   * Los archivos se almacenan directamente en GitHub en assets/files/
   * Ver: assets/files/README.md para instrucciones
   */

  /*
  // Método uploadFile deshabilitado - no usamos Firebase Storage
  async uploadFile(file, folder = 'files', progressCallback = null) {
    console.warn('Firebase Storage no está configurado. Usa assets/files/ en GitHub');
    throw new Error('Firebase Storage no habilitado. Sube archivos a assets/files/ via Git');
  }

  // Método deleteFile deshabilitado - no usamos Firebase Storage
  async deleteFile(fileUrl) {
    console.warn('Firebase Storage no está configurado. Gestiona archivos en assets/files/ via Git');
    throw new Error('Firebase Storage no habilitado');
  }
  */

  // ==================== AUTENTICACIÓN ====================

  async signIn(email, password) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return { success: false, error: error.message };
    }
  }

  async signOut() {
    try {
      await this.auth.signOut();
      return { success: true };
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      return { success: false, error };
    }
  }

  onAuthStateChanged(callback) {
    return this.auth.onAuthStateChanged(callback);
  }
}

// Instancia global del servicio
const firebaseService = new FirebaseService();
