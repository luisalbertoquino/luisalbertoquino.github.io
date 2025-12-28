# 🔥 Guía de Configuración Firebase + GitHub Pages

## 📋 Tabla de Contenido
1. [Crear Proyecto Firebase](#1-crear-proyecto-firebase)
2. [Configurar Firestore Database](#2-configurar-firestore-database)
3. [Configurar Firebase Storage](#3-configurar-firebase-storage)
4. [Configurar Authentication](#4-configurar-authentication)
5. [Conectar con tu Portafolio](#5-conectar-con-tu-portafolio)
6. [Desplegar en GitHub Pages](#6-desplegar-en-github-pages)

---

## 1. Crear Proyecto Firebase

### Paso 1.1: Crear cuenta y proyecto
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en **"Agregar proyecto"** o **"Create a project"**
3. Nombre del proyecto: `portfolio-luis-quino` (o el que prefieras)
4. Acepta los términos y haz clic en **Continuar**
5. **Desactiva** Google Analytics (no lo necesitas para este proyecto)
6. Haz clic en **Crear proyecto**

### Paso 1.2: Registrar app web
1. En el Dashboard, haz clic en el ícono **</>** (Web)
2. Apodo de la app: `Portfolio Web`
3. **NO** marques "Firebase Hosting"
4. Haz clic en **Registrar app**
5. **COPIA** el objeto `firebaseConfig` que aparece

---

## 2. Configurar Firestore Database

### Paso 2.1: Crear base de datos
1. En el menú lateral, ve a **Build > Firestore Database**
2. Haz clic en **Crear base de datos**
3. Selecciona **"Comenzar en modo de producción"**
4. Ubicación: `us-central` (o la más cercana a ti)
5. Haz clic en **Habilitar**

### Paso 2.2: Configurar reglas de seguridad
1. Ve a la pestaña **"Reglas"** en Firestore
2. Reemplaza las reglas con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir lectura pública de todas las colecciones
    match /{document=**} {
      allow read: if true;
    }

    // Solo usuarios autenticados pueden escribir
    match /{document=**} {
      allow write: if request.auth != null;
    }
  }
}
```

3. Haz clic en **Publicar**

### Paso 2.3: Crear colecciones iniciales
1. Ve a la pestaña **"Datos"**
2. Haz clic en **"Comenzar colección"**
3. Crea estas colecciones (una por una):

**Colección: `profile`**
- ID del documento: `main`
- Campos iniciales:
  ```
  fullName: "Luis Alberto Quino Manrique"
  title: "Ingeniero de Sistemas Especialista en Desarrollo Web"
  email: "alberto.1203@hotmail.com"
  phone: "+57 304 248 3977"
  location: "Neiva, Colombia"
  website: "https://luisalbertoquino.github.io"
  description: "Desarrollo soluciones web innovadoras..."
  profileImage: "" (vacío por ahora)
  cvUrl: "" (vacío por ahora)
  ```

**Colección: `education`** (dejar vacía, se llenará desde el panel admin)

**Colección: `experience`** (dejar vacía)

**Colección: `projects`** (dejar vacía)

**Colección: `certifications`** (dejar vacía)

**Colección: `courses`** (dejar vacía)

---

## 3. Configurar Firebase Storage

### Paso 3.1: Habilitar Storage
1. En el menú lateral, ve a **Build > Storage**
2. Haz clic en **Comenzar**
3. Selecciona **"Comenzar en modo de producción"**
4. Ubicación: usa la misma que Firestore
5. Haz clic en **Listo**

### Paso 3.2: Configurar reglas de seguridad
1. Ve a la pestaña **"Reglas"**
2. Reemplaza con:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Permitir lectura pública de todos los archivos
    match /{allPaths=**} {
      allow read: if true;
    }

    // Solo usuarios autenticados pueden subir archivos
    match /{allPaths=**} {
      allow write: if request.auth != null;
    }
  }
}
```

3. Haz clic en **Publicar**

### Paso 3.3: Crear carpetas
1. Ve a la pestaña **"Archivos"**
2. Crea estas carpetas (subiendo un archivo temporal en cada una):
   - `cv/`
   - `certificates/`
   - `courses/`
   - `images/`
   - `projects/`
   - `profile/`

---

## 4. Configurar Authentication

### Paso 4.1: Habilitar autenticación por email
1. En el menú lateral, ve a **Build > Authentication**
2. Haz clic en **Comenzar**
3. En la pestaña **"Método de acceso"**
4. Haz clic en **"Correo electrónico/contraseña"**
5. **Activa** la primera opción (Email/Password)
6. Haz clic en **Guardar**

### Paso 4.2: Crear tu usuario administrador
1. Ve a la pestaña **"Users"**
2. Haz clic en **"Agregar usuario"**
3. Email: `alberto.1203@hotmail.com` (tu email)
4. Contraseña: **Crea una contraseña segura** (mínimo 6 caracteres)
5. Haz clic en **"Agregar usuario"**

**⚠️ IMPORTANTE:** Guarda esta contraseña, la necesitarás para acceder al panel admin.

---

## 5. Conectar con tu Portafolio

### Paso 5.1: Copiar configuración de Firebase
1. Ve a **Configuración del proyecto** (ícono de engranaje)
2. Baja hasta **"Tus apps"**
3. En la app web que creaste, busca el objeto `firebaseConfig`
4. Cópialo completo

### Paso 5.2: Crear archivo de configuración
1. En tu proyecto, copia el archivo `firebase-config.example.js`
2. Renómbralo a `firebase-config.js`
3. Abre `firebase-config.js` y pega tu configuración:

```javascript
const firebaseConfig = {
  apiKey: "AIza...", // TU API KEY REAL
  authDomain: "portfolio-luis-quino.firebaseapp.com",
  projectId: "portfolio-luis-quino",
  storageBucket: "portfolio-luis-quino.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Servicios de Firebase
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
```

### Paso 5.3: Verificar que NO se suba a GitHub
1. Verifica que `.gitignore` contenga:
   ```
   firebase-config.js
   ```
2. **NUNCA** hagas commit de `firebase-config.js`

---

## 6. Desplegar en GitHub Pages

### Paso 6.1: Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. **Settings > Pages**
3. Source: `Deploy from a branch`
4. Branch: `main` (o `master`)
5. Folder: `/ (root)`
6. Haz clic en **Save**

### Paso 6.2: Crear GitHub Action para despliegue
1. Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Create firebase-config.js from secret
        run: |
          cat > firebase-config.js << 'EOF'
          ${{ secrets.FIREBASE_CONFIG }}
          EOF

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

2. Crea el secret en GitHub:
   - **Settings > Secrets and variables > Actions**
   - Haz clic en **New repository secret**
   - Name: `FIREBASE_CONFIG`
   - Value: Pega el contenido completo de tu `firebase-config.js`
   - Haz clic en **Add secret**

### Paso 6.3: Hacer push
```bash
git add .
git commit -m "Add Firebase integration"
git push origin main
```

---

## 🎉 ¡Listo! Tu portafolio está configurado

### 🔗 URLs importantes:
- **Portafolio público:** `https://tuusuario.github.io`
- **Panel de admin:** `https://tuusuario.github.io/admin`

### 🔐 Acceder al panel de administración:
1. Ve a `https://tuusuario.github.io/admin`
2. Inicia sesión con:
   - Email: `alberto.1203@hotmail.com`
   - Contraseña: La que creaste en Firebase Auth

### 📝 Siguiente paso:
Empieza a cargar tu información desde el panel de administración:
1. Perfil general
2. Educación
3. Experiencia laboral
4. Proyectos
5. Certificaciones
6. Cursos de Platzi
7. Sube tu CV y certificados

---

## 🆘 Solución de Problemas

### Error: "Firebase is not defined"
- Verifica que `firebase-config.js` exista
- Verifica que los scripts de Firebase se carguen antes

### Error: "Permission denied" al escribir
- Verifica que hayas iniciado sesión en el panel admin
- Revisa las reglas de Firestore y Storage

### Error: "Firebase config is invalid"
- Verifica que copiaste correctamente la config
- Asegúrate de que `firebaseConfig` tenga todos los campos

### No puedo subir archivos
- Verifica las reglas de Storage
- Verifica que el usuario esté autenticado
- Revisa el tamaño del archivo (máx. 5MB recomendado)

---

## 📚 Recursos Adicionales
- [Documentación Firebase](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Storage Security Rules](https://firebase.google.com/docs/storage/security)
- [Firebase Auth](https://firebase.google.com/docs/auth)
