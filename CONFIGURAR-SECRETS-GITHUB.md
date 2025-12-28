# 🔐 Configurar Secrets de Firebase en GitHub

## ⚠️ **Problema Actual**

Tu portafolio en GitHub Pages muestra este error:
```
GET https://luisalbertoquino.github.io/firebase-config.js net::ERR_ABORTED 404 (Not Found)
```

**Causa:** Los secrets de Firebase no están configurados en GitHub, entonces el archivo `firebase-config.js` no se genera durante el deployment.

---

## 🎯 **Solución: Configurar Secrets**

### **Paso 1: Obtener Credenciales de Firebase**

1. Ve a: https://console.firebase.google.com/
2. Selecciona tu proyecto: `portafolio-web-92007`
3. Haz clic en el ⚙️ (Configuración) → **Configuración del proyecto**
4. Baja hasta la sección **"Tus apps"**
5. Busca la app web (icono `</>`), si no existe créala:
   - Clic en **"Agregar app"** → **Web**
   - Nombre: `portafolio-web`
   - Marca la casilla **"También configurar Firebase Hosting"** (opcional)
   - Clic en **"Registrar app"**
6. Verás un código similar a este:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "portafolio-web-92007.firebaseapp.com",
  projectId: "portafolio-web-92007",
  storageBucket: "portafolio-web-92007.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456",
  measurementId: "G-ABC123DEF"
};
```

**📋 Copia estos valores, los necesitarás en el siguiente paso.**

---

### **Paso 2: Configurar Secrets en GitHub**

1. Ve a tu repositorio: https://github.com/luisalbertoquino/luisalbertoquino.github.io

2. Haz clic en **"Settings"** (Configuración)

3. En el menú lateral izquierdo, busca:
   - **"Secrets and variables"** → **"Actions"**

4. Haz clic en **"New repository secret"**

5. Agrega **CADA UNO** de estos secrets:

| Nombre del Secret | Valor de Firebase |
|------------------|-------------------|
| `FIREBASE_API_KEY` | El valor de `apiKey` |
| `FIREBASE_AUTH_DOMAIN` | El valor de `authDomain` |
| `FIREBASE_PROJECT_ID` | El valor de `projectId` |
| `FIREBASE_STORAGE_BUCKET` | El valor de `storageBucket` |
| `FIREBASE_MESSAGING_SENDER_ID` | El valor de `messagingSenderId` |
| `FIREBASE_APP_ID` | El valor de `appId` |
| `FIREBASE_MEASUREMENT_ID` | El valor de `measurementId` |

### **Ejemplo:**

**Secret 1:**
- Name: `FIREBASE_API_KEY`
- Secret: `AIzaSyC...` (tu API key real)
- Clic en **"Add secret"**

**Secret 2:**
- Name: `FIREBASE_AUTH_DOMAIN`
- Secret: `portafolio-web-92007.firebaseapp.com`
- Clic en **"Add secret"**

Y así sucesivamente con los 7 secrets...

---

### **Paso 3: Verificar Configuración**

Una vez agregados todos los secrets, deberías ver algo así:

```
Repository secrets (7)
├── FIREBASE_API_KEY                Updated X minutes ago
├── FIREBASE_APP_ID                 Updated X minutes ago
├── FIREBASE_AUTH_DOMAIN            Updated X minutes ago
├── FIREBASE_MEASUREMENT_ID         Updated X minutes ago
├── FIREBASE_MESSAGING_SENDER_ID    Updated X minutes ago
├── FIREBASE_PROJECT_ID             Updated X minutes ago
└── FIREBASE_STORAGE_BUCKET         Updated X minutes ago
```

---

### **Paso 4: Forzar Nuevo Deployment**

Opción A: **Push un commit**
```bash
# Hacer cualquier cambio pequeño
echo "# Test" >> test.txt
git add test.txt
git commit -m "Test deployment"
git push origin main
```

Opción B: **Re-run workflow manualmente**
1. Ve a: https://github.com/luisalbertoquino/luisalbertoquino.github.io/actions
2. Selecciona el último workflow: "Deploy to GitHub Pages"
3. Clic en **"Re-run all jobs"**

---

### **Paso 5: Verificar Deployment**

1. Ve a: https://github.com/luisalbertoquino/luisalbertoquino.github.io/actions

2. Verás el workflow en ejecución

3. Haz clic en el workflow para ver los logs

4. Deberías ver:
   ```
   ✅ Firebase secrets appear to be configured
   ✅ firebase-config.js exists
   ```

5. Espera a que termine (1-2 minutos)

6. Visita tu sitio: https://luisalbertoquino.github.io

7. Abre la consola del navegador (F12)

8. Si todo está bien, verás:
   ```
   ✅ Firebase initialized successfully
   ```

---

## 🐛 **Solución de Problemas**

### **Error: "FIREBASE_API_KEY secret is not configured!"**

**Solución:**
- Verifica que agregaste el secret con el nombre **EXACTO**: `FIREBASE_API_KEY` (sin espacios, mayúsculas)
- Verifica que el valor no tenga espacios al inicio o final

### **Error: "firebase-config.js not found"**

**Solución:**
- Verifica que todos los 7 secrets estén configurados
- Re-run el workflow manualmente

### **Error en consola: "FirebaseError: No Firebase App"**

**Solución:**
1. Limpia caché del navegador (Ctrl + Shift + Delete)
2. Recarga la página (Ctrl + F5)
3. Espera 3-5 minutos para GitHub Pages

### **El sitio sigue sin funcionar después de 5 minutos**

**Solución:**
1. Ve a: https://github.com/luisalbertoquino/luisalbertoquino.github.io/deployments
2. Verifica que el deployment esté activo en: `github-pages`
3. Si no está activo, ve a **Settings** → **Pages**
4. Verifica que **Source** esté en: `Deploy from a branch`
5. **Branch** debe ser: `gh-pages` y carpeta `/ (root)`

---

## 📋 **Checklist Final**

- [ ] Obtuve las credenciales de Firebase Console
- [ ] Configuré los 7 secrets en GitHub
- [ ] Verifiqué que los nombres sean exactos
- [ ] Hice push o re-run del workflow
- [ ] El workflow se ejecutó sin errores
- [ ] Mi sitio carga sin error 404 de firebase-config.js
- [ ] La consola muestra "Firebase initialized successfully"

---

## 💡 **Nota Importante**

Los secrets son **privados** y **seguros**. GitHub nunca los mostrará en los logs ni en el código público. Solo se usan durante el build del workflow.

---

**¿Necesitas ayuda?** Revisa los logs del workflow en:
https://github.com/luisalbertoquino/luisalbertoquino.github.io/actions
