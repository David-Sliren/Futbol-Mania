# ⚽ Proyecto Fútbol Mania

Este proyecto es una aplicación web completa para visualizar información de fútbol, incluyendo partidos en vivo, clasificaciones y competiciones. Está construido con una arquitectura moderna separando el frontend y el backend.

## 🚀 Tecnologías Utilizadas

### Frontend
- **React**: Biblioteca principal de UI.
- **Vite**: Empaquetador y entorno de desarrollo rápido.
- **Tailwind CSS**: Framework de utilidades para estilos.
- **React Query (@tanstack/react-query)**: Gestión del estado asíncrono y caché de datos.
- **React Router**: Enrutamiento del lado del cliente.
- **Motion**: Animaciones fluidas.

### Backend
- **Node.js**: Entorno de ejecución.
- **Express**: Framework web para la API.
- **Morgan**: Logger de solicitudes HTTP.
- **Cors**: Middleware para habilitar CORS.

## 📋 Prerrequisitos

- **Node.js** (Versión LTS recomendada)
- **pnpm** (Gestor de paquetes utilizado en este proyecto)

Si no tienes `pnpm` instalado, puedes instalarlo globalmente con:
```bash
npm install -g pnpm
```

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Proyect-Futbol
   ```

2. **Instalar dependencias:**
   Ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias tanto del root, backend y frontend:
   ```bash
   pnpm run install-all
   ```
   O manualmente:
   ```bash
   pnpm install
   cd frontend && pnpm install
   cd ../backend && pnpm install
   ```

3. **Configurar Variables de Entorno (Backend):**
   El backend necesita una API Key de [football-data.org](https://www.football-data.org/).
   
   - Navega a la carpeta `backend`.
   - Crea un archivo `.env` basado en el ejemplo:
     ```bash
     cp .env.example .env
     ```
   - Abre el archivo `.env` y coloca tu API Key:
     ```env
     PORT=3000
     FOOTBALL_API_KEY=tu_api_key_aqui
     ```

## ▶️ Ejecución

Para iniciar el proyecto en entorno de desarrollo (inicia Frontend y Backend concurrentemente):

```bash
pnpm run dev
```

- **Frontend:** http://localhost:5173 (por defecto con Vite)
- **Backend:** http://localhost:3000

## 📂 Estructura del Proyecto

```
Proyect-Futbol/
├── backend/            # Servidor API (Node/Express)
│   ├── src/
│   │   ├── server.js   # Punto de entrada
│   │   ├── services/   # Lógica de conexión con APIs externas
│   │   └── constants/  # Constantes y configuraciones
│   └── ...
├── frontend/           # Aplicación Cliente (React/Vite)
│   ├── src/
│   │   ├── components/ # Componentes reutilizables
│   │   ├── pages/      # Vistas principales (Home, Clasificacion)
│   │   ├── context/    # Contexto global
│   │   └── api/        # Funciones de consumo de la API propia
│   └── ...
└── package.json        # Scripts globales
```

## 📡 API Endpoints (Backend)

El backend expone los siguientes endpoints principales:

- `GET /api/competitions/:type`: Obtiene competiciones por tipo (`LEAGUE` o `CUP`).
  - Query params: `priority` (opcional, ej: `bigfive`, `sudamerican`).
- `GET /api/competitions/:id/table`: Obtiene la tabla de clasificación de una liga específica.
- `GET /api/matches`: Obtiene partidos.
  - Query params: `competitions` (id de la competición, opcional).

## 📄 Licencia

Este proyecto está bajo la licencia ISC.
