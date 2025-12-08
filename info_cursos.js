// ========================================
// CONFIGURACIÓN COMPLETA DE CURSOS - EDETEC
// ========================================
// 
// INSTRUCCIONES:
// Este archivo centraliza TODA la información de los cursos.
// Solo necesitás editar este archivo y se actualiza todo automáticamente.
//
// 1. Modificá precios, fechas o links según necesites
// 2. Guardá el archivo
// 3. Subilo a GitHub
// 4. ¡Listo! Todo se actualiza automáticamente
//
// ========================================

// CONFIGURACIÓN DE CURSOS
const infoCompletaCursos = {
    'TORNO CNC PRESENCIAL': {
        precio: 295000,                    // Precio numérico (sin puntos ni comas)
        fechaInicio: '18/02/2026',         // Formato: DD/MM/YYYY
        linkMercadoPago: 'https://mpago.la/1ahRq4p',
        tieneFecha: true                   // true si muestra fecha específica
    },
    
    'TORNO CNC SEMI PRESENCIAL': {
        precio: 'Consultar',               // Puede ser número o texto
        fechaInicio: 'Inicio inmediato al acreditar el pago',
        linkMercadoPago: 'http://mpago.la/2xz1PrS',
        tieneFecha: false
    },
    
    'TORNO CNC A DISTANCIA': {
        precio: 'Consultar',
        fechaInicio: 'Inicio inmediato al acreditar el pago',
        linkMercadoPago: 'http://mpago.la/2333as1',
        tieneFecha: false
    },
    
    'FRESA CNC PRESENCIAL': {
        precio: 295000,
        fechaInicio: '18/02/2026',
        linkMercadoPago: 'https://mpago.la/1ahRq4p',
        tieneFecha: true
    },
    
    'FRESA CNC SEMI PRESENCIAL': {
        precio: 'Consultar',
        fechaInicio: 'Inicio inmediato al acreditar el pago',
        linkMercadoPago: 'http://mpago.la/2xz1PrS',
        tieneFecha: false
    },
    
    'FRESA CNC A DISTANCIA': {
        precio: 'Consultar',
        fechaInicio: 'Inicio inmediato al acreditar el pago',
        linkMercadoPago: 'http://mpago.la/2333as1',
        tieneFecha: false
    },
    
    'CAD CAM FRESA Y CENTRO MEC PRESENCIAL': {
        precio: 'Consultar',
        fechaInicio: '18/02/2026',
        linkMercadoPago: 'https://mpago.la/1ahRq4p',
        tieneFecha: true
    }
};

// CONFIGURACIÓN DE CUOTAS (aplica a cursos con precio numérico)
const configuracionCuotas = {
    cantidadCuotas: 3,
    textoAdicional: 'cuotas sin interés con tarjeta de crédito'
};

// CONFIGURACIÓN DE DATOS BANCARIOS PARA TRANSFERENCIA
const datosBancarios = {
    titular: 'EDETEC de Melina Giardino',
    cuit: '27-24881836-6',  // ← ACTUALIZAR con tu CUIT real
    banco: 'Mercado Pago',  // ← ACTUALIZAR con tu banco
    cbu: '0000003100026395895920',  // ← ACTUALIZAR con tu CBU (22 dígitos)
    alias: 'EDETEC.CURSOS.MP'  // ← ACTUALIZAR con tu alias
};

// CONFIGURACIÓN DE CONTACTO PARA INFORMAR PAGOS
const contactoPago = {
    whatsapp: '+54 9 11 2793 1074',
    email: 'info.edetec@gmail.com',
    textoInstrucciones: 'Luego de realizar el pago enviar comprobante por Whatsapp y/o Email indicando Nombre y Apellido. Gracias'
};

// ========================================
// NO MODIFICAR EL CÓDIGO DE ABAJO
// ========================================

// Función para formatear precio en pesos argentinos
function formatearPrecio(precio) {
    if (typeof precio === 'number') {
        return '$' + precio.toLocaleString('es-AR');
    }
    return precio;
}

// Función para obtener información completa de un curso
function obtenerInfoCurso(nombreCurso) {
    return infoCompletaCursos[nombreCurso] || null;
}

// Función para obtener el precio de un curso
function obtenerPrecioCurso(nombreCurso) {
    const info = infoCompletaCursos[nombreCurso];
    if (!info) return 'Consultar';
    return formatearPrecio(info.precio);
}

// Función para obtener la fecha de inicio de un curso
function obtenerFechaInicio(nombreCurso) {
    const info = infoCompletaCursos[nombreCurso];
    if (!info) return 'A confirmar';
    return info.fechaInicio;
}

// Función para obtener el link de MercadoPago de un curso
function obtenerLinkMercadoPago(nombreCurso) {
    const info = infoCompletaCursos[nombreCurso];
    if (!info) return '';
    return info.linkMercadoPago;
}

// Función para obtener el texto de cuotas
function obtenerTextoCuotas(nombreCurso) {
    const info = infoCompletaCursos[nombreCurso];
    if (!info) return 'Cuotas disponibles con tarjeta de crédito';
    
    if (typeof info.precio === 'number') {
        return `${configuracionCuotas.cantidadCuotas} ${configuracionCuotas.textoAdicional}`;
    }
    return 'Cuotas disponibles con tarjeta de crédito';
}

// Función para verificar si un curso tiene fecha específica
function cursoTieneFecha(nombreCurso) {
    const info = infoCompletaCursos[nombreCurso];
    if (!info) return false;
    return info.tieneFecha;
}

// Crear objetos compatibles con el código anterior (para retrocompatibilidad)
const fechasInicioCursos = {};
const preciosCursos = {};
const mercadoPagoLinks = {};

Object.keys(infoCompletaCursos).forEach(curso => {
    const info = infoCompletaCursos[curso];
    fechasInicioCursos[curso] = info.fechaInicio;
    preciosCursos[curso] = info.precio;
    mercadoPagoLinks[curso] = info.linkMercadoPago;
});

// Función para actualizar las fechas en la página (si existen elementos)
function actualizarFechasEnPagina() {
    document.querySelectorAll('[data-curso-fecha]').forEach(elemento => {
        const nombreCurso = elemento.getAttribute('data-curso-fecha');
        const fecha = obtenerFechaInicio(nombreCurso);
        elemento.textContent = fecha;
    });
}

// Función para actualizar los precios en la página (si existen elementos)
function actualizarPreciosEnPagina() {
    document.querySelectorAll('[data-curso-precio]').forEach(elemento => {
        const nombreCurso = elemento.getAttribute('data-curso-precio');
        const precio = obtenerPrecioCurso(nombreCurso);
        elemento.textContent = precio;
    });
    
    document.querySelectorAll('[data-curso-cuotas]').forEach(elemento => {
        const nombreCurso = elemento.getAttribute('data-curso-cuotas');
        const textoCuotas = obtenerTextoCuotas(nombreCurso);
        elemento.textContent = textoCuotas;
    });
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        actualizarFechasEnPagina();
        actualizarPreciosEnPagina();
    });
} else {
    actualizarFechasEnPagina();
    actualizarPreciosEnPagina();
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        infoCompletaCursos,
        fechasInicioCursos, 
        preciosCursos,
        mercadoPagoLinks,
        datosBancarios,
        contactoPago,
        configuracionCuotas,
        obtenerInfoCurso,
        obtenerPrecioCurso,
        obtenerFechaInicio, 
        obtenerLinkMercadoPago,
        obtenerTextoCuotas,
        cursoTieneFecha,
        formatearPrecio 
    };
}
