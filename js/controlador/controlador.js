/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
      this.modelo.agregarPregunta(pregunta, respuestas);
  },
  borrarPregunta: (id) => {
    this.modelo.borrarPregunta(id);
  },
  editarPregunta: (id) => {
    this.modelo.editarPregunta(id);
  },
  borrarTodasPreguntas: (id) => {
    this.modelo.borrarTodasPreguntas();
  }
};
