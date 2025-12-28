# ✅ Checklist de Configuración y Despliegue

## 📋 Fase 1: Configuración Firebase (30 min)

### 1.1 Crear Proyecto Firebase
- [ ] Cuenta de Google creada
- [ ] Proyecto Firebase creado en [console.firebase.google.com](https://console.firebase.google.com)
- [ ] App Web registrada en el proyecto
- [ ] Configuración `firebaseConfig` copiada

### 1.2 Configurar Firestore Database
- [ ] Firestore Database habilitado (modo producción)
- [ ] Ubicación seleccionada (us-central o más cercana)
- [ ] Reglas de seguridad configuradas:
  ```javascript
  allow read: if true;
  allow write: if request.auth != null;
  ```
- [ ] Colecciones creadas:
  - [ ] `profile` (con documento `main`)
  - [ ] `education` (vacía)
  - [ ] `experience` (vacía)
  - [ ] `projects` (vacía)
  - [ ] `certifications` (vacía)
  - [ ] `courses` (vacía)

### 1.3 Configurar Firebase Storage
- [ ] Storage habilitado
- [ ] Reglas de seguridad configuradas (igual que Firestore)
- [ ] Carpetas creadas (opcional):
  - [ ] `cv/`
  - [ ] `certificates/`
  - [ ] `courses/`
  - [ ] `images/`
  - [ ] `projects/`
  - [ ] `profile/`

### 1.4 Configurar Authentication
- [ ] Authentication habilitado
- [ ] Método Email/Password activado
- [ ] Usuario administrador creado:
  - Email: `______________`
  - Contraseña guardada de forma segura: ✅

---

## 📋 Fase 2: Configuración Local (15 min)

### 2.1 Archivos de Configuración
- [ ] Archivo `firebase-config.example.js` existe
- [ ] Archivo `firebase-config.js` creado (copia de example)
- [ ] `firebaseConfig` pegado correctamente en `firebase-config.js`
- [ ] Verificar que `firebase-config.js` está en `.gitignore`
  ```bash
  cat .gitignore | grep firebase-config.js
  ```

### 2.2 Estructura de Archivos
Verificar que existen estos archivos:

**Root:**
- [ ] `index.html`
- [ ] `firebase-config.example.js`
- [ ] `firebase-config.js` ⚠️ (NO hacer commit)
- [ ] `.gitignore`
- [ ] `README-FIREBASE.md`
- [ ] `GUIA-CONFIGURACION-FIREBASE.md`
- [ ] `ARQUITECTURA-SISTEMA.md`
- [ ] `CHECKLIST-CONFIGURACION.md`

**Admin:**
- [ ] `admin/index.html`
- [ ] `admin/admin-styles.css`
- [ ] `admin/admin-app.js`

**JavaScript:**
- [ ] `js/firebase/firebase-service.js`
- [ ] `js/firebase/firebase-loader.js`
- [ ] `js/app.js` (original)

**Scripts:**
- [ ] `scripts/migrate-data-to-firebase.js`

### 2.3 Verificación del `index.html`
- [ ] Scripts de Firebase incluidos antes de `app.js`:
  ```html
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-storage-compat.js"></script>
  <script src="firebase-config.js"></script>
  <script src="js/firebase/firebase-service.js"></script>
  <script src="js/firebase/firebase-loader.js"></script>
  ```

---

## 📋 Fase 3: Pruebas Locales (20 min)

### 3.1 Iniciar Servidor Local
Elegir UNO de estos comandos:
```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: PHP
php -S localhost:8000

# Opción 3: npx
npx serve

# Opción 4: Node.js
npm install -g http-server
http-server -p 8000
```

- [ ] Servidor local iniciado
- [ ] Puerto 8000 (o el que uses) accesible

### 3.2 Probar Portafolio Público
Abrir: `http://localhost:8000`

- [ ] Página carga sin errores
- [ ] No hay errores en la consola (F12)
- [ ] Firebase se inicializa correctamente
- [ ] Secciones visibles (aunque vacías)

### 3.3 Probar Panel Admin
Abrir: `http://localhost:8000/admin`

- [ ] Página de login aparece
- [ ] Formulario de login visible
- [ ] Iniciar sesión funciona con las credenciales:
  - Email: `______________`
  - Contraseña: `______________`
- [ ] Dashboard del admin carga correctamente
- [ ] Todas las secciones son accesibles:
  - [ ] Perfil General
  - [ ] Educación
  - [ ] Experiencia
  - [ ] Proyectos
  - [ ] Certificaciones
  - [ ] Cursos
  - [ ] Archivos & CV

### 3.4 Verificar Consola del Navegador
Abrir DevTools (F12) > Console

**No debe haber errores rojos**, solo mensajes como:
```
✅ Todos los datos cargados desde Firebase
```

Si hay errores, verificar:
- [ ] `firebase-config.js` existe y está bien formateado
- [ ] Credenciales de Firebase son correctas
- [ ] Reglas de Firestore y Storage están configuradas

---

## 📋 Fase 4: Migración de Datos (30 min)

### 4.1 Opción Automática (Recomendado)

1. **Abrir panel admin:** `http://localhost:8000/admin`
2. **Iniciar sesión**
3. **Abrir consola del navegador:** F12 > Console
4. **Cargar script de migración:**
   - [ ] Copiar contenido de `scripts/migrate-data-to-firebase.js`
   - [ ] Pegar en la consola
   - [ ] Presionar Enter
5. **Ejecutar migración:**
   - [ ] Escribir en consola: `runMigration()`
   - [ ] Presionar Enter
   - [ ] Esperar mensaje de éxito

6. **Verificar en Firestore:**
   - [ ] Ir a Firebase Console > Firestore
   - [ ] Verificar que las colecciones tienen datos:
     - [ ] `profile` (1 documento)
     - [ ] `education` (4 documentos)
     - [ ] `experience` (3 documentos)
     - [ ] `projects` (6 documentos)
     - [ ] `certifications` (6 documentos)

### 4.2 Opción Manual (Alternativa)

Si prefieres hacerlo manualmente:

**Perfil General:**
- [ ] Nombre completo
- [ ] Título profesional
- [ ] Descripción
- [ ] Email, teléfono, ubicación
- [ ] Sitio web

**Educación:** (4 registros)
- [ ] Tecnólogo SENA
- [ ] Ingeniería de Sistemas CORHUILA
- [ ] Especialización Redes SENA
- [ ] Especialización Desarrollo Software UNIMINUTO

**Experiencia:** (3 registros)
- [ ] Webmaster UNINAVARRA (actual)
- [ ] Práctica Ingeniero UNINAVARRA
- [ ] Práctica Tecnólogo Hospital

**Proyectos:** (6 registros)
- [ ] Tienda en línea
- [ ] Sistema universitario
- [ ] Plugin Geolocalización
- [ ] Plugin Certificados
- [ ] App Flutter
- [ ] Automatizaciones Python

**Certificaciones:** (6 registros)
- [ ] Tarjeta Profesional COPNIA
- [ ] IBM AI Developer
- [ ] Desarrollo Web PHP
- [ ] Java
- [ ] Programación Explorador
- [ ] WorldSkills 2015

---

## 📋 Fase 5: Subir Archivos (30 min)

### 5.1 Foto de Perfil
- [ ] Preparar imagen (formato: JPG/PNG, tamaño: max 500KB)
- [ ] Panel admin > Perfil General
- [ ] Subir imagen en "Foto de Perfil"
- [ ] Guardar
- [ ] Verificar en portafolio público

### 5.2 CV (Hoja de Vida)
- [ ] Preparar CV en PDF (tamaño: max 2MB)
- [ ] Panel admin > Archivos & CV
- [ ] Arrastrar CV a la zona de carga
- [ ] Esperar confirmación de subida
- [ ] Verificar botón "Descargar CV" funciona en portafolio

### 5.3 Certificados
Para cada certificación:
- [ ] Certificación 1: Archivo subido
- [ ] Certificación 2: Archivo subido
- [ ] Certificación 3: Archivo subido
- [ ] ... (repetir para todas)

### 5.4 Cursos de Platzi
Agregar cada curso completado:
- [ ] Curso 1 agregado
- [ ] Curso 2 agregado
- [ ] Curso 3 agregado
- [ ] ... (continuar según necesites)

Información requerida por curso:
- Nombre del curso
- Plataforma: "Platzi"
- Fecha de finalización
- Habilidades aprendidas
- Certificado (PDF/Imagen)

### 5.5 Imágenes de Proyectos
Para cada proyecto:
- [ ] Proyecto 1: Imagen subida
- [ ] Proyecto 2: Imagen subida
- [ ] Proyecto 3: Imagen subida
- [ ] ... (repetir para todos)

Recomendaciones:
- Formato: JPG o PNG
- Tamaño recomendado: 1200x800px
- Peso: max 500KB por imagen

---

## 📋 Fase 6: GitHub y Despliegue (30 min)

### 6.1 Preparar Repositorio

**Verificar `.gitignore`:**
```bash
cat .gitignore
```

Debe contener:
- [ ] `firebase-config.js` ⚠️ IMPORTANTE

**Verificar git status:**
```bash
git status
```

- [ ] `firebase-config.js` NO aparece en la lista
- [ ] Si aparece, agregarlo a `.gitignore` inmediatamente

### 6.2 Crear GitHub Secret

1. **Ir a tu repositorio en GitHub**
2. **Settings > Secrets and variables > Actions**
3. **New repository secret**
   - [ ] Name: `FIREBASE_CONFIG`
   - [ ] Value: Copiar TODO el contenido de `firebase-config.js`
   - [ ] Add secret

### 6.3 Crear GitHub Action

**Crear carpeta:**
```bash
mkdir -p .github/workflows
```

**Crear archivo:** `.github/workflows/deploy.yml`

Contenido:
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

- [ ] Archivo creado
- [ ] Formato YAML correcto (indentación importante)

### 6.4 Configurar GitHub Pages

1. **Ir a Settings > Pages**
2. **Configurar:**
   - [ ] Source: `Deploy from a branch`
   - [ ] Branch: `gh-pages` (se creará automáticamente)
   - [ ] Folder: `/ (root)`
   - [ ] Save

### 6.5 Hacer Push

```bash
# Ver cambios
git status

# Agregar archivos
git add .

# Commit
git commit -m "Add Firebase integration with admin panel"

# Push
git push origin main
```

- [ ] Commit realizado
- [ ] Push exitoso
- [ ] GitHub Action ejecutándose (ver pestaña "Actions")
- [ ] GitHub Action completada sin errores ✅

### 6.6 Verificar Despliegue

Esperar 2-5 minutos y abrir:

**Tu portafolio:**
`https://tuusuario.github.io/` o tu dominio personalizado

- [ ] Sitio carga correctamente
- [ ] Datos de Firebase visibles
- [ ] Imágenes se muestran
- [ ] CV descargable funciona
- [ ] Responsive funciona (probar en móvil)

**Panel admin:**
`https://tuusuario.github.io/admin`

- [ ] Login funciona
- [ ] Puedes editar datos
- [ ] Los cambios se reflejan en el portafolio público

---

## 📋 Fase 7: Pruebas Finales (15 min)

### 7.1 Funcionalidad Completa

**Portafolio Público:**
- [ ] Hero section muestra tu nombre
- [ ] Foto de perfil visible
- [ ] Información de contacto correcta
- [ ] Educación listada correctamente
- [ ] Experiencia laboral completa
- [ ] Proyectos con imágenes
- [ ] Certificaciones visibles
- [ ] Cursos de Platzi listados
- [ ] Botón "Descargar CV" funciona
- [ ] Links de redes sociales funcionan
- [ ] Botón WhatsApp funciona
- [ ] Navegación smooth scroll funciona
- [ ] Animaciones funcionan

**Panel Admin:**
- [ ] Login/Logout funciona
- [ ] Editar perfil y guardar
- [ ] Agregar nueva educación
- [ ] Editar experiencia existente
- [ ] Eliminar un elemento
- [ ] Subir archivo nuevo
- [ ] Todos los cambios se reflejan en el portafolio

### 7.2 Responsive Design

Probar en:
- [ ] Desktop (Chrome)
- [ ] Desktop (Firefox)
- [ ] Tablet (iPad o similar)
- [ ] Móvil (Android/iOS)

### 7.3 Performance

Abrir DevTools > Network:
- [ ] Página carga en menos de 3 segundos
- [ ] Firebase SDK carga correctamente
- [ ] Imágenes optimizadas
- [ ] No hay errores 404

### 7.4 SEO Básico

- [ ] Título de la página correcto
- [ ] Meta description presente
- [ ] Open Graph tags (opcional)
- [ ] Favicon visible

---

## 📋 Fase 8: Documentación y Respaldos (10 min)

### 8.1 Guardar Credenciales

En un lugar seguro (LastPass, 1Password, etc.):
- [ ] Email de Firebase Auth
- [ ] Contraseña de Firebase Auth
- [ ] URL del proyecto Firebase
- [ ] URL del portafolio
- [ ] URL del panel admin

### 8.2 Backup de Datos

**Desde Firebase Console:**
- [ ] Exportar datos de Firestore (opcional)
- [ ] Descargar archivos de Storage (opcional)

**Localmente:**
- [ ] Copiar `firebase-config.js` a lugar seguro
- [ ] Guardar copia del repositorio

### 8.3 Documentación Personal

Crear un archivo `NOTAS-PERSONALES.md`:
- [ ] Contraseña admin
- [ ] Comandos útiles
- [ ] URLs importantes
- [ ] Notas de configuración

---

## 🎉 ¡Configuración Completada!

Si todos los checkboxes están marcados, tu portafolio está:

✅ **Completamente funcional**
✅ **Desplegado en GitHub Pages**
✅ **Integrado con Firebase**
✅ **Panel admin operativo**
✅ **Datos dinámicos cargando**
✅ **Archivos subidos**
✅ **Listo para compartir**

---

## 📞 Próximos Pasos

1. **Compartir tu portafolio:**
   - LinkedIn
   - CV impreso
   - Aplicaciones de trabajo

2. **Mantener actualizado:**
   - Agregar nuevos proyectos
   - Actualizar cursos de Platzi
   - Subir nuevas certificaciones

3. **Optimizaciones futuras:**
   - Dominio personalizado
   - Analytics (Google Analytics)
   - SEO avanzado
   - PWA (Progressive Web App)

---

## ⚠️ Troubleshooting Común

### El portafolio no muestra datos

**Problema:** Página carga pero está vacía

**Solución:**
1. Abrir consola (F12)
2. Buscar mensajes de error
3. Verificar que `firebase-config.js` exista
4. Verificar reglas de Firestore (lectura pública)
5. Verificar que hay datos en Firebase Console

### No puedo iniciar sesión en el admin

**Problema:** Credenciales incorrectas

**Solución:**
1. Verificar email y contraseña en Firebase Console
2. Resetear contraseña si es necesario
3. Verificar reglas de Authentication

### Los archivos no se suben

**Problema:** Upload falla

**Solución:**
1. Verificar reglas de Storage
2. Verificar que estás autenticado
3. Reducir tamaño del archivo
4. Ver consola para errores

### GitHub Action falla

**Problema:** Deploy no funciona

**Solución:**
1. Verificar que `FIREBASE_CONFIG` secret existe
2. Verificar sintaxis de `.github/workflows/deploy.yml`
3. Ver logs del Action en GitHub

---

**¡Éxito con tu nuevo portafolio dinámico! 🚀**
