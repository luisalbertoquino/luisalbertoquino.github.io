# 🧪 Cómo Probar el Sistema de Upload

## ✅ Paso 1: Configurar el Token (SOLO UNA VEZ)

1. **Recarga tu localhost:**
   ```
   http://localhost:8000/admin
   ```

2. **Inicia sesión** con tus credenciales

3. **Abre la Consola del navegador:**
   - Presiona `F12`
   - Ve a la pestaña **"Console"**

4. **Copia y pega este código:**
   ```javascript
   await firebaseService.db.collection('config').doc('github').set({
     token: 'TU_TOKEN_AQUI',
     owner: 'luisalbertoquino',
     repo: 'luisalbertoquino.github.io',
     branch: 'main'
   });

   console.log('✅ Token guardado correctamente');
   ```

5. **Presiona Enter**

6. **Deberías ver:**
   ```
   ✅ Token guardado correctamente
   ```

---

## 🎯 Paso 2: Probar Subida de Foto de Perfil

1. **Recarga la página admin** (F5)

2. **Ve a "Perfil General"** (ya deberías estar ahí)

3. **Busca el campo "Foto de Perfil (URL)"**
   - Verás un campo de texto (solo lectura)
   - Debajo verás: **"Choose File" o "Examinar"**

4. **Haz clic en "Examinar"**
   - Selecciona una imagen (JPG, PNG)
   - Máximo 5MB

5. **Verás en la esquina superior derecha:**
   ```
   Subiendo foto de perfil... 30%
   Subiendo foto de perfil... 60%
   Subiendo foto de perfil... 100%
   ```

6. **Aparecerá un alert:**
   ```
   ✅ Foto de perfil subida correctamente

   URL: https://luisalbertoquino.github.io/assets/files/images/profile-1703794123.jpg

   ⏳ Espera 3-5 minutos para que GitHub Pages se actualice.
   ```

7. **El campo "Foto de Perfil (URL)" se llenará automáticamente** con la URL

8. **Haz clic en "Guardar Cambios"**

9. **Espera 3-5 minutos**

10. **Recarga el home:**
    ```
    http://localhost:8000
    ```

11. **¡Tu foto debería aparecer!** ✨

---

## 🧪 Paso 3: Verificar en GitHub

Mientras esperas los 3-5 minutos, puedes verificar que el archivo se subió:

1. **Ve a tu repositorio:**
   ```
   https://github.com/luisalbertoquino/luisalbertoquino.github.io
   ```

2. **Navega a:**
   ```
   assets/files/images/
   ```

3. **Deberías ver tu imagen** con un nombre como:
   ```
   profile-1703794123.jpg
   ```

4. **Haz clic en el archivo** para verlo

5. **Verás el commit:**
   ```
   Upload image: profile-1703794123.jpg
   ```

---

## 📊 Paso 4: Probar Subida de CV

1. **En el panel admin**, ve a **"Perfil General"**

2. **Scroll down hasta "CV URL (PDF)"**

3. **Haz clic en "Examinar"**

4. **Selecciona tu CV** (PDF, máx 10MB)

5. **Verás el progreso:**
   ```
   Subiendo CV... 50%
   ```

6. **URL se llena automáticamente**

7. **Guardar Cambios**

8. **Espera 3-5 minutos**

9. **Verifica en GitHub:**
   ```
   https://github.com/luisalbertoquino/luisalbertoquino.github.io/tree/main/assets/files/cv
   ```

---

## 🎨 Paso 5: Probar Imagen de Proyecto

1. **Panel admin** → **"Proyectos"**

2. **Haz clic en "Editar"** en cualquier proyecto

3. **Campo "Imagen URL"** → **"Examinar"**

4. **Selecciona imagen del proyecto**

5. **URL automática**

6. **Guardar**

7. **Espera 3-5 minutos**

8. **Verifica en el home** → sección Proyectos

---

## ⚠️ Solución de Problemas

### Error: "Configuración de GitHub no encontrada"

**Causa:** No guardaste el token en Firebase

**Solución:** Ejecuta el Paso 1 de nuevo

---

### Error: "GitHub API Error: Bad credentials"

**Causa:** Token inválido o expirado

**Solución:**
1. Crea un nuevo token en: https://github.com/settings/tokens
2. Ejecuta el Paso 1 con el nuevo token

---

### Error: "La imagen es muy grande"

**Causa:** Imagen mayor a 5MB

**Solución:**
1. Optimiza la imagen en: https://tinypng.com/
2. Intenta de nuevo

---

### No veo mi archivo después de 5 minutos

**Verifica:**
1. ¿El archivo está en GitHub? (verifica en el repo)
2. ¿GitHub Pages está activo? (Settings → Pages)
3. ¿Hiciste "Guardar Cambios" en el admin?
4. Recarga el home con `Ctrl+F5` (fuerza recarga sin caché)

---

## 📱 Desde Móvil

¡También funciona desde móvil!

1. Abre el panel admin en tu teléfono
2. Inicia sesión
3. Sube fotos directamente desde tu galería
4. Funciona igual que en desktop

---

## 🎉 ¡Listo!

Ahora puedes subir archivos sin usar Git manualmente.

**Flujo de trabajo:**
1. Clic en "Examinar"
2. Seleccionar archivo
3. Esperar progreso (automático)
4. Guardar cambios
5. Esperar 3-5 min
6. ¡Archivo visible en el portafolio!

---

## 💾 Guardar Token Permanentemente

El token se guarda en Firebase, así que:
- ✅ Solo lo configuras UNA VEZ
- ✅ Funciona en cualquier navegador
- ✅ Funciona en localhost y en producción
- ✅ No lo pierdes aunque borres cookies

---

**¿Dudas? Abre un issue en el repositorio.**
