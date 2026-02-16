/*****************************************************************************************
 * Nombre del programa: Dibujo de Rectángulo en Canvas
 * Lenguaje: JavaScript
 * Tecnología utilizada: HTML5 Canvas (Contexto 2D)
 *
 * Descripción:
 * Este programa obtiene un elemento <canvas> del documento HTML y dibuja
 * un rectángulo relleno dentro del área de dibujo.
 * El tamaño del canvas se ajusta dinámicamente al 50% del ancho y
 * 50% del alto de la ventana del navegador.
 *
 * Autor: (TTapia Ochoa Elena Jolette)
 * Fecha: (16/02/2026)
 *****************************************************************************************/


// ===============================
// 1. Obtener el elemento canvas
// ===============================

var canvas = document.getElementById("lienzo");


// ======================================
// 2. Ajustar tamaño del canvas al 50%
// ======================================

// window.innerWidth  → ancho actual de la ventana
// window.innerHeight → alto actual de la ventana

canvas.width = window.innerWidth * 0.5;   // 50% del ancho de pantalla
canvas.height = window.innerHeight * 0.5; // 50% del alto de pantalla


// ======================================
// 3. Obtener el contexto de dibujo 2D
// ======================================

var ctx = canvas.getContext("2d");


// ======================================
// 4. Definir el color de relleno
// ======================================

ctx.fillStyle = "rgb(29, 29, 239)";


// ======================================
// 5. Dibujar el rectángulo
// ======================================

// Ahora el rectángulo se ajusta al tamaño del canvas
ctx.fillRect(10, 10, 200, 200);
