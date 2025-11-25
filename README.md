# 🧡💙 JINSEI - Life Support Chat

> Prototipo de un sistema de alertas tempranas para la identificación de conductas suicidas en jóvenes Universitarios

![Estado del Deploy](https://img.shields.io/badge/deploy-Azure-blue)
![Versión](https://img.shields.io/badge/version-1.1.0-green)      

## 📋 Descripción

JINSEI es un chatbot de apoyo emocional diseñado para ayudar a estudiantes universitarios en Colombia. Utiliza inteligencia artificial para detectar señales de riesgo emocional y proporcionar respuestas empáticas, conectando a los usuarios con recursos de ayuda profesional cuando es necesario.

### ✨ Características principales

- 🤖 **Chat empático**: Conversaciones naturales en español con IA
- 🔍 **Detección de riesgo**: Análisis automático con modelo BERT
- 🆘 **Conexión con ayuda**: Formulario para solicitar apoyo institucional
- 🔒 **Anonimato**: Los usuarios usan alias para proteger su identidad
- 📊 **Seguimiento**: Registro de conversaciones y niveles de riesgo

## 🏗️ Arquitectura

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│   Frontend  │─────▶│   Backend    │─────▶│  Database   │
│ Azure Static│      │ Azure App    │      │  Azure SQL  │
│  Web Apps   │      │   Service    │      │   Server    │
└─────────────┘      └──────────────┘      └─────────────┘
       │                     │
       │                     ├─────────────▶ BERT Model
       │                     └─────────────▶ Mistral LLM
       │
       └──────────────────▶ (Acceso directo)
```
    

## 🚀 Tecnologías utilizadas

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Azure Static Web Apps
- GitHub Actions (CI/CD)

### Backend
- Python Flask 
- Documentacion en Swagger
- Azure App Service
- Azure SQL Database

### Inteligencia Artificial
- BERT (Detección de riesgo suicida)
- Mistral 7B (Generación de respuestas)

## 🔧 Instalación y desarrollo local

### Prerrequisitos
- Git
- Un navegador web moderno
- (Opcional) Live Server para desarrollo

### Clonar el repositorio

```bash
git clone https://github.com/CamilaTovarm/JINSEI-Mockup.git
cd JINSEI-Mockup
```   

### Ejecutar localmente

Opción 1: Con Live Server (VSCode)
```bash
# Instalar extensión Live Server en VSCode
# Click derecho en index.html → "Open with Live Server"
```

Opción 2: Con Python
```bash
python -m http.server 8000
# Abrir http://localhost:8000 en el navegador
```

Opción 3: Abrir directamente
```bash
# Simplemente abre index.html en tu navegador
```

## 🌐 Despliegue en Azure

### 1. Preparar repositorio en GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Crear Azure Static Web App

1. Ve al [Portal de Azure](https://portal.azure.com)
2. Crear recurso → Static Web App
3. Conectar con GitHub
4. Configurar:
   - App location: `/`
   - API location: ` ` (vacío)
   - Output location: ` ` (vacío)
   - Skip app build: `true`


## 📚 Uso

### Registro
1. Acceder a la aplicación
2. Click en "Crea tu alias anónimo"
3. Elegir un alias (no usar nombre real)
4. Crear contraseña
5. Confirmar registro

### Chatear
1. Iniciar sesión con alias y contraseña
2. Escribir mensaje en el chat
3. El bot responderá de forma empática
4. Si se detecta riesgo alto, aparecerá opción de ayuda

### Solicitar ayuda
1. Click en "Sí, quiero recibir ayuda"
2. Completar formulario con datos reales
3. Un profesional se pondrá en contacto

## 🔐 Seguridad y privacidad

- ✅ Uso de alias para mantener anonimato
- ✅ Contraseñas encriptadas en backend
- ✅ Conexiones HTTPS
- ✅ CORS configurado correctamente
- ✅ Datos personales solo en formulario de ayuda (con consentimiento)
     

## 📞 Recursos de ayuda

Si tú o alguien que conoces está en crisis:

- 📞 **Línea 106**: Línea gratuita de atención en crisis 24/7
- 🚨 **Línea 123**: Emergencias nacionales
- 🏥 **Institucional**: Contacta con bienestar universitario

## 🔗 Enlaces útiles

- [Documentación Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/)
- [Guía de Flask](https://flask.palletsprojects.com/)
- [BERT para clasificación](https://huggingface.co/docs/transformers/)

---

Hecho con 🧡💙 para apoyar la salud mental estudiantil