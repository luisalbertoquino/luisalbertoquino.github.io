# Portfolio Web - Luis Alberto Quino Manrique

Portfolio profesional dinámico con panel de administración.

## Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Firebase Firestore
- **Hosting**: GitHub Pages
- **Gestión de Archivos**: GitHub API

## Desarrollo Local

1. Clona el repositorio
2. El archivo `firebase-config.js` se crea automáticamente en desarrollo
3. Abre `index.html` en un servidor local

## Panel de Administración

Accede en: `/admin`

Credenciales configuradas en Firebase Authentication.

## Deployment

El deployment es automático mediante GitHub Actions al hacer push a `main`.

El archivo `firebase-config.js` se genera automáticamente en el workflow usando GitHub Secrets.

## Estructura

```
├── admin/              # Panel de administración
├── assets/            # Imágenes y archivos
├── css/               # Estilos
├── js/                # Scripts JavaScript
│   └── firebase/      # Servicios Firebase y GitHub
├── index.html         # Página principal
└── firebase-config.js # Configuración Firebase (auto-generado)
```

## License

© 2025 Luis Alberto Quino Manrique
