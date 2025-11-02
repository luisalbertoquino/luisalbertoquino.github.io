# 📦 Guía de Despliegue a GitHub Pages

## Método 1: GitHub Web Interface (Sin comandos)

### Paso 1: Crear el Repositorio
1. Ve a https://github.com/new
2. Nombre del repositorio: `luisalbertoquino.github.io`
3. Público
4. NO inicialices con README
5. Click en "Create repository"

### Paso 2: Subir Archivos
1. En la página del repositorio, click en "uploading an existing file"
2. Arrastra TODOS los archivos y carpetas del portfolio
3. Escribe un mensaje: "Initial portfolio commit"
4. Click en "Commit changes"

### Paso 3: Activar GitHub Pages
1. Ve a Settings (Configuración)
2. En el menú izquierdo, click en "Pages"
3. En "Source", selecciona "main" branch
4. Click en "Save"
5. Espera 2-3 minutos

### Paso 4: Visitar tu Sitio
Tu sitio estará disponible en:
```
https://luisalbertoquino.github.io
```

---

## Método 2: Usando Git (Línea de comandos)

### Requisitos Previos
- Git instalado (descarga de https://git-scm.com)
- Cuenta de GitHub

### Comandos Paso a Paso

```bash
# 1. Navega a la carpeta del portfolio
cd /ruta/a/tu/portfolio

# 2. Inicializa Git
git init

# 3. Configura tu información (primera vez)
git config --global user.name "Luis Alberto Quino"
git config --global user.email "alberto.1203@hotmail.com"

# 4. Agrega todos los archivos
git add .

# 5. Haz tu primer commit
git commit -m "Portfolio inicial"

# 6. Crea la rama main
git branch -M main

# 7. Conecta con GitHub
git remote add origin https://github.com/luisalbertoquino/luisalbertoquino.github.io.git

# 8. Sube los archivos
git push -u origin main
```

---

## Método 3: GitHub Desktop (Visual)

### Paso 1: Instalar GitHub Desktop
1. Descarga de https://desktop.github.com
2. Instala y accede con tu cuenta de GitHub

### Paso 2: Crear Repositorio
1. File > New Repository
2. Nombre: `luisalbertoquino.github.io`
3. Local Path: Selecciona donde guardar
4. Click "Create Repository"

### Paso 3: Copiar Archivos
1. Copia todos los archivos del portfolio a la carpeta creada
2. GitHub Desktop detectará los cambios

### Paso 4: Hacer Commit
1. Escribe mensaje: "Portfolio inicial"
2. Click "Commit to main"

### Paso 5: Publicar
1. Click "Publish repository"
2. Asegúrate que NO esté marcado como privado
3. Click "Publish repository"

### Paso 6: Activar Pages
1. Ve a github.com/luisalbertoquino/luisalbertoquino.github.io
2. Settings > Pages
3. Source: main branch
4. Save

---

## 🔄 Para Actualizar tu Sitio

### Método Web:
1. Ve a tu repositorio
2. Click en el archivo que quieres editar
3. Click en el ícono de lápiz (Edit)
4. Haz cambios
5. "Commit changes"

### Método Git:
```bash
# Después de hacer cambios
git add .
git commit -m "Descripción de cambios"
git push
```

### Método GitHub Desktop:
1. Edita archivos localmente
2. GitHub Desktop mostrará cambios
3. Escribe mensaje de commit
4. Click "Commit to main"
5. Click "Push origin"

---

## ✅ Verificar que Funciona

1. Visita: https://luisalbertoquino.github.io
2. Debe cargar tu portfolio
3. Si no funciona:
   - Espera 5 minutos más
   - Ve a Settings > Pages y verifica que esté activado
   - Revisa que el repositorio se llame exactamente: `luisalbertoquino.github.io`

---

## 🔗 Dominio Personalizado (Opcional)

Si tienes un dominio propio (ej: luisquino.com):

1. En tu proveedor de dominio, crea estos DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: luisalbertoquino.github.io
   ```

2. En GitHub:
   - Settings > Pages
   - Custom domain: tu-dominio.com
   - Save

---

## 📱 Verificar en Múltiples Dispositivos

Prueba tu sitio en:
- [ ] Chrome Desktop
- [ ] Firefox
- [ ] Safari (si tienes Mac)
- [ ] Chrome Mobile
- [ ] Safari Mobile (si tienes iPhone)

---

## 🐛 Solución de Problemas

**Error 404:**
- Verifica el nombre del repositorio
- Debe ser: `tu-usuario.github.io`

**Los cambios no se ven:**
- Espera 2-3 minutos
- Limpia caché (Ctrl + F5)
- Verifica que hiciste push correctamente

**Las imágenes no cargan:**
- Verifica las rutas en js/app.js
- Deben ser: `assets/images/nombre.jpg`

**El sitio se ve roto:**
- Verifica que subiste TODAS las carpetas
- css/, js/, assets/ deben estar presentes

---

## 📊 Estadísticas de GitHub Pages

Puedes ver las visitas a tu sitio:
1. Settings > Pages
2. Verás estadísticas básicas
3. Para más detalle, usa Google Analytics (gratis)

---

## 🎉 ¡Listo!

Tu portfolio ahora está online y accesible desde cualquier parte del mundo.

**URL de tu sitio:**
```
https://luisalbertoquino.github.io
```

**Comparte tu link en:**
- LinkedIn (sección de sitio web)
- GitHub (README de tu perfil)
- Tu CV
- Tarjetas de presentación
- Email signature

---

**¿Preguntas? Revisa la documentación oficial:**
https://docs.github.com/en/pages
