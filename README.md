GYM API 
Sistema de Gestión de Actividadesde 
Grupo 3 - Base path: /activities

Estructura del Proyecto
GestionActividades/
│
├── api/
│ └── index.js # Configura rutas y conexión a MongoDB
│
├── controllers/
│ └── UsersController.js # Lógica para los usuarios
│ └── ActivitiesController.js # Lógica para las actividades (si aplica)
│
├── models/
│ └── activity.js # Esquema de actividad con Mongoose
│ └── user.js # Esquema de usuario con Mongoose
│
├── routes/
│ └── user.js # Endpoints relacionados con usuarios
│ └── activities.js # Endpoints relacionados con actividades
│
├── .env # Variables de entorno (Mongo URI, puerto)
├── .gitignore # Ignora node_modules y entorno
├── package.json # Dependencias y scripts
├── server.js # Punto de entrada principal
└── README.md # Documentación del proyecto

Endpoints
GET /activities → Listar todas las actividades
GET /activities/{id} → Obtener actividad por ID
POST /activities → Crear nueva actividad
PUT /activities/{id} → Actualizar actividad
DELETE /activities/{id} → Eliminar actividad
PUT /activities/{id}/assign-trainer/{trainerId} → Asignar entrenador a la actividad
GET /activities/{id}/attendees → Listar usuarios asistentes

Modelo de Usuario (JSON)

{
 "id": "string",
 "nombre": "string",
 "descripcion": "string",
 "categoria": "string",
 "nivel": "básico|intermedio|avanzado",
 "requisitos": "string",
 "duracion_min": 60,
 "profesor": "string",
 "cupos_maximos": 20,
 "trainer_id": "string"
}