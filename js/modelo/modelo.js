/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = JSON.parse(localStorage.getItem('preguntas')) || [];
  this.ultimoId;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
  this.preguntaEditada = new Evento(this);
  this.preguntasBorradas = new Evento(this);
  this.votoSumado = new Evento(this);
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

  // Se edita una pregunta dado su ID
  editarPregunta: function (id) {
    let nuevoTextoPregunta = prompt('Editar pregunta');
    this.preguntas = this.preguntas.filter((pregunta) => {
      if(pregunta.id === id){
        return pregunta.textoPregunta = nuevoTextoPregunta;
      }
      return pregunta;
    });
    this.guardar();
    this.preguntaEditada.notificar();
  },

  // Elimina todas las preguntas
  borrarTodasPreguntas : function () {
    this.preguntas = [];
    this.guardar();
    this.preguntasBorradas.notificar();
  },

  // Suma un voto a una respuesta
  sumarVoto: function () {
    this.guardar();
    this.votoSumado.notificar();
  },

  //se guardan las preguntas
  guardar: function(){
    localStorage.setItem('preguntas', JSON.stringify(this.preguntas));
  },
};
