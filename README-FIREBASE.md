# 🔥 Portafolio Dinámico con Firebase + GitHub Pages

## ✨ ¿Qué se implementó?

Tu portafolio ahora es **100% dinámico** usando Firebase como backend. Puedes actualizar toda tu información desde un panel de administración web, sin tocar código.

### 🎯 Características implementadas:

✅ **Panel de Administración Web** (`/admin`)
- Login seguro con Firebase Authentication
- CRUD completo para todas las secciones
- Interfaz intuitiva y responsive
- Drag & drop para subir archivos

✅ **Firebase Firestore** (Base de datos)
- Perfil general
- Educación
- Experiencia laboral
- Proyectos
- Certificaciones
- Cursos (Platzi, etc.)

✅ **Firebase Storage** (Almacenamiento)
- CV (PDF)
- Certificados (PDF/Imágenes)
- Fotos de perfil
- Imágenes de proyectos
- Portadas

✅ **Frontend Dinámico**
- Carga automática desde Firebase
- Fallback a datos estáticos si Firebase falla
- Animaciones y contadores

✅ **GitHub Pages Compatible**
- 100% estático + Firebase
- Sin necesidad de servidor backend
- Gratis para siempre

---

## 📂 Estructura de archivos creados

```
WEB/
├── admin/                          # Panel de administración
│   ├── index.html                  # Interfaz del panel admin
│   ├── admin-styles.css            # Estilos del panel
│   └── admin-app.js                # Lógica del panel admin
│
├── js/
│   └── firebase/
│       ├── firebase-service.js     # Servicio CRUD de Firebase
│       └── firebase-loader.js      # Carga datos en el frontend
│
├── scripts/
│   └── migrate-data-to-firebase.js # Script de migración automática
│
├── firebase-config.example.js      # Plantilla de configuración
├── firebase-config.js              # TU configuración (NO hacer commit)
├── GUIA-CONFIGURACION-FIREBASE.md  # Guía paso a paso
└── README-FIREBASE.md              # Este archivo
```

---

## 🚀 Guía de Inicio Rápido

### Paso 1: Configurar Firebase (15 minutos)

Sigue la guía detallada en [`GUIA-CONFIGURACION-FIREBASE.md`](./GUIA-CONFIGURACION-FIREBASE.md)

**Resumen:**
1. Crear proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilitar Firestore Database
3. Habilitar Storage
4. Habilitar Authentication (Email/Password)
5. Crear tu usuario administrador
6. Copiar configuración a `firebase-config.js`

### Paso 2: Configurar localmente

```bash
# 1. Copia el archivo de ejemplo
cp firebase-config.example.js firebase-config.js

# 2. Edita firebase-config.js con tus credenciales de Firebase
# (Las obtienes en Firebase Console > Configuración del proyecto)

# 3. Verifica que firebase-config.js esté en .gitignore
cat .gitignore | grep firebase-config.js
```

### Paso 3: Probar localmente

```bash
# Inicia un servidor local (cualquiera de estos)
python -m http.server 8000
# o
npx serve
# o
php -S localhost:8000
```

Abre tu navegador:
- **Portafolio:** `http://localhost:8000`
- **Panel Admin:** `http://localhost:8000/admin`

### Paso 4: Migrar tus datos

**Opción A: Migración automática (recomendado)**

1. Accede al panel admin local: `http://localhost:8000/admin`
2. Inicia sesión con las credenciales que creaste en Firebase
3. Abre la consola del navegador (F12)
4. Copia y pega el contenido de `scripts/migrate-data-to-firebase.js`
5. Ejecuta: `runMigration()`
6. Espera a que termine la migración

**Opción B: Manual**

1. Accede al panel admin
2. Navega por cada sección
3. Agrega los datos manualmente usando los formularios

### Paso 5: Subir archivos

Desde el panel admin, sección **"Archivos & CV"**:

