# ERP Inventory - Frontend 🎨

Interfaz de usuario moderna para el sistema de gestión de inventario.

## 🛠️ Stack Tecnológico
- **Framework:** React 19
- **Herramienta de Construcción:** Vite 8
- **Estilos:** Tailwind CSS 4
- **Cliente HTTP:** Axios
- **Iconos:** Iconify

## 📁 Organización de Carpetas
Para mantener el proyecto escalable, se utiliza una estructura granular:
- `api`: Configuración de Axios y llamadas base.
- `assets`: Imágenes, fuentes y estilos globales.
- `components`: Piezas de UI reutilizables (Botones, Inputs, etc).
- `context`: Manejo de estados globales nativos de React.
- `hooks`: Lógica de React extraída para reutilización.
- `pages`: Vistas completas de la aplicación.
- `routes`: Configuración de navegación.
- `services`: Lógica de comunicación específica con el backend.
- `store`: Gestión de estado complejo (si se requiere).
- `utils`: Funciones de ayuda generales.

📁 public/
Archivos estáticos que se sirven tal cual, sin procesamiento.

Favicon, logos, robots.txt, imágenes que no necesitan importarse en el código.


📁 src/
CarpetaQué guardarapi/Llamadas HTTP (fetch/axios). Ej: authApi.js, userApi.js, funciones que consumen endpointsassets/Imágenes, fuentes, SVGs, íconos que se importan directamente en componentescomponents/common/Componentes reutilizables globales: Button, Input, Modal, Spinner, Cardcomponents/layout/Estructura de la app: Navbar, Sidebar, Footer, PageWrappercomponents/ui/Componentes visuales más específicos: Badge, Avatar, Tooltip, Dropdowncontext/React Contexts: AuthContext, ThemeContext, CartContexthooks/Custom hooks: useAuth.js, useFetch.js, useLocalStorage.jspages/Vistas/pantallas completas: Home.jsx, Login.jsx, Dashboard.jsxroutes/Configuración de React Router: AppRouter.jsx, rutas privadas/públicasservices/Lógica de negocio o integraciones: authService.js, storageService.jsstore/Estado global (Redux/Zustand): slices, reducers, actionsutils/Funciones utilitarias puras: formatDate.js, validators.js, helpers.js

## 🚀 Cómo empezar
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🔗 Conexión con el Backend
La conexión se gestiona a través de Axios en la carpeta `api`. Asegúrate de tener el backend corriendo en el puerto configurado (normalmente `http://localhost:8080`).
