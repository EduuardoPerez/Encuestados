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
    if(id){
      this.modelo.borrarPregunta(id);
    }
  },
  editarPregunta: (id) => {
    if(id) {
      this.modelo.editarPregunta(id);
    }
  },
  borrarTodasPreguntas: () => {
    this.modelo.borrarTodasPreguntas();
  },
  agregarVoto: (nombrePregunta,respuestaSeleccionada) => {
    this.modelo.agregarVoto(nombrePregunta,respuestaSeleccionada);
  }
};