1. **CV (Hoja de Vida):** Arrastra tu CV en PDF
2. **Foto de perfil:** Sube desde "Perfil General"
3. **Certificados:** Sube al agregar/editar certificaciones
4. **Cursos de Platzi:** Sube al agregar cursos
5. **Imágenes de proyectos:** Sube al agregar/editar proyectos

### Paso 6: Desplegar en GitHub Pages

```bash
# 1. Asegúrate de que firebase-config.js NO esté en el commit
git status

# 2. Crea un GitHub Secret con tu configuración
# Ve a: Settings > Secrets and variables > Actions
# Crea un secret llamado: FIREBASE_CONFIG
# Valor: El contenido COMPLETO de tu firebase-config.js

# 3. Crea el workflow de GitHub Actions
mkdir -p .github/workflows
```

Crea `.github/workflows/deploy.yml`:

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

      - name: Create firebase-config.js
        run: |
          cat > firebase-config.js << 'EOF'
          ${{ secrets.FIREBASE_CONFIG }}
          EOF

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

```bash
# 4. Haz commit y push
git add .
git commit -m "Add Firebase integration with admin panel"
git push origin main
```

---

## 🎨 Cómo usar el Panel de Administración

### Acceso
- **URL local:** `http://localhost:8000/admin`
- **URL producción:** `https://tuusuario.github.io/admin`

### Credenciales
- **Email:** El que configuraste en Firebase Auth
- **Contraseña:** La que creaste para ese usuario

### Secciones disponibles:

#### 1️⃣ Perfil General
- Nombre completo
- Título profesional
- Descripción
- Foto de perfil
- Información de contacto
- Sitio web

#### 2️⃣ Educación
- Título/Grado
- Institución
- Fechas (inicio - fin)
- Descripción

#### 3️⃣ Experiencia Laboral
- Cargo
- Empresa
- Fechas
- Descripción
- Tecnologías utilizadas

#### 4️⃣ Proyectos
- Nombre
- Descripción
- Imagen de portada
- Tecnologías
- URL del proyecto
- Repositorio GitHub
- Orden de visualización

#### 5️⃣ Certificaciones
- Nombre
- Emisor
- Fecha
- Archivo (PDF/Imagen)
- URL de verificación

#### 6️⃣ Cursos (Platzi, etc.)
- Nombre del curso
- Plataforma
- Fecha de finalización
- Habilidades aprendidas
- Certificado

#### 7️⃣ Archivos & CV
- Subir/actualizar CV
- Gestionar imágenes
- Ver archivos subidos

---

## 🔒 Seguridad

### ✅ Configurado correctamente:

1. **Firestore Rules:** Solo lectura pública, escritura autenticada
2. **Storage Rules:** Solo lectura pública, subida autenticada
3. **Authentication:** Solo usuarios registrados pueden editar
4. **firebase-config.js:** Incluido en `.gitignore`
5. **GitHub Secrets:** Configuración protegida en CI/CD

### ⚠️ IMPORTANTE:

- **NUNCA** hagas commit de `firebase-config.js`
- **NUNCA** compartas tus credenciales de Firebase Auth
- **SIEMPRE** usa GitHub Secrets para deploy
- **Revisa** que `.gitignore` incluya `firebase-config.js`

---

## 🎯 Flujo de trabajo recomendado

### Para actualizar contenido:

1. Accede al panel admin
2. Edita la sección que necesites
3. Los cambios se guardan inmediatamente en Firebase
4. El portafolio público se actualiza automáticamente

### Para agregar cursos de Platzi:

1. Panel admin > **Cursos**
2. Haz clic en **"+ Agregar"**
3. Completa el formulario:
   - Nombre del curso
   - Plataforma: "Platzi"
   - Fecha de finalización
   - Habilidades aprendidas (separadas por coma)
   - Sube el certificado (PDF o imagen)
4. Guarda

### Para actualizar CV:

