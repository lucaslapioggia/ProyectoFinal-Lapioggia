📦 ProyectoFinal+Lapioggia

Este proyecto es una Single Page Application (SPA) de e-commerce desarrollada con React y Vite como herramienta de construcción.
Permite visualizar productos, ver detalles, agregar al carrito, realizar compras simuladas o reales (vía Firebase), y navegar fluidamente sin recargar la página.

🚀 Tecnologías utilizadas

⚛️ React

⚡ Vite

🧭 React Router DOM

🪝 React Hooks & Context API

🛍️ Bootstrap 5

☁️ Firebase (Firestore)

🧪 Mock de productos para pruebas sin base de datos

📁 Estructura principal de carpetas
ProyectoFinal+Lapioggia/
│
├─ public/
├─ src/
│  ├─ components/
│  ├─ context/
│  ├─ mock/
│  ├─ services/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
│
├─ .env.example
├─ package.json
├─ vite.config.js
└─ README.md

⚙️ Instalación y ejecución local

📥 Clonar este repositorio:

git clone https://github.com/lucaslapioggia/ProyectoFinal-Lapioggia.git


📂 Entrar en la carpeta del proyecto:

cd ProyectoFinal+Lapioggia


🧰 Instalar dependencias:

npm install


🚀 Iniciar el servidor local:

npm run dev


🌐 Abrir en el navegador:

http://localhost:5173

🧪 Productos de prueba

Si no tenés configurado Firebase todavía, la app cargará productos de prueba desde:

src/mock/products.js


Esto permite probar toda la lógica de la app sin necesidad de una base de datos real.

☁️ Configuración de Firebase (opcional)

Crear un proyecto en Firebase
.

Activar Firestore Database.

Crear una colección llamada products y cargar tus productos.

Crear un archivo .env en la raíz del proyecto y pegar tus credenciales:

VITE_FIREBASE_API_KEY=TU_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=TU_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=TU_SENDER_ID
VITE_FIREBASE_APP_ID=TU_APP_ID


Guardar y reiniciar el proyecto (npm run dev).

🧭 Navegación principal

🏠 Catálogo de productos

🛒 Carrito de compras

📄 Detalle de producto

💳 Checkout

📢 Mensajes condicionales (sin stock, carrito vacío, etc.)

🧑 Autor: Lucas Lapioggia

🌐 Proyecto desarrollado como entrega final de e-commerce con React.

📝 Licencia

Este proyecto es de uso libre con fines educativos.



