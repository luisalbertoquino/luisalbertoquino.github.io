# 📄 Cómo Agregar tu CV en PDF

## Pasos Rápidos:

### 1. Prepara tu CV en PDF
- Crea o exporta tu CV a formato PDF
- Nombre sugerido: `cv-luis-quino.pdf`
- Peso recomendado: < 2 MB

### 2. Coloca el PDF en la Carpeta Correcta
```
portfolio/
└── assets/
    └── cv-luis-quino.pdf  ← Coloca tu PDF aquí
```

### 3. ¡Listo!
El botón "Descargar CV" en el sidebar ahora descargará tu PDF automáticamente.

---

## Opciones para Crear tu CV en PDF:

### Opción 1: Usar Google Docs / Microsoft Word
1. Crea tu CV en Google Docs o Word
2. Archivo > Descargar como > PDF
3. Guárdalo como `cv-luis-quino.pdf`

### Opción 2: Usar Canva (Recomendado)
1. Ve a canva.com
2. Busca plantillas de CV profesional
3. Personaliza con tus datos
4. Descarga como PDF

### Opción 3: Usar LaTeX (Avanzado)
- Overleaf.com tiene excelentes plantillas
- Muy profesional para CVs técnicos

### Opción 4: Convertir desde HTML
Si quieres que tu CV en PDF se vea igual al sitio web:
1. Abre tu portfolio en el navegador
2. Presiona Ctrl+P (Cmd+P en Mac)
3. Selecciona "Guardar como PDF"
4. Guarda como `cv-luis-quino.pdf`

---

## Verificar que Funciona:

1. Coloca el PDF en `assets/cv-luis-quino.pdf`
2. Abre `index.html` en tu navegador
3. Haz clic en "Descargar CV" en el sidebar
4. Debe descargar tu PDF automáticamente

---

## Solución de Problemas:

**El botón no descarga el PDF:**
- Verifica que el archivo se llame exactamente: `cv-luis-quino.pdf`
- Verifica que esté en la carpeta: `assets/`
- Verifica que el archivo no esté corrupto

**Quiero cambiar el nombre del archivo:**
1. Abre `js/app.js`
2. Busca la función `downloadPDF()`
3. Cambia la línea:
   ```javascript
   const pdfUrl = 'assets/tu-nuevo-nombre.pdf';
   ```

---

## Consejos para un CV Profesional:

✅ **Incluye:**
- Información de contacto
- Resumen profesional
- Experiencia laboral (más reciente primero)
- Educación
- Habilidades técnicas
- Certificaciones
- Proyectos destacados
- Idiomas

✅ **Formato:**
- Máximo 2 páginas
- Fuente legible (Arial, Calibri, Times New Roman)
- Tamaño de fuente: 10-12pt
- Márgenes: 2-3 cm
- Secciones claras con títulos

✅ **Diseño:**
- Limpio y profesional
- Uso consistente de negritas
- Bullets para responsabilidades
- Espaciado adecuado
- Sin colores excesivos

❌ **Evita:**
- Errores ortográficos
- Información desactualizada
- Foto informal
- Más de 2 páginas
- Fuentes difíciles de leer
- Información personal innecesaria (edad, estado civil, etc.)

---

## Recursos Gratuitos:

**Plantillas de CV:**
- Canva.com (gratis)
- Resume.io
- Novoresume.com
- Zety.com (algunas gratis)

**Herramientas:**
- PDF Compressor (para reducir tamaño)
- iLovePDF.com (editar PDFs)
- Grammarly (revisar ortografía en inglés)

---

## ¿Necesitas Ayuda?

Si tienes problemas, revisa que:
1. El archivo PDF existe
2. Está en la carpeta correcta: `assets/`
3. El nombre coincide: `cv-luis-quino.pdf`
4. El archivo no está corrupto (ábrelo directamente)

---

**¡Tu CV está listo para impresionar a reclutadores! 💼**
