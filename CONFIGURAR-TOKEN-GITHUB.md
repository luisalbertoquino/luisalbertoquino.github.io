# 🔑 Configuración del Token de GitHub

## Paso 1: Guardar el Token en Firebase

Necesitas guardar el token **UNA SOLA VEZ** en Firebase para que el panel admin pueda usarlo.

### Opción A: Desde la Consola de Firebase (Recomendado)

1. Ve a: https://console.firebase.google.com/
2. Selecciona tu proyecto: `portafolio-web-92007`
3. Ve a **Firestore Database**
4. Haz clic en **"Start collection"** (si no existe) o **"Add document"**
5. Crea una nueva colección llamada: `config`
6. Crea un documento con ID: `github`
7. Agrega estos campos:

```
Campo: token
Tipo: string
Valor: TU_TOKEN_AQUI

Campo: owner
Tipo: string
Valor: luisalbertoquino

Campo: repo
Tipo: string
Valor: luisalbertoquino.github.io

Campo: branch
Tipo: string
Valor: main
```

8. Haz clic en **"Save"**

### Opción B: Desde el Panel Admin (Más fácil)

1. Abre el panel admin: http://localhost:8000/admin
2. Inicia sesión
3. Abre la **Consola del navegador** (F12 → Console)
4. Copia y pega este código:

```javascript
// Guardar configuración de GitHub en Firebase
await firebaseService.db.collection('config').doc('github').set({
  token: 'TU_TOKEN_AQUI',
  owner: 'luisalbertoquino',
  repo: 'luisalbertoquino.github.io',
  branch: 'main'
});

console.log('✅ Token de GitHub guardado correctamente');
```

5. Presiona Enter
6. Deberías ver: `✅ Token de GitHub guardado correctamente`

---

## Paso 2: Configurar Reglas de Seguridad en Firestore

Para que SOLO tú (autenticado) puedas leer el token:

1. Ve a: https://console.firebase.google.com/
2. Firestore Database → **Rules**
3. Reemplaza las reglas con estas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Lectura pública de todos los datos del portafolio
    match /{document=**} {
      allow read: if true;
    }

    // Escritura solo para usuarios autenticados
    match /{document=**} {
      allow write: if request.auth != null;
    }

    // Configuración de GitHub: SOLO lectura/escritura autenticada
    match /config/{configId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

4. Haz clic en **"Publish"**

---

## ⚠️ Seguridad del Token

- ✅ El token está guardado en Firebase
- ✅ Solo usuarios autenticados pueden leerlo
- ✅ El token NO se expone en el código del frontend
- ✅ Solo TÚ tienes acceso (con tu login)

---

## 🔍 Verificar que se guardó correctamente

Desde la consola del navegador (en el admin):

```javascript
const config = await firebaseService.db.collection('config').doc('github').get();
console.log('GitHub config:', config.data());
```

Deberías ver:
```javascript
{
  token: "TU_TOKEN_AQUI",
  owner: "luisalbertoquino",
  repo: "luisalbertoquino.github.io",
  branch: "main"
}
```

---

**Una vez que hayas guardado el token, avísame para continuar con la implementación del sistema de upload.**
