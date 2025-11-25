/**
 * JINSEI - Configuración del Proyecto
 * 
 * Este archivo centraliza todas las URLs y configuraciones
 * para facilitar el mantenimiento y despliegue.
 */

const CONFIG = {
  // Información del proyecto
  APP_NAME: 'JINSEI',
  APP_VERSION: '1.1.0',
  APP_DESCRIPTION: 'Life Support Chat - Sistema de apoyo emocional',
  
  // URLs de backend
  API: {
    BASE_URL: 'https://jinsei-app-hjg9h0bqa7g5bhfh.canadacentral-01.azurewebsites.net/api',
    
    // Endpoints específicos
    AUTH: {
      LOGIN: '/auth/login',
      LOGOUT: '/auth/logout'
    },
    USERS: {
      CREATE: '/users',
      GET: '/users'
    },
    SESSIONS: {
      CREATE: '/sessions',
      END: '/sessions'
    },
    MESSAGES: {
      CREATE: '/messages',
      GET: '/messages'
    },
    CONSENTS: {
      CREATE: '/consents'
    }
  },
  
  // URLs de modelos AI
  AI: {
    BERT_URL: 'https://ciara-disillusive-unobservantly.ngrok-free.dev/predict',
    MISTRAL_URL: 'https://tackier-hebetic-jong.ngrok-free.dev/generar_respuesta'
  },
  
  // Configuración de riesgo
  RISK_LEVELS: {
    NONE: { min: 0, max: 20, label: 'sin_riesgo' },
    LOW: { min: 20, max: 50, label: 'riesgo_bajo' },
    HIGH: { min: 50, max: 100, label: 'riesgo_alto' }
  },
  
  // Configuración de timeouts y reintentos
  TIMEOUT: 30000, // 30 segundos
  MAX_RETRIES: 3,
  
  // Storage keys
  STORAGE_KEYS: {
    USER_ID: 'user_id',
    SESSION_ID: 'session_id',
    ALIAS: 'aka'
  },
  
  // Recursos de ayuda
  HELP_RESOURCES: {
    LINEA_106: {
      name: 'Línea 106',
      phone: '106',
      description: 'Línea gratuita de atención en crisis 24/7'
    },
    EMERGENCY: {
      name: 'Emergencias',
      phone: '123',
      description: 'Línea de emergencias nacional'
    }
  }
};

/**
 * Obtener la URL completa de un endpoint
 * @param {string} endpoint - Ruta del endpoint (ej: '/auth/login')
 * @returns {string} URL completa
 */
CONFIG.getApiUrl = function(endpoint) {
  return this.API.BASE_URL + endpoint;
};

/**
 * Obtener nivel de riesgo basado en porcentaje
 * @param {number} percentage - Porcentaje de riesgo (0-100)
 * @returns {object} Objeto con información del nivel de riesgo
 */
CONFIG.getRiskLevel = function(percentage) {
  if (percentage < this.RISK_LEVELS.NONE.max) {
    return this.RISK_LEVELS.NONE;
  } else if (percentage < this.RISK_LEVELS.LOW.max) {
    return this.RISK_LEVELS.LOW;
  } else {
    return this.RISK_LEVELS.HIGH;
  }
};

/**
 * Validar si hay sesión activa
 * @returns {boolean}
 */
CONFIG.hasActiveSession = function() {
  const userId = localStorage.getItem(this.STORAGE_KEYS.USER_ID);
  const sessionId = localStorage.getItem(this.STORAGE_KEYS.SESSION_ID);
  return !!(userId && sessionId);
};

/**
 * Limpiar sesión del localStorage
 */
CONFIG.clearSession = function() {
  localStorage.removeItem(this.STORAGE_KEYS.USER_ID);
  localStorage.removeItem(this.STORAGE_KEYS.SESSION_ID);
  localStorage.removeItem(this.STORAGE_KEYS.ALIAS);
};

// Log de configuración en desarrollo
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  console.log('🔧 JINSEI Config loaded:', CONFIG);
}

// Exportar para compatibilidad
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}