/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.ultimoId;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    if (this.preguntas.length===0) {
      return this.ultimoId=0;
    }

    let maxId = 0;    
    this.preguntas.forEach(pregunta => {
      if(pregunta.id>maxId){
        maxId = pregunta.id;
      }
    });
    return maxId;
  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = {'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas};
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  //se borra una pregunta dado su ID
  borrarPregunta: function (id) {
    this.preguntas = this.preguntas.filter( (pregunta) => {
      return pregunta.id != id;
    });
    this.guardar();
    this.preguntaEliminada.notificar();
    console.log(this.preguntas);
    
  },

  //se guardan las preguntas
  guardar: function(){
  },
};
