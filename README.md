# Sistema de Matrículas - Aplicación Dockerizada

## Descripción del proyecto

Este proyecto corresponde a un sistema de gestión de matrículas desarrollado bajo una arquitectura basada en microservicios, utilizando tecnologías modernas para el desarrollo web y la contenedorización.

El sistema permite:

- Gestión de cursos (crear, editar, eliminar y listar)
- Gestión de estudiantes
- Matrícula de estudiantes en cursos específicos
- Persistencia de datos en base de datos relacional

---

## Tecnologías utilizadas

- Frontend: Angular
- Backend: Spring Boot (API REST)
- Base de datos: PostgreSQL
- Contenedorización: Docker y Docker Compose

---

## Objetivo de la dockerización

El objetivo principal de utilizar Docker en este proyecto es permitir que la aplicación pueda ejecutarse en cualquier computadora sin necesidad de instalar manualmente:

- Node.js
- Java
- PostgreSQL

Todo el sistema se levanta automáticamente mediante contenedores.

---

## Requisitos

Para ejecutar el proyecto es necesario contar con:

- Docker Desktop instalado y en ejecución

---

## Estructura del proyecto

MatriculasNorte/
├── frontend/ # Aplicación Angular
├── matriculas/ # Backend Spring Boot
├── compose.yaml # Orquestación de contenedores
└── README.md

---

## Cómo ejecutar la aplicación

1. Abrir una terminal en la carpeta raíz del proyecto (MatriculasNorte).

2. Ejecutar el siguiente comando:

docker compose up -d --build

3. Esperar unos segundos a que todos los contenedores se levanten correctamente.

Nota: La base de datos se crea vacía. Se deben registrar cursos y estudiantes antes de realizar matrículas.
---

## Acceso al sistema

Una vez iniciado, se puede acceder a:

- Frontend (Interfaz gráfica):  
  http://localhost:4200

- Backend (API REST):  
  http://localhost:8080

Ejemplo de endpoint:

http://localhost:8080/api/curso

---

## Servicios que se ejecutan

El sistema está compuesto por tres contenedores:

- angular_app → Ejecuta el frontend Angular mediante Nginx
- spring_app → Ejecuta el backend en Spring Boot
- postgres_db → Base de datos PostgreSQL

Todos los servicios se comunican automáticamente mediante la red de Docker.

---

## Detener la aplicación

Para detener todos los contenedores:

docker compose down


---

## Notas importantes

- No es necesario instalar ninguna tecnología adicional en la máquina host.
- Docker se encarga de manejar dependencias, servicios y red interna.
- La base de datos se crea automáticamente al iniciar los contenedores.
- La aplicación es completamente portable.

---

## Entrega del proyecto

Para ejecutar este sistema en otra computadora, solo es necesario:

1. Descargar el proyecto
2. Tener Docker instalado
3. Ejecutar el comando:

docker compose up -d --build

---

## Autor

Proyecto desarrollado por:

Jorge Miguel Martínez Rosero