1. Panel admin > **Archivos & CV**
2. Arrastra tu nuevo CV (PDF)
3. Espera a que se suba
4. El botón "Descargar CV" en el portafolio se actualiza automáticamente

### Para agregar proyecto con imagen:

1. Panel admin > **Proyectos**
2. **"+ Agregar"**
3. Sube la imagen de portada
4. Completa la información
5. Define el orden de visualización
6. Guarda

---

## 📊 Estructura de datos en Firestore

### Colección: `profile`
```javascript
{
  fullName: string,
  title: string,
  description: string,
  email: string,
  phone: string,
  location: string,
  website: string,
  profileImage: string (URL),
  cvUrl: string (URL)
}
```

### Colección: `education`
```javascript
{
  degree: string,
  institution: string,
  startDate: string (YYYY-MM-DD),
  endDate: string (YYYY-MM-DD),
  description: string,
  createdAt: timestamp
}
```

### Colección: `experience`
```javascript
{
  position: string,
  company: string,
  startDate: string (YYYY-MM-DD),
  endDate: string (YYYY-MM-DD o vacío),
  description: string,
  technologies: string (separadas por coma),
  createdAt: timestamp
}
```

### Colección: `projects`
```javascript
{
  name: string,
  description: string,
  technologies: string (separadas por coma),
  url: string,
  github: string,
  image: string (URL),
  order: number,
  createdAt: timestamp
}
```

### Colección: `certifications`
```javascript
{
  name: string,
  issuer: string,
  date: string (YYYY-MM-DD),
  fileUrl: string (URL),
  verificationUrl: string,
  createdAt: timestamp
}
```

### Colección: `courses`
```javascript
{
  name: string,
  platform: string (Platzi, Udemy, etc.),
  completedDate: string (YYYY-MM-DD),
  skills: string (separadas por coma),
  certificateUrl: string (URL),
  createdAt: timestamp
}
```

---

## 🐛 Solución de Problemas

### El panel admin no carga
- ✅ Verifica que `firebase-config.js` exista y tenga la configuración correcta
- ✅ Revisa la consola del navegador (F12) para ver errores
- ✅ Verifica que Firebase esté correctamente configurado

### No puedo iniciar sesión
- ✅ Verifica que el usuario esté creado en Firebase Authentication
- ✅ Asegúrate de usar el email y contraseña correctos
- ✅ Revisa que Authentication esté habilitado en Firebase

### Los datos no se guardan
- ✅ Verifica que hayas iniciado sesión
- ✅ Revisa las reglas de Firestore
- ✅ Mira la consola del navegador para errores

### No puedo subir archivos
- ✅ Verifica las reglas de Storage
- ✅ Asegúrate de estar autenticado
- ✅ Revisa el tamaño del archivo (máx 5MB recomendado)

### El portafolio no muestra los datos de Firebase
- ✅ Verifica que `firebase-config.js` esté cargado
- ✅ Revisa la consola del navegador
- ✅ Asegúrate de que los datos existan en Firestore
- ✅ Verifica las reglas de lectura de Firestore

---

## 📞 Contacto y Soporte

Si tienes problemas:

1. **Revisa la guía:** [`GUIA-CONFIGURACION-FIREBASE.md`](./GUIA-CONFIGURACION-FIREBASE.md)
2. **Revisa la consola:** F12 en el navegador para ver errores
3. **Documentación Firebase:** https://firebase.google.com/docs

---

## 🎉 ¡Felicidades!

Tu portafolio ahora es completamente dinámico y profesional. Puedes actualizarlo en segundos sin tocar código.

**Próximos pasos sugeridos:**

1. ✅ Completa toda tu información en el panel admin
2. ✅ Sube tu CV actualizado
3. ✅ Agrega todos tus cursos de Platzi
4. ✅ Sube las imágenes de tus proyectos
5. ✅ Comparte tu portafolio con potenciales empleadores

**¡Tu perfil profesional está listo para brillar! 🚀**
